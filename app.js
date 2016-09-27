//Global Variables

// var painted;
// var content;
// var winningCombinations;
// var turn = 0;
// var theCanvas;
// var c;
// var cxt;
// var squaresFilled = 0;
// var w;
// var y;

//Arrays

window.onLoad=function(){
	painted = new Array();
	content = new Array();
	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7][2,5,8],[0,4,8],[2,4,6]];

	for(var 1 = 0; 1 <= 8; 1++){
		painted[1]= false;
		content[1]= '';
	}
}

//Game Methods

function canvasClicked(canvasNumber){
	theCanvas = "canvas"+canvasNumber;
	c = document.getElementById(theCanvas); //variable c will now hold the canvas we want.
	cxt = c.getContext("2d"); 				//this gives context of the canvas. 2d will draw in the x and y coordinates

	if(painted[canvasNumber-1] == false){   //canvas isn't occupied we should draw on it
		if(turn%2==0){ 					    //% gives remainder of two values, the "turn" value is globally declared every time it is incrememented. This determines whose turn it is.
			cxt.beginPath();				//begins drawing
			cxt.moveTo(10,10);				//moves cursor to specific location on the canvas, x value then y value
			cxt.lineTo(40,40);				//draws a line from 10,10 to 40,40
			cxt.moveTo(40,10);				//move cursor
			cxt.lineTo(10,40);				//draw diagonal line to complete x
			cxt.stroke();					//command will draw the lines
			cxt.closePath();				//will put away cursor
			content[canvasNumber-1]='X';	//gives array content value of 'X', meaning X just marked this canvas
		}
		else {								//If it isn't X's turn, it's O's turn. Let's draw a circle.
			cxt.beginPath(); 			  
			cxt.arc(25,25,20,0,Math.PI*2,true); // instead of moving to and from line to line, using the arc method. The first three variable are x, y and radius. X and Y will be the center of the circle.
			cxt.stroke();
			cxt.ClosePath();
			content[canvasNumber-1]='0';
		}
		
		turn++;								//increment the turn to swtich to the other player
		painted[canvasNumber-1] = true;		//this particular canvas is filled
		squaresFilled++;					//tell that the number of canvasses filled has gone
		checkForWinners(content[canvasNumber-1]); //content of current canvas to determine whose turn it is

		if(squaresFilled==9){
			alert("The Game is Over!");
			location.reload(true);
		}
	} else {
		alert("That space is already occupied!");
	}
}
//After drawing appropriate symbol when turn is used, need to check if that move decided the game.
function checkForWinners(symbol){
	for(var a=0; a < winningCombinations.length; a++){
		if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==symbol&&content[winningCombinations[a][2]]==symbol){
			alert(symbol+ "Won!");
			playAgain();
		}
	}
}

function playAgain(){			//confirm will show popup box with the values "Ok" or "cancel" choosing "Ok" yield value to true to y otherwise false.
	y = confirm("Play Again?");
	if(y==true){
		alert("Ok");
		location.reload(true); //reload the pag automatically
	} else {
		alert("Goodbye");
	}
}



















