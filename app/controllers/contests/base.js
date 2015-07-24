import Ember from 'ember';

export default Ember.Controller.extend({

    // http://stackoverflow.com/questions/16463958/how-to-use-multiple-models-with-a-single-route-in-emberjs-ember-data
    //setupController: function(controller, model) {
    //    this._super(controller,model);
    //    var model2 = DS.PromiseArray.create({
    //        promise: this.store.find('model2')
    //    });
    //    model2.then(function() {
    //        controller.set('model2', model2)
    //    });
    //}

    isValid: Ember.computed('model.name', 'model.aircraftTypeId', {
            get() {
                return !Ember.isEmpty(this.get('model.name')) && !Ember.isEmpty(this.get('model.aircraftTypeId'));
            }
        }
    ),

    aircraftTypes: [
        {name:"Airplane", id: 1},
        {name:"Helicopter", id: 2}
    ],

    actions: {
        saveContest() {
            if (this.get('isValid')) {
                this.get('model').save().then((contest) => {
                    this.transitionToRoute('contests.show', contest);
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;
        },
        cancelContest() {
            return true;  //  bubble up
        }
    }
});
