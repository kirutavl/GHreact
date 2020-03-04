import React, { useState } from 'react';
import Codes from '../../components/Codes/Codes';
import Modal from '../../components/UI/Modal/Modal';

const CodesEditor = (props) => {
    const [state, setCodesState] = useState({
        codes: [
            {code:'code1',description:'description1'},
            {code:'code2',description:'description2'},
            {code:'code3',description:'description3'},
            {code:'code4',description:'description4'},
            {code:'code5',description:'description5'}
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

    const removeCodeHandler = (index) => {
        const updatedState = {...state};

        updatedState.codes.splice(index, 1);
        setCodesState(updatedState);
    };

    //let codes = state.codes

    return (
        <React.Fragment>
            <Modal visability={state.editPressed} editCloseHandler={editCloseHandler} />
            <Codes codes={state.codes} removeCodeHandler={removeCodeHandler} />
        </React.Fragment>
    );
};

export default CodesEditor;