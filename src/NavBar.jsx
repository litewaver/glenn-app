

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Glenn Coco</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-green-300">Home</a></li>
          <li><a href="/reels" className="text-white hover:text-gray-300">Reels</a></li>
          <li><a href="/services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="/booking" className="text-white hover:text-gray-300">Booking</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;