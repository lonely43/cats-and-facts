<script setup lang="ts">
import { ref } from "vue"
import Aftung from "./aftung.vue"
import styles from "@/assets/variables.module.scss"

const color = ref(styles.colorAccent)


</script>
<template>
	<div class="notice-box">
		<div class="notice-info">
			<div class="notice-title">
				<Aftung :color="color" />
				<h3>Erorr</h3>
			</div>

			<p>
				<slot />
			</p>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.notice-box {
	position: fixed;
	z-index: 6;
	right: 1rem;
	bottom: 0.8rem;

	display: flex;

	padding: 0.8rem 1rem;
	padding-left: 2.4rem;

	background-color: $color-text;

	border-radius: 0.6rem;
	border: 0.14rem solid $color-accent;

	.notice-info {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.notice-title {
			position: relative;

			svg {
				position: absolute;
				right: calc(100% + 0.6rem);
				top: 50%;
				transform: translateY(-50%);
			}

			h3 {
				color: $color-accent;

				font-weight: 500;
				font-size: $size-text;
				letter-spacing: 2px;
			}
		}

		p {
			color: #ebebeb99;
			font-size: $size-underLink;
			font-weight: 300;
		}
	}
}
</style>
