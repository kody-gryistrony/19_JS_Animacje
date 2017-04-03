//odwolujemy sie do canvas przez id
var canvas = document.getElementById("animacja");
//przywolujemy kontekst – w naszym wypadku 2D
var ctx = canvas.getContext("2d");


//podstawowe komendy do rysowania, wszystkie specyfikacje w dokumentacji
//=================================
// ctx.rect(x pocz, y pocz, szer, wys);
// ctx.strokeStyle = "red";

// ctx.rect(100, 100, 200, 120);
// ctx.stroke();
// ctx.fillStyle = "rgb(12, 134, 0)";
// ctx.fillRect(200, 200, 100, 200);

// ctx.strokeStyle = "blue";
// ctx.beginPath();

// ctx.arc(canvas.width/2, canvas.height/2, 100, 0, 2*Math.PI, true);
// ctx.fill();
//ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(20, 200);
// ctx.lineTo(120, 300);
// ctx.lineTo(400, 200);
// ctx.lineTo(20, 200);
// ctx.stroke();

//=======================================
//animacja za pomocą rAF
//==============
// var x = 0;
// function animate(){
// 	requestAnimationFrame(animate, 100);
// 	ctx.clearRect(0,0, canvas.width, canvas.height);
// 	ctx.fillRect(x, 200, 50, 50);
// 	if(x < canvas.width-50)
// 		x++;
// }
// animate();
//========================
//podobna animacja za pomocą rAF, ale nie w canvas
//=================
// var cos = document.getElementById("cos");

// function animateCos(){
// 	requestAnimationFrame(animateCos, 100);
// 	cos.style.left = x+"px";
// 	if(x < canvas.width-50)
// 		x++;
// }
// animateCos();

//==========
//animacja na obrazie – a la Gif

//wartosc poczatkowa
var x = 0;
//tworzymy nowy obraz
var img = new Image();
//kiedy obraz sie zaladuje wykonamy funkcje draw()
img.addEventListener('load', function(){
	draw();
});
//podajemy zrodlo skad obraz ma sie załadować
img.src="walkingdead.png";

//definiujemy funkcję draw
function draw(){
	//setTimeout posłuży to ustalenia framerate animacji
	setTimeout(function(){
		//funkcja woła sie sama w sobie – dzięki temu może powtarzać się w nieskończoność, chyba że ustalimy inaczej
		requestAnimationFrame(draw);
		//czyścimy canvas
		ctx.clearRect(0,0, canvas.width, canvas.height);
		//rysujemy obraz – img to nasz obiekt, a 200*x to wspołrzędna przycinania
		ctx.drawImage(img, 200*x, 0, 200, 312, 0, 0, 200, 312);
		//ifka która wskazuje, że x ma się zwiększać dopóki są klatki animacji, jak nie ma to wraca do zera
		if(x < 9){
			x++;
		}else x=0;
	}, 1000/10);
}

// var svg = document.getElementById("Warstwa_1");
