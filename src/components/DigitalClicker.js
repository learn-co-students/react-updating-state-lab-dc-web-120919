// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state ={
            timesClicked: 0

        }

    }

    handleClick = () =>{
        // debugger
      
        this.setState(old =>({
            timesClicked: ++old.timesClicked
        }))
    }





    render() { 
        console.log(this.state)
        return ( 
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>


         );
    }
}
 
export default DigitalClicker;