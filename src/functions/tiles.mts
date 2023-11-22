import { Config, Context } from "@netlify/functions";
import { Layer } from "@versatiles/server/dist/lib/layer.js";

let getTile: Awaited<ReturnType<Layer["getTileFunction"]>> | undefined;

export default async (req: Request, context: Context) => {
  if (!getTile) {
    const tileURL = new URL("/assets/cologne.versatiles", req.url);
    getTile = await new Layer(tileURL.toString(), {
      compress: false,
    }).getTileFunction();
  }

  const { z, x, y } = context.params;
  const tile = await getTile(Number(z), Number(x), Number(y));
  if (!tile) {
    return new Response("Tile not found", { status: 404 });
  }

  const headers: Record<string, string> = {
    "Netlify-CDN-Cache-Control": "public, max-age=2592000, immutable",
    "Content-Type": "application/x-protobuf",
  };
  if (tile.compression) {
    console.log("tile compression:", tile.compression);
    headers["Content-Encoding"] = tile.compression;
  }
  return new Response(tile.buffer, { headers });
};

export const config: Config = { path: "/api/tiles/:z/:x/:y" };
