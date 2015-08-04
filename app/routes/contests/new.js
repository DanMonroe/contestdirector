import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        //return this.store.createRecord('contest');

        return {
            pilotClasses: this.store.findAll('pilotclass')
            //maneuvers: this.store.findAll('maneuver')
        };

    }
});
