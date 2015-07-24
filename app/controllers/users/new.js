import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        cancelUser() {
            this.transitionToRoute('users');
            return false;
        }
    }
});
