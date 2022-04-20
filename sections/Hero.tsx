import type { NextPage } from 'next';
import Image from 'next/image';

const HeroImage: NextPage = () => (
  <div className="w-full lg:w-2/5">
    <Image
      src="/assets/hero.svg"
      className="image"
      alt="hero"
      layout="responsive"
      width={500}
      height={371}
    />
  </div>
);

const HeroMore: NextPage = () => (
  <div className="w-full flex flex-col items-center absolute bottom-8">
    <p className="text-xl lg:text-3xl">Dowiedz się więcej!</p>
    <div className="w-11 h-24 gradient rounded-full mt-6 flex items-center justify-center relative">
      <div className="w-5 h-5 bg-primary absolute rounded-full top-6"></div>
      <div className="w-8 h-21 bg-background rounded-full"></div>
    </div>
  </div>
);

const HeroWave: NextPage = () => (
  <div className="hidden lg:block absolute bottom-0 left-0 w-full overflow-hidden">
    <svg
      className="relative block w-wave h-96 -z-10"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="fill-background-2"
      ></path>
    </svg>
  </div>
);

const Hero: NextPage = () => {
  return (
    <section className="relative h-screen flex justify-center items-center">
      <div className="w-full flex flex-col-reverse lg:flex-row px-14 justify-between">
        <p className="w-full text-2xl text-center my-6 lg:text-left lg:my-0 lg:mt-10 lg:w-2/3 lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Zajmuję się tworzeniem aplikacji webowych i mobilnych
        </p>
        <HeroImage />
      </div>
      <HeroWave />
      <HeroMore />
    </section>
  );
};

export default Hero;
