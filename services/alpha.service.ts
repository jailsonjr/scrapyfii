import axios from "axios";
import env from "../config/constants";

const GET_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=5min&apikey=${env.ALPHA_TOKEN}`;

const getTickerPrices = async (ticker: string) => {
    let getUrlData = GET_URL + `&symbol=${ticker.toLocaleUpperCase()}.SAO`;
    let requestResponse = await axios.get(getUrlData);
    return {
        metadata: {
            symbol: requestResponse.data['Meta Data']['2. Symbol'],
            lastUpdated: requestResponse.data['Meta Data']['3. Last Refreshed']
        },
        prices: formatPriceObject(requestResponse.data['Time Series (Daily)'])
    };
}

const formatPriceObject = (responseData: Object) => {
    let dateKeys = Object.keys(responseData);
    let datePrices = Object.values(responseData);
    let newObject = Array();

    for(let dateKey in dateKeys){
        newObject.push({
            date: dateKeys[dateKey],
            price_open: parseFloat(datePrices[dateKey]["1. open"]),
            price_close: parseFloat(datePrices[dateKey]["4. close"]),
            price_high: parseFloat(datePrices[dateKey]["2. high"]),
            price_low: parseFloat(datePrices[dateKey]["3. low"]),
            volume: parseInt(datePrices[dateKey]["5. volume"]),

        });
    };
    return newObject;
}

export {
    getTickerPrices
}





