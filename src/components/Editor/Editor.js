import React from 'react';

const Editor = (props) => (
    <div>
        <p>Code:</p>
        <input 
                type='text' 
                value={props.code}
                onChange={props.codeChanged}  />

        <p>Description:</p>
        <input 
                type='text' 
                value={props.description}
                onChange={props.descriptionChanged}  />

        <button onClick={props.save}>Save</button>
    </div>
);

export default Editor;