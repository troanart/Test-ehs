import { groups } from "../data";

export async function GET(request) {
  return new Response(JSON.stringify(groups));
}
