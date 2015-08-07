import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      aircrafttypes: this.store.findAll('aircrafttype'),
      newAircraftType: ''
    }
  }
});
