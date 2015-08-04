import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    pilotClassId: DS.attr()
    //pilotClass: DS.belongsTo('pilotclass', { async: true })
});
