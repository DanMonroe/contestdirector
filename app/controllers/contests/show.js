import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editContest() {
            this.transitionToRoute('contests.edit', this.get('model'));
            return false;
        }
    }
});
