let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan Masukan Teks!', m)

   if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!* _Maksimal 10 huruf!_', m)
   

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://tes-apime.herokuapp.com/api/textmaker/zuan?text=' + text + '&theme=zuan1&apikey=tbot' 

conn.sendFile(m.chat, link, 'SGDC.png', 'Nihh Cukk', m)
}

handler.command = /^(zuan(teks|text)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler