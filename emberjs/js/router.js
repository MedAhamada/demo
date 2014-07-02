/**
 * Created with JetBrains WebStorm.
 * User: Mohamed Ahamada
 * Date: 29/06/14
 * Time: 10:15
 * To change this template use File | Settings | File Templates.
 */

MovieTracker.Router.extend({
    root: Ember.Route.extend({
        index: Ember.Route.extend({
            route: '/'
        })
    })
})