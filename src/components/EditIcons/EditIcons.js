import React from 'react';

const EditIcons = (props) => (
    <div>
        <button onClick = {props.editItem}>Edit</button>
        <button onClick = {props.removeItem}>Remove</button>
    </div>
);

export default EditIcons;