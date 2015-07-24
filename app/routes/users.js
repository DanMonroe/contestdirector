import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        deleteUser(user) {
            user.destroyRecord().then(() => {
                this.transitionTo('users.index');
            });
        },
        editUser(user) {
            this.transitionTo('users.edit', user);
            return false;
        }
    }
});
