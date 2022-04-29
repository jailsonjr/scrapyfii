import type { NextApiRequest, NextApiResponse } from 'next'

import TickerController from '../../../controllers/TickerController';

export default async function handler(req: NextApiRequest,res: NextApiResponse<any>) {
  let getListQueue = await TickerController.listTickersInQueue();
  res.status(200).json(getListQueue);
}
