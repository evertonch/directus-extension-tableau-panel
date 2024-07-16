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
				required: true,
				validation: {
					_and: [
						{
							url: {
								_regex: "https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
							}
						}
					]
				},
				validation_message: "The value should be a valid url"
			},
		},
	],
	minWidth: 12,
	minHeight: 8,
});
