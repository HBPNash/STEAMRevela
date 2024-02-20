import Card from './game/Card.component'
import React, { useState } from 'react'
import { card0, card1, card2, card3, card4, catalogue } from '../assets/global'
import '../assets/css/app.css'

function Game() {
  const [numCard, setNumCard] = useState(0);
  const [binaryText, setBinaryText] = useState('');
  const [objetoRevelado, setObjetoRevelado] = useState(null)

  function goToBack() {
    if ( (numCard - 1) < 0) return
    setNumCard(numCard - 1)
    setBinaryText(binaryText.slice(0, -1))
  }

  function goToReset() {
    setNumCard(0)
    setBinaryText('')
    setObjetoRevelado(null)
  }

  function goToYes() {
    if ((numCard + 1) > 5) return
    setNumCard(numCard + 1)
    setBinaryText(binaryText + '1')
  }

  function goToNot() {
    if ((numCard + 1) > 5) return
    setNumCard(numCard + 1)
    setBinaryText(binaryText + '0')
  }

  function goToShow() {
    const objTemp = catalogue.find( objeto => objeto.id === parseInt(binaryText.split('').reverse().join(''), 2))
    setObjetoRevelado(objTemp)
  }

  return (
    <>
      <div className='bg-gradient-to-r from-colorg1 via-colorg2 to-colorg3'>
        <div>
          {
            numCard == 0 && <Card images={card0}/>
          }
          {
            numCard == 1 && <Card images={card1}/>
          }
          {
            numCard == 2 && <Card images={card2}/>
          }
          {
            numCard == 3 && <Card images={card3}/>
          }
          {
            numCard == 4 && <Card images={card4}/>
          }
        
        
            <div className='text-center font-bold text-gray-50 text-xl'>
              ¿Tu imagen aparece en esta CARTA?
            </div>
            {
              objetoRevelado && <>
                <div className="flex flex-col lg:flex-row items-center pl-[135px] pr-[100px] pb-[50px]">
                  <div className="lg:w-[45%] flex flex-col items-center lg:items-start lg:pr-8">
                    <h2 className="text-4xl font-bold mb-4">{objetoRevelado.titulo}</h2>
                    <img
                      className="w-[70%] h-[70%] rounded-md lg:rounded-none lg:w-[56%] lg:h-[56%]"
                      src={`./src/assets/images/${objetoRevelado.id}.jpg`}
                      alt={`Imagen de ${objetoRevelado.titulo}`}/>
                </div>
                  <div className="lg:w-[50%] flex flex-col items-center">
                    <p className="font-semibold text-xl text-center mb-4">{objetoRevelado.descripcion}</p>
                    <p className="font-semibold text-xl text-center mb-4">{objetoRevelado.curiosidad}</p>
                  </div>
                </div>
              </>
            }
        
            <div className='flex justify-evenly py-[30px]' >
              {numCard > 0 && <button className='btn' onClick={goToBack}> Regresar </button>}
              {numCard > 0 && <button className='btn' onClick={goToReset}> Reiniciar </button>}
              {numCard < 5 && <button className='btn' onClick={goToYes}> Si </button>}
              {numCard < 5 && <button className='btn' onClick={goToNot}> No </button>}
              {numCard === 5 && <button className='btn' onClick={goToShow}> Revelar </button>}
            </div>
        </div>
      </div>
    </>
  );
}

export default Game;