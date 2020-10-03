const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

const PREFIX = '*';

var version = '1.0.0';

var servers = {};

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity(':lollipop: ', { type: 'PLAYING'}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{
     const channel = member.guild.channels.find(channel => channel.name === "bot-announcements📣");
     if(!channel) return;

     channel.send(`Welcome to Hawkins, ${member}, Have Fun!`)
});

bot.on('message', msg=>{
    if(msg.content === "halo"){
        msg.reply('Hello Friend!');}
        else if(msg.content === "hai"){
            msg.reply('Hello Friend!');}
            else if(msg.content === "hei"){
                msg.reply('Hello Friend!');}
                else if(msg.content === "hi"){
                    msg.reply('Hello Friend!');}
                    else if(msg.content === "alo"){
                        msg.reply('Hello Friend!');}
                       
})


// bot.on('message', message=>{

//     let args = message.content.substring(PREFIX.length).split(" ");

//     switch(args[0]){
//         // case 'ping':
//         //     message.channel.send('pong!')
//         // break;
        
//         // case 'clear':
//         //     if(!args[1]) return message.reply('Error. Please define second arg')
//         //     message.channel.bulkDelete(args[1]);
//         //     break;

//             //--------MASIH ERROR
//         // case 'info':
//         //     const embed = new Discord.MessageEmbed()
//         //     .setTitle('User Information')
//         //     .addField('Player Name', message.author.username, true)
//         //     .addField('Version',version, true)
//         //     .addField('Current Server', message.guild.name, true)
//         //     .setColor(0xF1C40F)
//         //     .setThumbnail(message.author.displayAvatarURL())
//         //     .setFooter('This is your Information')
//         //     message.channel.send(embed);
//         //     break;
        
//         case 'p':

//             function play(connection, message){
//                 var server = servers[message.guild.id];


//                 server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

//                 server.queue.shift();

//                 server.dispatcher.on("end", function(){
//                     if(server.queue[0]){
//                         play(connection, message); 
//                     }
//                     else {
//                         connection.disconnect();
//                     }

//                 });
//             }

//             if(!args[1]){
//                 message.channel.send("you need to provide a link!");
//                 return;
//             }

//             if(!message.member.voiceChannel){
//                 message.channel.send("You must be in a channel to play a bot");
//                 return;
//             }

//             if(!servers[message.guild.id]) servers[message.guild.id] = {
//                 queue: []
//             }

//             var server = servers[message.guild.id];

//             server.queue.push(args[1]);

//             if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
//                 play(connection, message);
//             })
//         break;
       

//         case 's':
//             var server = servers[message.guild.id];
//             if(server.dispatcher) server.dispatcher.end();
//             message.channel.send("Skipping...")
//         break;

//         case 'leave':
//             var server = servers[message.guild.id];
//                 for(var i = server.queue.length -1; i >=0; i--){
//                     server.queue.splice(i,1);
//                 }

//                 server.dispatcher.end();
//                 message.channel.send("Leaving...")
//                 console.log('stopped the queue')
//         }

//         if(message.guild.connection) message.guild.voiceConnection.disconnect();
// })


bot.login(process.env.token);
