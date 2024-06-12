import { FaGithub } from 'react-icons/fa'; // Importing a GitHub icon

function Footer() {
    return (
      <footer className="backdrop-blur-md shadow-lg py-1 fixed bottom-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()}. Made with 
            <span className="animate-pulse"> ❤️ </span> 
            by 
            <a href="https://github.com/Amank04" 
               className="text-white font-bold hover:underline flex items-center justify-center">
               <FaGithub className="inline mr-2"/> Aman_Kumar
            </a>
          </p>
        </div>
      </footer>
    );
  }
  
export default Footer;
