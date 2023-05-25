import Modal from 'react-modal';
import React from 'react';
import { useState } from 'react';

const LocationModal = () => {
    const [modal, setmodal] = useState(false);

    const update = () => {
        setmodal(true);
    }

    return (
        <div>
            <button onClick={update} >click me </button>
            <Modal isOpen={modal} onRequestClose={modal} shouldCloseOnOverlayClick={modal}>
                <h2>Locations</h2>
                <h6>Nothing to display please go back</h6>
                <br></br>
                <button onClick={() => setmodal(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default LocationModal
