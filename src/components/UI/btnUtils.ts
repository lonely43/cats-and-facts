import styles from "@/assets/variables.module.scss"

export function setBtnStyles(button: any, preset: any) {
	for (const key in preset) {
		button.value.style[key] = preset[key]
	}
}

export function getPreset() {
	return {
		background: "",
		boxShadow: "",
		color: `${styles.colorBackground}`,
		fontSize: `${styles.sizeLink}`,

		setPresets: function (obj: any) {
			for (const key in obj) {
				// @ts-ignore
				this[key] = obj[key]
			}
		}
	}
}

export function setPreset(type: string, preset: any) {
	switch (type) {
		case "primary":
			let primaryPresets = {
				background: `${styles.colorPrimary}`,
				boxShadow: `0 4px 0 ${styles.colorPrimaryDark}`
			}
			preset.setPresets(primaryPresets)
			break

		case "secondary":
			let secondaryPresets = {
				background: `${styles.colorSecondary}`,
				boxShadow: `0 4px 0 ${styles.colorSecondaryDark}`
			}
			preset.setPresets(secondaryPresets)
			break

		case "gray":
			let grayPresets = {
				background: `${styles.colorGray}`,
				boxShadow: `0 4px 0 ${styles.colorGrayDark}`,
				color: `${styles.colorPrimary}`
			}
			preset.setPresets(grayPresets)
			break

		case "accent":
			let accentPresets = {
				background: `${styles.colorAccent}`,
				boxShadow: `0 4px 0 ${styles.colorAccentDark}`,
				padding: ".9rem 1.6rem"
			}
			preset.setPresets(accentPresets)
			break
	}
}
