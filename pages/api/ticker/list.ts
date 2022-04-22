import type { NextApiRequest, NextApiResponse } from 'next'
import { tickers_info } from '@prisma/client';
import TickerInfoModel from '../../../models/TickerInfoModel';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object[]>
) {
  const getListTickers = await TickerInfoModel.getAllTickers();
  res.status(200).json(getListTickers);
}
