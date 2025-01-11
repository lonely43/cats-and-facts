<script setup lang="ts">
import ButtonComp from "./UI/ButtonComp.vue"
</script>

<template>
	<div class="content">
		<div class="title">
			<h1>Meow there!</h1>
			<h3>Facts about cats</h3>
		</div>

		<ButtonComp content="Get started" type="accent" />

		<img src="./../assets/imgs/cat.svg" alt="" />
	</div>
</template>

<style lang="scss" scoped>
.content {
	padding-top: 8rem;
	width: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	gap: 4rem;

	.title {
		text-align: center;

		h1 {
			font-size: var(--size-h1);
			font-weight: 700;
			background: -webkit-linear-gradient(0deg, var(--color-primary), var(--color-primary-dark));
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		h3 {
			font-weight: 700;
			font-size: var(--size-h3);
		}
	}

	img {
		width: 100%;
		max-width: 480px;
		object-fit: cover;
		transform: translateY(-4.4rem);
	}

	@media screen and (max-width: 532px) {
		.title{
			h1 {
				font-size: clamp(12vw, 1em, 10vw);
			}
			h3 {
				font-size: clamp(6vw, 1em, 10vw);
			}
		}

		button{
			padding: .8rem 1.6rem !important;
			border-radius: 16px !important;
			font-size: clamp(4vw, .8em, 5vw) !important; 
		}

		img{
			max-width: 300px;
		}
	}
}
</style>
