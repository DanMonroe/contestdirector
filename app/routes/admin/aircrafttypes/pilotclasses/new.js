import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            aircrafttypes: this.store.findAll('aircrafttype')
        };
    }
});
