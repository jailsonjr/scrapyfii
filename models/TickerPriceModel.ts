import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TickerPriceModel {

    private db: PrismaClient;

    constructor(prismaInstance: PrismaClient) {
        this.db = prismaInstance;
    }

    getAllPriceTickers = () => {
        return this.db.tickers_history_price.findMany();
    }

    checkPriceByDate = async (ticker: string, ticker_date: string) => {
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

        if(getData.length > 1) return true;
        return false;
    }

}

export default new TickerPriceModel(prisma);