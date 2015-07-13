import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('aircrafttypes');

    //this.route('pilotclasses');
  });
  this.route('contests', function() {
    this.route('rounds',{ path: '/:contest_id/rounds' });

  });
  this.route('contest', { path: 'contests/:urlpath' });
});

export default Router;
