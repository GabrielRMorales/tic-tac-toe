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
		//console.log(this.counter);
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
		if (this.counter>4){
			var elements=[];
			//get the value of each element in an array
			for (let i=1;i<10;i++){
				let el=document.getElementById(i+"");
				elements[i-1]=el.innerHTML;
			}
			console.log(elements)
			//refactor with SWITCH
			const allEqual = arr => arr.every( v => v === arr[0] );

			const checkSymbols=arr=>{
				if (allEqual(arr)) {
					console.log("TRUE");
					let updater=document.getElementById("message");
					updater.innerHTML="VICTORY for Player" + arr[0];
				}
			}
			
			var winningPatterns=[elements.slice(0,3),
			elements.slice(4,6),
			elements.slice(7,9),
			[elements[0], elements[3], elements[6]],
			[elements[1], elements[4], elements[7]],
			[elements[2], elements[5], elements[8]],
			[elements[0], elements[4], elements[8]],
			[elements[2], elements[4], elements[6]]
			];

			checkSymbols(winningPatterns);

			/*if allEqual(elements.slice(0,3)){
				alert("VICTORY for Player "+el1);

			}
			else if allEqual(elements.slice(4,6)){

			}
			else if allEqual(elements.slice(7,9)){

			}
			else if allEqual([elements[0], elements[3], elements[6]){

			}
			else if allEqual([elements[1], elements[4], elements[7]){

			}
			else if allEqual([elements[2], elements[5], elements[8]){

			}
			else if allEqual([elements[0], elements[4], elements[8]){

			}
			else if allEqual([elements[2], elements[4], elements[6]){

			}*/
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

