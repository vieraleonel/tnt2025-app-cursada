import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";

export function GET(request: Request) {
  return Response.json(contenidosAudiovisuales);
}
