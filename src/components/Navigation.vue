<script setup lang="ts">
import ButtonComp from './UI/ButtonComp.vue';

</script>

<template>
	<nav>
		<div class="content">
			<h1>LONELY43</h1>
			<ul>
            <li><a href=""><ButtonComp content="Media" type="gray" /></a></li>
				<li><a><ButtonComp content="Source" type="primary" /></a></li>
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

      ul {
         display: flex;
         gap: 1rem;
      }
	}
}
</style>
