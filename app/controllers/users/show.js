import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editUser() {
            this.transitionToRoute('users.edit', this.get('model'));
            return false;
        }
    }
});
