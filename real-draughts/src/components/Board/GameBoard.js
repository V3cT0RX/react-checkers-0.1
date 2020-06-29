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
                ['b','-','b','-','b','-','b','-','b','-'],
                ['-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-'],
                ['-','w','-','w','-','w','-','w','-','w'],
                ['w','-','w','-','w','-','w','-','w','-'],
                ['-','w','-','w','-','w','-','w','-','w'],
                ['w','-','w','-','w','-','w','-','w','-'],
            ],
            activePlayer :'w',
        };
        this.handlePieceClick=this.handlePieceClick.bind(this);
        this.highlightPossibleMoves=this.highlightPossibleMoves.bind(this);
    }

    handlePieceClick(e){
        var rowIndex = parseInt(e.target.attributes['data-row'].nodeValue);
        var cellIndex = parseInt(e.target.attributes['data-cell'].nodeValue);
        var possibleMoves = [];
        var col = cellIndex-1;
        var col1 = cellIndex+1;
        var row = rowIndex ;
        var row1 = rowIndex ;
        var pos = [-1,1];
        var i = 0;
        if(this.state.board[rowIndex][cellIndex].indexOf(this.state.activePlayer) > -1){
            for(i=0;i<=pos.length;i++){
                if(pos[i] === (-1)){
                        for(col; col>-1 && row>0; col--){
                            row = row - 1;
                            // console.log(row, col);
                            possibleMoves.push([row,col]);
                        }console.log('***');
                }else{
                    for(col1; col1<10 && row1>0; col1++){
                        row1 = row1 - 1;
                        // console.log(row1, col1);
                        possibleMoves.push([row1,col1])
                    }
                }
            }
            this.highlightPossibleMoves(possibleMoves);
        } 
    }
    highlightPossibleMoves(possibleMoves){
        var i=0;
        for(i=0;i<possibleMoves.length;i++){
               
        }
        console.log(this.state.board);
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