import React from 'react';
import Code from './Code/Code';



const Codes = (props) => {

    return props.codes.map((item, index) => {
        return <Code
                code={item.code} 
                description={item.description}
                key={'code'+index}
                edit={() => props.editCodeHandler(index)}
                removed={() => props.removeCodeHandler(index)}
            />

    });
}

export default Codes;