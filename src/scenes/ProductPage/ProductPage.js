import React, {Component} from 'react';
import s from './ProductPage.module.css';
import {ProductComponent} from "../../components/ProductComponent/ProductComponent";
import {routes} from "../../routes";


export class ProductPage extends Component {
    constructor(props) {
        super(props);
        const {match: {params}, productList} = props;
        const product = productList.find(({id}) => Number(params.id) === id);
        this.state = {
            ...product,
        };
    }

    backToAllProducts = () => {
        this.props.history.push(routes.home);
    };

    render(){
        return (
            <div>
                <ProductPageContainer
                    product={this.state}
                    backToAllProducts={this.backToAllProducts}/>
            </div>
        );
    }
}



export const ProductPageContainer = ({product: {id, title, description, price, image}, backToAllProducts}) => (

    <div className={s.container}>
        <div className={s.content}>
            <div className={s.imageStyle}>
                <img src={image} title={title}/>
            </div>
            <div>
                <div className={s.title}>
                    <h2>{title}</h2>
                </div>
                <div className={s.price}>
                    <h4><p>Ціна: {price} UAH</p> </h4>
                </div>
                <div className={s.description}>
                    <p>Опис:</p>
                    <p>{description}</p>
                </div>
                <div className={s.divBtn}>
                    <button onClick={() => backToAllProducts()}>Other products</button>
                </div>
            </div>
        </div>



    </div>
);


