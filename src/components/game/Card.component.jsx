function Card({images}) {
  return <>
    <div className='bg-gradient-to-r from-colorg1 via-colorg2 to-colorg3 flex items-center justify-center mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-x-[30px] gap-y-[30px] w-[90%] py-[25px]'>
        {
          images && images.length > 0 && images.map((item, index) => {
            return (
              <>
                <div className='flex items-center justify-center' key={index}>
                  <img
                    className='w-[97%] h-[97%] md:w-auto md:h-auto lg:w-[150px] lg:h-[150px]'
                    src={`./src/assets/images/${item.id}.jpg`} alt='Image...'/>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  </>;
}

export default Card;