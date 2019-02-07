import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            {id: 1 , value: 4 },
            {id: 2 , value: 0 },
            {id: 3 , value: 0 },
            {id: 4 , value: 0 },
            {id: 5 , value: 5},
        ]      
    }
     
    render() { 
        return ( 
            <React.Fragment>
                <ul>
                {this.state.counters.map( 
                    counter => <Counter key={counter.id} value = {counter.value} > <h2> counter  {counter.id}</h2></Counter>)}
                            {/* add counter id and the value to the list of counter tags  */}
                </ul>
                    
                
            </React.Fragment>
         );
    }
}
 
export default Counters;