import React from 'react';
var createReactClass = require('create-react-class');
class GameBoard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            board :[
                ['-','b','-','-','-','b','-','-','-','b'],
                ['-','-','b','-','b','-','b','-','b','-'],
                ['-','-','-','b','-','-','-','b','-','-'],
                ['b','-','b','-','b','-','b','-','b','-'],
                ['-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','b','-','b','-','-','-'],
                ['-','w','-','w','-','w','-','-','-','w'],
                ['w','-','-','-','w','-','w','-','b','-'],
                ['-','w','-','w','-','w','-','w','-','w'],
                ['-','-','w','-','w','-','w','-','w','-'],
            ],
            activePlayer :'w',
        };
        this.handlePieceClick=this.handlePieceClick.bind(this);
        this.highlightPossibleMoves=this.highlightPossibleMoves.bind(this);
        this.findPossibleMoves=this.findPossibleMoves.bind(this);
        this.checkSequence=this.checkSequence.bind(this);
        this.checkInitialSequence=this.checkInitialSequence.bind(this);
    }

    handlePieceClick(e){
        var rowIndex = parseInt(e.target.attributes['data-row'].nodeValue);
        var cellIndex = parseInt(e.target.attributes['data-cell'].nodeValue);
       
        if(this.state.board[rowIndex][cellIndex].indexOf(this.state.activePlayer) > -1){
            this.checkInitialSequence(rowIndex,cellIndex);
            } 
        this.setState(this.state);
        } 
    highlightPossibleMoves(rowIndex,cellIndex){
        if(this.state.board[rowIndex][cellIndex]==='-' ){
            this.state.board[rowIndex][cellIndex]='h';
        }
    }
    checkInitialSequence(rowIndex,cellIndex){
        var possibleMoves=this.findPossibleMoves(rowIndex,cellIndex);
        console.log(possibleMoves);
        for(var i=0;i<2;i++){
            var arr = possibleMoves[i];
            if (arr.length !== 1) {
                if(this.state.board[arr[0][0]][arr[0][1]]===this.state.activePlayer
                    && this.state.board[arr[1][0]][arr[1][1]]==='-'){
                        this.highlightPossibleMoves(arr[1][0],arr[1][1]);
                }
            else if(this.state.board[arr[0][0]][arr[0][1]]===this.state.activePlayer  &&
                        this.state.board[arr[1][0]][arr[1][1]]!==this.state.activePlayer &&
                        this.state.board[arr[2][0]][arr[2][1]]==='-'){
                    this.checkSequence(arr[2][0],arr[2][1]);
                }
            }
        }
    }   
    checkSequence(row,col){
        var directionArr= this.findPossibleMoves(row,col);
        console.log(directionArr);
        var arr;
        for (var i=0;i<directionArr.length;i++){
            if(i==0){
                var arr = directionArr[0];
                if(arr.length<3){
                this.highlightPossibleMoves(row,col);
                i++;
                    break;
                }
                else{
                    if( this.state.board[arr[0][0]][arr[0][1]]==='-' && this.state.board[arr[1][0]][arr[1][1]]==='b' && this.state.board[arr[2][0]][arr[2][1]]==='-'){
                        console.log(arr[2][0],arr[2][1]);
                        this.checkSequence(arr[2][0],arr[2][1]);
                    }else{
                        this.highlightPossibleMoves(row,col);
                    }
                    
                }
            }
            else
            {
                var arr = directionArr[1];
                if(arr.length<3){
                    this.highlightPossibleMoves(row,col);
                }
                else{
                    if( this.state.board[arr[0][0]][arr[0][1]]==='-' && this.state.board[arr[1][0]][arr[1][1]]==='b' && this.state.board[arr[2][0]][arr[2][1]]==='-'){
                        console.log(arr[2][0],arr[2][1]);
                        this.checkSequence(arr[2][0],arr[2][1]);
                    }else{
                        this.highlightPossibleMoves(row,col);
                    }
                }
            }
        }   
    }
    findPossibleMoves(rowIndex,cellIndex){
        var pos = [-1,1];//for left or right
        var possibleMovesLeft = [];
        var possibleMovesRight = [];
        var colLeft = cellIndex;
        var colRight = cellIndex;
        var rowLeft = rowIndex ;
        var rowRight = rowIndex ;
        if(this.state.activePlayer==='w'){
            for(var i=0;i<=pos.length;i++){
                if(pos[i] === (-1)){
                        for(var j=0;j<3;j++){
                            if(colLeft>-1 && rowLeft>-1){
                                possibleMovesLeft.push([rowLeft,colLeft]);
                                colLeft = colLeft-1;
                                rowLeft = rowLeft-1;
                            }
                        }
                    }
                else if(pos[i] === (1)){
                    for(var k=0;k<3;k++){
                        if(colRight<10 && rowRight>-1){
                            possibleMovesRight.push([rowRight,colRight]);
                            colRight = colRight+1;
                            rowRight = rowRight-1;
                        }
                    }
                }
            }
        }
        //for black
        else if(this.state.activePlayer==='b'){
            for(var i=0;i<=pos.length;i++){
                if(pos[i] === (-1)){
                        for(var j=0;j<3;j++){
                            if(colLeft>-1 && rowLeft<10){
                                possibleMovesLeft.push([rowLeft,colLeft]);
                                colLeft = colLeft-1;
                                rowLeft = rowLeft+1;
                            }
                        }
                    }
                else if(pos[i] === (1)){
                    for(var k=0;k<3;k++){
                        if(colRight<10 && rowRight<10){
                            possibleMovesRight.push([rowRight,colRight]);
                            colRight = colRight+1;
                            rowRight = rowRight+1;
                        }
                    }
                }
            }
        }
        return [possibleMovesLeft,possibleMovesRight];
    }
    render(
        ){
        return(
            <div className='container'>
                <div className={'board '+this.state.activePlayer}>
					{
						this.state.board.map(function(row, index) {
							return (<Row rowArr={row} handlePieceClick={this.handlePieceClick.bind(this)} rowIndex={index}/>)
                        },this)  
					}
				</div>
            </div>
            
        );
    }
        
} 
var Row = createReactClass({
	render: function() {
		return (
			<div className="row">
				{
					this.props.rowArr.map(function(cell, index) {
						return (
							<Cell rowIndex={this.props.rowIndex} index={index} cell={cell}  handlePieceClick={this.props.handlePieceClick} />
						)
                    }, this)
                }
			</div>
		)
	}
});

var Cell = createReactClass({
	render: function() {
		return(
			<div  className={'cell cell-'+this.props.cell} >
				<div onClick={this.props.handlePieceClick} data-row={this.props.rowIndex} data-cell={this.props.index} className="gamePiece" ></div> 
            </div>
		)
	}
});

export default GameBoard;