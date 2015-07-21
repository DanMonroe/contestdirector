import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  aircraftTypeId: DS.attr('number'),
  classifications: DS.hasMany('classification'),
  urlpath: DS.attr('string'),

  aircraftType: Ember.computed('aircraftTypeId', function() {
    var aircraftTypeId = this.get('aircraftTypeId');
    return this.store.find("aircrafttype", aircraftTypeId);
  })
});
