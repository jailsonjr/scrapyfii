import { PrismaClient, tickers_history_price } from '@prisma/client';

const prisma = new PrismaClient();

type TickersPrices = {
    date: string,
    price_open: number,
    price_close: number,
    price_high: number,
    price_low: number,
    volume: number
}
type TickerResponse = {
    metadata: {
        symbol: string,
		lastUpdated: string
    },
    prices: TickersPrices[]
}

export class TickerPriceModel {

    private db: PrismaClient;

    constructor(prismaInstance: PrismaClient) {
        this.db = prismaInstance;
    }

    getAllPriceTickers = () => {
        return this.db.tickers_history_price.findMany();
    }

    insertPriceTicker = async (tickerResponse: TickerResponse) => {
        let ticker = tickerResponse.metadata.symbol.split('.')[0];

        let returnPrice = await Promise.all(tickerResponse.prices.map(async (price) => {
            let checkExists = await this.checkExistsPriceByDate(ticker, price.date);
                        
            if (!checkExists){
                await this.db.tickers_history_price.create({
                    data: {
                        ticker: ticker,
                        ticker_date: new Date(price.date).toISOString(),
                        ticker_price_id: `${ticker}-${price.date}`,
                        ticker_price_close: price.price_close,
                        ticker_price_open: price.price_open,
                        ticker_price_high: price.price_high,
                        ticker_price_low: price.price_low,
                        ticker_price_volume: price.volume
                    }
                });

                return `${ticker}-${price.date} inserted`;  
            }else {
                return `${ticker}-${price.date} already exists`;  
            }   
        }));   
        
        return returnPrice;
    }

    checkExistsPriceByDate = async (ticker: string, ticker_date: string) => {
        let getData = await this.db.tickers_history_price
        .findMany({
            where: {
                ticker: {
                    equals: ticker
                },
                ticker_date: {
                    equals: new Date(ticker_date).toISOString()
                }
            }
        });

        if(getData.length == 1){
            return true;
        }
        return false;
    }

}

export default new TickerPriceModel(prisma);