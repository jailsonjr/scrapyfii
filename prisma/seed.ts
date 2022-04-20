import { PrismaClient, tickers_info } from '@prisma/client';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { parse } from 'csv/sync';

const prisma = new PrismaClient();
const fileToRead = resolve('prisma/data', 'tickers_list.csv');

type fiisType = {
    ticker: string,
    ticker_type: string,
    ticker_adm: string
}

const readFile = (): Array<fiisType> => {
    const readData = readFileSync(fileToRead);
    const convertDataToObject = parse(readData, {
        delimiter: ',',
        encoding: 'utf8',
        columns: true
    });
    return convertDataToObject;
}

const main = () => {
  const listFiis: Array<fiisType> = readFile();
  listFiis.map( async (tickerData: fiisType) => {
    await prisma.tickers_info.create({
        data: {
            ticker: tickerData.ticker,
            ticker_type: tickerData.ticker_type,
            ticker_admin: tickerData.ticker_adm
        }
    });
  });
};

main();



