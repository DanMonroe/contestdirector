import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteContest(contest) {
      contest.destroyRecord().then(() => {
        this.transitionTo('contests.index');
      });
    },
    editContest(contest) {
      this.transitionTo('contests.edit', contest);
      return false;
    }
  }
});
