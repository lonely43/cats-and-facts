<script setup lang="ts">
import { getFact, translate } from "@/scripts/api"
import { onMounted, ref } from "vue"
import ButtonComp from "../UI/ButtonComp.vue"

const fact = ref<string>("Looking for fact...")

const lang = ref<string>("ru")
const langCodes = ref(["ru", "en", "zh"])

onMounted(async () => {
	await getNewFact()
})

async function getNewFact() {
	fact.value = "Looking for fact..."
	fact.value = await getFact()
}

async function translateFact() {
	fact.value = await translate(fact.value, lang.value)
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
				<ButtonComp id="seeFact" @click="getNewFact" type="primary"> New fact </ButtonComp>

				<div class="dropdown">
					<div class="dropdown-title">
						<ButtonComp type="secondary" @click="translateFact">
							<img src="/src/assets/imgs/globe.svg" alt="globe" />
						</ButtonComp>
					</div>

					<ul class="dropdown-list">
						<li v-for="code in langCodes">
							<p @click="lang = code">{{ code }}</p>
						</li>
					</ul>
				</div>
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
		box-shadow: 0 0 1rem 0.2rem rgb(226, 226, 226);
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

	.dropdown {
		position: relative;

		@keyframes showDrop {
			0%{
				display: flex;
				opacity: 0;
			}
			100%{
				display: flex;
				opacity: 1;
			}
		}

		&:hover .dropdown-list {
			opacity: 1;
			display: flex;
		}

		.dropdown-list {
			animation: showDrop 400ms;
			$dropdown-gap: .6rem;

			position: relative;

			&::before{
				position: absolute;
				left: 0;
				bottom: 101%;
				width: 100%;
				height: $dropdown-gap;
				content: "";
			}

			z-index: 1;

			display: none;
			transition: 400ms;
			opacity: 0;

			position: absolute;
			top: calc(100% + $dropdown-gap);
			left: 50%;
			transform: translateX(-50%);

			padding: 0.4rem 0.6rem;

			background-color: $color-gray;
			border: 0.1rem solid $color-gray-dark;
			border-radius: 0.6rem;

			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.2rem;

			li {
				display: flex;
				justify-content: center;
				align-items: center;

				p {
					cursor: pointer;
					transition: opacity 200ms;
					&:hover {
						opacity: 0.6;
					}
				}
			}
		}
	}
}
</style>
