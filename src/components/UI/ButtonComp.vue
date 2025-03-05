<script setup lang="ts">
import { onMounted, ref } from "vue"
import { setBtnStyles, getPreset, setPreset } from "./btnUtils";

const props = defineProps<{
	// content?: string
	type: string
}>()

const btn = ref<HTMLElement | any>()
// const text = ref()

let preset = getPreset()

onMounted(() => {
	setPreset(props.type, preset)

   setBtnStyles(btn, preset)

	// text.value =  props.content
})
</script>

<template>
	<button ref="btn">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
button {
	cursor: pointer;

	padding: 0.6rem 1.2rem;

	width: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;

	border: none;
	border-radius: 0.75rem;

	font-weight: 700;
	text-align: center;

	transition: 200ms;

	&:hover{
		opacity: 0.9;
		transform: scale(0.96) scaleY(0.95);
	}
}
</style>
