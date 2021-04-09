let handler = function (m) {
  this.sendContact(m.chat, '6283129011845', ' NezaVpn || @neizam_zx01', m)
m.reply('wa.me/6283129011845')
//let pp_owner ='src/Owner.jpg'
//conn.sendFile(m.chat, pp_owner, 'My Owner.jpg', '*This is my owner neza vpn*\n*Contact: https://wa.me/6283129011845*', m)
}

handler.command = /^(owner|creator)$/i

handler.fail = null

module.exports = handler
