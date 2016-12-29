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
					computerResponse();	
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
		//turn 2

		//turn 4

		//turn 6

		//turn 8





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