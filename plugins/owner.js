let handler = function (m) {
  this.sendContact(m.chat, '6283129011845', '꧁࿇NezaVpn࿇꧂', m)
//let pp_owner ='src/Owner.jpg'
//conn.sendFile(m.chat, pp_owner, 'My Owner.jpg', '*This is my owner Neza Vpn*\n*Contact: https://wa.me/6283129011845*', m)
}

handler.command = new  RegExp
handler.customPrefix = /^(owner|creator|pemilik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
