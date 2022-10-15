import React from "react";
import Image from "next/image";
import ulo from "../public/images/honey7.jpg";

import NextLink from "next/link";
const Uloterapia = () => {
  return (
    <div className="app__ulo-container">
      <div className="app__ulo-text">
        <h1>Uloterapia</h1>
        <p>
          <span className="yellow-span">Apiinhalacja</span>, potocznie nazywana
          uloterapią, jest jednym z elementów stosowanej w medycynie naturalnej
          tzw. Apiterapii, czyli leczenia produktami pszczelego pochodzenia.
        </p>
        <p>
          <span className="yellow-span">Uloterapia</span> (apiinhalacja), to nic
          innego jak oddychanie powietrzem z wnętrza ula. Tych z bogatą
          wyobraźnią uspokajamy - nie musicie w tym celu przytulać się do
          pszczół. Domek, w którym odbywa się apiinhalacja, został skonstruowany
          tak, aby był bezpieczny zarówno dla dzieci jak i dorosłych. Pszczoły
          nie mają bezpośredniego kontaktu z człowiekiem, a więc nie musimy się
          martwić ani koniecznością podtrzymywania rozmowy, ani groźbą
          ewentualnego użądlenia w przypadku odmiennych poglądów.
        </p>
        <button className="yellow-button">
          <NextLink href="/uloterapia" passHref>
            <p>Zobacz więcej</p>
          </NextLink>
        </button>
      </div>
      <div className="app__ulo-image">
        <Image src={ulo}></Image>
      </div>
    </div>
  );
};

export default Uloterapia;
