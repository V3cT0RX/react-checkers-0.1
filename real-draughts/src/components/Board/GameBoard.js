import React from 'react';
var createReactClass = require('create-react-class');
class GameBoard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            board :[
                ['-','b','-','b','-','b','-','b','-','b'],
                ['b','-','b','-','b','-','b','-','b','-'],
                ['-','b','-','b','-','b','-','b','-','b'],
                ['b','-','-','-','b','-','b','-','b','-'],
                ['-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','b','-','-','-','-','-'],
                ['-','w','-','w','-','w','-','w','-','w'],
                ['w','-','w','-','w','-','w','-','w','-'],
                ['-','w','-','w','-','w','-','w','-','w'],
                ['w','-','w','-','w','-','w','-','w','-'],
            ],
            activePlayer :'w',
        };
        this.handlePieceClick=this.handlePieceClick.bind(this);
        this.highlightPossibleMoves=this.highlightPossibleMoves.bind(this);
        this.findPossibleMoves=this.findPossibleMoves.bind(this);
    }

    handlePieceClick(e){
        var rowIndex = parseInt(e.target.attributes['data-row'].nodeValue);
        var cellIndex = parseInt(e.target.attributes['data-cell'].nodeValue);
       
        if(this.state.board[rowIndex][cellIndex].indexOf(this.state.activePlayer) > -1){
            this.findPossibleMoves(rowIndex,cellIndex);
            } 
        this.setState(this.state);
        } 
    highlightPossibleMoves(rowIndex,cellIndex,possibleMoves){
        // this.state.board = this.state.board.map((row) => row.map((cell)=> cell.replace('-','X')));
            var i=0;
            var j=0;
            var row=[];
            for(i;i<this.state.board.length;i++){
                for(j;j<possibleMoves.length;j++){
                    if(this.state.board[possibleMoves[j][0]][possibleMoves[j][1]]==='-' ){
                        this.state.board[possibleMoves[j][0]][possibleMoves[j][1]]='h';
                        // break;
                    }
                    // else if(this.state.board[possibleMoves[j][0]][possibleMoves[j][1]]==='b'){
                    //     this.state.board[possibleMoves[j+1][0]][possibleMoves[j+1][1]]='h';
                    // }
                }
            }
        }
    findPossibleMoves(rowIndex,cellIndex){
        var pos = [-1,1];//for left or right
        var possibleMoves = [];
        var colLeft = cellIndex-1;
        var colRight = cellIndex+1;
        var rowLeft = rowIndex ;
        var rowRight = rowIndex ;
        if(this.state.activePlayer==='w'){
            for(var i=0;i<=pos.length;i++){
                if(pos[i] === (-1)){
                    // for left direction
                        for(colLeft; colLeft>-1 && rowLeft>0; colLeft--){
                            rowLeft = rowLeft - 1;
                            possibleMoves.push([rowLeft,colLeft]);
                        }
                }else{
                    // for right direction
                    for(colRight; colRight<10 && rowRight>0; colRight++){
                        rowRight = rowRight - 1;
                        possibleMoves.push([rowRight,colRight]);
                        }
                }
            }
        }
        //for black
        else{
            for(i=0;i<=pos.length;i++){
                if(pos[i] === (-1)){
                    // for left direction
                        for(colLeft; colLeft>-1 && rowLeft<10; colLeft--){
                            rowLeft = rowLeft + 1;
                            possibleMoves.push([rowLeft,colLeft]);
                        }
                }else{
                    // for right direction
                    for(colRight; colRight<10 && rowRight<10; colRight++){
                        rowRight = rowRight + 1;
                        possibleMoves.push([rowRight,colRight]);
                    }
                }
            }
        }
        return possibleMoves;
    }
    render(){
        // {console.log(this.index)};
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