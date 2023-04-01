import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import myimage from "../assets/myimage.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={myimage} alt="Ajay" />
        <h2>Ajay Chirme</h2>
        <p>Practice makes man perfect , Do practice in your work.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>

          <a href="https://instagram.com" target={"blank"}>
            <AiFillInstagram />
          </a>

          <a href="https://github.com" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;