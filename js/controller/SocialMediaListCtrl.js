angular.module('CareyHinoki').
    controller('SocialMediaListCtrl', ['$scope', function ($scope) {
        $scope.social_medias = [{
            name: 'Twitter',
            url: '//www.twitter.com/chemoish'
        }, {
            name: 'Facebook',
            url: '//www.facebook.com/carey.hinoki'
        }, {
            name: 'Google',
            url: '//plus.google.com/118175933175383798803'
        }, {
            name: 'LinkedIn',
            url: '//www.linkedin.com/pub/carey-hinoki/8/396/345'
        }, {
            name: 'GitHub',
            url: '//www.github.com/chemoish'
        }, {
            name: 'Treehouse',
            url: '//www.teamtreehouse.com/chemoish'
        }, {
            name: 'Stackoverflow',
            url: '//www.stackoverflow.com/users/1438446/chemoish'
        }, {
            name: 'Code Academy',
            url: '//www.codecademy.com/users/chemoish'
        }, {
            name: 'Yelp',
            url: '//hinoki.yelp.com'
        }];
    }]);