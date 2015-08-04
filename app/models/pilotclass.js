import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string')
    //aircraftType: DS.belongsTo('pilotclass', { async: true }),
    //maneuvers: DS.hasMany('maneuver', { async: true })
});
