import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed('model.name', {
            get() {
                return !Ember.isEmpty(this.get('model.name'));
            }
        }
    ),

    actions: {
        savePilotclass: function() {

            if (this.get('isValid')) {
                var newPilotClass = this.store.createRecord('pilotclass', {
                    name: this.get('model.name')
                });

                var aircrafttype = this.get('model.aircrafttype');

                aircrafttype.get('pilotclasses').addObject(newPilotClass);

                newPilotClass.save().then(
                    function() {
                        console.log('save succeeded');
                        this.transitionToRoute('admin.aircrafttypes.pilotclasses');
                        return false;
                    },
                    function() {
                        console.log('save failed');
                        // fail
                        return false;
                    }
                );
            } else {
                this.set('errorMessage', 'You have to fill out all the fields');
            }

            return false;
        },

        cancelPilotclass() {
            this.transitionToRoute('admin.aircrafttypes.pilotclasses');
            return false;
        }
    }
});
