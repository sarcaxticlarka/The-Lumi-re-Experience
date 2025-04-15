import React from 'react' 

const Footer = () => {
    return (
      <footer className="bg-[#2F4231] text-gray-200 px-24 pl-56 py-16">
        <div className=" mx-auto flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-10">
          
 
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-serif">Lumière Experiences</h2>
          </div>
  
        
          <div className="flex-1">
            <h3 className="text-3xl font-[Moranga] font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-xl">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Dashboard</a></li>
              <li><a href="#" className="hover:underline">Experinces</a></li>
               <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
  
    
          <div className="flex-1">
            <h3 className="text-3xl font-[Moranga] font-semibold mb-4">Follow</h3>
            <ul className="space-y-2 text-xl">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Pinterest</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div className="flex-1">
            <h3 className="text-3xl font-[Moranga] font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-xl">
              <li>893-342-9809</li>
              <li>LumièreExperience@gmail.com</li>
              <li>India Gate,Delhi</li>
              <li>Delhi, India 100281</li>
            </ul>
          </div>
        </div>
  
   
        <hr className="my-10 border-gray-600" />
  
 
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xl text-gray-400 px-2">
          <p>Privacy Policy</p>
          <p>© 2035 by Lumière Experience. Made with </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  