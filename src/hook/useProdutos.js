export async function getProdutos(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
