import { useState } from "react";
import Type from './Type'


const CurrencyPrices = () => {

        const [currencyPrice, setCurrencyPrice] = useState([
            {id: "1", rateFrom: "EURO", rateTo: "Euro"},
            {id: "1", rateFrom: "EURO", rateTo: "US"},
            {id: "1", rateFrom: "EURO", rateTo: "GBP"},
            {id: "1", rateFrom: "EURO", rateTo: "CHF"},
            {id: "1", rateFrom: "EURO", rateTo: "JPY"},
            {id: "1", rateFrom: "EURO", rateTo: "CAD"},

        ])


    return (

        <div className="Prices">
          
        </div>
    );

}