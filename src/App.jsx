import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'

function App() {
  const[amount,setAmount]=useState(0)
  const[convertedAmount,setConvertedAmount]=useState(0)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")

  //hook is basically a function which returns an array of variable and reference of function.
  //we can create our own hooks
  
  const currencyInfo=useCurrencyInfo(from)
  const options =Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
const convert=()=>{  
  setConvertedAmount(amount*currencyInfo[to])
}



    

      return (
          <div
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
              style={{
                  backgroundImage: `url('https://images.pexels.com/photos/17985038/pexels-photo-17985038/free-photo-of-cityscape-with-skyscrapers-and-residential-buildings-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              }}
          >
              <div className="w-full">
                  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                          onSubmit={(e) => {
                              e.preventDefault();
                             convert();
                          }}
                      >
                          <div className="w-full mb-1">
                              <InputBox
                                  label="From"
                                  amount={amount}
                                  currencyOptions={options}
                                //   onCurrencyChange={(currency)=>setAmount(amount)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                  selectCurrency={from}
                                  onAmountChange={(amount)=>setAmount(amount)}
                              />
                          </div>
                          <div className="relative w-full h-0.5 ">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-mdb bg-gray-900 text-white px-2 py-0.5"
                                  onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full mt-1 mb-4">
                              <InputBox
                                  label="To"
                                  amount={convertedAmount}
                                  currencyOptions={options}
                                  onCurrencyChange={(currency)=>setTo(currency)}
                                  selectCurrency={to}
                                  amountDisable
                              />
                          </div>
                          <button type="submit" className="w-full text-white px-4 py-3 rounded-lg bg-gray-900">
                              Convert {from.toUpperCase()} to {to.toUpperCase()}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      );
  
  
}

export default App
