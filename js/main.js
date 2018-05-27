//use object.assign as needed
const btn=document.getElementById("new-game");
btn.addEventListener("click",function(){
	window.location.reload();
	
});
//board module
const gameBoard=(()=>{


	//render function
	const render=()=>{
		var board=gameBoard.board;
		console.log(board);
		for (let i=0;i<board.length;i++){
			let space=document.getElementById(i+1);
			space.innerHTML=board[i];
		}
	};

	return {
		board: ["","","","","","","","",""],
		render
	};

})();


//gameFlow a module
const gameFlow=(()=>{

	const setCounter=()=>{
		this.counter=0;
	}

	const increaseCounter=()=>{
		this.counter++;
		console.log(this.counter);
	};

	setCounter();

	//set initial stuff-this could easily be refactored if this is all it does
	const start=(playerA, playerB)=>{
		
		//set initial event timers
		const addClickListener =()=>{
			var list=document.getElementsByClassName("space");
				for (let i=0; i<list.length; i++){				
					list[i].addEventListener("click",function(){

						//refactor this as needed to be more modular
						let listItemId=list[i].id;
						gameLogic(playerA, playerB, listItemId,i);

						//render
						gameBoard.render();
						//check if its a winning move
						isWinner();
						
					});
				}
		}
		addClickListener();
	};

	//running game Logic
	const gameLogic=(playerA,playerB, id, index)=>{
			setSpaceValue(id,index,playerA, playerB);
			
			increaseCounter();

	};

	const isWinner=()=>{

		//refactor this part with a for-loop 
		var el1=document.getElementById("1").innerHTML;
		var el2=document.getElementById("2").innerHTML;
		var el3=document.getElementById("3").innerHTML;
		var el4=document.getElementById("4").innerHTML;
		var el5=document.getElementById("5").innerHTML;
		var el6=document.getElementById("6").innerHTML;
		var el7=document.getElementById("7").innerHTML;
		var el8=document.getElementById("8").innerHTML;
		var el9=document.getElementById("9").innerHTML;
		//create winner check function
		//ALSO this is very obviously flawed logic-will fix it later
		//refactor with SWITCH
		if (this.counter>4){
			if (el1==el2 && el2==el3){
				alert("VICTORY for Player "+el1);
			}
			else if (el4==el5 && el5==el6){
				alert("VICTORY for Player "+el4);
			}
			else if (el7==el8 && el8==el9){
				alert("VICTORY for Player "+el7);
			}
			else if (el1==el4 && el4==el7){
				alert("VICTORY for Player "+el1);
			}
			else if (el2==el5 && el5==el8){
				alert("VICTORY for Player "+el2);
			}	
			else if (el3==el6 && el6==el9){
				alert("VICTORY for Player "+el3);
			}
			else if (el1==el5 && el5==el9){
				alert("VICTORY for Player "+el1);
			}
			else if (el3==el5 && el5==el7){
				alert("VICTORY for Player "+el3);
			}
		}
	};

	const setSpaceValue=(id, index, playerA, playerB)=>{
		var el=document.getElementById(id);
		if (el.innerHTML==""){
			this.counter%2==0 ? gameBoard.board[index]=playerA.symbol :gameBoard.board[index]=playerB.symbol;
		}

	};
	
	return {
		start,
		increaseCounter,
		gameLogic
	};

})();


//player Object
const Player=(symbol)=>{	
	return {
		symbol: symbol
	}
}

	const player1=Player("X");
	const player2=Player("O");
	gameFlow.start(player1, player2);

