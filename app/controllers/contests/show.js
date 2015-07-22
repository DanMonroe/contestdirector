import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        transitionTo(route) {
            this.transitionToRoute('contests.edit', this.get('model'));
            return false;
        }
    }
});
