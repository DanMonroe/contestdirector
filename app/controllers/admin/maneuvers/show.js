import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editManeuver() {
            this.transitionToRoute('admin.maneuvers.edit', this.get('model'));
            return false;
        }
    }

});
