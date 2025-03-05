<script setup lang="ts">
import { getFact } from "@/scripts/api"
import { onMounted, ref } from "vue"
import ButtonComp from "../UI/ButtonComp.vue"

const fact = ref<string>("Looking for fact...")

onMounted(async () => {
	getNewFact()
})

async function getNewFact() {
	fact.value = "Looking for fact..."
	fact.value = await getFact()
}
</script>

<template>
	<div class="facts">
		<div class="content">
			<div class="info">
				<div class="info-title">
					<h3>Fact of day:</h3>
				</div>
				<div class="info-fact">
					<p>{{ fact }}</p>
				</div>
			</div>

			<div class="btns">
				<ButtonComp @click="getNewFact" type="primary">
					New fact
				</ButtonComp>
				<ButtonComp type="secondary">
					<img src="/src/assets/imgs/globe.svg" alt="globe">
				</ButtonComp>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.facts {
	min-height: 100dvh;

	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	.content {
		width: 100%;
		min-height: 20rem;

		padding: 4rem 2rem;
		
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;

		background-color: $color-background;
		box-shadow: 0 0 1rem .2rem rgb(226, 226, 226);
		border-radius: 1rem;

		.info {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			text-align: center;

			.info-title {
				h3 {
					font-size: $size-h3;
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

		.btns {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
		}
	}
}
</style>
