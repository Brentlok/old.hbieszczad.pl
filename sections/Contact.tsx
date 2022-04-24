import type { NextPage } from 'next';

type Icon = 'fiverr' | 'github' | 'mail';

interface IconProps {
  icon: Icon;
  link: string;
}

const Icon: NextPage<IconProps> = ({ icon, link }) => (
  <li className="w-1/5 pb-1/5 rounded-full overflow-hidden relative cursor-pointer">
    <a target="_blank" href={link} rel="noreferrer">
      <div className="w-full h-full gradient-half absolute p-1 lg:p-2">
        <div className="w-full h-full bg-background-2 rounded-full flex justify-center items-center">
          <img
            className="w-2/3 h-2/3"
            src={`/assets/contact_icons/${icon}.svg`}
            alt={icon}
          />
        </div>
      </div>
    </a>
  </li>
);

const Contact: NextPage = () => (
  <footer
    className="w-full bg-background-2 py-6 flex flex-col items-center"
    id="contact"
  >
    <h1 className="font-bold text-3xl lg:text-6xl">Kontakt</h1>
    <ul className="flex justify-between w-1/2 my-8 max-w-lg">
      <Icon icon="github" link="https://github.com/Brentlok/" />
      <Icon icon="fiverr" link="https://www.fiverr.com/brentlok" />
      <Icon icon="mail" link="mailto:0hubert.bieszczad@gmail.com" />
    </ul>
    <p className="text-xl lg:text-2xl">&copy; Hubert Bieszczad, 2022</p>
  </footer>
);

export default Contact;
