import React from 'react';

class RenderBoard extends React.Component {
    constructor(props){
        super(props);
        this.renderLabels = this.renderLabels.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
        // var display = 'block';
    };
    // var board = document.getElementById('boardOuter');
    // var numContainer = document.getElementById('numberContainer');
    // var letterContainer = document.getElementById('letterContainer');
    
    renderLabels = () => {
        var numContainer = document.getElementById('numberContainer');
        var letterContainer = document.getElementById('letterContainer');
        this.letters.forEach((x,i)=>{
          var el = document.createElement('DIV')
          var el2 = document.createElement('DIV')
          el.innerText = x
          el.className = 'label'
          el2.innerText = this.numbers[i]
          el2.className = 'label'
          numContainer.appendChild(el2)
          letterContainer.appendChild(el)
        })
      }
    
    renderBoard = (useLabels) => {
      
        if (useLabels){
          this.renderLabels() 
        }
       
        for (var i = 0; i < this.letters.length; ++i){
          var row = document.createElement('DIV')
          row.className = 'row'
          row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'; 
          for (var j = 0; j < this.letters.length; ++j){
            var square = document.createElement('DIV')
            square.className = 'square'
            square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
            row.appendChild(square)
          }
          var board = document.getElementById('boardOuter');
          console.log(board);
          console.log(row);
          board.appendChild(row)
        }   
       }
       render(){
        return(
            <div id='boardOuter'>
               
                <div id="numberContainer">  
                </div>
                <div id="letterContainer">  
                </div>
                <div id='boardInner'>
                    <RenderBoard />
                </div>
            </div>
            
        );
    }
}

export default RenderBoard;
