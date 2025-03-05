<script setup lang="ts">
import { ref } from "vue"
import ButtonComp from "./UI/ButtonComp.vue"

const mobList = ref()
const openBtn = ref()
function openList() {
	mobList.value.classList.toggle("opened")
	openBtn.value.classList.toggle("active")
}
</script>

<template>
	<nav>
		<div class="content">
			<h1>LONELY43🖐</h1>

			<ul class="list">
				<li>
					<a target="blank" href="https://github.com/lonely43/cats-and-facts"><ButtonComp type="primary"> Source </ButtonComp></a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

nav {
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;

	width: 100%;
	height: 4.2rem;

	backdrop-filter: blur(4rem);
	background-color: $color-background-backdrop;
	border-bottom: 4px solid $color-gray;

	.content {
		max-width: $max-width;
		width: 100%;
		height: 100%;

		margin: 0 auto;
		padding: 1rem 2rem;

		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: $size-text;
			font-weight: 900;
			color: $color-primary;
		}

		.list {
			display: flex;
			gap: 1rem;
		}
	}
}
</style>
