
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	dapa: 'https://dapuhy.xyz'
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '7A012A0F7751',
	'https://dapuhy.xyz': 'piceg'
}

// Other
global.owner = ['989339658384']
global.premium = ['989339658384']
global.botname = 'BALOCH EDIT'
global.ownername = 'HOSEIN SARBAZI'
global.group1 = 'https://chat.whatsapp.com/DtpQbVzujrfLRB2xvl97pp'
global.group2 = 'https://chat.whatsapp.com/EWXqwpZO0GL45MP1ys3asy'
global.packname = 'BALOCH EDIT'
global.ytchannel = 'https://youtube.com/channel/UCIdvdgFwdssFC0Nxx9Xk1dQ'
global.monayawal = '100000'
global.darahawal = '100'
global.besiAwal = '15'
global.goldAwal = '10'
global.emeraldAwal = '5'
global.umpanAwal = '5'
global.potionAwal = '1'
global.dripstyping = false
global.dripsreadgroup = false
global.dripsreadall = false
global.dripsrecord = false
global.available = false
global.unavailable = true
global.limittot = 100,
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.author = 'BALOCH EDIT'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*success whoa*',
        ban: '*Sorry, looks like u got banned😔😔 type .owner To request unban okay*',
    horny: '*nsfw is disabled please ask owner to enable it*',
    admin: '*this cmd is for admin only , l can feel you but sorry okay*',
    botAdmin: '*with due respect can you please give bot adminship*',
    owner: '*this cmd is for bot owner only , l can feel you but sorry okay*',
    group: '*this feature is only for groups okay*',
    private: '*this feature can only used in dm okay*',
    bot: '*Special Features for User Bot Number okay*',
    wait: '*whoa wait zim bot processing okay*',
    endLimit: '*Brothers Daily Limit Has Expired, Type .buy limit amount limit to buy limit, Note: Limit will be reset every 12 hours*',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')  
global.bc = fs.readFileSync('./lib/bc.jpg')
global.visoka = { url: 'https://i.ibb.co/DR1Fk9N/IMG-20220820-WA0001.jpg' }
global.vid = { url: 'https://i.ibb.co/5W3gfSG/image.jpg' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
