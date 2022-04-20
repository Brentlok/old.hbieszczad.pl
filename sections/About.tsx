import type { NextPage } from 'next';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <section className="flex items-center flex-col w-5/6 m-auto py-16">
      <h1 className="font-bold text-3xl lg:text-6xl">O mnie</h1>
      <div className="flex mt-16">
        <p className="w-full px-4 text-2xl tracking-wider lg:text-3xl lg:w-2/3 lg:px-0 lg:pr-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          tristique arcu, a aliquam lorem. Donec in enim malesuada metus rhoncus
          porttitor. Suspendisse potenti. Vivamus sollicitudin lobortis
          volutpat. Cras accumsan velit non varius mattis.
        </p>
        <div className="hidden lg:block w-1/4">
          <Image
            src="/assets/about.svg"
            width={300}
            height={479}
            layout="responsive"
            alt="about"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
