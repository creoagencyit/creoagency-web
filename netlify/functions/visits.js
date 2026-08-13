import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore("creoagency-visits");
  const current = (await store.get("count", { type: "json" })) || { count: 89000 };
  const next = { count: current.count + 1 };
  await store.setJSON("count", next);
  return new Response(JSON.stringify(next), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  });
};

export const config = { path: "/api/visits" };
