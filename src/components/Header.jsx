import { FaMoneyBillWave } from 'react-icons/fa'; // Importing a currency icon

function Header() {
    return (
      <header className="backdrop-blur-md shadow-lg py-4 fixed top-0 w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white z-10">
        
          <div className="flex items-center justify-center">
            <FaMoneyBillWave className="text-3xl mr-2 animate-bounce"/>
            <h1 className="text-xl md:text-2xl font-bold">Currency Converter</h1>
          </div>
          {/* <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="text-white font-medium hover:underline">Home</a>
              </li>
              <li>
                <a href="#features" className="text-white font-medium hover:underline">Features</a>
              </li>
              <li>
                <a href="#contact" className="text-white font-medium hover:underline">Contact</a>
              </li>
            </ul>
          </nav> */}
        
      </header>
    );
  }
  
export default Header;
