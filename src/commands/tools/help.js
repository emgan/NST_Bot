const{ SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('return an help message for the bot'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply : true
        });
        
        const newMessage = `This bot can take a content image and a style image to create a new image with the content from the content image and with the style from the style image.`
        await interaction.editReply({
            content:newMessage
        });
    }
}