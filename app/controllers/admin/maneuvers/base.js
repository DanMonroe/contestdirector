import Ember from 'ember';

export default Ember.Controller.extend({
    filteredManeuvers: Ember.computed('selectedItem', function() {
        var selectedClass = this.get('selectedItem');

        return this.get('model.maneuvers').filter(
            function (maneuver) {
                return maneuver.get('pilotClassId') === selectedClass;
            }
        );
    }),

    isValid: Ember.computed('model.name', {
            get() {
                return !Ember.isEmpty(this.get('model.name')) && !Ember.isEmpty(this.get('model.pilotClassId'));
            }
        }
    ),
    actions: {
        deleteManeuver(maneuver) {
            maneuver.destroyRecord().then(
                () => {
                    // success
                    this.transitionToRoute('admin.maneuvers.index');
                },
                () => {
                    // fail
                }
            );
        },
        editManeuver(maneuver) {
            this.transitionToRoute('admin.maneuvers.edit', maneuver);
            return false;
        },

        createManeuver: function() {
            var newManeuver = this.store.createRecord('maneuver', {
                name: this.get('model.name'),
                pilotClassId: this.get('model.pilotClassId')
            });
            newManeuver.save();
        },

        saveManeuver() {
            if (this.get('isValid')) {
                this.get('model').save().then(
                    function() {
                        console.log('save succeeded');
                        this.transitionToRoute('admin.maneuvers.index');
                        //this.transitionToRoute('admin.maneuvers.index', maneuver);
                    },
                    function() {
                        console.log('save failed');
                        // fail
                    }
                );
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;
        },
        cancelManeuver() {
            this.transitionToRoute('admin.maneuvers.index');
            return false;
        }
    }

});
