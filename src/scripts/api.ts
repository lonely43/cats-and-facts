export async function getFact(): Promise<string> {
	return (await fetch("https://catfact.ninja/fact").then((response) => response.json())).fact
}

export async function translate(sourceText: string, lang: string): Promise<string> {
	let translatedText = ""
	let url = new URL(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t`)
	url.searchParams.set("q", sourceText) // source text
	url.searchParams.set("sl", "auto") // source language
	url.searchParams.set("tl", lang) // into language

	await fetch(url)
		.then((res) => res.json())
		.then((data) => (translatedText = data[0][0][0]))

	return translatedText
}
