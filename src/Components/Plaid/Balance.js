import React, {useContext} from 'react';
import {TokenContext} from '../../utils/TokenProvider';

function Balance({props}){
    const tokes = useContext(TokenContext);
    console.log(tokes)

    
    return(
        <div>
        {tokes.map((name) => (
            <li key={name.accesstoken}>
              {name.accesstoken} not herer
            </li>
          ))}
        </div>
    )
}

export default Balance;