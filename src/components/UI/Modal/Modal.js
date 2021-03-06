import React, { memo } from 'react';

import classes from './Modal.module.css';


const Modal = (props) => {

    const ModalContent = (
        <div>
            <div className={classes.Modal}>{props.children}</div>
            <div className={classes.Overlay}></div>
        </div>);


    return props.visability ? ModalContent : null;
};

export default memo(Modal);