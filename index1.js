const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzE1NDgzODA4MDEwNDY5Mzg3.XtCXOA.qcpebtlwoPGKsUrKu1xxQYjRCtw';
const welcomeChannelName = "안녕하세요";
const byeChannelName = "☎수다2";
const welcomeChannelComment = "어서오세요.로그제거님의 방송(시참 디스코드 입니다.) 본 디스코드는 욕설등은 강력한 검열을 통하여 자동 메서지 삭제가 되고 기록이 습니다. 해당 기록을 통해 경고를 주고 있습니다. 필독 ";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);