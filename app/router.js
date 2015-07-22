import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {

    this.route('aircrafttypes');
    this.route('pilotclasses');
  });
  this.route('contests', function() {
    this.route('rounds',{ path: '/:contest_id/rounds' });

    this.route('show', { path: ':contest_id' });
    this.route('new');
    this.route('edit', { path: ':contest_id/edit' });

  });
  //this.route('contest', { path: '/contests/:contest_id' });

});

export default Router;
