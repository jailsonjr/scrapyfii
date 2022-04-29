import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type TickerError = {
    ticker: string
    ticker_error: string
}

export class TickerErrorModel {

    private db: PrismaClient;

    constructor(prismaInstance: PrismaClient) {
        this.db = prismaInstance;
    }

    getAllTickerWithErrors = () => {
        return this.db.tickers_error.findMany();
    }

    insertTickerError = async (tickerResponse: TickerError) => {
        let errorExists = await this.checkErrorExists(tickerResponse.ticker);

        if (!errorExists){
            await this.db.tickers_error.create({
                data: {
                    ticker: tickerResponse.ticker,
                    ticker_date: new Date().toISOString(),
                    ticker_error: tickerResponse.ticker_error
                }
            });

            return `${tickerResponse.ticker} error inserted`;  
        }  
            
        return `${tickerResponse.ticker} error already inserted`;
    }

    checkErrorExists = async (ticker: string) => {
        let getData = await this.db.tickers_error
        .findMany({
            where: {
                ticker: {
                    equals: ticker
                }
            }
        });

        if(getData.length == 1){
            return true;
        }
        return false;
    }

}

export default new TickerErrorModel(prisma);