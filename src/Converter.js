import { useEffect, useState } from "react";


function Converter () {
    
    //Make the table of types
    const [types, setTypes] = useState([
        {id: "1", rate: "EURO"},
        {id: "2", rate: "US"},
        {id: "3", rate: "CHF"},
        {id: "4", rate: "GBP"},
        {id: "5", jpy: "JPY"},
        {id: "6", cad: "CAD"},
    ])

    const [currencyPrice, setCurrencyPrice] = useState([
        {id: "1", rateFrom: "EURO", rateTo: "EURO", values: 1},
        {id: "2", rateFrom: "EURO", rateTo: "US", values: 2},
        {id: "3", rateFrom: "EURO", rateTo: "GBP", values: 3},
        {id: "4", rateFrom: "EURO", rateTo: "CHF", values: 4},
        {id: "5", rateFrom: "EURO", rateTo: "JPY", values: 5},
        {id: "6", rateFrom: "EURO", rateTo: "CAD", values: 6},

    ])






    //Create a variable of amount
    const [amount, setAmount] = useState(0);

    //set the the options
    const [from,setFrom] = useState('--');
    const [to,setTo] = useState('--');

    //create the result
    const [res,setRes]= useState(0); 

    const [optionsFrom,setOptionsfrom] = useState('');
    const [optionsTo,setOptionsto] = useState('');

    //the row from table
    const [element,setElement]= useState([]);

    const [blogs, setBlogs] = useState([]);


    useEffect(()=> {
        setAmount(amount)
    },[amount])


    useEffect(() => {
        setOptionsfrom(from);
        setOptionsto(to)
      }, [from,to])

      
      const [arr,setArr] = useState([]);

      function handleResult  () {
        const number = currencyPrice.filter((item)=> (item.rateFrom === optionsFrom && item.rateTo === optionsTo)).concat((num)=> {
            return num.values
        });
        
        setArr(number);
        setRes(number[0].values*amount)
       
       
      }

        



    
    return (

        <div className="Currency">

            <div className="amount">
                <label for="amount">Amount: </label>
                <input type="number" id="amount" onChange={(e)=>setAmount(e.target.value)} ></input>
                
            </div>

           {/*I print the types */}
            <div className="Bolgs">
                <label>From: </label>                
                
                <select value ={from}  onChange={(e)=>setFrom(e.target.value)}>
                <option>---</option>
                    {types.map(type=> (
                        <option keys={type.id} value={type.rate}>{type.rate}</option>
                    ))
                    }
                </select>
                <label> To: </label>                
                
                <select value={to}  onChange={(e)=>setTo(e.target.value)}>
                <option>---</option>
                    {types.map(type=> (
                        <option keys={type.id} value={type.rate}  onChange={(e)=>setTo(e.target.value)}>{type.rate}</option>
                    ))
                    }
                </select>
            </div>

            <div className="result">
               <button onClick={handleResult}>Result </button> 
               <a>{res}</a>
            </div>

        </div>

    );
}

export default Converter;