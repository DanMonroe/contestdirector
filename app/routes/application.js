import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
    //TODO remove toScoreGrid
    toScoreGrid() {
      this.transitionTo('contests.scores.pilotscore', 42);
    }
  }
});
