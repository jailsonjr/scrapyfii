import type { NextApiRequest, NextApiResponse } from 'next'

import FiiController from '../../../controllers/FiiController';

export default async function handler(req: NextApiRequest,res: NextApiResponse<any>) {
  let getPrices = await FiiController.listFiisWithLastPrices();
  res.status(200).json(getPrices);
}
