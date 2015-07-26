import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    aircraftType: DS.belongsTo('pilotclass'),
    maneuvers: DS.hasMany('maneuver')
});
