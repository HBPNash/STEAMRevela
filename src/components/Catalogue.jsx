import { catalogue } from '../assets/global'

function Catalogue() {
  return (
    <>
      <div className="bg-blue-500 text-white font-bold text-2xl text-center">
        Catálogo de Objetos Educativos STEAM
      </div>
      <div className='bg-gradient-to-r from-colorg1 via-colorg2 to-colorg3 flex items-center flex-col'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[25px] p-[25px]">
          {catalogue.map((item, index) => (
            <div key={item.id} className="boxCatalogue py-[10px] w-[200px] rounded-md flex items-center flex-col">
              <div className='' key={index}>
                  <img
                    className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]'
                    src={`./src/assets/images/${item.id}.jpg`} alt='Image...'/>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogue;