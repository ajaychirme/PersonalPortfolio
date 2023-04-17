import React from "react";
import { animate, motion } from "framer-motion";
import { useRef } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/myimage.jpg";

const Home = () => {
  const clientCount = useRef(null);

  const projectCount = useRef(null);

  const animationClientCount = () => {
    animate(0, 2, {
      duration: 1,
      onUpdate: (v) => {
        clientCount.current.textContent = v.toFixed(1);
      },
    });
  };

  const animationProjectDone = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => {
        projectCount.current.textContent = v.toFixed(1);
      },
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Ajay Chirme 11
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              // //wrappercls will be used in adding css.
              wrapperClassname: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:ajaychirme84@gmail.com">Hire me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {
               
                  <motion.span
                  whileInView={animationClientCount}
                  ref={clientCount}
                ></motion.span>
                
              }
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                + <motion.span whileInView={animationProjectDone} ref={projectCount}></motion.span>
                
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>ajaychirme84@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Ajay" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
