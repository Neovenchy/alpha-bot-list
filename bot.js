const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"


client.on('ready', ready => {
  console.log('ready')
  client.user.setStatus('dnd', 'Alpha Bots!')
  client.user.setGame('Alpha Bots!')
})

client.on('message',async message => {
    if(message.content.startsWith(prefix + "تقديم")) {
  if(!message.channel.guild) return message.reply(' ');
    let acapply = message.guild.channels.find(`name`, "تقديمات");
    if(!acapply) return message.channel.send(":x: لم اجد روم التقديمات");
      let filter = m => m.author.id === message.author.id;
      let botname;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب أسم بوتك الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        botname = collected.first().content;
        let id;
        msg.edit(':scroll: **| من فضلك اكتب اي دي بوتك الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              id = collected.first().content;




              let prefix;
        msg.edit(`:scroll: **| من فضلك اكتب بريفكس بوتك الأن :pencil2:**`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              prefix = collected.first().content;



        let lib;
        msg.edit(`:scroll: **| من فضلك اكتب المكتبة واللغة التي يستخدمها بوتك الأن :pencil2:
مثال :**
\`المكتبة | اللغة\`
\`JS | discord.js\`
\`JS | eris\`
\`PY | discord.py\``).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              lib = collected.first().content;
              let sucount;
        msg.edit(`:scroll: **| من فضلك اكتب عدد سيرفرات ومستخدمين بوتك الأن :pencil2:
مثال :**
\`5 servers | 100 users\``).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              sucount = collected.first().content;



              let website;
        msg.edit(`:scroll: **| من فضلك اكتب موقع بوتك الأن اذا لم يوجد اكتب \`لا يوجد\`** :pencil2:`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              website = collected.first().content;


              let shortdesc;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب نبذة مختصرة عن بوتك الأن... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                shortdesc = collected.first().content;




                let longdesc;
        msg.edit(`:scroll: **| من فضلك اكتب مواصفات ومميزات بوتك الأن :pencil2:**`).then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              longdesc = collected.first().content;


        msg.edit(':shield: **| [ هل قرأت شروط التقديم؟ للموافقة على الشروط اكتب [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          } // ${id} for bot id // ${mwa9fat} for bot features // ${count} for server and member count
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':white_check_mark: | **تم التقديم بنجاح**.');
            collected.first().delete();
           let embed = new Discord.RichEmbed()
        .setColor('#4CE782')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTitle('تقديم جديد :')
        .setDescription(`
**# - اسم البوت** : 
\`${botname}\`
**# - اي دي البوت** :
\`${id}\`
**# - بريفكس البوت** :
\`${prefix}\`
**# - لغة ومكتبة البوت** : 
\`${lib}\`
**# - نبذة مختصرة عن البوت** :
\`${shortdesc}\`
**# - الموقع البوت** :
\`${website}\`
**# - عدد السيرفرات والمستخدمين** :
\`${sucount}\`
`)
.addField('مواصفات البوت :', longdesc)
.setFooter(message.author.username, message.author.avatarURL)
.setTimestamp()     
acapply.send(embed)
          }
        }
    );
});
      });
    }
      );
    });
}
);
})
}
      )
      }
      )
    }
)}
      )}
      )}
      )}
      )}
      )}
      )}
      )}
})

client.login(process.env.token);
