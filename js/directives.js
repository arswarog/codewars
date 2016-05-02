angular.module('app.directives', [])
    .directive('battlemap', [function ($rootScope, $scope, Defines) {

        var cellsize = 32;
        var resources = Resources();
        resources.load({
          forest: "images/battlecity.png:544:64:32:32",
          brick: "images/battlecity.png:512:0:32:32",
          steel: "images/battlecity.png:512:32:32:32",
          water: "images/battlecity.png:512:64:32:32"
        });

        var res = {};
        var n = [0, 192, 128, 64];
        for (var i = 0; i < 3; i++)
          for (var j = 0; j < 4; j++)
          {
            res['tank' + i + j] = "images/battlecity.png:" + n[j] + ":" + (i * 64) + ":32:32";
          }

        resources.load(res);


        function init(w, h, z)
        {
          var canvas = document.getElementById("battlemap");
          canvas.width = w * cellsize * z;
          canvas.height = h * cellsize * z;
        }

        return {
          link: function (scope, element, attrs) {
          },
          template: "<canvas id=\"battlemap\"></canvas>",
          replace: true,
          restrict: 'E',
          scope: {
            battle: '=',
            size_x: '@sizeX',
            size_y: '@sizeY',
            loading: '=',
            time: '=',
            zoom: '='
          },
          controller: function ($scope, $element, $attrs, $transclude, Defines) {
            if (typeof $scope.zoom === 'undefined')
              $scope.zoom = 1;
            console.log($scope.zoom);
            init($scope.size_x, $scope.size_y, $scope.zoom);
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
              for (var y = 0; y < $scope.size_y; y++)
                for (var x = 0; x < $scope.size_x; x++)
                {
                  var item = $scope.battle.world[x][y];
                  if (item)
                    resources.drawSprite(context, item, x * cellsize, y * cellsize, $scope.zoom);
                }

              for (var i in $scope.battle.tanks)
              {
                var tank = $scope.battle.tanks[i];
                if (tank)
                  resources.drawSprite(context, 'tank' + i + tank.n, tank.x * cellsize, tank.y * cellsize, $scope.zoom);
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
  var sprites = {};
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
    status[this.name] = true;
    var all = 0;
    var complete = 0;
    for (var n in status)
    {
      all++;
      if (status[n])
        complete++;
    }

    progress = Math.floor(complete * 100 / all);
    console.log('[Resource] Resource loading: ' + progress + '%');
    progress_cb(progress);
    if (all == complete)
    {
      console.log('[Resource] Resources load complete');
      onload_cb(progress);
    }
  }

  function load(list)
  {
    for (var name in list)
    {
      var data = list[name].split(':');
      var img = data[0];
      if (typeof status[img] === 'undefined')
      {
        status[img] = false;
        images[img] = new Image();
        images[img].name = img;
        images[img].onload = onload_resource;
        images[img].src = img;
        console.log('[Resource] Load image ' + img);
      }

      sprites[name] = {
        src: img,
        x: data[1],
        y: data[2],
        w: data[3],
        h: data[4]
      };
      console.log('[Resource] Add sprite ' + name);
    }
  }

  function img(name)
  {
    return images[name];
  }

  function drawSprite(context, name, d_x, d_y, zoom)
  {
    if (typeof zoom === 'undefined')
      zoom = 1;
    if (typeof sprites[name] === 'undefined')
    {
      console.log('[Draw] Error! Draw not init sprite "' + name + '"');
      return false;
    }

    context.drawImage(images[sprites[name].src], sprites[name].x, sprites[name].y, sprites[name].w, sprites[name].h, d_x * zoom, d_y * zoom, sprites[name].w * zoom, sprites[name].h * zoom);
  }

  return {
    setProgress: setProgress,
    drawSprite: drawSprite,
    setOnload: setOnload,
    progress: progress,
    images: images,
    load: load,
    img: img,
  }
}
