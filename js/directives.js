angular.module('app.directives', [])
    .directive('battlemap', [function ($rootScope, $scope, Defines) {

        var resources = Resources();

        resources.load({
          forest: "images/forest.png",
          steel: "images/steel.png",
          water: "images/water.png",
          tank: "images/tank.png",
        });

        return {
          link: function (scope, element, attrs) {
          },
          template: "<canvas id=\"battlemap\"></canvas>",
          replace: true,
          restrict: 'E',
          scope: {
            battle: '=',
            width: '@',
            height: '@',
            loading: '=',
            time: '='
          },
          controller: function ($scope, $element, $attrs, $transclude, Defines) {

            $scope.loaded = false;

            $scope.Defines = Defines;

            $scope.loading = false;

            resources.setOnload(function (progress) {
              $scope.loaded = true;
              $scope.loading = 100;
              $scope.time = 0;
              draw();
            });

            resources.setProgress(function (progress) {
              $scope.loading = progress;
            });

            function draw()
            {
              console.log("Draw scene for time " + $scope.time);
              var canvas = document.getElementById("battlemap");
              var context = canvas.getContext("2d");

              for (var y = 0; y < 10; y++)
                for (var x = 0; x < 10; x++)
                {
                  var item = $scope.battle.world[x][y];
                  context.drawImage(resources.img(item), x * 24, y * 24);
                }
            }

            $scope.update = function ()
            {
              if ($scope.loaded)
                draw();
            }

            $scope.$watch(function () {
              return $scope.time;
            }, $scope.update);
          }

        }
      }])
    ;

function Resources() {
  var images = {};
  var status = {};

  var progress = 0;
  var onload_cb = function () {};
  var progress_cb = function () {};

  function setOnload(cb)
  {
    onload_cb = cb;
  }

  function setProgress(cb)
  {
    progress_cb = cb;
  }

  function onload_resource()
  {
//    console.log(this.name);
    status[this.name] = true;
//    console.log(status);

    var all = 0;
    var complete = 0;
    for (var n in status)
    {
      all++;
      if (status[n])
        complete++;
    }

    progress = Math.floor(complete * 100 / all);
    console.log('Resource loading: ' + progress + '%');
    progress_cb(progress);
    if (all == complete)
    {
      console.log('Resources load complete');
      onload_cb(progress);
    }
  }

  function load(list)
  {
    for (var name in list)
    {
      status[name] = false;
//      console.log('load ' + name + ': ' + list[name]);
      images[name] = new Image();
      images[name].name = name;
      images[name].onload = onload_resource;
      images[name].src = list[name];
    }
  }

  function img(name)
  {
    return images[name];
  }

  return {
    setProgress: setProgress,
    setOnload: setOnload,
    progress: progress,
    images: images,
    load: load,
    img: img,
  }
}
