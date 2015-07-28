import Ember from 'ember';

export default Ember.Controller.extend({
    filteredManeuvers: Ember.computed('selectedItem', function() {
        var selectedClass = this.get('selectedItem');

        return this.get('model.maneuvers').filter(
            function (maneuver) {
                return maneuver.get('pilotClass.id') === selectedClass;
            }
        );
    }),

    isValid: Ember.computed('model.name', {
            get() {
                return !Ember.isEmpty(this.get('model.name'));
            }
        }
    ),
    actions: {
        deleteManeuver(maneuver) {
            maneuver.destroyRecord().then(() => {
                this.transitionToRoute('admin.maneuvers.show');
            });
        },
        editManeuver(maneuver) {
            this.transitionToRoute('admin.maneuvers.edit', maneuver);
            return false;
        },

        saveManeuver() {
            if (this.get('isValid')) {
debugger;
                this.get('model').save().then((maneuver) => {
                    this.transitionToRoute('admin.maneuvers.show', maneuver);
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;
        },
        cancelManeuver() {
            return true;  //  bubble up
        }
    }

});
