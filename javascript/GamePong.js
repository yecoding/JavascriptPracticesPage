//Paddels Motion Variables

var paddel1, paddel2;

var shift = 20;

var p1Height = 120;
var p1Width = 10;

var p2Height = 120;
var p2Width = 10;

var p1y, p2y;

var p1V = 0;
var p2V = 0;

var pA = 5;

var friction = 0.85;

//Ball Motion Variables

var ball;

var ballDia = 15;

var ballX, ballY;

var ballSpeedR = 8;

var ballVx = 0;
var ballVy = 0;

var gameCtn = false;
var winner;

var gameStop = false;

/* Alternative ballV setup:

var ballVx = Math.random()*4-2;
var ballVy = Math.random()*4-2;*/

function setup(){
	var button = createButton('START');
	button.mousePressed(startGame);
	button.parent('playBtn');
	button.style("border", "none");
	button.style("text-decoration", "none");
	button.style("width", "200px");
	button.style("background-color", "#3AAFA9");
	button.style("padding", "12px");
	button.style("color", "#FEFFFF");
	button.style("font-size", "150%");
	button.style("border-radius", "0.8em");
	button.style("font-family", "'Abel'");
	button.style("cursor", "pointer");

	var canvas = createCanvas(900, 600);
	canvas.parent('pongGamePlay');	
}

function startGame(){

	setTimeout(initializeGame, 2000);
	
};



function initializeGame(){
	var theta = Math.random()*Math.PI*2;

	//Make sure the starting point of the ball is reasonable
	while(true){
		if (
			((theta>=Math.PI/10)&&(theta<=Math.PI/3))
			||((theta>=Math.PI*2/3)&&(theta<=Math.PI*9/10))
			||((theta>=Math.PI*11/10)&&(theta<=Math.PI*4/3))
			||((theta>=Math.PI*5/3)&&(theta<=Math.PI*19/10))
			){
			break;
		}else{
			theta = Math.random()*Math.PI*2;
		}
	}
    ballVx = Math.cos(theta)*ballSpeedR;
    ballVy = Math.sin(theta)*ballSpeedR;
	gameCtn = true;
	p1y = height/2 - p1Height/2;
	p2y = height/2 - p2Height/2;

	ballX = width/2;
	ballY = height/2;
}


function draw(){
	clear();
	fill(255);
	background('#2B7A78');
	noStroke();
	
	if(gameCtn){

		paddle1 = rect(shift, p1y, p1Width, p1Height);

		paddle2 = rect(width-shift-p2Width, p2y, p2Width, p2Height);

		ball = ellipse(ballX, ballY, ballDia, ballDia);

		ctrlPaddel();

		ballmove();

		ballRebounce ();
	
		
	}
	// else{
	// 	if(!gameStop){
	// 	alert( winner +" is the winner!");
	// 	gameStop = true;
	// 	}
	// }
}

//Ball Motion

	function ballmove(){
		ballX = ballX + ballVx;
		ballY = ballY + ballVy;
	}

	function ballRebounce () {
		
		

		if( (ballX + ballVx) <= (ballDia/2)) {
			/* If bounce on the left side walls
			ballX = ballDia/2;
			ballVx = -ballVx;
			*/
			gameCtn = false;
			winner = "Right";
		}

		if( (ballX + ballVx) >= (width-ballDia/2)){

			/* If bounce on the right side walls
			ballX = width-ballDia/2;
			ballVx = -ballVx;
			*/
			gameCtn = false;
			winner = "Left";
		}

		

		/* Note: */

		if ((ballX <= shift + p1Width + ballDia/2)
			&&(ballY>=p1y)
			&&(ballY<=p1y+p1Height)){

			ballX = shift + p1Width + ballDia/2;
			ballVx = -ballVx;
			console.log("left hit");
		}

		if ((ballX >= width-shift-p1Width-ballDia/2)
			&&(ballY>=p2y)
			&&(ballY<=p2y+p1Height)){

			ballX = width-shift-p1Width-ballDia/2;
			ballVx = -ballVx;
			console.log("right hit");
		}


		if((ballY + ballVy) <= ballDia/2){
			ballY = ballDia/2;
			ballVy = -ballVy;
		}

		if((ballY + ballVy) >= (height-ballDia/2)){
			ballY = height-ballDia/2;
			ballVy = -ballVy;
		}
	}




//Paddle Control


	function ctrlPaddel(){

	//Player 1: w/s Control


	//Going Down
		if (keyIsDown(83)){

			p1V = p1V +pA;

		}

	//Going Up
		if(keyIsDown(87)){	
			p1V = p1V - pA;
		}

	//Constrain

		p1V = p1V * friction;

		if(p1y+p1V>height-p1Height){
			p1y = height-p1Height;
			p1V = 0;
		}else if(p1y + p1V < 0){
			p1V = 0;
			p1y = 0;
		}
		else{
		p1y += p1V;
	}



	//Player 2: Arrow Control

	if (keyIsDown(76)){
			p2V = p2V + pA;
	}


	if(keyIsDown(80)){
			p2V = p2V - pA;

	}

	p2V = p2V * friction;

	if(p2y+p2V>height-p2Height){
			p2V = 0;
			p2y = height-p2Height;
		}else if(p2y + p2V < 0){
			p2V = 0;
			p2y = 0;
		}else{
			p2y += p2V;
	}

}





