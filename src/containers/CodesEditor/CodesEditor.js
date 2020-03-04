import React, { useState } from 'react';
import Code from '../../components/Code/Code';
import Modal from '../../components/UI/Modal/Modal';

const CodesEditor = (props) => {
    const [state, setCodesState] = useState({
        codes: [
            {code:'code1',description:'description1'},
            {code:'code2',description:'description2'},
            {code:'code3',description:'description3'},
            {code:'code4',description:'description4'},
            {code:'code5',description:'description5'},
        ],
        totalPrice: 4,
        purchasable: false,
        editPressed: false
    });

    const editCloseHandler = () => {
        const updatedState = {...state};

        updatedState.editPressed = false;
        setCodesState(updatedState);
    };

    //let codes = state.codes

    return (
        <React.Fragment>
            <Modal visability={state.editPressed} editCloseHandler={editCloseHandler} />
            <Code ingridients={state.ingridients} />
        </React.Fragment>
    );
};

export default CodesEditor;