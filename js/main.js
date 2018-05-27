//use object.assign as needed

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
		var el1=document.getElementById("1").innerHTML;
		var el2=document.getElementById("2").innerHTML;
		var el3=document.getElementById("3").innerHTML;
		//create winner check function
		if (this.counter>3){
			if (el1=="X" && el2=="X" && el3=="X"){
				alert("VICTORY");
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

