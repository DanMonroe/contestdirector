import ManeuversBaseController from './base';

export default ManeuversBaseController.extend({
    actions: {
        cancelManeuver() {
            this.transitionToRoute('admin.maneuvers.index');
            return false;
        }
    }
});
