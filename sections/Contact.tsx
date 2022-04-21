import type { NextPage } from 'next';
import Image from 'next/image';

type Icon = 'fiverr' | 'github' | 'mail';

interface IconProps {
  icon: Icon;
  action: () => Window | void | null;
}

const Icon: NextPage<IconProps> = ({ icon, action }) => (
  <li
    onClick={action}
    className="w-1/5 pb-1/5 rounded-full overflow-hidden relative cursor-pointer"
  >
    <div className="w-full h-full gradient-half absolute p-1 lg:p-2">
      <div className="w-full h-full bg-background-2 rounded-full flex justify-center items-center">
        <div className="w-2/3 h-2/3">
          <Image
            src={`/assets/contact_icons/${icon}.svg`}
            width={32}
            height={32}
            layout="responsive"
            alt={icon}
          />
        </div>
      </div>
    </div>
  </li>
);

const Contact: NextPage = () => (
  <footer
    className="w-full bg-background-2 py-6 flex flex-col items-center"
    id="contact"
  >
    <h1 className="font-bold text-3xl lg:text-6xl">Kontakt</h1>
    <ul className="flex justify-between w-1/2 my-8 max-w-lg">
      <Icon
        icon="github"
        action={() => window.open('https://github.com/Brentlok/')}
      />
      <Icon
        icon="fiverr"
        action={() => window.open('https://www.fiverr.com/brentlok')}
      />
      <Icon
        icon="mail"
        action={() =>
          window.location.assign('mailto:0hubert.bieszczad@gmail.com')
        }
      />
    </ul>
    <p className="text-xl lg:text-2xl">&copy; Hubert Bieszczad, 2022</p>
  </footer>
);

export default Contact;
