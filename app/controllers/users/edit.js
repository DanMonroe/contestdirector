import UsersBaseController from './base';

export default UsersBaseController.extend({
    actions: {
        cancelUser() {
            this.transitionToRoute('users.show', this.get('model'));
            return false;
        }
    }
});
