import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="registerWrapper">
      <div className="registerContainer">
        <div className="imageSlide">
          <img
            src="https://images.pexels.com/photos/3228812/pexels-photo-3228812.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="formSlide">
          <h1>Valerian Chat</h1>

          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              value={username}
              placeholder="Create a username"
              id=""
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="email"
              name=""
              placeholder="Enter your email"
              value={email}
              id=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="fileUpload">
              <BsCloudUpload className="upload" />
              <input
                type="file"
                name=""
                value={profile}
                placeholder="Your profile"
                id=""
                onChange={(e) => {
                  setProfile(e.target.value);
                }}
              />
              <p>
                Recommendation: Use high-quality JPG, JPEG, SVG or PNG as your
                profile
              </p>
            </div>

            <input
              type="password"
              name=""
              value={password}
              placeholder="Create a secure password"
              id=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit" onClick={handleSubmit}>
              Register
            </button>
          </form>

          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <div className="form__slideOptions">
              <span>Already have an account ? Login</span>
              <FiArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
