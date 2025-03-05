export async function getFact(): Promise<string> {
	return (await fetch("https://catfact.ninja/fact").then((response) => response.json())).fact
}
