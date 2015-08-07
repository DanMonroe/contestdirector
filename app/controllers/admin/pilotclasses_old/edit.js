import PilotclassesBaseController from './base';

export default PilotclassesBaseController.extend({
    actions: {
        cancel() {
            this.transitionToRoute('admin.pilotclasses.show', this.get('model'));
            return false;
        }
    }
});
