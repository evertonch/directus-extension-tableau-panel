<template>
	<div style="height: 100%; width: 100%;">
		<tableau-viz id="viz" :src="url" toolbar="hidden" hide-tabs></tableau-viz>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TableauViz } from '@tableau/embedding-api'

export default defineComponent({
	props: {
		showHeader: {
			type: Boolean,
			default: false,
		},
		url: {
			type: String,
			default: '',
		},
	},
	mounted() {
		let tableauScript = document.createElement('script')
		tableauScript.setAttribute('src', 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js')
		tableauScript.setAttribute('type', 'module')
		document.head.appendChild(tableauScript)
	}
});
</script>

<style scoped>
	#viz {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
</style>