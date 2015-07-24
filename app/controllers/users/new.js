import UsersBaseController from './base';

export default UsersBaseController.extend({
    actions: {
        cancelUser() {
            this.transitionToRoute('users');
            return false;
        }
    }
});
