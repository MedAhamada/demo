/**
 * Created by Ahamada on 02/07/2014.
 */

function userController($scope) {
    $scope.users = ['Mohamed','Said','Ali','Djae','Drake', 'Zaida'];
    $scope.albums = [
        {id: 1, artiste: 'Michael Jackson', titre: 'Off The Wall', annee: 2014},
        {id: 2, artiste: 'Rohff', titre: 'PDRG', annee: 2014},
        {id: 3, artiste: 'Eminem', titre: 'Recovery', annee: 2014},
        {id: 4, artiste: 'Michael Jackson', titre: 'Thriller', annee: 2014}
    ]
}