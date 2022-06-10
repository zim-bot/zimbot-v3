
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

//===> EXTERNAL MODULES
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
rip = new WAConnection()
//const { getBuffer } = require("../root.js");
const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require("axios")
const { default: Axios } = require('axios');
const cheerio = require("cheerio")
const { exec } = require('child_process');
const fs = require('fs');
const qs = require('qs')
const { fromBuffer } = require('file-type')

//===> VARUABLE
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

//===> POST
function post(url, formdata) {
console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
'accept-language': "en-US,en;q=0.9",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
})
}

function pinterest(querry){
return new Promise(async(resolve,reject) => {
axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
headers: {
"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
}
}).then(({ data }) => {
const $ = cheerio.load(data)
const result = [];
const hasil = [];
$('div > a').get().map(b => {
const link = $(b).find('img').attr('src')
result.push(link)
});
result.forEach(v => {
if(v == undefined) return
hasil.push(v.replace(/236/g,'736'))
})
hasil.shift();
resolve(hasil)
})
})
}

function wallpaper(title, page = '1') {
return new Promise((resolve, reject) => {
axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('div.grid-item').each(function (a, b) {
hasil.push({
title: $(b).find('div.info > a > h3').text(),
type: $(b).find('div.info > a:nth-child(2)').text(),
source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
})
})
resolve(hasil)
})
})
}

function wikimedia(title) {
return new Promise((resolve, reject) => {
axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
.then((res) => {
let $ = cheerio.load(res.data)
let hasil = []
$('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
hasil.push({
title: $(b).find('img').attr('alt'),
source: $(b).attr('href'),
image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
})
})
resolve(hasil)
})
})
}

function quotesAnime() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 184)
axios.get('https://otakotaku.com/quote/feed/'+page)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('div.kotodama-list').each(function(l, h) {
hasil.push({
link: $(h).find('a').attr('href'),
gambar: $(h).find('img').attr('data-src'),
karakter: $(h).find('div.char-name').text().trim(),
anime: $(h).find('div.anime-title').text().trim(),
episode: $(h).find('div.meta').text(),
up_at: $(h).find('small.meta').text(),
quotes: $(h).find('div.quote').text().trim()
})
})
resolve(hasil)
}).catch(reject)
})
}

const y2mateV = async (yutub) => {
function post(url, formdata) {
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
'accept-language': "en-US,en;q=0.9",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: new URLSearchParams(Object.entries(formdata))
})
}
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let ytId = ytIdRegex.exec(yutub)
url = 'https://youtu.be/' + ytId[1]
let res = await post(`https://www.y2mate.com/mates/en68/analyze/ajax`, {
url,
q_auto: 0,
ajax: 1
})
const mela = await res.json()
const $ = cheerio.load(mela.result)
const hasil = []
let thumb = $('div').find('.thumbnail.cover > a > img').attr('src')
let judul = $('div').find('.thumbnail.cover > div > b').text()
let quality = $('div').find('#mp4 > table > tbody > tr:nth-child(4) > td:nth-child(3) > a').attr('data-fquality')
let tipe = $('div').find('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(3) > a').attr('data-ftype')
let output = `${judul}.` + tipe
let size = $('div').find('#mp4 > table > tbody > tr:nth-child(4) > td:nth-child(2)').text()
let id = /var k__id = "(.*?)"/.exec(mela.result)[1]
let res2 = await post(`https://www.y2mate.com/mates/en68/convert`, {
type: 'youtube',
_id: id,
v_id: ytId[1],
ajax: '1',
token: '',
ftype: tipe,
fquality: quality
})
const meme = await res2.json()
const supp = cheerio.load(meme.result)
let link = supp('div').find('a').attr('href')
hasil.push({ thumb, judul, quality, tipe, size, output, link})
return hasil
}

