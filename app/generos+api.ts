import { generosContenidoAudiovisual } from "@/src/data/generosContenidoAudiovisual";

export function GET(request: Request) {
  return Response.json(generosContenidoAudiovisual);
}
