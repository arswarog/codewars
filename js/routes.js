angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider
          .state('login', {
            url: '/login',
            templateUrl: '../templates/login.html', controller: 'LoginCtrl'
          })
          .state('profile', {
            url: '/profile',
            templateUrl: '../templates/login.html', controller: 'LoginCtrl'
          })

          .state('banker', {
            url: '/banker',
            abstract: true,
            templateUrl: 'templates/menu.html'
          })

          .state('banker.settings', {
            url: '/settings',
            views: {'side-menu21': {templateUrl: 'templates/settings.html', controller: 'SettingsCtrl'}}
          })

          .state('banker.sms', {
            url: '/sms',
            abstract: true,
            views: {'side-menu21': {template: '<ion-nav-view name="side-menu21"></ion-nav-view>'}}
          })
          .state('banker.sms.index', {
            url: '',
            views: {'side-menu21': {templateUrl: 'templates/sms.index.html', controller: 'SmsIndexCtrl'}}
          })
          .state('banker.sms.phone', {
            url: '/phone/:address',
            views: {'side-menu21': {templateUrl: 'templates/sms.phone.html', controller: 'SmsPhoneCtrl'}}
          })
          .state('banker.sms.view', {
            url: '/:id',
            views: {'side-menu21': {templateUrl: 'templates/sms.view.html', controller: 'SmsViewCtrl'}}
          })
          .state('banker.sms.edit', {
            url: '/:address/edit',
            views: {'side-menu21': {templateUrl: 'templates/sms.edit.html', controller: 'SmsEditCtrl'}}
          })

          .state('banker.pack', {
            url: '/pack',
            abstract: true,
            views: {'side-menu21': {template: '<ion-nav-view name="side-menu21"></ion-nav-view>'}}
          })
          .state('banker.pack.view', {
            url: '',
            views: {'side-menu21': {templateUrl: 'templates/pack.view.html', controller: 'PackViewCtrl'}}
          })
          .state('banker.pack.index', {
            url: 's',
            views: {'side-menu21': {templateUrl: 'templates/pack.index.html', controller: 'PackIndexCtrl'}}
          })
          .state('banker.pack.add', {
            url: '/add_pack',
            views: {'side-menu21': {templateUrl: 'templates/pack.edit.html', controller: 'PackAddCtrl'}}
          })
          .state('banker.pack.edit', {
            url: '/edit',
            views: {'side-menu21': {templateUrl: 'templates/pack.edit.html', controller: 'PackEditCtrl'}}
          })

          .state('banker.deposit', {
            url: '/deposit',
            abstract: true,
            views: {'side-menu21': {template: '<ion-nav-view name="side-menu21"></ion-nav-view>'}}
          })
          .state('banker.deposit.add', {
            url: '/add',
            views: {'side-menu21': {templateUrl: 'templates/deposit.edit.html', controller: 'DepositEditCtrl'}}
          })
          .state('banker.deposit.view', {
            url: '/:id',
            views: {'side-menu21': {templateUrl: 'templates/deposit.view.html', controller: 'DepositViewCtrl'}}
          })
          .state('banker.deposit.edit', {
            url: '/:id/edit',
            views: {'side-menu21': {templateUrl: 'templates/deposit.edit.html', controller: 'DepositEditCtrl'}}
          })
          .state('banker.deposit.new_transaction', {
            url: '/:deposit/new',
            views: {'side-menu21': {templateUrl: 'templates/transaction.edit.html', controller: 'TransactionEditCtrl'}}
          })

          .state('banker.cats', {
            url: '/cats',
            abstract: true,
            views: {'side-menu21': {template: '<ion-nav-view name="side-menu21"></ion-nav-view>'}}
          })
          .state('banker.cats.index', {
            url: '/:type',
            views: {'side-menu21': {templateUrl: 'templates/cats.index.html', controller: 'CatIndexCtrl'}}
          })
          .state('banker.cats.view', {
            url: '/:type/:id',
            views: {'side-menu21': {templateUrl: 'templates/cats.view.html', controller: 'CatViewCtrl'}}
          })
          .state('banker.cats.edit', {
            url: '/:type/:id/edit',
            views: {'side-menu21': {templateUrl: 'templates/cats.edit.html', controller: 'CatEditCtrl'}}
          })
          .state('banker.cats.add', {
            url: '/:type/:pid/add',
            views: {'side-menu21': {templateUrl: 'templates/cats.edit.html', controller: 'CatEditCtrl'}}
          })

          .state('banker.transaction', {
            url: '/transaction',
            abstract: true,
            views: {'side-menu21': {template: '<ion-nav-view name="side-menu21"></ion-nav-view>'}}
          })
          .state('banker.transaction.waiting', {
            url: '/waiting',
            views: {'side-menu21': {templateUrl: 'templates/transaction.waiting.html', controller: 'TransactionWaitingCtrl'}}
          })
          .state('banker.transaction.view', {
            url: '/:id',
            views: {'side-menu21': {templateUrl: 'templates/transaction.view.html', controller: 'TransactionViewCtrl'}}
          })
          .state('banker.transaction.edit', {
            url: '/:id/edit',
            views: {'side-menu21': {templateUrl: 'templates/transaction.edit.html', controller: 'TransactionEditCtrl'}}
          })
          .state('banker.transaction.add', {
            url: '/:deposit/add',
            views: {'side-menu21': {templateUrl: 'templates/transaction.edit.html', controller: 'TransactionEditCtrl'}}
          })

          ;

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/banker/pack');

    });