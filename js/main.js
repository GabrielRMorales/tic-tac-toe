$(document).ready(function(){
	var turn=0;
	var userChoice;
	var computerChoice;
	var gameReady=false;
	var gameOver=false;
	function clickResponse(){
		$("#X").hide();
		$("#O").hide();
		$("h2").html("Play!");		
		$("h2").css("margin-bottom", "43px");
		gameReady=true;
	}
	$("#X").click(function(){
		userChoice="X";
		computerChoice="O";
		clickResponse();
		});
	$("#O").click(function(){
		userChoice="O";
		computerChoice="X";
		clickResponse();

	})
	var options=["top-left","top-center","top-right",
				"center-left","center-center","center-right",
				"bottom-left","bottom-center","bottom-right"];
	//EASY VERSION-uses random choices
	$(".square").click(function(){
		if (($(this).hasClass("unclickable")==false)&&gameReady==true){
		$(this).html(userChoice);
		$(this).addClass("unclickable");
		$(this).addClass("user");
		turn++;
		findWinner();
		if (turn<8&&gameOver==false){
				console.log(turn);
				hardComputerResponse();	
	}
		findWinner();
		if (turn==9){
			var status=$("h2").html();
			if (status!=="Player has won!"&&status!=="Computer has won!"){
				$("h2").html("Cat's Game!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
			}
		}
	}		
		
	});
	
	function computerResponse(){
		var compSel=Math.ceil(Math.random() * (9)-1);
		while($("#"+(options[compSel])).hasClass("unclickable")){
			compSel=Math.ceil(Math.random() * (9)-1);
		}
		$("#"+(options[compSel])).html(computerChoice);
		$("#"+(options[compSel])).addClass("unclickable").addClass("computer");
		turn++;	
	}
	
	function hardComputerResponse(){
		//turn 1,2
		//if X plays corner, O plays center
			if (turn==1){
		$("#top-left, #top-center, #top-right, #center-left, #center-right, #bottom-left, #bottom-center,#bottom-right").each(function(){			
			if($(this).hasClass("user")){
				$("#center-center").html(computerChoice).addClass("unclickable").addClass("computer");;
				turn++;
			}
		}
);
		var compSel=Math.ceil(Math.random() * (9)-1);
		if ($("#center-center").hasClass("user")){
			while([0,2,6,8].includes(compSel)==false){
			compSel=Math.ceil(Math.random() * (9)-1);
		}
		$("#"+(options[compSel])).html(computerChoice);
		$("#"+(options[compSel])).addClass("unclickable").addClass("computer");
		turn++;	
		}

	}
		//turn 3,4
		
		//first if comp has two in a row, do third
		function turnThreeFive(num1,num2, num3, markerClass){
if (turn==3||turn==5||turn==7){
	if ($("#"+options[num1]).hasClass(markerClass)&&$("#"+options[num2]).hasClass(markerClass)){
		console.log(options[num3]);
		if ($("#"+(options[num3])).hasClass("unclickable")==false){
		$("#"+(options[num3])).html(computerChoice);
		$("#"+(options[num3])).addClass("unclickable").addClass("computer");		
		turn++;
			}
		else if ($("#"+(options[num3])).hasClass("unclickable")){
				computerResponse();
		}
		}
	}
}
	var arr=[[0,1,2],[3,4,5],[6,7,8]];
	for(var i=0;i<1;i++){
		for (var j=0; j<3; j++) {
    
    turnThreeFive(arr[i][0],arr[i][1],arr[i][2],"computer");
    arr[i].slice(0, 3).join(",");
    arr[i].push(arr[i].shift());
		}
	}
	for(var i=0;i<1;i++){
		for (var j=0; j<3; j++) {
    
    turnThreeFive(arr[i][0],arr[i][1],arr[i][2],"user");
    arr[i].slice(0, 3).join(",");
    arr[i].push(arr[i].shift());
		}
	}		


		/*turnThreeFive(3,4,5,arr[i]);
		turnThreeFive(5,4,3,arr[i]);
		turnThreeFive(5,4,3,arr[i]);

		turnThreeFive(6,7,8,arr[i]);
		turnThreeFive(8,7,6,arr[i]);
		turnThreeFive(7,8,8,arr[i]);

		turnThreeFive(0,3,6,arr[i]);
		turnThreeFive(6,3,0,arr[i]);
		turnThreeFive(1,4,7,arr[i]);
		turnThreeFive(7,4,1,arr[i]);
		turnThreeFive(2,5,8,arr[i]);
		turnThreeFive(8,5,2,arr[i]);
		turnThreeFive(0,4,8,arr[i]);
		turnThreeFive(8,4,0,arr[i]);
		turnThreeFive(6,4,2,arr[i]);
		turnThreeFive(2,4,6,arr[i]);

		turnThreeFive(0,1,2,"user");
		turnThreeFive(1,2,0,arr[i]);
		turnThreeFive(2,0,1,arr[i]);*/

		//turn 5,6

		//turn 7,8





	}
	function findWinner(){
		var playerArray=[0,0,0,0,0,0,0,0];
		var compArray=[0,0,0,0,0,0,0,0];
		var topVictory="#top-left, #top-center, #top-right";
		var centerVictory="#center-left, #center-center, #center-right";
		var bottomVictory="#bottom-left, #bottom-center, #bottom-right";
		var leftVerticalVictory="#top-left, #center-left, #bottom-left";
		var centerVerticalVictory="#top-center, #center-center, #bottom-center";
		var rightVerticalVictory="#top-right, #center-right, #bottom-right";
		var diagonalLeftRight="#top-left, #center-center, #bottom-right";
		var diagonalRightLeft="#top-right, #center-center, #bottom-left";
		var vicArr=[topVictory,centerVictory,bottomVictory,leftVerticalVictory,centerVerticalVictory,
		rightVerticalVictory,diagonalLeftRight,diagonalRightLeft];

		function winner(className, controller, arraySlot, condition){
		$(condition).each(function(){
			
			if($(this).hasClass(className)){
				arraySlot++;
				if (arraySlot==3){
					gameOver=true;
					$("h2").html(controller+" has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}}); 
		}		
		for (var i=0;i<vicArr.length;i++){
			var cond=vicArr[i];
			winner("computer", "Computer",compArray[i], cond);	
			winner("user", "Player",playerArray[i], cond);		
		}
	}
});