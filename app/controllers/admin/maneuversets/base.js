import Ember from 'ember';

export default Ember.Controller.extend({
    filteredManeuversets: Ember.computed('selectedItem', function() {
        var selectedClass = this.get('selectedItem');

        return this.get('model.maneuversets').filter(
            function (maneuverset) {
                console.log(maneuverset.get('pilotClassId'));
                console.log(selectedClass);
                return maneuverset.get('pilotClassId') === selectedClass;
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
        deleteManeuverset(maneuverset) {
            maneuverset.destroyRecord().then(
                () => {
                    // success
                    this.transitionToRoute('admin.maneuversets.index');
                },
                () => {
                    // fail
                }
            );
        },
        editManeuverset(maneuverset) {
            this.transitionToRoute('admin.maneuversets.edit', maneuverset);
            return false;
        },

        createManeuverset: function() {
            var newManeuverset = this.store.createRecord('maneuverset', {
                name: this.get('model.name'),
                pilotClassId: this.get('model.pilotClassId')
            });
            newManeuverset.save();
        },

        saveManeuverset() {
            if (this.get('isValid')) {
                this.get('model').save().then(
                    function() {
                        console.log('save succeeded');
                        this.transitionToRoute('admin.maneuversets.index');
                        //this.transitionToRoute('admin.maneuversets.index', maneuverset);
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
        cancelManeuverset() {
            this.transitionToRoute('admin.maneuversets.index');
            return false;
        }
    }

});
