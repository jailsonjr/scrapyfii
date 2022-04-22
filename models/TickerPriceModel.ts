import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TickerPriceModel {

    private db: PrismaClient;

    constructor(prismaInstance: PrismaClient) {
        this.db = prismaInstance;
    }

    getAllPriceTickers = async () => {
        return this.db.tickers_history_price.findMany();
    }

}

export default new TickerPriceModel(prisma);