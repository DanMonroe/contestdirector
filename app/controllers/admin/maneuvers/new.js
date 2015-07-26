import ManeuversBaseController from './base';

export default ManeuversBaseController.extend({
    actions: {
        cancel() {
            this.transitionToRoute('admin.maneuvers');
            return false;
        }
    }
});
