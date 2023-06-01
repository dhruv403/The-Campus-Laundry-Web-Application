import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component { 
    state = {
        count: 0,
    };

    handleIncrement = () => {
        if(this.state.count<20) this.setState({ count: this.state.count+1 })
    };
    handleDecrement = () => {
        if(this.state.count > 0) this.setState({ count: this.state.count-1 })
    };

    render() { 
        return (
            <div className="boxx">
                <div className="box1">
                    <button onClick={this.handleDecrement} className='btnn btn-secondary btn-sm'> - </button>
                </div>
                <div className="box1">
                    <span> {this.formatCount()} </span>
                </div>
                <div className="box1">
                    <button onClick={this.handleIncrement} className='btnn btn-secondary btn-sm'> + </button>
                </div>
            </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count;
    } 
}
 
export default Counter;
