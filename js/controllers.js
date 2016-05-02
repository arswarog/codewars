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
    't1': {x: 8, y: 0, n: 3},
    't2': {x: 4, y: 8, n: 0}
  });
  $scope.battle.addMovie({
    1: {
      w3_7: 'steel',
      t0: {x: 1, y: 0, n: 1},
      t1: {x: 7, y: 0, n: 3}
    },
    2: {
      w4_7: 'steel',
      t0: {x: 2, y: 0, n: 1},
      t1: {x: 6, y: 0, n: 3}
    },
    3: {
      w5_7: 'steel',
      t0: {x: 2, y: 0, n: 2},
      t1: {x: 6, y: 0, n: 2}
    },
    4: {
      w6_7: 'steel',
      t0: {x: 2, y: 1, n: 2},
      t1: {x: 6, y: 1, n: 2}
    },
  })
}
