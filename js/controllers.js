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

  $scope.battle.init(15, 12, [
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'forest', 'forest', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'forest', 'forest', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'forest', 'forest', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'forest', 'forest', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick'],
    ['brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'brick', 'steel'],
  ], {
    't0': {x: 0, y: 0, n: 1},
    't1': {x: 14, y: 0, n: 3},
    't2': {x: 8, y: 11, n: 0}
  });
  $scope.battle.addMovie({
    1: {
      w7_10: 'steel',
      t0: {x: 1, y: 0, n: 1},
      t1: {x: 13, y: 0, n: 3}
    },
    2: {
      w9_10: 'steel',
      t0: {x: 2, y: 0, n: 1},
      t1: {x: 12, y: 0, n: 3}
    },
    3: {
      w6_10: 'steel',
      t0: {x: 2, y: 0, n: 2},
      t1: {x: 12, y: 0, n: 2}
    },
    4: {
      w10_10: 'steel',
      t0: {x: 2, y: 1, n: 2},
      t1: {x: 12, y: 1, n: 2}
    },
  })
}
