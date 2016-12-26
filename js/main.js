$(document).ready(function(){
	var turn=0;
	var userChoice;
	var computerChoice;
	var gameReady=false;
	$("#X").click(function(){
		userChoice="X";
		computerChoice="O";
		$("#X").hide();
		$("#O").hide();
		$("h2").html("Play!");
		gameReady=true;
	});
	$("#O").click(function(){
		userChoice="O";
		computerChoice="X";
		$("#X").hide();
		$("#O").hide();
		$("h2").html("Play!");
		gameReady=true;
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
		if (turn<8){
			setTimeout(function(){
					computerResponse();
					}, 1500);
		
	}
		findWinner();
		if (turn==9){
			var status=$("h2").html();
			if (status!=="Player has won!"&&status!=="Computer has won!"){
				$("h2").html("It's a draw!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
			}
		}
	}		
		
	});
	function draw(){
		var draw=0;
		$("#top-left, #top-center, #top-right, #center-left, #center-center, #center-right, #bottom-left, #bottom-center, #bottom-right").each(function(){
			if($(this).hasClass("unclickable")){
				draw++;
				console.log("draw: "+draw);
				if (draw==options.length){
					$("h2").html("It's a draw!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}
				
			}});	
	}
	function computerResponse(){
		var compSel=Math.ceil(Math.random() * (9)-1);

		while($("#"+(options[compSel])).hasClass("unclickable")){
			compSel=Math.ceil(Math.random() * (9)-1);
		}
		console.log(compSel);
		$("#"+(options[compSel])).html(computerChoice);
		$("#"+(options[compSel])).addClass("unclickable").addClass("computer");
		turn++;
	}
	function findWinner(){
		var topVictory=0;
		var centerVictory=0;
		var bottomVictory=0;
		var leftVerticalVictory=0;
		var centerVerticalVictory=0;
		var rightVerticalVictory=0;
		var diagonalLeftRight=0;
		var diagonalRightLeft=0;
		var topVictoryComp=0;
		var centerVictoryComp=0;
		var bottomVictoryComp=0;
		var leftVerticalVictoryComp=0;
		var centerVerticalVictoryComp=0;
		var rightVerticalVictoryComp=0;
		var diagonalLeftRightComp=0;
		var diagonalRightLeftComp=0;
		
		$("#top-left, #top-center, #top-right").each(function(){
			if($(this).hasClass("user")){
				topVictory++;
				if (topVictory==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}}); 
		$("#top-left, #top-center, #top-right").each(function(){
			if($(this).hasClass("computer")){
				topVictoryComp++;
				if (topVictoryComp==3){
					$("h2").html("Computer has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}
				
			}});
		$("#center-left, #center-center, #center-right").each(function(){		
			if($(this).hasClass("user")){
				centerVictory++;
				if (centerVictory==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}
			}});
		$("#center-left, #center-center, #center-right").each(function(){		
			if($(this).hasClass("computer")){
				centerVictoryComp++;
				if (centerVictoryComp==3){
					$("h2").html("Computer has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}
			}});
		$("#bottom-left, #bottom-center, #bottom-right").each(function(){
			if($(this).hasClass("user")){
				bottomVictory++;
				if (bottomVictory==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}
				
			}});	
		$("#bottom-left, #bottom-center, #bottom-right").each(function(){
			if($(this).hasClass("computer")){
				bottomVictoryComp++;
				if (bottomVictoryComp==3){
					$("h2").html("Computer has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}
				
			}});
		$("#top-left, #center-left, #bottom-left").each(function(){
			if($(this).hasClass("user")){
				
				leftVerticalVictory++;				
				if (leftVerticalVictory==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}
				
			}});
		$("#top-left, #center-left, bottom-left").each(function(){
				if($(this).hasClass("computer")){
						leftVerticalVictoryComp++;
						if (leftVerticalVictoryComp==3){
						$("h2").html("Computer has won!");
						setTimeout(function(){
						window.location.reload();
					}, 3000);
						}
						
					}});		

		$("#center-top, #center-center, #center-bottom").each(function(){
			if($(this).hasClass("user")){
				centerVerticalVictory++;
				if (centerVerticalVictory==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}});
		$("#center-top, #center-center, #center-bottom").each(function(){
			if($(this).hasClass("computer")){
				centerVerticalVictoryComp++;
				if (centerVerticalVictoryComp==3){
					$("h2").html("Computer has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}});		
		$("#top-right, #center-right, #bottom-right").each(function(){
			if($(this).hasClass("user")){
				rightVerticalVictory++;
				if (rightVerticalVictory==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 5000);
				}
				
			}});
		$("#top-right, #center-right, #bottom-right").each(function(){
			if($(this).hasClass("computer")){
				rightVerticalVictoryComp++;
				if (rightVerticalVictoryComp==3){
					$("h2").html("Computer has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}});
				
		$("#top-left, #center-center, #bottom-right").each(function(){
			if($(this).hasClass("user")){
				diagonalLeftRight++;
				if (diagonalLeftRight==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}});
		$("#top-left, #center-center, #bottom-right").each(function(){
			if($(this).hasClass("computer")){
				diagonalLeftRightComp++;
				if (diagonalLeftRightComp==3){
					$("h2").html("Computer has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}});			

		$("#top-right, #center-center, #bottom-left").each(function(){
			if($(this).hasClass("user")){
				diagonalRightLeft++;
				if (diagonalRightLeft==3){
					$("h2").html("Player has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}});
		$("#top-right, #center-center, #bottom-left").each(function(){
			if($(this).hasClass("computer")){
				diagonalRightLeftComp++;
				if (diagonalRightLeftComp==3){
					$("h2").html("Computer has won!");
					setTimeout(function(){
						window.location.reload();
					}, 3000);
				}				
			}});

	}

});