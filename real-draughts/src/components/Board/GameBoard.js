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
                ['-','r','-','r','-','r','-','r','-','r'],
                ['r','-','r','-','r','-','r','-','r','-'],
                ['-','r','-','r','-','r','-','r','-','r'],
                ['r','-','r','-','r','-','r','-','r','-'],
            ]
        };
    }

    render(){
        {console.log(this.state)};
        return(
            <div className='container'>
                
                <div className={'board '+this.state.activePlayer}>
					{
						this.state.board.map(function(row, index) {
							return (<Row rowArr={row}  rowIndex={index}/>)
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
							<Cell rowIndex={this.props.rowIndex} index={index} cell={cell} handlePieceClick={this.props.handlePieceClick} />
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
				<div onClick={this.props.handlePieceClick} data-row={this.props.rowIndex} data-cell={this.props.index} className="gamePiece"></div>
			</div>
		)
	}
});

export default GameBoard;