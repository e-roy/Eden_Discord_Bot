import { ApplicationCommandOptionChoiceData } from 'discord.js';
import { Auto } from '../structures/AutoComplete';
import { myCache } from '../structures/Cache';

export default new Auto({
	correspondingCommandName: 'set',
	execute: ({ interaction }) => {
		const guildId = interaction.guild.id;
		const { name, value } = interaction.options.getFocused(true);
		if (!myCache.myHas('Servers') || !myCache.myGet('Servers')[guildId]) return interaction.respond([]);
		const guildInform = myCache.myGet('Servers')[guildId];

		let filter: Array<ApplicationCommandOptionChoiceData> = [];
		switch (name) {
			case 'role': {
				const currentRoles = guildInform.adminRole;
				filter = currentRoles
					.map((roleId) => ({
						name: interaction.guild.roles.cache.get(roleId)?.name,
						value: roleId
					}))
					.filter((res) => res.name.includes(value.toString()));
				break;
			}
			case 'member': {
				const currentMembers = guildInform.adminMember;
				filter = currentMembers
					.map((memberId) => ({
						name: interaction.guild.members.cache.get(memberId)?.displayName,
						value: memberId
					}))
					.filter((res) => res.name.includes(value.toString()));
				break;
			}
			case 'command': {
				const currentCommands = guildInform.adminCommand;
				filter = currentCommands
					.filter((command) => command.includes(value.toString()))
					.map((command) => ({
						name: command,
						value: command
					}));
				break;
			}
		}
		if (filter.length === 0) return interaction.respond([]);
		else return interaction.respond(filter);
	}
});
