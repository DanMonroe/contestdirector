import ContestsBaseController from './base';

export default ContestsBaseController.extend({
    actions: {
        cancel() {
            this.transitionToRoute('contests');
            return false;
        }
    }
});
