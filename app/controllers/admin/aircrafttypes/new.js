import Ember from 'ember';

export default Ember.Controller.extend({

    isValid: Ember.computed('model.name', {
            get() {
                return !Ember.isEmpty(this.get('model.name'));
            }
        }
    ),

    actions: {
        createAircraftType: function() {
            if (this.get('isValid')) {
                var newAircraftType = this.store.createRecord('aircrafttype', {
                    name: this.get('model.name')
                });
                newAircraftType.save().then(
                    function() {
                        console.log('save succeeded');
                        this.transitionToRoute('admin.aircrafttypes.index');
                    },
                    function() {
                        console.log('save failed');
                        // fail
                    }
                );
            } else {
                this.set('errorMessage', 'You have to provide an aircraft type name');
            }

            return false;
        },

        cancelAircraftType() {
            this.transitionToRoute('admin.aircrafttypes.index');
            return false;
        }
    }
});
