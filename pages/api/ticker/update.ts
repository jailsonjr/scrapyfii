import type { NextApiRequest, NextApiResponse } from 'next'
import { getTickerPrices } from "../../../services/Alpha.service";

export default async function handler(req: NextApiRequest,res: NextApiResponse<any>) {
  let responseApi = await getTickerPrices("mxrf11");
  res.status(200).json(responseApi);
}
