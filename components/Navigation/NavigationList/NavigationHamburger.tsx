import type { NextPage } from 'next';
import type { Dispatch, SetStateAction } from 'react';

interface HamburgerProps {
  slideOut: boolean;
  setSlideOut: Dispatch<SetStateAction<boolean>>;
}

const NavigationHamburger: NextPage<HamburgerProps> = ({
  slideOut,
  setSlideOut,
}) => {
  return (
    <div className="w-full h-14 translate-y-4 -translate-x-24 peer-checked:-translate-x-full transition-transform duration-500 group">
      <span
        className="relative w-14 h-14 cursor-pointer block"
        onClick={() => setSlideOut(!slideOut)}
      >
        <input
          type="checkbox"
          checked={slideOut}
          onChange={() => {}}
          className="hidden peer"
        />
        <span className="group-hover:scale-110 hamburger top-6 before:hamburger-before after:hamburger-after peer-checked:bg-transparent"></span>
      </span>
    </div>
  );
};

export default NavigationHamburger;
