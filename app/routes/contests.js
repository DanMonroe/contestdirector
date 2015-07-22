import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('contest');
  },

  actions: {
    deleteContest(contest) {
      contest.destroyRecord();
      return false;
    },
    editContest(contest) {
      this.transitionTo('contests.edit', contest);
      return false;
    }
  }
});
