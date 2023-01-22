const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const moment = require('moment-timezone')
let handler = async (m) => {
let Jimp = require('jimp')
const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let thumb = await(await fetch(wibu)).buffer()
let ftoko = {
    key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + time,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
let duit = `*────── 「 ${wm} 」 ──────*
╭─────━━━━━ᑀᑁ
│𖥂 Mau Sewa BOT Yah kak?
╰───┬──━━━━ᑀᑁ
             │𖥂 Harga Sewa BOT 𖥂
             ├➩ 1Bulan = 10.000
             ├➩ 2Bulan = 20.000
             ├➩ Permanen = 50.000
             ├PAKET PROMO 1 Jan - 30 Des
             ├➩ 7Hari = 5.000
             ├➩ 1Bulan = 10.000
             ├➩ Permanent = 45.000
╭───┴──━━━━ᑀᑁ
│Bot dapat disewa dengan harga yang
│Sesuai dengan price list diatas Ya Kak
│Silahkan Chat Owner aja Kak 
│Chat No Dibawah jika berminat.
╰──────━━━━ᑀᑁ
Contact person Owner:
wa.me/6282155796071 (Owner)`
let imgnya = 'https://telegra.ph/file/bac6ce04e7b7913167254.jpg'
conn.sendButtonImg(m.chat, await reSize(imgnya, 200, 200), duit, wm, 'OWNER', '.owner', ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namabot, body: date, sourceUrl: linkyt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}

handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot|bit)|sewa$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}