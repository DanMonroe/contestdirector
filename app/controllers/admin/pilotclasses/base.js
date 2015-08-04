import Ember from 'ember';

export default Ember.Controller.extend({
    //filteredManeuvers: Ember.computed('selectedItem', function() {
    //    var selectedClass = this.get('selectedItem');
    //
    //    return this.get('model.pilotclasses').filter(
    //        function (pilotclass) {
    //            return pilotclass.get('pilotClass.id') === selectedClass;
    //        }
    //    );
    //}),

    isValid: Ember.computed('model.name', {
            get() {
                return !Ember.isEmpty(this.get('model.name'));
            }
        }
    ),
    actions: {
        deletePilotclass(pilotclass) {
            pilotclass.destroyRecord().then(
                () => {
                    // success
                    this.transitionToRoute('admin.pilotclasses.index');
                },
                () => {
                    // fail
                }
            );
        },
        editPilotclass(pilotclass) {
            this.transitionToRoute('admin.pilotclasses.edit', pilotclass);
            return false;
        },

        //createPilotclass() {
        //    var newPilotclass = this.store.createRecord('pilotclass', {
        //        name: this.get('name')
        //    });
        //    newPilotclass.save();
        //},
        //
        savePilotclass() {
            if (this.get('isValid')) {
debugger;
                this.get('model').save().then(
                    function(pilotclass) {
                        this.transitionToRoute('admin.pilotclasses.index');
                        //this.transitionToRoute('admin.pilotclasses.index', pilotclass);
                    },
                    function() {
                        //console.log('save failed');
                        //debugger;
                        // fail
                    }
                );
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;
        },
        cancelPilotclass() {
            this.transitionToRoute('admin.pilotclasses.index');
            return false;
        }
    }

});
