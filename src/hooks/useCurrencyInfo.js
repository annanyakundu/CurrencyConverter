import {useEffect,useState} from 'react'

// function hello(){
//     return []
// }

// custom hooks can also use built in hoooks


//hooks mostly cases mei js return krte h toh its better to name them .js

//useeffect se 
//hum jaise hi useCurrencyInfo hook use krenge vaise hi api se 
//data fetch hojayega
//function k andr ek aur func ni bnana pdega 
// mostly api se value jo aati h vo string format mei aati h 
//so first we need to convert it into json format
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res) => {
            setData(res[currency]);
            console.log(res[currency]); // Log the fetched data here if needed
          })
          .catch((error) => {
            console.error('Error fetching currency data:', error);
          });
      
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;
//isse pure method ko hi return krdiya jaise usestate krta h 

