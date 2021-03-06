import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function SocialNetworks() {
  return (
    <footer>
      <nav>
        <a
          href="https://br.linkedin.com/in/michaelcaxias"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-right"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/michaelcaxias/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
        >
          <BsGithub />
        </a>
      </nav>
      <p>2021 Ⓒ Desenvolvido por Michael Caxias</p>
    </footer>
  );
}
