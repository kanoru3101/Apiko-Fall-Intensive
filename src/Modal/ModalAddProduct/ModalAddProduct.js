import React from "react";
import ModalAddProductView from "./ModalAddProductView";





class ModalAddProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
        };
    }

    handleCloseModal = (e) => {
        e.preventDefault();
        this.props.handleCloseModal(false);
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state);
    };


    handleChange = (e) => {
        switch (e.target.name) {
            case 'price':
                this.setState({
                    price: Number(e.target.value),
                });
                break;

            default:
                this.setState({
                    [e.target.name]: e.target.value,
                });
        }
    };


    render(){

        return(
            <ModalAddProductView
                {...this.state}
                handleCloseModal={this.handleCloseModal}
                handleChange={this.handleChange}
                onSubmit={this.onSubmit}
            />
        );
    }
}

export default ModalAddProduct