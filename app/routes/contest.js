import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var selectedContest = this.store.find('contest', params.contest_id );
    return selectedContest;
  }
});
