import React from 'react';
import Modal from 'react-modal';
import ModalAddProduct from "./ModalAddProduct/ModalAddProduct";






export const ModalContainer = (props) => {
    switch (props.typeModal) {
        case 'ADD_PRODUCT':
            return(
                <Modal isOpen={props.showModal} ariaHideApp={false}>
                    <ModalAddProduct
                        addProduct={props.addProduct}
                        handleCloseModal={props.handleCloseModal}
                        {...props}
                    />
                </Modal>
            );

        default:
            return null;
    }
}




/*
export const Modal = ({match, history}, addProduct) => {

    console.log({match});
    return (
        <ReactModal
            isOpen='true'
            ariaHideApp={false}
        >
            <form>

            </form>
        </ReactModal>

    );
};
*/
/*
<div className={modal ? "modal" : undefined}>
            {modal && <Link to="/">Close</Link>}
            <form>

            </form>
        </div>
 */