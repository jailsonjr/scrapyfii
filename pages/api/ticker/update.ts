import type { NextApiRequest, NextApiResponse } from 'next'
import TickerQueueModel from "../../../models/TickerQueueModel";

export default async function handler(req: NextApiRequest,res: NextApiResponse<any>) {
  let responseApi = await TickerQueueModel.getAllQueueTickers();
  console.log(responseApi);
  res.status(200).json(responseApi);
}
