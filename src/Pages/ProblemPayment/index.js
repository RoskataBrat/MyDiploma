import React, {useEffect} from "react";
import "../../styles/AboutUs.css"; // Import your CSS file
import about from "../../assets/images/aboutUs.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

const ProblemPayment = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="about-us">
      {/* Full-Width Banner Section */}
      <div className="banner relative w-full h-72 overflow-hidden">
        <img
          src={about}
          alt="Our Story"
          className="banner-image w-full h-full object-cover brightness-75"
        />
        <div className="banner-text absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          Проблем с плащането
        </div>
      </div>

      <div className="container px-4 py-8 space-y-12">
        {/* Mission Section */}
        <div className="mission text-center space-y-4">
          <h2 className="mission-title text-3xl font-bold text-gray-800">
            КЛИЕНТЪТ Е НАЙ-ВАЖЕН
          </h2>
          <p className="mission-description text-gray-600 max-w-2xl mx-auto">
            We’re a modern-day meat and seafood market on a mission to change the way people shop for and eat protein.
          </p>

          <div className="features flex flex-wrap justify-center gap-8 mt-8">
            <div className="feature flex flex-col items-center">
              <TbTruckDelivery size={100} color="orange" />
              <h3 className="feature-title text-xl font-semibold mt-2">Бърза доставка</h3>
            </div>
            <div className="feature flex flex-col items-center">
              <MdOutlineVerifiedUser size={100} color="green" />
              <h3 className="feature-title text-xl font-semibold mt-2">Високо качество</h3>
            </div>
            <div className="feature flex flex-col items-center">
              <AiOutlineGlobal size={100} color="darkblue" />
              <h3 className="feature-title text-xl font-semibold mt-2">Търговия по света</h3>
            </div>
          </div>
        </div>

        {/* Text with Image and Video */}
        <div className="text-with-image-video flex flex-col md:flex-row items-center gap-6">
          <div className="text-content md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">
              The Most Powerful Way to Connect with Every Audience
            </h3>
            <p className="text-gray-600">
              Whether you want to motivate or train team members, sell products or services, or entertain and inform subscribers, video does it best. And Brightcove provides you with the most reliable, scalable, and secure platform to deliver it on. Since 2004, our technology has helped customers all over the world harness the incredible power of video — we’ve even won two Technology and Engineering Emmy Awards for it.
            </p>
          </div>
          <div className="video-content md:w-1/2">
            <img
              src="https://nixanbal.com/media/k2/items/cache/07e866daa207cbbb799efea1f264fd34_L.jpg"
              alt="Video Thumbnail"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section text-center">
          <h2 className="subtitle text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="team-member text-center">
              <img
                src="/path-to-image1.jpg"
                alt="Team Member 1"
                className="team-image w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
              <h3 className="member-name text-xl font-semibold mt-4">John Doe</h3>
              <p className="member-role text-gray-600">CEO</p>
            </div>

            <div className="team-member text-center">
              <img
                src="/path-to-image2.jpg"
                alt="Team Member 2"
                className="team-image w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
              <h3 className="member-name text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="member-role text-gray-600">CTO</p>
            </div>

            <div className="team-member text-center">
              <img
                src="/path-to-image3.jpg"
                alt="Team Member 3"
                className="team-image w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
              <h3 className="member-name text-xl font-semibold mt-4">Alice Johnson</h3>
              <p className="member-role text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPayment;
