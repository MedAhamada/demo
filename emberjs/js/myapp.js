/**
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