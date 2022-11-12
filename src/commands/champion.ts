import { ApplicationCommandType, EmbedBuilder } from 'discord.js';

import { Command } from '../structures/Command';
import { LINK } from '../utils/const';

export default new Command({
	type: ApplicationCommandType.ChatInput,
	name: 'champion',
	description: 'Manage your project',
	execute: async ({ interaction }) => {
		const replyEmbed = new EmbedBuilder()
			.setTitle('Champion Dashboard 🏆')
			.setDescription(`Manage your projects [here](${LINK.DASHBOARD})`);

		return interaction.reply({
			embeds: [replyEmbed],
			ephemeral: true
		});
	}
});
