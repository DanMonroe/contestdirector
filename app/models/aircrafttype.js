import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pilotclasses: DS.hasMany('pilotclass', { async: true })
});
