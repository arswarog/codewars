angular.module('app.controllers', [])
    .controller('BattleCtrl', BattleCtrl)
    ;
function BattleCtrl($scope, $rootScope, Battle) {
  $scope.battle = Battle;
  $scope.time = 0;
  $scope.loading = 0;
  function draw()
  {
    $scope.time = $scope.battle.getTime();
  }

  $scope.prev = function () {
    $scope.battle.prev();
    draw();
  }

  $scope.next = function () {
    $scope.battle.next();
    draw();
  }

  $scope.battle.init(10, 10, [
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'forest', 'forest', 'forest', 'forest', 'forest', 'forest', 'forest', 'forest', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
    ['steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel', 'steel'],
  ], {
    't0': {x: 2, y: 2, n: 0},
    't1': {x: 5, y: 5, n: 1},
    't2': {x: 2, y: 2, n: 2}
  });
  $scope.battle.addMovie({
    1: {
      'w5_5': 'forest'
    },
    2: {
      'w6_5': 'forest'
    },
    3: {
      'w6_6': 'forest'
    },
    4: {
      'w5_6': 'forest'
    },
  })
}