const y2mateA = async (yutub) => {
function post(url, formdata) {
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
'accept-language': "en-US,en;q=0.9",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: new URLSearchParams(Object.entries(formdata))
})
}
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let ytId = ytIdRegex.exec(yutub)
url = 'https://youtu.be/' + ytId[1]
let res = await post(`https://www.y2mate.com/mates/en68/analyze/ajax`, {
url,
q_auto: 0,
ajax: 1
})
const mela = await res.json()
const $ = cheerio.load(mela.result)
const hasil = []
let thumb = $('div').find('.thumbnail.cover > a > img').attr('src')
let judul = $('div').find('.thumbnail.cover > div > b').text()
let size = $('div').find('#mp3 > table > tbody > tr > td:nth-child(2)').text()
let tipe = $('div').find('#mp3 > table > tbody > tr > td:nth-child(3) > a').attr('data-ftype')
let output = `${judul}.` + tipe
let quality = $('div').find('#mp3 > table > tbody > tr > td:nth-child(3) > a').attr('data-fquality')
let id = /var k__id = "(.*?)"/.exec(mela.result)[1]
let res2 = await post(`https://www.y2mate.com/mates/en68/convert`, {
type: 'youtube',
_id: id,
v_id: ytId[1],
ajax: '1',
token: '',
ftype: tipe,
fquality: quality
})
const meme = await res2.json()
const supp = cheerio.load(meme.result)
let link = supp('div').find('a').attr('href')
hasil.push({ thumb, judul, quality, tipe, size, output, link})
return hasil
}
async function tiktokDown (Url) {
return new Promise (async (resolve, reject) => {
await axios.request({
url: "https://ttdownloader.com/",
method: "GET",
headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(respon => {
const $ = cheerio.load(respon.data)
const token = $('#token').attr('value')
axios({
url: "https://ttdownloader.com/req/",
method: "POST",
data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
headers: {
"accept": "*/*",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(res => {
const ch = cheerio.load(res.data)
var creator = `lala`
const result = {
status: res.status,
author: `${creator}`,
result: {
nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
audio: ch('#results-list > div:nth-child(4)').find(' div.download > a').attr('href')
}
}
resolve(result)
}).catch(reject)
}).catch(reject)
})
}
const downloadig = async(link, from, rip, prefix) => {
try {
var a = await axios.get(`https://megayaa.herokuapp.com/api/igdl?url=${link}`)
var b = a.data.result
var owner = a.data.owner
var capt = a.data.caption
b.forEach(async(res) => {
if(res.type == 'jpg'){
var c = await getBuffer(res.url)
skiuwers.sendMessage(from, c, MessageType.image, {quoted: rip, caption: `Instagram Downloader\n\nOwner : ${owner}\n\nCaption : ${capt}\n\nType : ${res.type}`})
} else {
var d = await getBuffer(res.url)
skiuwers.sendMessage(from, d, MessageType.video, {quoted: rip, caption: `Instagram Downloader\n\nOwner : ${owner}\n\nCaption : ${capt}\n\nType : ${res.type}` })
}
})
} catch (e) {
console.log(e)
skiuwers.sendMessage(from, 'error, mungkin link tidak valid', MessageType.text)
}
}

const igstory = async(username, from, rip, prefix) => {
try {
var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${username}`)
var username = a.data.username
var count = a.data.stories_count
var b = a.data.data
b.forEach(async(res) => {
if(res.type == 'jpg'){
var c = await getBuffer(res.url)
skiuwers.sendMessage(from, c, MessageType.image)
} else {
var d = await getBuffer(res.url)
skiuwers.sendMessage(from, d, MessageType.video)
}
})
} catch (e) {
console.log(e)
skiuwers.sendMessage(from, 'error, mungkin link tidak valid', MessageType.text)
}
}

function webp2gifFile(path) {
return new Promise((resolve, reject) => {
const bodyForm = new FormData()
bodyForm.append('new-image-url', '')
bodyForm.append('new-image', fs.createReadStream(path))
Axios({
method: 'post',
url: 'https://s6.ezgif.com/webp-to-mp4',
data: bodyForm,
headers: {
'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`
}
}).then(({ data }) => {
const bodyFormThen = new FormData()
const $ = cheerio.load(data)
const file = $('input[name="file"]').attr('value')
const token = $('input[name="token"]').attr('value')
const convert = $('input[name="file"]').attr('value')
const gotdata = {
file: file,
token: token,
convert: convert
}
bodyFormThen.append('file', gotdata.file)
bodyFormThen.append('token', gotdata.token)
bodyFormThen.append('convert', gotdata.convert)
Axios({
method: 'post',
url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
data: bodyFormThen,
headers: {
'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
}
}).then(({ data }) => {
const $ = cheerio.load(data)
const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
resolve({
status: true,
message: "Created By MRHRTZ",
result: result
})
}).catch(reject)
}).catch(reject)
})
}

async function igDownloader(Link) {
const hasil = []
const Form = {
url: Link,
submit: ""
}
await axios(`https://downloadgram.org/`, {
method: "POST",
data:  new URLSearchParams(Object.entries(Form)),
headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"cache-control": "max-age=0",
"content-type": "application/x-www-form-urlencoded",
"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
"cookie": "_ga=GA1.2.1695343126.1621491858; _gid=GA1.2.28178724.1621491859; __gads=ID=8f9d3ef930e9a07b-2258e672bec80081:T=1621491859:RT=1621491859:S=ALNI_MbqLxhztDiYZttJFX2SkvYei6uGOw; __atuvc=3%7C20; __atuvs=60a6eb107a17dd75000; __atssc=google%3B2; _gat_gtag_UA_142480840_1=1"
},
referrerPolicy: "strict-origin-when-cross-origin",
}).then(async res => {
const $ = cheerio.load(res.data)
let url = $('#downloadBox').find('a').attr('href');
await axios(Link, {
method: "GET",
data: null,
headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"cache-control": "max-age=0",
"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
"cookie": "ig_did=08A3C465-7D43-4D8A-806A-88F98384E63B; ig_nrcb=1; mid=X_ipMwALAAFgQ7AftbrkhIDIdXJ8; fbm_124024574287414=base_domain=.instagram.com; shbid=17905; ds_user_id=14221286336; csrftoken=fXHAj5U3mcJihQEyVXfyCzcg46lHx7QD; sessionid=14221286336%3A5n4czHpQ0GRzlq%3A28; shbts=1621491639.7673564; rur=FTW"
},
referrerPolicy: "strict-origin-when-cross-origin"
}).then(respon => {
const ch = cheerio.load(respon.data)
let title = ch('title').text().trim()
const result = {
status: true,
result: {
link: url,
desc: title
}
}
hasil.push(result)
})
})
return hasil[0]
}

