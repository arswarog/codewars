var cnv_canvas = document.getElementById("cnv");
var context = cnv_canvas.getContext("2d");

//context.fillRect(50, 25, 150, 100);

function Images() {
  var images = {};
  var status = {};

  var process = 0;
  var onload_cb = function () {};

  function setOnload(cb)
  {
    onload_cb = cb;
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

    process = Math.floor(complete * 100 / all);
    console.log('Resource loading: ' + process + '%');
    if (all == complete)
    {
      console.log('Resources load complete');
      onload_cb();
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
    setOnload: setOnload,
    onload: onload_cb,
    process: process,
    images: images,
    load: load,
    img: img,
  }
}

var res = Images();

world = [
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
]

res.setOnload(function () {
  for (var y = 0; y < 10; y++)
    for (var x = 0; x < 10; x++)
    {
      var item = world[x][y];
      context.drawImage(res.img(item), x * 24, y * 24);
    }
});


var map = [];

res.load({
  forest: "https://raw.githubusercontent.com/arswarog/battlecity/master/images/forest.png",
  steel: "https://raw.githubusercontent.com/arswarog/battlecity/master/images/steel.png",
  water: "https://raw.githubusercontent.com/arswarog/battlecity/master/images/water.png",
  tank: "https://raw.githubusercontent.com/arswarog/battlecity/master/images/tank.png",
});
