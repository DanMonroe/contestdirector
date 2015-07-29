import Ember from 'ember';

export default Ember.Controller.extend({
    filteredManeuvers: Ember.computed('selectedItem', function() {
        var selectedClass = this.get('selectedItem');

        return this.get('model.maneuvers').filter(
            function (maneuver) {
                return maneuver.get('pilotClass.id') === selectedClass;
            }
        );
    }),

    isValid: Ember.computed('model.name', {
            get() {
                return !Ember.isEmpty(this.get('model.name'));
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

        saveManeuver() {
            //if (this.get('isValid')) {
//debugger;
                this.get('model').save().then(
                    function(maneuver) {
                        console.log('save succeeded');
                        //debugger;
                        this.transitionToRoute('admin.maneuvers.index', maneuver);
                    },
                    function() {
                        console.log('save failed');
                        //debugger;
                        // fail
                    }
                );
            //} else {
            //    this.set('errorMessage', 'You have to fill all the fields');
            //}

            return false;
        },
        cancelManeuver() {
            return true;  //  bubble up
        }
    }

});
