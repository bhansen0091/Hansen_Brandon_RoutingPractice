import Hello from './Hello';
import Number from './Number';
import React from 'react';

const Rerouter = ({input}) => {
    return(
        <div>
            {
                isNaN(input) ? 
                    <Hello str = {input} /> : 
                    <Number num = {input} />
            }
        </div>
    )
}

export default Rerouter;