import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed('model.name', 'model.urlpath', {
            get() {
                return !Ember.isEmpty(this.get('model.name'));
            }
        }
    ),

    actions: {
        save() {
            if (this.get('isValid')) {
                this.get('model').save().then((contest) => {
                    this.transitionToRoute('contest', contest);
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;
        },
        cancel() {
            this.transitionToRoute('contests');
            return false;
        }
    }
});
