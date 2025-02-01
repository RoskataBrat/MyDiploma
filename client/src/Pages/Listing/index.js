import Sidebar from "../../Components/Sidebar"
import Button from "react-bootstrap/esm/Button";
import poster from "../../assets/images/header_poster.jpg"
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { BsGridFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ProductItem2 from "../../Components/ProductItem2/ProductItem2.js";
import { useState } from "react";
import Pagination from 'react-bootstrap/Pagination';


const Listing  = () =>{

    const [anchorE1, setAnchorE1] = useState(null);
    const [productView, setProductView] = useState('four')
    const openDropdown = Boolean(anchorE1);
    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    };
    const handleClose = () =>{
        setAnchorE1(null);
    };

    return(
        <>
            <section className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar></Sidebar>
                        <div className="content-right">
                            <img src={poster} className="header_poster"></img>
                        </div>

                        <div className="showBy d-flex align-items-center">
                            <div className="d-flex btnWrapper">
                                <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><IoIosMenu></IoIosMenu></Button>
                                <Button className={productView==='two' && 'act'} onClick={()=>setProductView('two')}><TbGridDots></TbGridDots></Button>
                                <Button className={productView==='three' && 'act'} onClick={()=>setProductView('three')}><BsGridFill></BsGridFill></Button>
                                <Button className={productView==='four' && 'act'} onClick={()=>setProductView('four')}><TfiLayoutGrid4Alt></TfiLayoutGrid4Alt></Button>
                            </div>

                            <div className="ml-auto showByFilter">
                                <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                    <Dropdown.ItemText></Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>

                        <div className="productListing2">
                            <div className="productRow">
                                <ProductItem2 itemView={productView}></ProductItem2>
                                <br></br>
                                <ProductItem2 itemView={productView}></ProductItem2>
                            </div>
                        </div>
                        <div className="productListing2">
                            <div className="productRow">
                                <ProductItem2 itemView={productView}></ProductItem2>
                                <br></br>
                                <ProductItem2 itemView={productView}></ProductItem2>
                            </div>
                        </div>
                        <div className="productListing2">
                            <div className="productRow">
                                <ProductItem2 itemView={productView}></ProductItem2>
                                <br></br>
                                <ProductItem2 itemView={productView}></ProductItem2>
                            </div>
                        </div>
                        <div className="productListing2">
                            <div className="productRow">
                                <ProductItem2 itemView={productView}></ProductItem2>
                                <br></br>
                                <ProductItem2 itemView={productView}></ProductItem2>
                            </div>
                        </div>

                        <div className="pagination d-flex align-items-center justify-content-center mt-5">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;