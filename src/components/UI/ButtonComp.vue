<script setup lang="ts">
import { onMounted, ref } from "vue"
import { setBtnStyles, getPreset, setPreset } from "./btnUtils";

const props = defineProps<{
	content: string
	type: string
}>()

const btn = ref<HTMLElement | any>()

let preset = getPreset()

onMounted(() => {
	setPreset(props.type, preset)

   setBtnStyles(btn, preset)
})
</script>

<template>
	<button ref="btn">
		{{ content }}
	</button>
</template>

<style lang="scss" scoped>
button {
	cursor: pointer;

	padding: 0.6rem 1.2rem;

	width: fit-content;

	border: none;
	border-radius: 0.75rem;

	font-weight: 700;

	transition: 200ms;

	position: relative;

	&::before{
		position: absolute;
		z-index: -1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: "";
		background-color: aqua;
		border-radius: 0.75rem;

		//got to btnUtils.ts
	}
	&:hover{
		opacity: 0.9;
		&::before{

		}
	}
}
</style>
