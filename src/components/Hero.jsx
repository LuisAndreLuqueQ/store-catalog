import desktopHero from "../assets/desktop-hero.jpg";
import mobileHero from "../assets/mobile-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden">
      <img src={mobileHero} alt="" className="absolute inset-0 w-full h-full object-cover md:hidden" />
      <img src={desktopHero} alt="" className="absolute inset-0 w-full h-full object-cover hidden md:block" />
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-32 max-w-2xl text-center md:text-left">
        <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
          New Collection 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Redefine Your <br />
          <span className="text-blue-500">Everyday Style</span>
        </h1>
        <p className="text-gray-300 text-base max-w-md mb-8 mx-auto md:mx-0">
          Explore our curated selection of premium electronics and high-fashion
          apparel tailored for the modern lifestyle.
        </p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors">
            Shop Collection
          </button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-gray-900 transition-colors">
            View Deals
          </button>
        </div>
      </div>
    </section>
  );
};
