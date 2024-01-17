/**
 * @see https://nextjs.org/docs/api-routes/introduction
 * @see https://nextjs.org/docs/pages/building-your-application/routing/api-routes
 */
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  // request.method;
  // request.body;
  response.status(200).send("Server is running");
}
