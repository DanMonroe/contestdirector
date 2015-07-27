import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed('model.name', {
            get() {
                return !Ember.isEmpty(this.get('model.name'));
            }
        }
    ),
    actions: {
        saveManeuver() {
            if (this.get('isValid')) {
                this.get('model').save().then((maneuver) => {
                    this.transitionToRoute('admin.maneuvers.show', maneuver);
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;
        },
        cancelManeuver() {
            return true;  //  bubble up
        }
    }

});
