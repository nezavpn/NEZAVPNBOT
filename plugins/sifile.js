let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Apa Yang Mau Dicari?!', m)

  await m.reply('*[ WAIT ]* _Searching..._')
axios.get(`https://fzn-gaz.herokuapp.com/api/sfile?search=${text}`).then((res) => {
    let hasil = Object.entries, `*SFILE SEARCH*\n\n${res.data.result}*.join`\n\n`, m)
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(sfile)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler