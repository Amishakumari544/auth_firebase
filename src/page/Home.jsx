import React from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
  
  return (
    <div>
      <div className="style-home">
        {props.name ? null : (
          <>
            <h1 className="text-white m-2 text-lg">
              <Link to="/login">Login</Link>
            </h1>
            <br />
            <h1 className="text-white m-2 text-lg">
              <Link to="/signup">Signup</Link>
            </h1>
          </>
        )}
      </div>
      <h2 className="text-white text-xl text-center mt-4 mb-2">
        {props.name
          ? `Welcome - ${props.name}, Hello World!`
          : "You are not Logged in, Login please"}
      </h2>
    </div>
  );
};

export default Home;
