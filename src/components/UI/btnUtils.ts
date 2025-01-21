export function setBtnStyles(button: any, presets: any){
	for(const key in presets){
		button.value.style[key] = presets[key]
	}
}

export function getPreset(){
	return {
		background: "",
		boxShadow: "",
		color: "var(--color-background)",
		fontSize: "var(--size-link)",

		setPresets: function (obj: any) {
			for(const key in obj){
				// @ts-ignore
				this[key] = obj[key]
			}
		}
	}
}

export function setPreset(type: string, preset: any){
	switch (type) {
		case "primary":
			let primaryPresets = {
				background: "var(--color-primary)",
				boxShadow: "0 4px 0 var(--color-primary-dark)",
			}
			preset.setPresets(primaryPresets)
			break

		case "secondary":
			let secondaryPresets = {
				background: "var(--color-secondary)",
				boxShadow: "0 4px 0 var(--color-secondary-dark)"
			}
			preset.setPresets(secondaryPresets)
			break

		case "gray":
			let grayPresets = {
				background: "var(--color-gray)",
				boxShadow: "0 4px 0 var(--color-gray-dark)",
				color: "var(--color-text)"
			}
			preset.setPresets(grayPresets)
			break

		case "accent":
			let accentPresets = {
				background: "var(--color-accent)",
				boxShadow: "0 4px 0 var(--color-accent-dark)",
				padding: ".9rem 1.6rem"
			}
			preset.setPresets(accentPresets)
			break
	}
}