import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  key: number;
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data: ResponseData = {
    key: 1,
    message: 'Data object response from server.',
  }
  res.status(200).json(data);
}
