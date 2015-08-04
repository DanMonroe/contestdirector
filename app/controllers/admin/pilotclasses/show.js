import PilotclassesBaseController from './base';

export default PilotclassesBaseController.extend({
    actions: {
        editPilotclass() {
            this.transitionToRoute('admin.pilotclasses.edit', this.get('model'));
            return false;
        }
    }

});
