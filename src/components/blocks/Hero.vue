<script setup lang="ts">
import { onMounted } from "vue"
import ButtonComp from "../UI/ButtonComp.vue"
import CatPicture from "../UI/CatPicture.vue";
</script>

<template>
	<div class="hero">
		<div class="title">
			<h1>Meow there!</h1>
			<h3>Facts about cats</h3>
		</div>

		<ButtonComp content="Get started" type="accent" />

		<CatPicture />
	</div>
</template>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.hero {
	width: 100%;
	min-height: 100dvh;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 4rem;

	.title {
		text-align: center;

		h1 {
			font-size: $size-h1;
			font-weight: 700;

			//pure gradient
			background: linear-gradient(-45deg, $color-text, $color-primary, $color-accent);
			background-size: 400% 400%;
			animation: gradient 10s ease infinite;
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
		h3 {
			font-weight: 600;
			font-size: $size-h3;
		}
	}

	button {
		font-size: $size-text !important;
		border-radius: 100%;

		position: relative;

		&::before {
			position: absolute;
			content: "";
			right: 104%;
			top: 42%;

			height: 2rem;
			width: 2rem;

			background-color: $color-accent;
			box-shadow: 0px 4px 0 $color-accent-dark;

			border-radius: 0 0 0 100%;
			transform: rotate(45deg) translateY(-50%);
		}
	}

	.cat-picture {
		z-index: -1;

		width: 100%;
		max-width: 480px;

		transform: translateY(-4.4rem);
	}

	@media screen and (max-width: 525px) {
		gap: 3rem;

		.title {
			h1 {
				font-size: 3em;
			}
			h3 {
				font-size: 1.5em;
			}
		}

		button {
			font-size: 1.5em;
		}
	}
	@media screen and (max-width: 414px) {
		.title {
			h1 {
				font-size: 2.4em;
			}
			h3 {
				font-size: 1.2em;
			}
		}
		button {
			transform: scale(0.9);
		}
		.cat-picture {
			transform: translateY(-2em);
		}
	}
}
</style>
