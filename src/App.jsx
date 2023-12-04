// No seu arquivo App.jsx
import { useState } from 'react';
import './App.css';
import Button from './componentes/button/Button';
import imgGasosa from './assets/combustivel.png';

export default function App() {
  const [etanol, setEtanol] = useState(null);
  const [gasolina, setGasolina] = useState(null);
  const [alertaDeMensagem, setAlertaMensagem] = useState("");
  const [modalButton, setModalButton] = useState(false);

  function undleClick() {
    setEtanol(etanol);
    setGasolina(gasolina);
    if (etanol / gasolina < 0.7) {
      setAlertaMensagem(`O cálculo será igual a ${(etanol / gasolina).toFixed(3)}, portanto compensa mais abastecer com etanol!`);
    } else {
      setAlertaMensagem(`O cálculo será igual a ${(etanol / gasolina).toFixed(3)}, portanto compensa mais abastecer com gasolina`);
    }
    setModalButton(true);
  }

  function fecharModal() {
    setModalButton(false);
    // Limpar a mensagem ao fechar o modal
    setAlertaMensagem("");
  }

  return (
    <div className="bg-purple-800 w-full h-screen">
      <div className='flex flex-col items-center justify-center'>
        <img src={imgGasosa} alt="img usado no projeto" className="w-1/4 mb-8" />
        <h1 className='text-white text-center'>Você sabe com qual combustível compensa mais abastecer seu carro?</h1>
        <h1 className='text-white text-center mb-4'>Utilize a calculadora abaixo:</h1>
        <div className='flex flex-col items-center'>
          <label className='text-white'>Preço Litro Etanol R$</label>
          <input className='w-96 rounded-lg mb-4' type="number" placeholder='0' onChange={(event) => setEtanol(event.target.value)}></input>
          <label className='text-white'>Preço Litro da Gasolina R$</label>
          <input className='w-96 rounded-lg mb-4' type="number" placeholder='0' onChange={(event) => setGasolina(event.target.value)}></input>
          <Button undleClick={undleClick} />
          
          {modalButton && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg text-center">
                <p className="text-black">{alertaDeMensagem}</p>
                <button className="mt-4 px-4 py-2 bg-purple-800 hover:bg-purple-300 text-white rounded" onClick={fecharModal}>Fechar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
