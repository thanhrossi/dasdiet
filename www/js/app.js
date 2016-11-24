// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
  // config chap
  .state('app.chuong1', {
      url: '/chuong1',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong1.html'
        }
      }
    })
  .state('app.chuong2', {
      url: '/chuong2',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong2.html'
        }
      }
    })
  .state('app.chuong3', {
      url: '/chuong3',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong3.html'
        }
      }
    })
    .state('app.chuong4', {
      url: '/chuong4',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong4.html'
        }
      }
    })
      .state('app.chuong5', {
      url: '/chuong5',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong5.html'
        }
      }
    })
  .state('app.chuong6', {
      url: '/chuong6',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong6.html'
        }
      }
    })
  .state('app.chuong7', {
      url: '/chuong7',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong7.html'
        }
      }
    })
    .state('app.chuong8', {
      url: '/chuong8',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong8.html'
        }
      }
    })
      .state('app.chuong9', {
      url: '/chuong9',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong9.html'
        }
      }
    })
  .state('app.chuong10', {
      url: '/chuong10',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong11.html'
        }
      }
    })
  .state('app.chuong11', {
      url: '/chuong11',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong11.html'
        }
      }
    })
    .state('app.chuong12', {
      url: '/chuong12',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong12.html'
        }
      }
    })
      .state('app.chuong13', {
      url: '/chuong13',
      views: {
        'menuContent': {
          templateUrl: 'templates/chaps/chuong13.html'
        }
      }
    })
  // End config chap
  .state('app.chaplists', {
    url: '/chaplists',
    views: {
      'menuContent': {
        templateUrl: 'templates/chaplists.html',
        controller: 'ChapListsCtrl'
      }
    }
  })


  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
});
