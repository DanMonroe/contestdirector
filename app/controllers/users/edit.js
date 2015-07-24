import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        cancelUser() {
            this.transitionToRoute('users.show', this.get('model'));
            return false;
        }
    }
});
