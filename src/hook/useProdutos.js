export async function getProdutos() {
  const res = await fetch("http://localhost:3000/produtos");
  const json = await res.json();
  return json;
}
