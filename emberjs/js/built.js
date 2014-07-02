MovieTracker = Ember.Application.create();
/*
MovieTracker.Router.map(function() {
  // put your routes here
});

MovieTracker.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
*/;/**
 * Created with JetBrains WebStorm.
 * User: Mohamed Ahamada
 * Date: 26/06/14
 * Time: 10:54
 * To change this template use File | Settings | File Templates.
 */

App.Router.map(function(){
    this.resource('artists', function(){
        this.route('songs', {path: ':slug'});
    })
})