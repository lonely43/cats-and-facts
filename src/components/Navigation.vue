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
			<h1>LONELY43</h1>

			<ul class="list">
				<li>
					<ButtonComp content="Media" type="gray" />
				</li>
				<li>
					<a target="blank" href="https://github.com/lonely43/cats-and-facts"><ButtonComp content="Source" type="primary" /></a>
				</li>
			</ul>

			<div ref="openBtn" class="mobile openList" @click="openList">
				<span></span>
				<span></span>
				<span></span>
			</div>

			<ul ref="mobList" class="mobile mobileList">
				<li>
					<ButtonComp content="Media" type="gray" />
				</li>
				<li>
					<a target="blank" href="https://github.com/lonely43/cats-and-facts"><ButtonComp content="Source" type="primary" /></a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: 4.2rem;

	background-color: var(--color-background);
	border-bottom: 4px solid var(--color-gray);

	.content {
		max-width: var(--bound);
		width: 100%;
		height: 100%;

		margin: 0 auto;
		padding: 1rem 2rem;

		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: var(--size-text);
			font-weight: 900;
			color: var(--color-primary);
		}

		.list {
			display: none;
			gap: 1rem;
		}
		.openList {
			z-index: 6;
			cursor: pointer;

			width: 2rem;
			height: 1.6rem;

			position: relative;

			span {
				$height: 0.2rem;
				position: absolute;

				width: 100%;
				height: $height;

				background-color: var(--color-text);

				transition: 200ms;

				&:nth-child(1) {
					top: 0;
				}
				&:nth-child(2) {
					top: calc(50%);
					transform: translateY(-50%);
				}
				&:nth-child(3) {
					bottom: 0;
				}
			}
		}
		.active {
			span {
				&:nth-child(1) {
					top: 50%;
					transform: rotate(45deg);
				}
				&:nth-child(2) {
					opacity: 0;
				}
				&:nth-child(3) {
					transform: rotate(-45deg);
					top: 50%;
				}
			}
		}

		.mobileList {
			position: fixed;
			top: 0;
			left: 0;

			pointer-events: none;
			z-index: 5;

			width: 100%;
			height: 100dvh;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 2rem;

			background-color: rgba(84, 96, 227, 0.247);
			backdrop-filter: blur(2.4rem);

			opacity: 0;
			transition: 200ms;

			li {
				width: 100%;
				max-width: 10rem;
				button {
					width: 100%;
				}
			}
		}
		.opened {
			pointer-events: all;
			opacity: 1;
		}

		@media screen and (min-width: 460px) {
			.mobile {
				display: none;
			}
			.list {
				display: flex;
			}
		}
	}
}
</style>
