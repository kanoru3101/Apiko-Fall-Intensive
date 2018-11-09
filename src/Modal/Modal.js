import React from 'react';
import Modal from 'react-modal';
import ModalAddProduct from "./ModalAddProduct/ModalAddProduct";
import CartContainer from "../scenes/Cart/CartContainer";
import Button from "@material-ui/core/Button/Button";






 class ModalContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: this.props.showModal,
            typeModal: this.props.typeModal,
        };
        this.goBack = this.goBack.bind(this);
    }

     goBack(){
         this.props.history.goBack();
     }

    changeShowModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });

 };

    render(){

        switch (this.state.typeModal) {
            case 'ADD_PRODUCT':
                return(
                    <Modal isOpen={this.state.showModal} ariaHideApp={false}>
                        <ModalAddProduct
                            addProduct={this.props.addProduct}
                            handleCloseModal={this.props.handleCloseModal}
                            {...this.props}
                        />
                    </Modal>
                );
                break;

            case 'CART':
                return(
                    <Modal isOpen={this.state.showModal} ariaHideApp={false}>
                        <CartContainer/>
                        <Button onClick={this.goBack}>Close</Button>
                    </Modal>
                );
                break;
            default:
                return null;
        }
    }

}

export default ModalContainer


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