import { teachers } from "../data";

export async function GET(request) {
  return new Response(JSON.stringify(teachers));
}
