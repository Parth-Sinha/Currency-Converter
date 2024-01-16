import { useCallback, useState } from 'react';
import '../src/tailwindcssconfig.css'
import useCurrencyInfo from './useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(0)
  const [fcurrency, setFcurrency] = useState("usd")
  const [tcurrency, setTcurrency] = useState("inr")
  const backgroundimg = 'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const currencyInfo = useCurrencyInfo(fcurrency)
  const oppcurrencyInfo = useCurrencyInfo(tcurrency)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const swap = ()=>{
    setTcurrency(fcurrency)
    setFcurrency(tcurrency)
  }

  const convert = (am)=>{
    setConvertedAmount(am*currencyInfo[tcurrency]);
  }
  const convertopp = (am)=>{
    setAmount(am*oppcurrencyInfo[fcurrency])
  }

  return (
    <>
      <div className='h-screen w-screen bg-no-repeat bg-cover flex justify-center items-center' style = {{backgroundImage: `url(${backgroundimg})`}}>
          <div className='bg-gradient-to-r from-blue-200 to-blue-700 w-1/3 rounded-2xl h-fit p-4 opacity-80'>
            {/* Here is the main block */}
            <InputBox label='From' currencySelected={fcurrency} currencyOptions={currencyInfo} amount={amount} onAmountChange={(amount)=>{setAmount(amount); convert(amount)}} onCurrencyChange={(currency)=>setFcurrency(currency)} />
            <div className='flex justify-center'>
              <div>
                <button className=' bg-gradient-to-r from-blue-400 to-blue-700 p-3 rounded-lg font-semibold opacity-90 text-black text-lg' onClick={swap}>Swap</button>
              </div>
            </div>
            <InputBox label='To' currencySelected={tcurrency} currencyOptions={currencyInfo} amount={convertedAmount} onCurrencyChange={(currency) => setTcurrency(currency)} onAmountChange={(amount)=>{setConvertedAmount(amount); convertopp(amount)}}/>
            <div className='bg-gradient-to-r from-blue-600 to-blue-950 p-2 rounded-lg flex justify-center'>
              <button className='w-full text-white font-bold text-xl' onClick={()=>convert(amount)}>Convert {fcurrency.toLocaleUpperCase()} to {tcurrency.toLocaleUpperCase()}</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
