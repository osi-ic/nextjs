export async function GET(request) {
  const res = await fetch("https://candaan-api.vercel.app/api/text/");
  const result = await res.json();

  const data = {
    status: 200,
    total: result.total,
    text: result.data,
  };

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
