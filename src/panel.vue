<template>
	<div v-if="errorMsg" v-html="errorMsg.outerHTML" style="height: 100%; width: 100%;"></div>
</template>

<script lang="ts">
import { defineComponent, ref, HTMLElement } from 'vue';
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
	setup(props) {
		const errorMsg = ref<HTMLElement | null>(null);
		createViz();

		return {
			errorMsg
		};

		function createViz() {
			const viz = new TableauViz();

			viz.src = props.url;
			viz.toolbar = 'hidden';

			errorMsg.value = viz;
		}
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