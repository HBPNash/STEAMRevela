import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return <>
    <div className='bg-base'>
      <nav>
        <div className="bg-headings text-white font-montserrat font-medium text-lg">
          <div className="flex justify-center gap-x-9 px-[5%] py-[30px]">
            <a className='inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300' onClick={() => navigate('/', {})}>Inicio</a>
            <a className='inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300' onClick={() => navigate('/juego', {})}>Juego</a>
            <a className='inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300' onClick={() => navigate('/catalogo', {})}>Catálogo</a>
          </div>
        </div>
      </nav>
    </div>
  </>;
}

export default Navbar