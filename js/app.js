angular.module('app', [
  'app.controllers', /*'app.routes',*/ 'app.services', 'app.directives'
])
    .run(function () {
    })
    .constant('Config', {
      api: "/api/"
    });

