import React, { memo } from 'react';

import classes from './Modal.module.css';


const Modal = (props) => {

    const ModalContent = (
        <div className={classes.Modal}>{props.children}</div>);


    return props.visability ? ModalContent : null;
};

export default memo(Modal);