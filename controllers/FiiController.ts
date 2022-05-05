import TickersPriceModel, { TickerPriceModel } from "../models/TickerPriceModel";

type TickersPrices = {
    ticker_price_id: string
    ticker: string
    ticker_date: Date
    ticker_price_close: number
    ticker_price_open: number
    ticker_price_high: number
    ticker_price_low: number
    ticker_price_volume: number
    updated_at: Date,
    gain: number
}

class FiiController {

    private priceModel: TickerPriceModel;
    private fiisPrices: Array<TickersPrices>;

    constructor(PriceModel: TickerPriceModel) {
        this.priceModel = PriceModel;
        this.fiisPrices = [];
    }

    listFiisWithLastPrices = async () => {
        this.fiisPrices = [];
        let allTickers = await this.priceModel.getAllTickers();

        await Promise.all(allTickers.map(async ticker => {
            let priceTicker = await this.priceModel.getFiiLastPrices(ticker.ticker);

            if(priceTicker) {
                this.fiisPrices.push({
                    ticker_price_id: priceTicker.ticker_price_id,
                    ticker: priceTicker.ticker,
                    ticker_date: priceTicker.ticker_date,
                    ticker_price_close: Number(priceTicker.ticker_price_close),
                    ticker_price_open: Number(priceTicker.ticker_price_open),
                    ticker_price_high: Number(priceTicker.ticker_price_high),
                    ticker_price_low: Number(priceTicker.ticker_price_low),
                    ticker_price_volume: Number(priceTicker.ticker_price_volume),
                    updated_at: priceTicker.updated_at,
                    gain: this.calculateGainFii(Number(priceTicker.ticker_price_open), Number(priceTicker.ticker_price_close))
                });
            }
        }));
        return {
           total: this.fiisPrices.length,
           prices: this.fiisPrices
        };        
    }

    calculateGainFii = (priceOpen: number, priceClose: number) => {
        let calc = (priceClose - priceOpen) / priceOpen * 100;
        return Number(calc.toFixed(2));
    }


}

export default new FiiController(TickersPriceModel);
