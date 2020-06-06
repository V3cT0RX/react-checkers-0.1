import React from 'react';
import RenderBoard from './Renderboard';
class Board extends React.Component {
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

    
export default Board;


   