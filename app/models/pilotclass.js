import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    aircrafttype: DS.belongsTo('aircrafttype', { async: true }),
    //maneuvers: DS.hasMany('maneuver', { async: true })
});
