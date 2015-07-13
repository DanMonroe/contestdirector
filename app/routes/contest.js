import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    var test = this.store.find('contest', { urlpath: params.urlpath });
    return test;
  }
});
