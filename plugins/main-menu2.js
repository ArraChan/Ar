const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/qr/HNCAW6POLGFJN1`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Its Me : Arra`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `*「 ❗ 」 Alo Kak 😝*`
let isi =`*ʙᴏᴛ* *ʙᴜɪʟᴅ-ᴏᴘᴇʀᴀᴛᴇ-ᴛʀᴀɴsғᴇʀ* _ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴋᴏᴍᴘᴜᴛᴇʀ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴋʜᴜsᴜs ᴅɪʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ-ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪs, ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴅɪʀᴀɴᴄᴀɴɢ sᴇᴅᴇᴍɪᴋɪᴀɴ ʀᴜᴘᴀ sᴇʜɪɴɢɢᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ɴʏᴀᴍᴀɴ, ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴇᴅɪᴋɪᴛ ʙᴜɢ, ᴀᴅᴀɴʏᴀ ғɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ɪɴɪ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ʙᴇʀsᴇɴᴀɴɢ sᴇɴᴀɴɢ, ᴅʟʟ_\n\n𝙆𝙖𝙡𝙖𝙪 𝘼𝙙𝙖 𝙔𝙜 𝙀𝙧𝙧𝙤𝙧,𝙏𝙖𝙣𝙮𝙖 𝘼𝙟𝙖 𝙆𝙚 𝙊𝙬𝙣𝙚𝙧 𝙔𝙖 𝙆𝙖𝙠 😉\n${tag} (Owner)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/23ff51dab37d4b10ee604.jpg`, str, isi, 'Menu', '.command', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw',
    mediaType: 2, 
    description: urlnya,
    title: "Follow IG Aku Kak >_",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://instagram.com/tiaranrftria_?igshid=YmMyMTA2M2Y='
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
