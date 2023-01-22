const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*╭──────────┈ 𒈒*
*┊*「 𝐀𝐫𝐫𝐚 𝐂𝐡𝐚𝐧 」
*╰┬─┈* ➩ *「 _𝙎𝙘𝙧𝙞𝙥𝙩_ 」*
*╭┤* *⏤͟͟͞͞⃟𖥂*  Tanya Sama Ownrnya Kak 😝
*│╰────────────┈ ⳹*
*┊*   *「 𝐎𝐰𝐧𝐞𝐫 」*
*┊* 𝐈𝐭'𝐬 𝐌𝐞 : wa.me/6282155796071
*╰═━────────────┈ ⳹*`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'O W N E R','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/",
    mediaType: "VIDEO",
    description: "https://instagram.com/tiaranrftria_?igshid=YmMyMTA2M2Y=", 
    title: 'ArraChan',
    body: wm,
    thumbnail: thumb,
    sourceUrl: "https://instagram.com/tiaranrftria_?igshid=YmMyMTA2M2Y="
  }
  } }) 
          }
handler.help = ['script']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

module.exports = handler