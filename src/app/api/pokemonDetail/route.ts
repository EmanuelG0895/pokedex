const BASE_URL = process.env.PokeAPI_URL;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name") || "29";
 

  try {
    const response = await fetch(
      `${BASE_URL}/pokemon/${name}`
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
