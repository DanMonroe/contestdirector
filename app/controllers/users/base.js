import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed('model.email', 'model.firstName', 'model.lastName', {
            get() {
                return !Ember.isEmpty(this.get('model.firstName')) &&
                    !Ember.isEmpty(this.get('model.lastName'));
            }
        }
    ),
    actions: {
        saveUser() {
            if (this.get('isValid')) {
                this.get('model').save().then((user) => {
                    this.transitionToRoute('users.show', user);
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }
            return false;
        },
        cancelUser() {
            return true; // bubble up
        }
    }
});
