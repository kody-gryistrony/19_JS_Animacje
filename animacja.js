 var canvas = null;
    var img = null;
    var ctx = null;
    var imageReady = false;
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function( callback ){
                  window.setTimeout(callback, 1000 / 60);
                };
    })();
    function onload() {
      canvas = document.getElementById('animacja');
      ctx = canvas.getContext("2d");
      img = new Image();
      img.src = 'walkingdead.png';
      img.onload = loaded();
      resize();
    }
    function loaded() {
        imageReady = true;
        setTimeout( update, 1000 / 60 );
    }
    function resize() {
      canvas.width = canvas.parentNode.clientWidth;
      canvas.height = canvas.parentNode.clientHeight;
      console.log(canvas.parentNode);
      redraw();
    }
    function redraw() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (imageReady) {
            ctx.drawImage(img, frame*200, 0, 200, 312,
                          canvas.width/2 - 100, canvas.height/2 - 156, 200, 312);
        }
    }
    var frame = 0;
    var lastUpdateTime = 0;
    var acDelta = 0;
    var msPerFrame = 100;
    
    function update() {
        requestAnimFrame(update);
        var delta = Date.now() - lastUpdateTime;
        if (acDelta > msPerFrame)
        {
            acDelta = 0;
            redraw();
            frame++;
            if (frame >= 6) frame = 0;
        } else
        {
            acDelta += delta;
        }
    
        lastUpdateTime = Date.now();
    }
    onload();
