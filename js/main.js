const btn=document.getElementById("new-game");
btn.addEventListener("click",function(){
	window.location.reload();
});

const startBtn=document.getElementById("start");
startBtn.addEventListener("click", function(){
	let p1name=document.getElementById("p1name").value;
	let p2name=document.getElementById("p2name").value;
	addPlayers(p1name, p2name);
});

const addPlayers=(p1name,p2name)=>{
	const player1=Player("X",p1name);
	const player2=Player("O",p2name);
	gameFlow.start(player1, player2);
}

const gameBoard=(()=>{

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

const gameFlow=(()=>{

	const setCounter=()=>{this.counter=0;	}

	const increaseCounter=()=>{	this.counter++;	};

	const start=(playerA, playerB)=>{
	
		const addClickListener =()=>{
			var list=document.getElementsByClassName("space");
				for (let i=0; i<list.length; i++){				
					list[i].addEventListener("click",function(){
						let listItemId=list[i].id;
						gameLogic(playerA, playerB, listItemId,i);
						
					});
				}
		}
		setCounter();
		addClickListener();
	};

	const gameLogic=(playerA,playerB, id, index)=>{
			setSpaceValue(id,index,playerA, playerB);
			increaseCounter();
			gameBoard.render();
			isWinner(playerA,playerB);
	};

	const isWinner=(p1,p2)=>{
		var winner=false;
		if (this.counter>4){
			var elements=[];
			for (let i=1;i<10;i++){
				let el=document.getElementById(i+"");
				elements[i-1]=el.innerHTML;
			}
			const allEqual = arr => arr.every( v => v === arr[0] && v!=="");

			const checkSymbols=arr=>{
				for (let i=0;i<arr.length;i++){
					var updater=document.getElementById("message");
					if (allEqual(arr[i])) {
						winner=true;
						var name= (arr[i][0]=="X") ? p1.name: p2.name;
						updater.innerHTML="VICTORY for Player " + name;
					}
					else if(winner===false && this.counter==9){
						updater.innerHTML="Cat's Game!";
					}
				}
			}
			
			var winningPatterns=[elements.slice(0,3),
			elements.slice(4,6),
			elements.slice(7,9),
			[elements[0], elements[3], elements[6]],
			[elements[1], elements[4], elements[7]],
			[elements[2], elements[5], elements[8]],
			[elements[0], elements[4], elements[8]],
			[elements[2], elements[4], elements[6]]			];
			checkSymbols(winningPatterns);

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
		gameLogic	};

})();

const Player=(symbol,name=symbol)=>{	
	return {symbol: symbol, name: name}
}





