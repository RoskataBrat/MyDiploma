import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MyContext } from "../../App";
import original_Logo from "../../assets/images/logo.png";
import GoogleImg from "../../assets/images/google-logo.webp";
import { Button } from "react-bootstrap";
import { signin } from "../../api"; // Import API call

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState(""); // For success/error messages
    const [messageType, setMessageType] = useState(""); // Success or error indicator
    const context = useContext(MyContext); // Access global context
    const navigate = useNavigate();

    useEffect(() => {
        context.setisHeaderFooterShow(false); // Hide header/footer
    }, [context]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Reset message state
            setMessage("");
            setMessageType("");

            // Call API
            const response = await signin(formData);
            const { token, user } = response.data;

            // Save token and user data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            // Update global context
            context.setIsLogin(true);
            context.setUser(user);

            // Redirect based on role
            if (user.isAdmin) {
                setMessage("Admin login successful!");
                setMessageType("success");
                window.location.href = "http://localhost:3001/dashboard"; // Redirect to admin dashboard
            } else {
                setMessage("Sign in successful!");
                setMessageType("success");
                navigate("/"); // Redirect to the default home page
            }
        } catch (err) {
            // Handle errors
            setMessage(err.response?.data?.message || "An error occurred during Sign In.");
            setMessageType("error");
        }
    };

    return (
        <section className="section signInPage">
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center signInLogo">
                        <img className="logoWrapper" src={original_Logo} alt="Logo" />
                    </div>
                    <form className="mt-3" onSubmit={handleSubmit}>
                        <h2 className="mb-4">Влизане</h2>

                        {/* Display messages */}
                        {message && (
                            <div
                                className={`alert ${
                                    messageType === "success" ? "alert-success" : "alert-danger"
                                }`}
                            >
                                {message}
                            </div>
                        )}

                        <div className="form-group">
                            <input
                                placeholder="Email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-100"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder="Password"
                                type="password"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                className="w-100"
                                required
                            />
                        </div>

                        {/*<a className="border-effect cursor">Забравена парола?</a>*/}

                        <div className="d-flex align-items-center mt-3 mb-3">
                            <Button type="submit" className="btn-blue w-100 btn-lg btn-big">
                                Влез
                            </Button>
                        </div>

                        <p className="txt">
                            Нямаш регистрация? {" "}
                            <Link to="/signUp" className="border-effect">
                                Регистрирай се
                            </Link>
                        </p>

                        {!<h6 className="mt-3 text-center font-weight-bold">
                            Or continue with social account
                        </h6>}
                        {!<Button className="loginWithGoogle mt-3" variant="outlined">
                            <img src={GoogleImg} alt="Google Logo" /> Sign In with Google
                        </Button>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
