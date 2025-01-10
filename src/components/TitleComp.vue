<script setup lang="ts">
import ButtonComp from "./UI/ButtonComp.vue"
</script>

<template>
	<div class="content">
		<div class="title">
			<h1>Meow there!</h1>
         <h3>Facts about cats </h3>
		</div>

		<ButtonComp content="Get started" type="accent" />
	</div>
</template>

<style lang="scss" scoped>
.content {
	width: 100%;

	display: flex;
   justify-content: center;
   align-items: center;
	flex-direction: column;
	gap: 4rem;

	.title {
		h1 {
			font-size: var(--size-h1);
		}
      h3 {
         font-size: var(--size-h3);
      }
	}
}
</style>
