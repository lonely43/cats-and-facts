<script setup lang="ts"></script>
<template>
	<div class="factsBlock">
		<div class="content">
			<div class="title">
				<h1>Fact of day:</h1>
			</div>
			<div class="info">
				<p>While many cats enjoy milk, it will give some cats diarrhea.</p>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.factsBlock {
	position: relative;

	min-height: 100dvh;

	display: flex;
	justify-content: center;
	align-items: center;

	// background
	&::before {
		z-index: -1;
		padding: 0;
		margin: 0;
		content: "";

		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 99.3dvw;
		height: 100%;
		min-height: 100dvh;

		background-color: var(--color-gray);

		border-radius: 3.75rem;
	}

	.content {
		.title {
			h1 {
				//pure gradient
				background: linear-gradient(-45deg, var(--color-text), var(--color-primary), var(--color-accent));
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
