angular.module('app.services', [])

    .constant('Defines', {
    })

    .service('Battle', ['$rootScope', '$location', '$q', '$http', 'Config',
      function ($rootScope, $location, $q, $http, Config) {

        var world = [];
        var tanks = [];
        var controls = [];
        var time = 0;
        var base_world = [];
        var width = 10;
        var height = 10;
        var movie = {};

        ///***********************
        /// Инициализация
        /// передается размер поля и его первоначальная карта
        function init(x, y, base, move)
        {
          width = x;
          height = y;
          for (var i = 0; i < x; i++)
          {
            if (typeof base_world[i] === 'undefined')
              base_world[i] = [];
            if (typeof world[i] === 'undefined')
              world[i] = [];
            for (var j = 0; j < y; j++)
            {
              if (typeof base[i] === 'undefined')
                base[i] = [];
              if (typeof base[i][j] === 'undefined')
                base_world[i][j] = 'brick';
              else
                base_world[i][j] = base[i][j];
              world[i][j] = base_world[i][j];
            }
          }

          if (typeof move !== 'undefined')
            apply(move, {});
        }

        ///***********************
        /// Добавить кадры клипа
        function addMovie(steps)
        {
          for (var t in steps)
            movie[t] = steps[t];
        }

        ///***********************
        /// Перемотать на указанный шаг
        function setTime(newtime)
        {
          //time = newtime;
        }

        ///***********************
        /// Вперед на один шаг
        function prev() {
          console.log('prev ' + time);

          if (time <= 0)
            return false;

          var moves = movie[time];
          if (typeof movie[time] !== 'undefined')
          {
            if (typeof movie[time]['_old'] == 'undefined')
              movie[time]['_old'] = {};
            var old = movie[time]['_old'];

            apply(movie[time]['_old'], movie[time]);
          }
          time--;
        }

        ///***********************
        /// Назад на один шаг
        function next() {
          time++;

          var moves = movie[time];
          if (typeof movie[time] == 'undefined')
            return true;

          if (typeof movie[time]['_old'] == 'undefined')
            movie[time]['_old'] = {};
          var old = movie[time]['_old'];

          apply(movie[time], movie[time]['_old']);
        }

        ///***********************
        /// Функция по применению шага
        function apply(move, old)
        {
          for (var item in move)
          {
            if (item == '_old')
              continue;

            var p = item.substring(1).split('_');
            var val = move[item];

            switch (item.substring(0, 1))
            {
              case "w": /// Изменение карты
                if (typeof old[item] == 'undefined')
                  old[item] = world[p[0]][p[1]];
                world[p[0]][p[1]] = val;
                break;
              case "t": /// Изменение карты
                if (typeof tanks[p[0]] == 'undefined')
                  tanks[p[0]] = {
                    x: 0,
                    y: 0,
                    n: 0
                  }
                if (typeof old[item] == 'undefined')
                {
                  old[item] = {
                    x: tanks[p[0]].x,
                    y: tanks[p[0]].y,
                    n: tanks[p[0]].n
                  }
                }
                tanks[p[0]].x = val.x;
                tanks[p[0]].y = val.y;
                tanks[p[0]].n = val.n;
                break;
              default:
                console.log("[Battle] Unknown command: " + item)
                console.log(val);
            }
          }
        }

        return {
          getTime: function () {
            return time;
          },
          world: world,
          tanks: tanks,
          controls: controls,
          base_world: base_world,
          init: init,
          prev: prev,
          next: next,
          setTime: setTime,
          addMovie: addMovie
        }
      }])

    ;
