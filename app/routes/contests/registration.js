import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {

// TODO this will return ALL registration and then fiter.
// TODO probably want to return registations only from contest and then filter by class
        return this.store.filter('registration', {}, function(registration) {
            return (registration.get('contestId') === +params.contest_id) && registration.get('pilotClassId') === +params.pilotclass_id;
        });
    }

});
