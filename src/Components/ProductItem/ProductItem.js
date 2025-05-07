import { TfiFullscreen } from "react-icons/tfi";
import Button from "react-bootstrap/esm/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import ginsi from "../../assets/images/ginsi.jpg";
import ProductModal from "../ProductModal";
import { useState } from "react";

const ProductItem = () =>{

    const [isOpenProductModal,setisOpenProductModal] = useState(false);

    const viewProductDetails=(id)=>{
        setisOpenProductModal(true);
    }

    const closeProductModal=()=>{
        setisOpenProductModal(false);
    }

    return(
        <>
        <div className="item productItem">
            <div className="imgWrapper">
                <img src={ginsi} className="w-100"></img>

                    <span className="badge badge-primary">28%</span>

                    <div className="actions">
                        <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen></TfiFullscreen></Button>
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

        {
            isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal}></ProductModal>
        }

        {/*<ProductModal></ProductModal>*/}

        </>

        
    )
}

export default ProductItem;