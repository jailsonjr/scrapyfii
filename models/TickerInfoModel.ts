import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TickerInfoModel {

    private db: PrismaClient;

    constructor(prismaInstance: PrismaClient) {
        this.db = prismaInstance;
    }

    getAllTickers = async () => {
        return this.db.tickers_info.findMany();
    }

}

export default new TickerInfoModel(prisma);