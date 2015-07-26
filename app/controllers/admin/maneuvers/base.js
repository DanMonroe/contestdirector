import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveManeuver() {
            //if (this.get('isValid')) {
            //    this.get('model').save().then((contest) => {
            //        this.transitionToRoute('contests.show', contest);
            //    });
            //} else {
            //    this.set('errorMessage', 'You have to fill all the fields');
            //}

            return false;
        },
        cancelManeuver() {
            return true;  //  bubble up
        }
    }

});
