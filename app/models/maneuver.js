import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    maneuversetId: DS.attr()
    //pilotClassId: DS.attr()
    //pilotClass: DS.belongsTo('pilotclass', { async: true })
});
