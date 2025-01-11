<script setup lang="ts">
import { onMounted, ref } from "vue"
import {setBtnStyles, getPreset, setPreset} from "./btnUtils";

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
		<p>{{ content }}</p>
	</button>
</template>

<style lang="scss" scoped>
button {
	cursor: pointer;

	padding: 0.6rem 1.2rem;

	width: fit-content;

	border: none;
	border-radius: 0.75rem;

	p {
		font-weight: 700;
	}

	transition: 200ms;
	&:hover{
		opacity: 0.8;
	}
}
</style>
