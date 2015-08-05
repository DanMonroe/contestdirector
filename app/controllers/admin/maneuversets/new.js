import ManeuversetsBaseController from './base';

export default ManeuversetsBaseController.extend({
    actions: {
        cancelManeuverset() {
            this.transitionToRoute('admin.maneuversets.index');
            return false;
        }
    }

});
