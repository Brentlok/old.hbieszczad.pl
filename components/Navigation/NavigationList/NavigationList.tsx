import type { NextPage } from 'next';
import ToggleTheme from './ToggleTheme';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import NavigationHamburger from './NavigationHamburger';
import { useState } from 'react';

const list = ['Start', 'O mnie', 'Moje projekty', 'Kontakt'];

const NavigationList: NextPage = () => {
  const { width } = useWindowDimensions();
  const [slideOut, setSlideOut] = useState(false);

  const NavigationItems = list.map((li) => (
    <li
      key={li}
      className="font-medium text-xl cursor-pointer flex items-center"
    >
      <div className="lg:hidden w-2 h-5 gradient rounded-full mr-5 flex items-center justify-center">
        <div className="w-1 h-4 rounded-full bg-background"></div>
      </div>
      {li}
    </li>
  ));

  return width && width >= 1024 ? (
    <ul className="flex items-center justify-between w-1/2 max-w-lg">
      {NavigationItems}
      <ToggleTheme />
    </ul>
  ) : (
    <div className="w-1/2 fixed top-0 -right-1/2 pl-6">
      <input
        type="checkbox"
        checked={slideOut}
        onChange={() => {}}
        className="hidden peer"
      />
      <NavigationHamburger slideOut={slideOut} setSlideOut={setSlideOut} />
      <ul className="hamburger-navigation">
        {NavigationItems}
        <ToggleTheme />
      </ul>
    </div>
  );
};
export default NavigationList;
