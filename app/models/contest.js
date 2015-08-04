import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  //aircraftTypeId: DS.attr('number'),
  pilotClasses: DS.hasMany('pilotclass',{async: true}),
  //urlpath: DS.attr('string'),

  aircraftType: Ember.computed('aircraftTypeId', function() {
    var aircraftTypeId = this.get('aircraftTypeId');
    if( ! aircraftTypeId ) {
      return "";
    }
    return this.store.find("aircrafttype", aircraftTypeId);
  })
});
