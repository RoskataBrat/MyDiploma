import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import axios from "axios";
import fiftyC from "../../assets/images/50-removebg-preview_2.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    try {
      const response = await axios.post("https://my-diploma-backend.vercel.app/api/subscribe", { email });

      if (response.status === 200) {
        setIsSuccess(true);
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear input field
      } else {
        console.error("Unexpected response:", response);
        setMessage("Failed to subscribe. Please try again.");
        setError(true);
      }
    } catch (err) {
      if (err.response) {
        console.error("Server responded with an error:", err.response.data);
        setMessage(err.response.data.message || "An error occurred. Please try again.");
      } else if (err.request) {
        console.error("No response from the server:", err.request);
        setMessage("Unable to connect to the server. Please try again later.");
      } else {
        console.error("Error setting up the request:", err.message);
        setMessage("An unexpected error occurred. Please try again.");
      }
      setError(true);
    }
  };

  return (
    <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {isSuccess ? (
              <div className="text-white">
                <h3>Благодарим ви, че се абонирахте!</h3>
                <p>Вашата 20% отстъпка ще бъде приложена автоматично.</p>
              </div>
            ) : (
              <>
                <p className="text-white mb-1">$20 отстъпка за вашата първа поръчка</p>
                <h3 className="text-white">Присъединете се към нашия бюлетин и получете...</h3>
                <form onSubmit={handleSubscribe}>
                  <div className="form-group d-flex align-items-center">
                    <IoMailOutline className="text-white mr-2" />
                    <input
                      type="email"
                      className="form-control mr-2"
                      placeholder="Твоят имейл адрес"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit">Абонирай се</Button>
                  </div>
                </form>
                {message && (
                  <p className={error ? "error-message text-danger" : "success-message text-success"}>
                    {message}
                  </p>
                )}
              </>
            )}
          </div>
          <div className="col-md-6">
            <img src={fiftyC} alt="20% Discount" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
