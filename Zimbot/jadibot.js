// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮ZimBotInc SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF ZimBotInc SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃ZimBotInc SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃THANKS TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//

let { default: makeWASocket, useSingleFileAuthState } = require('@adiwajshing/baileys')
let { state, saveState } = useSingleFileAuthState('./sessions.json')
let QR = require('qrcode')
let util = require('util')
let pino = require('pino')

exports.jadibot = async (conn, m) => {
     let ZimBotInc = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        auth: state,
		browser: ['ZIM BOT JADI']
})

ZimBotInc.ev.on('connection.update', async (update) => {
		const { connection, qr } = update
		if (qr !== undefined) {
			let res = await QR.toDataURL(qr, { scale: 8 })
			let scan = await conn.sendFile(m.key.remoteJid, res, '', 'Scan bang...', m)
			setTimeout(() => {
				conn.sendMessage(m.key.remoteJid, { delete: { remoteJid: m.key.remoteJid, fromMe: true, id: scan.key.id, participant: conn.user.jid }})
			}, 30000)
			if (connection === 'open') {
				conn.reply(m.key.remoteJid, 'Sukses konek\n' + util.format(ZimBotInc.user), m)
			}
		}
	})
}