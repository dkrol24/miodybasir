import React from "react";
import Image from "next/image";
import ulo from "../public/images/honey7.jpg";
import NextLink from "next/link";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { contactAnimation } from "./animation";
const Uloterapia = () => {
  const [element, controls] = useScroll();
  return (
    <div className="app__ulo-container">
      <div className="app__ulo-text" ref={element}>
        <motion.h1
          variants={contactAnimation}
          animate={controls}
          transition={{
            delay: 0.1,
            type: "tween",
            duration: 0.9,
          }}
          className="banner-h1"
        >
          Uloterapia
        </motion.h1>
        <motion.p
          variants={contactAnimation}
          animate={controls}
          transition={{
            delay: 0.3,
            type: "tween",
            duration: 1.1,
          }}
          className="grey-ptext"
        >
          <span className="yellow-span">Apiinhalacja</span>, potocznie nazywana
          uloterapią, jest jednym z elementów stosowanej w medycynie naturalnej
          tzw. Apiterapii, czyli leczenia produktami pszczelego pochodzenia.
        </motion.p>
        <motion.p
          variants={contactAnimation}
          animate={controls}
          transition={{
            delay: 0.5,
            type: "tween",
            duration: 1.3,
          }}
          className="grey-ptext"
        >
          <span className="yellow-span">Uloterapia</span> (apiinhalacja), to nic
          innego jak oddychanie powietrzem z wnętrza ula. Tych z bogatą
          wyobraźnią uspokajamy - nie musicie w tym celu przytulać się do
          pszczół. Domek, w którym odbywa się apiinhalacja, został skonstruowany
          tak, aby był bezpieczny zarówno dla dzieci jak i dorosłych. Pszczoły
          nie mają bezpośredniego kontaktu z człowiekiem, a więc nie musimy się
          martwić ani koniecznością podtrzymywania rozmowy, ani groźbą
          ewentualnego użądlenia w przypadku odmiennych poglądów.
        </motion.p>
        <motion.button
          variants={contactAnimation}
          animate={controls}
          transition={{
            delay: 0.7,
            type: "tween",
            duration: 1.5,
          }}
          className="yellow-button"
        >
          <NextLink href="/uloterapia" passHref>
            <p>Zobacz więcej</p>
          </NextLink>
        </motion.button>
      </div>
      <div className="app__ulo-image">
        <Image src={ulo}></Image>
      </div>
    </div>
  );
};

export default Uloterapia;
