import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  aircraftTypeId: DS.attr('number'),

  aircraftType: Ember.computed('aircraftTypeId', function() {
    var aircraftTypeId = this.get('aircraftTypeId');
    return this.store.find("aircrafttype", aircraftTypeId);
  })
});
