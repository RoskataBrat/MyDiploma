import { TfiFullscreen } from "react-icons/tfi";
import Button from "react-bootstrap/esm/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import ginsi from "../../assets/images/ginsi.jpg";
import ProductModal from "../ProductModal";
import {useContext, useState} from 'react';
import {MyContext} from '../../App';

const ProductItem2 = (props) =>{

    const context = useContext(MyContext);
    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);
    }

    return(
        <>
    <div className={'ProductItem2 ${props.itemView}'}> 
        <div className="product-list">
            <div className="item productItem2">
                <div className="imgWrapper">
                    <img src={ginsi} className="w-100"></img>

                        <span className="badge badge-primary">28%</span>

                        <div className="actions">
                            <Button><TfiFullscreen></TfiFullscreen></Button>
                            <Button><IoMdHeartEmpty style={{fontSize:'20px'}}></IoMdHeartEmpty></Button>
                        </div>

                </div>
                <div className="info">
                    <h4>Casual Индиго Джинси</h4>
                    <span className="text-success">In Stock</span>
                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger ml-2">$14.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <ProductModal></ProductModal>

        </>

        
    )
}

export default ProductItem2;