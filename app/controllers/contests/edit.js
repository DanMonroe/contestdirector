import ContestsBaseController from './base';

export default ContestsBaseController.extend({
    actions: {
        cancel() {
            this.transitionToRoute('contests.show', this.get('model'));
            return false;
        }
    }
});
