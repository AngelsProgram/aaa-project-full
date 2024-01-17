/** @see https://nextjs.org/docs/app/building-your-application/routing/route-handlers */

async function GET(request: Request) {
  return Response.json({ msg: "GET method response." });
}

async function POST(request: Request) {
  return Response.json({ msg: "POST method response." });
}

export { GET, POST };
