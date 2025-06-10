import Hero from './Hero';
import logo from '../assets/logo.png'; // use a transparent PNG if possible

const Home = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px', // increase this to space out logos more
        backgroundPosition: 'top left',
      }}
    >
      {/* Gray overlay */}
      <div className="absolute inset-0 bg-gray-400/90 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 lg:w-[40%] mx-auto">
        <Hero />
      </div>
    </div>
  );
};

export default Home;

