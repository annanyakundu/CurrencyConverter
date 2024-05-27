import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,//jo bhi component call krega vha iska kaam aayega kyunki amount change hoga toh state bhi 
    //change hogi
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
  
const amountInputId=useId()
//donot call useid to generate keys in a list.keys should be generated from your data

    return (
        //yha batticks mei likhi h css, kyunki in case user ko apni traf se kuch inject krna ho 
        //tph vo bhi yhan add hojaye
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
               //js hr baar events k andr ki values ko sring mei leleti h toh 
               //use number mei convert krlo pehle 
               //pehle wali condn sirf checker h ki hn ye function exost krta h 
               //next mei hum function call krre h event ki value pass krke 
               />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                       {currencyOptions.map((currency)=>(
                        //jb ese values repeat hoti h tb dikkt hoti h kyunki react ko pta hi ni chlta
                        //performance khraab krta h 
                        //kyunki baar baar dom bnata jata h khi 1000 baar na bnara ho ek cheez
                        //use key isliye
                        //jb bhi jsx mei loop lgao
                         <option key={currency} value={currency}>
                         {currency}
                     </option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}

//chote project mei ye good
export default InputBox;
