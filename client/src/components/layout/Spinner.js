import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return(
        <div>
           <img
                src={spinner}
                style={{width: '50px', margin: 'auto', display: 'block'}}
                alt='loading...'
            /> 
        </div>
    );
}
export default Spinner;