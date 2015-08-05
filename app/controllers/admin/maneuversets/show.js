import ManeuversetsBaseController from './base';

export default ManeuversetsBaseController.extend({
    actions: {
        editManeuverset() {
            this.transitionToRoute('admin.maneuversets.edit', this.get('model'));
            return false;
        }
    }

});
