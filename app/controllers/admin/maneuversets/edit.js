import ManeuversetsBaseController from './base';

export default ManeuversetsBaseController.extend({
    actions: {
        cancel() {
            this.transitionToRoute('admin.maneuversets.show', this.get('model'));
            return false;
        }
    }

});
