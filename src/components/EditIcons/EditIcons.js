import React from 'react';

const EditIcons = (props) => (
    <div>
        <div>Edit</div>
        <button onClick = {props.removeItem}>Remove</button>
    </div>
);

export default EditIcons;