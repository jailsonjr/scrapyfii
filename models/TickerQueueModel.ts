import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TickerQueueModel {

    private db: PrismaClient;

    constructor(prismaInstance: PrismaClient) {
        this.db = prismaInstance;
    }

    getAllQueueTickers = async () => {
        return await this.db.tickers_queue.findMany();
    }

    populateQueueTickers = async () => {
        let inserted = 0;
        let withError = 0;
        let inError = await this.getTickerErrorCount();
        let inQueue = await this.getQueueCount();

        if(inQueue > 0){
            return `${inQueue} in queue and ${inError} with error`;
        }

        let getAllTickers = await this.db.tickers_info.findMany({ 
            select: {
                ticker: true
            }
        });

        getAllTickers.map(async ticker => {
            if(!await this.checkTickerInError(ticker.ticker)){
                return await this.db.tickers_queue.create({
                    data: ticker
                }).then(() => {
                    inserted++;
                });
            }else {
                withError++;
            }
        });

        return `${inserted} in queue and ${withError} with error`;
    }

    getQueueCount = async () => {
        let getAllTickersInQueue = await this.db.tickers_queue.count();
        return getAllTickersInQueue;
    }

    private getTickerErrorCount = async () => {
        let getAllTickersWithError = await this.db.tickers_error.count();
        return getAllTickersWithError;
    }

    private checkTickerInError = async (ticker: string) => {
        let checkIstTickerError = await this.db.tickers_error.count({
            where: {
                ticker: ticker
            }
        });        

        if(checkIstTickerError > 0) {
            return true;
        }

        return false;
    }

}

export default new TickerQueueModel(prisma);