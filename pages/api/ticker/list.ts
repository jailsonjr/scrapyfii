import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, tickers_info } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<tickers_info[]>
) {
  const getListTickers = await prisma.tickers_info.findMany();
  res.status(200).json(getListTickers);
}
