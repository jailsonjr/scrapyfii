import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  updateAt: Number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'barriga fii', updateAt: Date.now() })
}