async function TiktokDownloader(Url) {
return new Promise (async (resolve, reject) => {
await axios.request({
url: "https://ttdownloader.com/",
method: "GET",
headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(respon => {
const $ = cheerio.load(respon.data)
const token = $('#token').attr('value')
axios({
url: "https://ttdownloader.com/req/",
method: "POST",
data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
headers: {
"accept": "*/*",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(res => {
const ch = cheerio.load(res.data)
const result = {
status: res.status,
result: {
nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
audio: ch('#results-list > div:nth-child(4)').find(' div.download > a').attr('href')
}
}
resolve(result)
}).catch(reject)
}).catch(reject)
})
}
//===> IGDL
function igdl(url_media) {
return new Promise((resolve,reject)=>{
url_media = url_media.replace("reel", "p")
var url = "https://igram.io/i/"
const requestBody = {
url: url_media.replace("reel", "p"),
lang_code: "en"
}
const config = {
headers: { 
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.75', 
'x-requested-with': ' XMLHttpRequest', 
'origin': ' https://igram.io', 
'referer': ' https://igram.io/en/dl/', 
'sec-fetch-dest': ' empty', 
'sec-fetch-mode': ' cors', 
'sec-fetch-site': ' same-origin', 
'Content-Type': 'application/x-www-form-urlencoded', 
'Cookie': '__cfduid=d4c2ddc2229a4d74c28b6ba25cdcd2a181618175605'
},
}
axios.post(url, qs.stringify(requestBody), config).then(result => {
let $ = cheerio.load(result.data), ig = []
//Obter todos os links de videos da pagina carregada
$('[data-mediatype=Video]').each((i, element) => {
let cheerioElement = $(element)
ig.push(cheerioElement.attr("href"))
})
//Obter todos os links de imagem da pagina carregada
$('div > div.bg-white.border.rounded-sm.max-w-md > img').each((i, element) => {
let cheerioElement = $(element)
ig.push(cheerioElement.attr("src"))
})
resolve({
results_number : ig.length,
url_list: ig
})
}).catch(err=>{
console.log(err.response)
reject(err)
})
})
}
//===> FOTOIG
const fotoIg = async (igLink) => {
function post(url, formdata) {
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
 'X-Requested-With': "XMLHttpRequest",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: new URLSearchParams(Object.entries(formdata))
})
}
const hasil = []
const res = await post('https://igdownloader.com/ajax', {
link: igLink, 
downloader: 'photo'
})
const mela = await res.json()
const $ = cheerio.load(mela.html)
let foto = $('div').find('.img-block > div > div.post > img').attr('src')
hasil.push({ foto })
return hasil
}
//===> VIDEOIG
const videoIg = async (igLink) => {
function post(url, formdata) {
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
 'X-Requested-With': "XMLHttpRequest",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: new URLSearchParams(Object.entries(formdata))
})
}
hasil = []
res = await post('https://igdownloader.com/ajax', {
link: igLink, 
downloader: 'video'
})
mela = await res.json()
$ = cheerio.load(mela.html)
let video = $('div').find('.img-block > div > div.post').attr('data-src')
hasil.push({ video})
return hasil
}
//===> AIOVIDEODL
function aiovideodl(link) {
return new Promise((resolve, reject) => {
axios({
url: 'https://aiovideodl.ml/',
method: 'GET',
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
}
}).then((src) => {
let a = cheerio.load(src.data)
let token = a('#token').attr('value')
axios({
url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
method: 'POST',
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"   
},
data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
}).then(({ data }) => {
resolve(data)
})
})
})
}
//===> YTA
function yta(url) {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url)
url = 'https://youtu.be/' + ytId[1]
res = post('https://www.y2mate.com/mates/en60/analyze/ajax', {
url,
q_auto: 0,
ajax: 1
})
.then(res => res.json())
.then(res => {
let document = (new JSDOM(res.result)).window.document
let type = document.querySelectorAll('td')
let filesize = type[type.length - 10].innerHTML
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
let thumb = document.querySelector('img').src
let title = document.querySelector('b').innerHTML
res = post('https://www.y2mate.com/mates/en60/convert', {
type: 'youtube',
_id: id[1],
v_id: ytId[1],
ajax: '1',
token: '',
ftype: 'mp3',
fquality: 128
})
.then(res => res.json())
.then(res => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
resolve({
dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
thumb,
title,
filesizeF: filesize,
filesize: KB
})
}).catch(reject)
}).catch(reject)
} else reject('URL INVALID')
})
}
//===> YTV
function ytv(url) {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url)
url = 'https://youtu.be/' + ytId[1]
res = post('https://www.y2mate.com/mates/en60/analyze/ajax', {
url,
q_auto: 0,
ajax: 1
})
.then(res => res.json())
.then(res => {
let document = (new JSDOM(res.result)).window.document
let typo = document.querySelectorAll('td')
let filesize = typo[typo.length - 23].innerHTML
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
let thumb = document.querySelector('img').src
let title = document.querySelector('b').innerHTML
res = post('https://www.y2mate.com/mates/en60/convert', {
type: 'youtube',
_id: id[1],
v_id: ytId[1],
ajax: '1',
token: '',
ftype: 'mp4',
fquality: 360
})
.then(res => res.json())
.then(res => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
resolve({
dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
thumb,
title,
filesizeF: filesize,
filesize: KB
})
}).catch(reject)
}).catch(reject)
} else reject('URL INVALID')
})
}   
//===> FBDOWN
const fbDown = async (fbLink) => {
function post(url, formdata) {
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
'X-Requested-With': "XMLHttpRequest",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: new URLSearchParams(Object.entries(formdata))
})
}
const res = await post('https://saveas.co/system/action.php', {
url: fbLink, 
token: ''
})
const mela = await res.json()
const hasil = []
let judul = mela.title
let source = mela.source
let thumb = mela.thumbnail
let link = mela.links[1].url
let size = mela.links[1].size
let quality = mela.links[1].quality
let type = mela.links[1].type
hasil.push({ judul, source, thumb, link, size, quality, type }) 
return hasil
}
const lirikLagu = async (query) => {
const res = await axios.get(`https://www.musixmatch.com/search/${query}`)
const sup = cheerio.load(res.data)
const hasil = []
const b = sup('#site').find('div > div > div > div > ul > li:nth-child(1) > div > div > div')
let link = `https://www.musixmatch.com` + sup(b).find('h2 > a').attr('href')
const des = await axios.get(link)
const soup = cheerio.load(des.data)
const result = soup('#site').find('.mxm-lyrics__content > .lyrics__content__ok').text()
hasil.push({ result})
return hasil
}
const newsCnn = async(genre) => {
const res = await axios.get(`https://www.cnnindonesia.com/${genre}`) 
const $ = cheerio.load(res.data)
const hasil = []
$('article').each(function(a, b) {
const link = $(b).find('a').attr('href')
const thumb = $(b).find('img').attr('src') 
const judul = $(b).find('img').attr('alt')
hasil.push({ judul, link, thumb })
}) 
return hasil
}
const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}
const jadwalSolat = async(tempat) => {
const url = `https://m.dream.co.id/jadwal-salat/${tempat}`
const res = await axios.get(url)
const $ = cheerio.load(res.data)
const a = $('table').find('tbody > tr > td')
hasil = []
const emror = "_[ ! ] Error Daerah Tidak DiTemukan_"
const daerah = url.split('/')[4]
const tanggal = $(a).eq(0).text()
const shubuh = $(a).eq(1).text()
const dzuhur = $(a).eq(2).text()
const ashar = $(a).eq(3).text()
const maghrib = $(a).eq(4).text()
const isya = $(a).eq(5).text()
hasil.push({ daerah, tanggal, shubuh, dzuhur, ashar, maghrib, isya})
return hasil
}
const wikiSearch = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()
hasil.push({ wiki, thumb, judul })
return hasil
}
//===> UPLOAD
function upload (media)  {
return new Promise(async (resolve, reject) => {
try {
let { ext } = await fromBuffer(media)
console.log('Uploading image to server telegra.ph')
let form = new FormData()
form.append('file', media, 'tmp.' + ext)
await fetch('https://telegra.ph/upload', {
method: 'POST',
body: form
})
.then(res => res.json())
.then(res => {
if (res.error) return reject(res.error)
resolve('https://telegra.ph' + res[0].src)
})
.catch(err => reject(err))
} catch (e) {
return console.log(e)
}
})
}

module.exports = { pinterest, wallpaper, wikimedia, quotesAnime, y2mateA, y2mateV, wikiSearch, jadwalSolat, tiktokDown, igstory, downloadig, mediafireDl, newsCnn, lirikLagu, TiktokDownloader, igDownloader, webp2gifFile, fbDown, fotoIg, videoIg, igdl, aiovideodl, upload, yta, ytv }