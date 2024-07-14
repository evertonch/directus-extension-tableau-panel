import { definePanel } from '@directus/extensions-sdk';
import PanelComponent from './panel.vue';

export default definePanel({
	id: 'tableau',
	name: 'Tableau Embedded',
	icon: 'box',
	description: 'Tableau Embedded',
	component: PanelComponent,
	options: [
		{
			field: 'url',
			name: 'URL',
			type: 'string',
			meta: {
				interface: 'input',
				width: 'full',
			},
		},
	],
	minWidth: 12,
	minHeight: 8,
});
