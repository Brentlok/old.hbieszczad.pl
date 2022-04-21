import type { NextPage } from 'next';
import NavigationInfo from './NavigationInfo';
import NavigationList from './NavigationList';

const Navigation: NextPage = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center p-4 top-0 left-0 bg-background z-50">
      <NavigationInfo />
      <NavigationList />
    </nav>
  );
};

export default Navigation;
