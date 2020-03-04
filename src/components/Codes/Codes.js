import React from 'react';
import Code from './Code/Code';



const Codes = (props) => {

    return props.codes.map((item, index) => {
        return <Code
                code={item.code} 
                descrition={item.descrition}
                key={index}
                removed={() => props.removeCodeHandler(index)}
            />

    });
}

export default Codes;