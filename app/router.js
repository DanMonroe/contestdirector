import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('aircrafttypes');
    this.route('pilotclasses', function() {
        this.route('show', { path: ':pilotclass_id' });
        this.route('edit', { path: ':pilotclass_id/edit' });
        this.route('new');
    });
    this.route('maneuvers', function() {
      this.route('show', { path: ':maneuver_id' });
      this.route('edit', { path: ':maneuver_id/edit' });
      this.route('new');
    });
  });

  this.route('contests', function() {

    this.route('show', { path: ':contest_id' });
    this.route('edit', { path: ':contest_id/edit' });
    this.route('new');

    this.route('scores', function() {
      this.route('pilotscore', { path: ':pilotscore_id' });
    });
    this.route('registration', { path: ':contest_id/registration/pilotclass/:pilotclass_id' }, function() {
      //this.route('pilotclass', { path: '/pilotclass/:pilotclass_id' });
    });
  });

  this.route('users', function() {
    this.route('show', { path: ':user_id' });
    this.route('edit', { path: ':user_id/edit' });
    this.route('new');
  });

  this.route('scores', function() {});
});

export default Router;
