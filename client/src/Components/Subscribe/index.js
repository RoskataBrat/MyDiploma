import { IoMailOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fiftyC from "../../assets/images/50-removebg-preview_2.png";

const Subscribe = () =>{
    return(
        <>
         <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 отстъпка за вашата първа поръчка</p>
                            <h3 className="text-white">Присъединете се към нашия бюлетин и получете...</h3>
                            <p className="text-light">Присъединете се към нашия имейл абонамент сега, за да получите<br></br>
                            актуализации за промоции и купони.</p>

                            <form>
                                <IoMailOutline></IoMailOutline>
                                <input type="text" placeholder="Your Email Address"></input>
                                <Button>Subscribe</Button>
                            </form>

                        </div>
                        <div className="col-md-6">
                            <Link to={'/'}><img src={fiftyC}></img></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Subscribe;