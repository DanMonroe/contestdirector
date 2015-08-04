import PilotclassesBaseController from './base';

export default PilotclassesBaseController.extend({
    actions: {
        cancelPilotclass() {
            this.transitionToRoute('admin.pilotclasses.index');
            return false;
        }
    }
});
