import React from 'react';
import EditIcons from '../../EditIcons/EditIcons';
import classes from './Code.module.css'

const Code = (props) => (
    <div className={classes.Code}>
        <div>{props.code}</div>
        <div>{props.description}</div>
        <EditIcons editItem={props.edit} removeItem={props.removed}/>
    </div>
);

export default Code;