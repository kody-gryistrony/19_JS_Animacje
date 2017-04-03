// var canvas = document.getElementById("animacja");
// var ctx = canvas.getContext('2d');

// 	ctx.fillStyle = "black";
// 	ctx.fillRect(300,300,200,100);
// 	ctx.fill();

// 	ctx.fillStyle = "transparent";
// 	ctx.rect(100,100,200,100);
// 	ctx.stroke();

// 	ctx.beginPath();
// 	ctx.moveTo(50,50);
// 	ctx.lineTo(200,200);
// 	ctx.lineTo(50, 250);
// 	ctx.stroke();

// 	ctx.fillStyle = "red";
// 	ctx.beginPath();
// 	ctx.arc(250, 250, 200, 0, 2*Math.PI);
// 	ctx.fill();

// 	var frame = 0;
// 	var img = new Image();
// 	img.addEventListener('load', function() {
// 		  //ctx.drawImage(img, 0 , 0, 200, 312, 100, 100, 200, 312 );
// 		  draw();
// 	}, false);
// 	img.src ='walkingdead.png' ;

// 	function draw(){
// 		setTimeout(function(){
// 			requestAnimationFrame(draw);
// 			ctx.clearRect(0,0, canvas.width, canvas.height);
// 			ctx.drawImage(img, 200*frame, 0, 200, 312, 100, 100, 200, 312);	
// 			frame++;
// 			if(frame >=10)
// 				frame = 0;
// 		}, 1000/15);
// 	}
	
// 	function przesuwanie(){
// 		requestAnimationFrame(przesuwanie);
// 		ctx.clearRect(0,0, canvas.width, canvas.height);
// 		ctx.rect(100*frame, 100, 200, 200);
// 		ctx.stroke();
// 		frame++;
// 			if(frame >=10)
// 				frame = 0;
// 	}
// 	przesuwanie();


var p = document.getElementById('cos');
var i =0;
function prostokat(){
	setTimeout(function(){
		requestAnimationFrame(prostokat);
		p.style.left = i*10 +"px";
		i++;
		if(i >=100)
			i=0;
	}, 1000/60);
}
prostokat();


