import ManeuversBaseController from './base';

export default ManeuversBaseController.extend({
    actions: {
        editManeuver() {
            this.transitionToRoute('admin.maneuvers.edit', this.get('model'));
            return false;
        }
    }

});
