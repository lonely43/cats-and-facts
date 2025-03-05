<script setup lang="ts">
import { ref } from 'vue';

	const fact = ref<string>("none")
</script>
<template>
	<div class="facts">
		<div class="content">
			<div class="title">
				<h1>Fact of day:</h1>
			</div>
			<div class="info">
				<p>{{ fact }}</p>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.facts {
	position: relative;

	min-height: 100dvh;

	display: flex;
	justify-content: center;
	align-items: center;
	// background
	&::before {
		z-index: -1;
		content: "";

		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		width: 100dvw; // Занимаем всю ширину родителя
		height: 100%; // Занимаем всю высоту родителя

		background-color: $color-gray;

		border-radius: 3.75rem 3.75rem 0 0;
	}

	.content {
		.title {
			h1 {
				//pure gradient
				background: linear-gradient(-45deg, $color-text, $color-primary, $color-accent);
				background-size: 400% 400%;
				animation: gradient 15s ease infinite;
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				@keyframes gradient {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
			}
		}
	}
}
</style>
