import React, { useEffect, useState } from "react";
import axios from "axios";
// import peter from "../image/myPhoto.JPG";
const About = () => {
  const [username] = useState([
    "peterjohnson1000",
    "PaulJoshi",
    "parvathiAmbareesh",
  ]);
  const [profilePic, setProfilePic] = useState([]);

  // const urls = {
  //   peter: "https://api.github.com/users/peterjohnson1000",
  //   paul: "https://api.github.com/users/PaulJoshi",
  //   parvathi: "https://api.github.com/users/parvathiAmbareesh",
  // };

  const peter = "https://api.github.com/users/peterjohnson1000";
  const paul = "https://api.github.com/users/PaulJoshi";
  const parvathi = "https://api.github.com/users/parvathiAmbareesh";

  const fetchDetails = async () => {
    const petersPic = axios.get(peter);
    const paulsPic = axios.get(paul);
    axios.all([petersPic, paulsPic]).then((values) => {
      // console.log(values);
      // console.log(values[0].data.avatar_url);
      setProfilePic(values);
    });
  };

  console.log(profilePic);

  // const fetchDetails = async (user) => {
  //   // console.log(user);
  //   const response = await axios.get(`https://api.github.com/users/${user}`);
  //   profilePic.push(response.data.avatar_url);
  //   // setProfilePic(...profilePic, response.data.avatar_url);
  // };

  useEffect(() => {
    // username.map((user) => {
    fetchDetails();
    // });
  }, []);

  // useEffect(() => {
  //   username.map((user) => {
  //     fetchDetails(user);
  //   });
  // }, []);

  // profilePic.map((pic) => {
  //   console.log(pic);
  // });

  return (
    <div className="container">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center mr-10">
          <img
            src="https://avatars.githubusercontent.com/u/75474828?v=4"
            className="w-48 p-2 mb-1 rounded-full bg-gradient-to-br from-purple-500 via-red-500 to-pink-500 ring-2 ring-white dark:ring-dPrimary hover:ring-black dark:hover:ring-white"
          />
          <p>Edna Lis Libini</p>
        </div>

        <div className="text-center mr-10">
          <img
            src="https://avatars.githubusercontent.com/u/75471400?v=4"
            className="w-48 p-2 mb-1 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-red-500 ring-2 ring-white dark:ring-dPrimary"
          />
          <p>Parvathi Ambareesh</p>
        </div>

        <div className="text-center mr-10">
          <img
            src="https://avatars.githubusercontent.com/u/49583322?v=4"
            className="w-48 p-2 mb-1 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-pink-500 ring-2 ring-white dark:ring-dPrimary"
          />
          <p>Paul Joshi</p>
        </div>

        <div className="text-center mr-10">
          <img
            src="https://avatars.githubusercontent.com/u/53271626?v=4"
            className="w-48 p-2 mb-1 rounded-full bg-gradient-to-br from-purple-500 via-red-500 to-pink-500 ring-2 ring-white dark:ring-dPrimary"
          />
          <p>Peter Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default About;
