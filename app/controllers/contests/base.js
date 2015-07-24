import Ember from 'ember';

export default Ember.Controller.extend({
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
        save() {
            if (this.get('isValid')) {
                this.get('model').save().then((contest) => {
                    this.transitionToRoute('contests.show', contest);
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;
        },
        cancel() {
            return true;  //  bubble up
        }
    }
});
