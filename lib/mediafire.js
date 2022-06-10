
// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃THANKS TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//

const axios = require('axios')
const cheerio = require('cheerio')

const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}


module.exports = { mediafireDl }