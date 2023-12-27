import { getPlaiceholder } from "plaiceholder";

export async function POST(request: Request) {
    if (request.method !== "POST")
        return new Response(null, { status: 404, statusText: "Not Found" });

    try {
        const body = await request.json();


        const { url } = body;

        const buffer = await fetch(url).then(async (res) => Buffer.from(await res.arrayBuffer()));


        const { base64 } = await getPlaiceholder(buffer);


        if (base64) {
            const result = {
                base64: base64,
            };

            return new Response(JSON.stringify(result), { status: 200 });
        }
    } catch (err) {
        return new Response(JSON.stringify(err), { status: 500 });
    }
}
