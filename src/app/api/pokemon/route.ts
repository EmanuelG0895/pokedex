const BASE_URL = process.env.PokeAPI_URL;
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.get("limit") || "29";
  const offset = searchParams.get("offset") || "0";

  try {
    const response = await fetch(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al obtener pokémons" }),
      {
        status: 500,
      }
    );
  }
}
