const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

export async function getArtworks() {
  console.log("BACKEND_URL", BACKEND_URL);
  const res = await fetch(`${BACKEND_URL}/api/artwork`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}
