<script setup lang="ts">
const emit = defineEmits(["close"])

import { onMounted, ref } from "vue"
import Aftung from "./aftung.vue"
import styles from "@/assets/variables.module.scss"

const color = ref(styles.colorAccent)

onMounted(() => {
	setTimeout(() => {
		emit("close")
	}, 3000)
})
</script>
<template>
	<div class="notice-box">
		<div class="notice-info">
			<div class="notice-title">
				<h3>Erorr</h3>
				<Aftung :color="color" />
			</div>

			<div class="slot">
				<slot></slot>
			</div>
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

	padding: 0.6rem 1rem;

	background-color: $color-text;

	border-radius: 0.6rem;
	border: 0.14rem solid $color-accent;

	.notice-info {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;

		.notice-title {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			h3 {
				color: $color-accent;

				font-weight: 500;
				font-size: $size-text;
				letter-spacing: 2px;
			}
		}

		.slot {
			font-size: $size-underLink;

			* {
				color: #ebebeb99;
				font-weight: 400;
			}
		}
	}
}
</style>
