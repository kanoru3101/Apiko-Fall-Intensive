import React, {Component} from 'react';
import {productPropTypes} from "../../common/propTypes";
import s from './ProductComponent.module.css';
import {routes} from "../../routes";


export const ProductComponent = ({id, title, description, image, price, onChange, onSubmit, deleteProduct}) => (

  <form onSubmit={onSubmit} className={s.formStyle}>
    <div className={s.container}>
        <div className={s.input}>
            <input name='title' value={title} onChange={onChange('title')}/>
        </div>
        <div>
            <textarea name='description' value={description} onChange={onChange('description')}/>
        </div>
        <div >
            <input className={s.input} name='image' value={image} onChange={onChange('image')}/>
        </div>
        <div>
            <input name='price' value={price} onChange={onChange('price')}/>
        </div>
        <div>
            <button  type='submit' >Save</button>
        </div>
        <div>
            <button  type='button' onClick={() => deleteProduct(id)}>Delete</button>
        </div>


    </div>
  </form>
);


export class ProductContainer extends Component{
    constructor(props){
        super(props);
        const { match: {params}, productList } = props;
        const product = productList.find(({id}) => Number(params.id) === id);
        this.state = {
            ...product
        };
    }

    onChange = (item) => ({target: {value}}) => {
        this.setState({
            [item]: value,
        })
    };


    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin);
    };


    deleteProduct = () =>{
        this.props.deleteProduct(this.state);
        this.props.history.push(routes.admin);
    }


    render(){
        return <ProductComponent
            {...this.state}

            onChange={this.onChange}
            onSubmit={this.onSubmit}
            deleteProduct={this.deleteProduct}
        />
    }
}


ProductComponent.propTypes = productPropTypes;

