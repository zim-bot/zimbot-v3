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
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { spawn, exec } = require("child_process");
const yt = require("yt-search");
const FormData = require("form-data");
const got = require("got")
const print = (message) => {
	return console.log(message)
}

async function ManggaToon(judul) {
	try {
		const link = await axios.get(`https://mangatoon.mobi/id/search?word=${judul}`) 
		const c = cheerio.load(link.data)
		let id = c('#page-content').find('div.search-page > div > div.comics-result > div.recommended-wrap > div > div > a').attr('href') || 'undefined'
		if(id === 'undefined') {
			const link2 = await axios.get(`https://mangatoon.mobi/en/search?word=${judul}`)
			const C = cheerio.load(link2.data)
			let id2 = C('#page-content').find('div.search-page > div > div.comics-result > div.recommended-wrap > div > div:nth-child(1) > a').attr('href')
			const data = await axios.get(`https://mangatoon.mobi${id2}`)
			const $ = cheerio.load(data.data)
			var judul = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-title-bg > span').text().trim()
			var genre = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-tags-info > span').text().trim()
			var author = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-author-name > span').text().trim()
			var thumb = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-img > img.big-img').attr('src');
			var LinkKe = $('#page-content').find('div.detail-wrap > div.detail-interact > a').attr('href')
			var Link = `https://mangatoon.mobi${LinkKe}`
			let Author = author.replace('Nama Author: ', '');
			let hasil = {
				judul, thumb, genre, Author, Link
			}
			return hasil
		} else {
		const data = await axios.get(`https://mangatoon.mobi${id}`)
		const $ = cheerio.load(data.data)
		var judul = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-title-bg > span').text().trim()
		var genre = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-tags-info > span').text().trim()
		var author = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-info > div.detail-author-name > span').text().trim()
		var thumb = $('#page-content').find('div.detail-wrap > div.detail-top-info > div.detail-img > img.big-img').attr('src');
		var LinkKe = $('#page-content').find('div.detail-wrap > div.detail-interact > a').attr('href')
		var Link = `https://mangatoon.mobi${LinkKe}`
		let Author = author.replace('Nama Author: ', '');
		let hasil = {
			judul, thumb, genre, Author, Link
		}
		return hasil
	}
		} catch (err) {
			return `Not Found 404`
		}
}
async function emoji(emoticon) {
	const emojii = encodeURI(`${emoticon}`)
	const link = await axios.get(`https://emojipedia.org/${emojii}/`)
	const $ = cheerio.load(link.data)
	var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var softbank = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var docomo = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var KDDI = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	const result = {
		apple: apple.replace('120', '240'),
		google: google.replace('120', '240'),
		samsung: samsung.replace('120', '240'),
		microsoft: microsoft.replace('120', '240'),
		whatsapp: whatsapp.replace('120', '240'),
		twitter: twitter.replace('120', '240'),
		facebook: facebook.replace('120', '240'),
		jooxPixel: jooxpixel.replace('120', '240'),
		openemoji: openmoji.replace('120', '240'),
		emojidex: emojidex.replace('120', '240'),
		messanger: messager.replace('120', '240'),
		LG: LG.replace('120', '240'),
		HTC: HTC.replace('120', '240'),
		mozilla: mozilla.replace('120', '240'),
		softbank: softbank.replace('120', '240'),
		docomo: docomo.replace('120', '240'),
		KDDI: KDDI.replace('120', '240')
	}
	return result
}

async function RandomCerpen() {
	try{
	const link = await axios.get(`http://cerpenmu.com/`)
	const c = cheerio.load(link.data)
	let kumpulan = []
	c('#sidebar > div').each(function (real, ra) {
		c(ra).find('ul > li').each(function (i, rayy) {
			let random = c(rayy).find('a').attr('href')
			kumpulan.push(random)
		})
	})
	var acak = kumpulan[Math.floor(Math.random() * (kumpulan.length))]
	let Otw = await axios.get(`${acak}`)
	const C = cheerio.load(Otw.data)
	let otw = []
	C('#content > article > article').each(function (a, b) {
		let random = C(b).find('h2 > a').attr('href')
		otw.push(random)
	})
	var Acak = otw[Math.floor(Math.random() * (otw.length))]
	let Link = await axios.get(`${Acak}`)
	let $ = cheerio.load(Link.data)
	let judul = $('#content').find('article > h1').text().trim()
	let karangan = $('#content').find('article > a:nth-child(2)').text().trim()
	let Isi = []
	$('#content > article > p').each(function (wm, Ra) {
		let isi = $(Ra).text().trim()
		Isi.push(isi)

	})
	let cerita = []
	for (let i of Isi) {
		cerita += i
	}
	const data = {
		status: 200,
		author: 'RA BOT',
		result: {
			Judul: judul,
			Penulis: karangan,
			sumber: Acak,
			cerita: cerita
		}
	}
	return data
} catch (err) {
	const res404 = {
		status: 500,
		author: 'RA BOT',
		Pesan: 'Udah Ga work?:/ cp: 082149344210'
	}
	return res404
}
}
async function stickerSearch(querry) {
	const link = await axios.get(`https://getstickerpack.com/stickers?query=${querry}`);
	const $ = cheerio.load(link.data)
	let sticker1 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > img').attr('src'),
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > span.title').text().trim(),
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > span.username').text().trim()
	}
	let sticker2 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > span.username').text().trim() 
	}
	let sticker3 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > span.username').text().trim() 
	}
	let sticker4 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > span.username').text().trim() 
	}
	let sticker5 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > span.username').text().trim() 
	}
	let sticker6 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > span.username').text().trim() 
	}
	let sticker7 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > span.username').text().trim() 
	}
	let sticker8 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > span.username').text().trim() 
	}
	let sticker9 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > span.username').text().trim() 
	}
	let sticker10 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > span.username').text().trim() 
	}
	let sticker11 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > span.username').text().trim() 
	}
	let sticker12 = {
		sticker: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > img').attr('src') ,
		nama: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > span.title').text().trim() ,
		creator: $('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > span.username').text().trim() 
	}
	let stickerlop =  [
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(1) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(2) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(3) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(4) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(5) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(6) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(7) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(8) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(9) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(10) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(11) > a > div > img').attr('src'),
		$('#stickerPacks').find('div > div:nth-child(3) > div:nth-child(12) > a > div > img').attr('src')
	]
let data = {
		sticker: stickerlop, sticker1, sticker2, sticker3, sticker4, sticker5, sticker6, sticker7, sticker8, sticker9, sticker10, sticker11, sticker12
	}
	return data
}

async function RamalJadian(tanggal, bulan, tahun) {
	if(isNaN(tanggal) && isNaN(bulan) && isNaN(tahun)) return `Tanggal bulan tahun harus berupa angka`
	const link = await axios.get(`https://www.primbon.com/tanggal_jadian_pernikahan.php?tgl=${tanggal}&bln=${bulan}&thn=${tahun}&proses=+Submit%21+`)
	const $ = cheerio.load(link.data)
	let tanggall = $('#body').text().trim()
	let a = tanggall.replace('MAKNA TANGGAL JADIAN, PERNIKAHAN', '').replace('Karakteristik:', '\nKarakteristik : ').replace('< Hitung Kembali', '')
	return a
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
				author: "RA BOT",
				result: {
					link: url,
					desc: title,
					LinkAwal: Link
				}
			}
			hasil.push(result)
		})
	})
	return hasil[0]
}
function Pantun() {
	const pantun = fs.readFileSync('./database/pantun.json')
	const data = JSON.parse(pantun)
	const acak = data[Math.floor(Math.random() * (data.length))]
	return acak
}
function trutdare(querry) {
	const trdr = fs.readFileSync('./database/truthdare.json') // tempat simpen file lu
	const result = JSON.parse(trdr)
	if(querry === 'truth id') {
		let res = result.Truth.id[Math.floor(Math.random() * result.Truth.id.length)]
	return res
	} else if (querry === 'truth eng') {
		let res = result.Truth.eng[Math.floor(Math.random() * result.Truth.eng.length)]
		return res
	} else if(querry === 'dare id') {
		let res = result.Dare.id[Math.floor(Math.random() * result.Dare.id.length)]
		return res
	} else if(querry === 'dare eng') {
		let res = result.Dare.eng[Math.floor(Math.random() * result.Dare.eng.length)]
		return res
	} else {
		return `Querry tidak terdaftar dimenu harap masukkan dengan benar.\n\ncara pakai :\n1. trutdare('truth id')\n2. trutdare('truth eng')\n3. trutdare('dare id')\n4. trutdare('dare eng')`
	}
}
async function SearchFilm(querry) {
	const link =  await axios.get(`https://123movies.mom/search/?keyword=${querry}`)
	const $ = cheerio.load(link.data)
	let hasil = []
	let result = []
	$('#main').each(function (a, b) {
			 $(b).find('div').each(function (c, d) {
				let url = $(d).find('a').attr('href')
				let img = $(d).find('a > img').attr('src')
				let judul = $(d).find('a > img').attr('alt')
				let data = {
					judul: judul,
					thumb: img,
					url: url
				}
				result.push(data)
			})
			for (let i = 29; i < result.length; i++) {
			hasil.push(result[i])
			}
	})
	return hasil
}
function FaktaUnik() {
	const fakta = fs.readFileSync('./database/faktaunik.json')
	const data = JSON.parse(fakta)
	const acak = data[Math.floor(Math.random() * (data.length))]
	return acak
}
async function Liriklagu(querry) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.musixmatch.com/search/" + querry,
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"cache-control": "max-age=0",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\""
			}
		}).then(async res => {
			const ch = cheerio.load(res.data)
			let Url = ch('#search-all-results').find('div.main-panel > div:nth-child(1) > div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href')
			await axios.request({
				url: "https://www.musixmatch.com"+ Url,
				method: "GET",
				data: null,
				headers: {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					"if-none-match": "W/\"252c5-LEqIxy/rzHPI2QxgG5//NcL3YjQ\"",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
					'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
				}
			}).then(({ data }) => {
				const $ = cheerio.load(data)
				let judul = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim()
				let artis = $('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim()
				let thumb = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div > img').attr('src')
				let lirik = []
				$('#site > div > div > div > main > div > div > div.mxm-track-lyrics-container').find('div.container > div > div > div > div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function (a, b) {
					let isi = $(b).find('span').text().trim()
					lirik.push(isi)
				})
				const result = {
					result: {
						judul: judul.replace('Lyrics', ''),
						penyanyi: artis,
						thumb: "https:" + thumb,
						lirik: lirik[0]
					}
				}
				resolve(result)
			}).catch(reject)
		})
	})
}
async function infoFilm123(url) {
	try{
	const link =  await axios.get(`${url}`)
	const $ = cheerio.load(link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h1').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1) > a').text().trim()
	let aktor = []
	$('div.mvi-content').each(function (a, b) {
		let res = $(b).find('div.mvic-desc > div.mvic-info > div.mvici-left > p > a').text().trim()
		aktor.push(res)
	})
	let country = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(4) > a').attr('title')
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > strong').text().trim()
	let kualitas = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let publish = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(4) > a').text().trim()
	let tag = []
	$('#mv-keywords').each(function (c, d) {
		let res = $(d).find('a').text().trim()
		tag.push(res)
	})
	let thumb = $('#mv-info').find('div.player-holder > a').attr('style')
	let video = $('#mv-info').find('div.player-holder > a').attr('href')
	var result = {
		judul: judul,
		thumbail: thumb.replace('background-image: url', '').replace('(', '').replace(')', ''),
		genre: genre,
		video: video,
		negara: country,
		durasi: durasi,
		quality: kualitas,
		rilis: publish,
		aktor: aktor,
		hastag: tag
	}
	return result
} catch (err) {
	return `Judul tidak ditemukan`
}
} 

async function Otakudesu(querry) {
	try {
	const link = await axios.get(`https://otakudesu.moe/?s=${querry}&post_type=anime`)
	const c = cheerio.load(link.data)
	let id = c('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href')
	const Link = await axios.get(id)
	const $ = cheerio.load(Link.data)
	let judul = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().trim()
	let judulJpn = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().trim()
	let score = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().trim()
	let Produser = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().trim()
	let Type = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().trim()
	let Status = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().trim()
	let TotalEpisode = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().trim()
	let durasi = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().trim()
	let Rilis = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().trim()
	let studio = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().trim()
	let genre = $('#venkonten').find('div.venser > div.fotoanime > div.infozin > div > p:nth-child(11) > span').text().trim()
	let thumb = $('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
	let Sinopsis = $('#venkonten > div.venser > div.fotoanime > div.sinopc').find('p').text().trim()
	let LinkDown = $('#venkonten').find('div.venser > div:nth-child(8) > ul > li:nth-child(4) > span:nth-child(1) > a').attr('href')
	const data = {
		author: 'Ra bot',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			japan: judulJpn,
			rating: score,
			produser: Produser,
			type: Type,
			status: Status,
			episode: TotalEpisode,
			durasi: durasi,
			rilis: Rilis,
			studio: studio,
			genre: genre,
			LinkDown: LinkDown,
			sinopsis: Sinopsis
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function wikipedia(querry) {
	try {
	const link =  await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
	const $ = cheerio.load(link.data)
	let judul = $('#firstHeading').text().trim()
	let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
	let isi = []
	$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
		let penjelasan = $(Ra).find('p').text().trim()
		isi.push(penjelasan)
	})
	for(let i of isi) {
	const data = {
		author: 'Ra bot',
		status: link.status,
		result: {
			judul: judul,
			thumb: 'https:'+thumb,
			isi: i
		}
	}
	return data
}
	} catch (err) {
		var notFond = {
			author: 'Ra bot',
			status: link.status,
			Pesan: 'ERROR HUBUNGI OWNER 082149344210'
		}
		return notFond
	}
}
async function corona(negara) {
	try{
	const link = await axios.get(`https://www.worldometers.info/coronavirus/country/${negara}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	const data = {
		author: 'Iqbalzz',
		status: link.status,
		result: {
			kasus: kasus,
			meninggal: mati,
			sembuh: sembuh
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: 'Iqbalzz',
		status: link.status,
		Pesan: 'Error Hubungi Owner Kami'
	}
	return notFond
}
}
async function cuaca(wilayah) {
	try {
	function Cuaca(daerah) {
		const listcuaca = fs.readFileSync('./database/cuaca.json')
		const data = JSON.parse(listcuaca)
		if(daerah.toLowerCase() === 'aceh'){
			return data[0]
		} else if (daerah.toLowerCase() === 'bali') {
			return data[1]
		} else if (daerah.toLowerCase() === 'bangka belitung') {
			return data[2]
		} else if (daerah.toLowerCase() === 'banten') {
			return data[3]
		} else if (daerah.toLowerCase() === 'yogyakarta' || daerah.toLowerCase() === 'jogja') {
			return data[4]
		} else if (daerah.toLowerCase() === 'jakarta')  {
			return data[5]
		} else if (daerah.toLowerCase() === 'gorontalo') {
			return data[6]
		} else if (daerah.toLowerCase() === 'jambi') {
			return data[7]
		} else if (daerah.toLowerCase() === 'jawa barat') {
			return data[8]
		} else if (daerah.toLowerCase() === 'jawa tengah') {
			return data[9]
		} else if (daerah.toLowerCase() === 'jawa timur') {
			return data[10]
		} else if (daerah.toLowerCase() === 'kalimantan barat') {
			return data[11]
		} else if (daerah.toLowerCase() === 'kalimantan selatan') {
			return data[12]
		} else if (daerah.toLowerCase() === 'kalimantan tengah') {
			return data[13]
		} else if (daerah.toLowerCase() === 'kalimantan timur') {
			return data[14]
		} else if (daerah.toLowerCase() === 'kalimantan utara') {
			return data[15]
		} else if (daerah.toLowerCase() === 'riau') {
			return data[16]
		} else if (daerah.toLowerCase() === 'lampung') {
			return data[17]
		} else if (daerah.toLowerCase() === 'maluku') {
			return data[18]
		} else if (daerah.toLowerCase() === 'maluku utara') {
			return data[19]
		} else if (daerah.toLowerCase() === 'ntb') {
			return data[20]
		} else if (daerah.toLowerCase() === 'ntt') {
			return data[21]
		} else if (daerah.toLowerCase() === 'papua') {
			return data[22]
		} else if (daerah.toLowerCase() === 'papua barat') {
			return data[23]
		} else if (daerah.toLowerCase() === 'riau') {
			return data[24]
		} else if (daerah.toLowerCase() === 'sulawesi barat') {
			return data[25]
		} else if (daerah.toLowerCase() === 'sulawesi selatan') {
			return data[26]
		} else if (daerah.toLowerCase() === 'sulawesi tengah') {
			return data[27]
		} else if (daerah.toLowerCase() === 'sulawesi tenggara') {
			return data[28]
		} else if (daerah.toLowerCase() === 'sulawesi utara') {
			return data[29]
		} else if (daerah.toLowerCase() === 'sumatra barat') {
			return data[30]
		} else if (daerah.toLowerCase() === 'sumatra selatan') {
			return data[31]
		} else if (daerah.toLowerCase() === 'sumatra utara') {
			return data[32]
		} else if (daerah.toLowerCase() === 'indonesia') {
			return data[33]
		} else {
			return `undefined`
		}
	}
	const link = await axios.get(`https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg${Cuaca(wilayah)}`)
	const $ = cheerio.load(link.data)
	let hasil = []
	$('#TabPaneCuaca2 > div.table-responsive > table > tbody').each(function (a, b) {
		$(b).find('tr').each(function (c, d) {
			let nama = $(d).find('td > a').text().trim()
			let cuaca = $(d).find('td > span').text().trim()
			let suhu = $(d).find('td:nth-child(6)').text().trim()
			let kelembapan = $(d).find('td:nth-child(7)').text().trim()
			let data = {
				daerah: nama,
				cuaca: cuaca,
				suhu: suhu + ' °C',
				kelembapan: kelembapan + '%'
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function FilmApik23(querry) {
	try{
	const link = await axios.get(`https://filmapik.website/?s=${querry}`);
	const c = cheerio.load(link.data)
	let Id = []
	c('#main > div > div.main-content.main-category > div.movies-list-wrap.mlw-category > div.movies-list.movies-list-full ').each(function (a, b) {
		c(b).find('div').each(function (e, d) {
			let id = c(d).find('a').attr('href')
			Id.push(id)
		})
	})
	let Random = Id[Math.floor(Math.random() * (Id.length))]
	const Link = await axios.get(Random)
	const $ = cheerio.load(Link.data)
	let judul = $('#mv-info').find('div.mvi-content > div.mvic-desc > h3').text().trim()
	let view = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(1)').text().trim()
	let genre = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(2)').text().trim()
	let studio = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(3) > span').text().trim()
	let durasi = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(1) > span').text().trim()
	let TvStatus = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > p:nth-child(2) > span').text().trim()
	let network = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-right > div > p:nth-child(5) > a').text().trim()
	let thumb = $('#mv-info').find('div.mvi-content > div.thumb.mvic-thumb > img').attr('src')
	let BintangFilm = $('#mv-info').find('div.mvi-content > div.mvic-desc > div.mvic-info > p > span').text().trim()
	const data = {
		author: 'Ra bot',
		status: link.status,
		result: {
			judul: judul,
			thumb: thumb,
			Link: Random,
			penonton: view.replace('Views: ', ''),
			durasi: durasi,
			genre: genre.replace('Genre: ', ''),
			studio: studio,
			TV: TvStatus,
			network: network,
			bintangFilm: BintangFilm
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function ssstik_io(Link) {
	const hasil = []
	await axios.request({
		url: "https://ssstik.io/download-tiktok-mp3",
		method: "GET",
		data: null,
		headers: {
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"cookie": "_ga=GA1.2.1214162640.1613122103; __gads=ID=a84fb2b8cf02d3d7-22dd4d0604c600bf:T=1613122103:RT=1613122103:S=ALNI_MYL7L8hoaImlsOJ4ci_mlprmNr_dQ; __cflb=02DiuEcwseaiqqyPC5pErDKzpi9ACpCy4uc7DgJdduo1D; _gid=GA1.2.318630001.1621485974; PHPSESSID=e6tcghbdi76h30pkem3lmgb6h2; _gat_UA-3524196-6=1"
		}
	}).then(async res => {
		const $ = cheerio.load(res.data)
		let token = $('#splash > div').find('form').attr('data-hx-post')
		let ttts = $('#splash > div').find('form').attr('include-vals')
		const tt = ttts.split(',')[0].replace('tt:', '')
		const ts = ttts.split(',')[1].replace('ts:', '')
		const format = {
			id: Link,
			locale: "en",
			tt: tt,
			ts: ts
		}
		await axios('https://ssstik.io' + token, {
			method: "POST",
			data: new URLSearchParams(Object.entries(format)),
			headers: {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"hx-active-element": "submit",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"cookie": "_ga=GA1.2.1214162640.1613122103; __gads=ID=a84fb2b8cf02d3d7-22dd4d0604c600bf:T=1613122103:RT=1613122103:S=ALNI_MYL7L8hoaImlsOJ4ci_mlprmNr_dQ; __cflb=02DiuEcwseaiqqyPC5pErDKzpi9ACpCy4uc7DgJdduo1D; _gid=GA1.2.318630001.1621485974; PHPSESSID=e6tcghbdi76h30pkem3lmgb6h2; _gat_UA-3524196-6=1"
			}
		}).then(respon => {
			const ch = cheerio.load(respon.data)
			const data = {
				author: "RA BOT",
				result: {
					nowm: ch('#mainpicture > div').find('a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark_direct.snaptik').attr('href'),
					mp3: ch('#mainpicture > div').find('a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.music.snaptik').attr('href')
				}
			}
			hasil.push(data)
		})
	})
	return hasil[0]
} 
async function TiktokDownloader(link) {
	const Result = []
	await axios.request({
		url: `https://ttdownloader.com/`,
		method: "get",
		headers: {
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=797oo0b7ao6ma18170vfggf8sa; popCookie=1; _gid=GA1.2.182249774.1621486055; _gat_gtag_UA_117413493_7=1"
		}
	})
	.then(async res => {
		const $ = cheerio.load(res.data)
		let token = $('#token').attr('value');
		const Form = {
			url: link,
			format: '',
			token: token
		}
		await axios("https://ttdownloader.com/ajax/", {
			method: "POST",
			data: new URLSearchParams(Object.entries(Form)),
			headers: {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=797oo0b7ao6ma18170vfggf8sa; popCookie=1; _gid=GA1.2.182249774.1621486055; _gat_gtag_UA_117413493_7=1"
			}
		}).then(respon => {
			const ch = cheerio.load(respon.data)
			let result = {
				status: respon.status,
				author: 'RA BOT',
				result: {
					nowm: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
					wm: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
					audio: ch('#results-list > div:nth-child(4)').find('div.download > a').attr('href')
				}
			}
			Result.push(result)
		})
	})
	return Result[0]
}
async function uploadFile(path) {
	const Result = []
	const bodyForm = new FormData();
	bodyForm.append('files[]', fs.createReadStream(path))
	await axios(`https://uguu.se/upload.php`,{
		method: 'POST',
		data: bodyForm,
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
		}
	}).then(({ data }) => {
		const result = {
			author: 'Created by Ra',
			status: data.success ? 200 : 404,
			result: {
				url: data.files[0].name,
				namaFile: data.files[0].url,
				size: data.files[0].size,
				hash: data.files[0].hash
			}
		}
		Result.push(result.result.url)
	})
	return Result[0]
}
async function ytPlay(querry) {
	const videos = await yt(querry)
	const result = []
	const Format = {
		q: videos.all[0].url,
		vt: 'mp3'
	}
	await axios('https://yt1s.com/api/ajaxSearch/index', {
		method: 'POST',
		data: new URLSearchParams(Object.entries(Format)),
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"cookie": "_ga=GA1.2.586773459.1621481788; _gid=GA1.2.1576517376.1621481788; _gat_gtag_UA_173445049_1=1"
		},
		referrerPolicy: "strict-origin-when-cross-origin"
	}).then(async res => {
		const FormatData = {
			vid: res.data.vid,
			k: res.data.kc
		}
		await axios('https://yt1s.com/api/ajaxConvert/convert', {
			method: 'POST',
			data: new URLSearchParams(Object.entries(FormatData)),
			headers: {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"sec-ch-ua-mobile": "?0",
				"cookie": "_ga=GA1.2.586773459.1621481788; _gid=GA1.2.1576517376.1621481788; _gat_gtag_UA_173445049_1=1"
			},
			referrerPolicy: "strict-origin-when-cross-origin"
		}).then(respon => {
			result.push(respon.data)
		})
	})
	return result[0]
}
async function Gempa() {
	try{
	const link = await axios.get(`https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg`)
	const $ = cheerio.load(link.data)
	let hasil = []
	$('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody').each(function (a, b) {
	    $(b).find('tr').each(function (c, d) {
			let tanggal = $(d).find('td:nth-child(2)').text().trim()
			let koordinat = $(d).find('td:nth-child(3)').text().trim()
			let magnitudo = $(d).find('td:nth-child(4)').text().trim()
			let kedalaman = $(d).find('td:nth-child(5)').text().trim()
			let skala = $(d).find('td:nth-child(6) > a').text().trim()
			const data = {
				author: 'Ra bot',
				status: link.status,
				result: {
					tanggal: tanggal,
					koordinat: koordinat,
					getaran: magnitudo,
					kedalaman: kedalaman,
					skala: skala
				}
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function cnn() {
	try {
	const link = await axios.get('https://www.cnnindonesia.com/')
	const $ = cheerio.load(link.data)
	let hasil = []
	$('#content > div > div.l_content > div.box.feed.berita_terbaru_lst > div.list.media_rows.middle').each(function (a, b) {
		$(b).find('article').each(function (c, d) {
			let judul = $(d).find('a > span.box_text > h2').text().trim() || '-' 
			let tema = $(d).find('a > span.box_text > span.kanal').text().trim() || '-'
			let publik = $(d).find('a > span.box_text > span.date').text().trim() || '-'
			let thumb = $(d).find('a > span.ratiobox.ratio_16_9.box_img > span > img').attr('src') || '-'
			let url = $(d).find('a').attr('href') || '-'
			const data = {
				author: 'Ra bot',
				status: link.status,
				result: {
					judul: judul,
					tema: tema,
					rilis: publik,
					thumb: thumb,
					url: url
				}
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: 'Ra bot',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 082149344210'
	}
	return notFond
}
}
async function photoManipulation(namaFile, path, effectId) {
	const hasil = []
		const fd = new FormData();
		fd.append('name', `${namaFile}`)
		fd.append('file', fs.createReadStream(`${path}`))
		await axios( {
			method: "POST",
			url: "https://photomania.net/upload/file",
			headers: fd.getHeaders(),
			data: fd
		}).then(async res => {
			const formData = {
				photoId: `${res.data.id}`,
				effectId: `${effectId}`
			}
			await axios(`https://photomania.net/render`, {
				method: "POST",
				data: new URLSearchParams(Object.entries(formData)),
				headers: {
					"accept": "application/json, text/javascript, /; q=0.01",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				}
			}).then(respon => {
				const result = {
					status: respon .status,
					author: "I`am Ra",
					result: {
						url: respon.data.url,
						url_secury: respon.data.url_secure,
						ukuran: respon.data.width + ' x ' + respon.data.height,
						explayet: respon.data.expires_at
					}
				}
				hasil.push(result)
				return result
			})
		})
		return hasil[0]
}
async function ToVid(path) {
	return new Promise(async (resolve, reject) => {
		const BodyForm = new FormData()
		BodyForm.append('new-image', fs.createReadStream(path))
		BodyForm.append('new-image-url', '')
		await axios({
			url: "https://s7.ezgif.com/webp-to-mp4",
			method: "POST",
			headers: BodyForm.getHeaders(),
			data: BodyForm
		}).then(res => {
			const $ = cheerio.load(res.data)
			let File = $('#main > form').find('input[type=hidden]:nth-child(1)').attr('value')
			let token = $('#main > form').find('input[type=hidden]:nth-child(2)').attr('value')
			let Submit = $('#tool-submit-button').find('input').attr('value')
			const Format = {
				file: File,
				token: token,
				convert: Submit
			}
			axios({
				url: "https://ezgif.com/webp-to-mp4/" + File,
				method: "POST",
				data: new URLSearchParams(Object.entries(Format)),
				headers: {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\""
				}
			}).then(({ data, status}) => {
				const ch = cheerio.load(data)
				let link = ch('#output > p.outfile').find('video > source').attr('src')
				const result = {
					status: status,
					data: "https:" + link
				}
				resolve(result)
			}).catch(reject)
		})
	})
}
async function fbDownloader(Link) {
	return new Promise (async (resolve, reject) => {
		const BodyForm = {
			url: Link
		}
		await axios({
			url: "https://www.getfvid.com/downloader",
			method: "POST",
			data:  new URLSearchParams(Object.entries(BodyForm)),
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"cache-control": "max-age=0",
				"content-type": "application/x-www-form-urlencoded",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			let HD = $("body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered").find('div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href')
			let Normal = $("body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered").find('div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a').attr("href")
			const result = {
				status: respon.status,
				author: "I`am RA",
				result: {
					link_hd: HD,
					normal: Normal
				}
			}
			resolve(result)
		}).catch(reject)
	})
}
async function SpeedVid(path, kecepatan) {
	return new Promise(async (resolve, reject) => {
		const BodyForm = new FormData()
		BodyForm.append('new-image', fs.createReadStream(path))
		BodyForm.append('new-image-url', '')
		BodyForm.append('upload', 'Upload video!')
		await axios({
			url: "https://s3.ezgif.com/video-speed",
			method: "POST",
			data: BodyForm,
			headers: BodyForm.getHeaders()
		}).then(({ data }) => {
			const $ = cheerio.load(data)
			let File = $('#main > form').find(' input[type=hidden]:nth-child(1)').attr('value')
			let token = $('#main > form').find('input[type=hidden]:nth-child(2)').attr('value')
			const Format = {
				file: File,
				token: token,
				multiplier: kecepatan,
				apply_audio: "on"
			}
			axios({
				url: `https://s3.ezgif.com/video-speed/${File}?ajax=true`,
				method: "POST",
				data: new URLSearchParams(Object.entries(Format)),
				headers: {
					"accept": "*/*",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				}
			}).then(respon => {
				const ch = cheerio.load(respon.data)
				let result = {
					status: respon.status,
					author: "I`am Ra",
					data: 'https:' + ch('p').find('video > source').attr('src')
				}
				resolve(result)
			}).catch(reject)
		})
	})
}
async function ReverseVid (path, audio) {
	return new Promise(async (resolve, reject) => {
		function muteOrno(audioo ,File, token) {
			if (audioo === true) {
				const Format = {
					file: File,
					token: token,
					audio: "on",
					encoding: "original"
				}
				return Format
			} else if (audioo === false) {
				const Format = {
					file: File,
					token: token,
					mute: "on",
					encoding: "original"
				}
				return Format
			} else {
				const Format = {
					file: File,
					token: token,
					audio: "on",
					encoding: "original"
				}
				return Format
			}
		}
	const BodyForm = new FormData()
		BodyForm.append('new-image', fs.createReadStream(path))
		BodyForm.append('new-image-url', '')
		BodyForm.append('upload', 'Upload video!')
		await axios({
			url: "https://s3.ezgif.com/reverse-video",
			method: 'POST',
			data: BodyForm,
			headers: BodyForm.getHeaders()
		}).then(async respon => {
			const $ = cheerio.load(respon.data)
			let File = $('#main > form').find('input[type=hidden]:nth-child(1)').attr('value')
			let token = $('#main > form').find('input[type=hidden]:nth-child(2)').attr('value')
			const Format = await muteOrno(audio, File, token)
			axios(`https://s3.ezgif.com/reverse-video/${File}?ajax=true`, {
				method: "POST",
				data: new URLSearchParams(Object.entries(Format)),
				headers: {
					"accept": "*/*",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\""
				}
			}).then(res => {
				const ch = cheerio.load(res.data)
				let Link = ch('p > video').find('source').attr('src')
				let Type = ch('p > video').find('source').attr('type')
				const result = {
					status: res.status,
					created: "I`am Ra",
					result: {
						link: "https:" + Link,
						type: Type
					}
				}
				resolve(result)
			}).catch(reject)
		}).catch(reject)
	})
}
async function GSMArena(querry) {
	const link = await axios.get(`https://www.gsmarena.com/res.php3?sSearch=${querry}`)
	const ch = cheerio.load(link.data)
	let Url = ch('#review-body > div > ul').find('li:nth-child(1) > a').attr('href')
	const Link = await axios.get(`https://www.gsmarena.com/${Url}`)
	let $ = cheerio.load(Link.data)
	let barang = $('#body > div > div.review-header > div').find(' div.article-info-line.page-specs.light.border-bottom > h1').text().trim()
	let rilis = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(1) > span').text().trim()
	let thumb = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > div > a > img').attr('src')
	let ukuran = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(3) > span').text().trim()
	let tipe = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(5) > span').text().trim()
	let storage = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(7) > span').text().trim()
	let display = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > div').text().trim()
	let inchi = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > strong > span').text().trim()
	let camPix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(1)').text().trim()
	let Mp = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(2)').text().trim()
	let VideoVix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > div').text().trim()
	let Ram = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(2)').text().trim()
	let chipset = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > div').text().trim()
	let batre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(1)').text().trim()
	let Mah = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(2)').text().trim()
	let merekBatre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > div').text().trim()
	let AngkaRam = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(1)').text().trim()
	let detail = []
	$('#specs-list').each(function (anu, RA) {
		let isi = $(RA).text().trim()
		detail.push(isi)
	})
	const result = {
		status: Link.status,
		author: "I`am Ra",
		result: {
			judul: barang,
			rilis: rilis,
			thumb: thumb,
			ukuran: ukuran,
			type: tipe,
			storage: storage,
			display: display,
			inchi: inchi,
			pixel: camPix + Mp,
			videoPixel: VideoVix,
			ram: AngkaRam + Ram,
			chipset: chipset,
			batrai: batre + Mah,
			merek_batre: merekBatre,
			detail: detail[0]
		}
	}
	return result
}
async function zodiakMing(querry) {
	const link = await axios.get(`https://www.fimela.com/zodiak/${querry}/minggu-ini`)
	const  $ = cheerio.load(link.data)
	let thumb = $('body > div > div > div').find('div > div > a > img').attr('src')
	let judul = $('body > div > div > div').find('div > div > div.zodiak--content-header__text > h5').text().trim()
	let date = $('body > div > div > div').find('div> div.zodiak--content-header__text > span').text().trim()
	let hoki = $('body > div > div > div > div').find('div > div > div:nth-child(1) > div > span').text().trim()
	let umum = $('body > div > div > div > div').find(' div > div > div:nth-child(1) > div > p').text().trim()
	let love = $('body > div > div > div > div').find(' div > div > div:nth-child(2) > div > p').text().trim()
	let keuangan = $('body > div > div > div > div').find(' div > div > div:nth-child(3) > div > p').text().trim()
	const result = {
		status: link.status,
		data: {
			judul: judul,
			thumb: thumb,
			date: date,
			nomer_hoki: hoki,
			isi: {
				umum: umum,
				love: love,
				keuangan: keuangan
			}
		}
	}
	return result
}
async function zodiakHar (querry) {
	let Hasil = []
	await axios.request(`https://www.fimela.com/zodiak/${querry}`, {
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			}
		}).then(({ data}) => {
			const $ = cheerio.load(data)
			let thumb = $('body > div > div > div').find('div > div > a > img').attr('src')
			let judul = $('body > div > div.container-main > div.container-article > div').find('div.zodiak--content-header__right > div.zodiak--content-header__text > h5').text().trim()
			let tanggal = $('body > div > div > div > div > div > div > span').text().trim()
			let nomer_ = $('body > div > div > div > div > div > div').find('div:nth-child(1) > div.zodiak--content__content > span').text().trim()
			let isi = []
			$('body > div > div > div > div > div > div').each(function (anu, RA) {
				let umum = $(RA).find('div:nth-child(1) > div.zodiak--content__content > p').text().trim() || undefined
				let love = $(RA).find('div:nth-child(2) > div.zodiak--content__content > p').text().trim() || undefined
				let keuangan = $(RA).find('div:nth-child(3) > div.zodiak--content__content > p').text().trim() || undefined
				let Data = {
					umum: umum,
					love: love,
					keuangan: keuangan
				}
				isi.push(Data)
			})
			let ramal = []
			isi.map(ryuzin => {
				if (ryuzin.umum === undefined) return
				if (ryuzin.love === undefined) return
				if (ryuzin.keuangan === undefined) return
				ramal.push(ryuzin)
			})
			const result = {
				judul: judul,
				thumb: thumb,
				date: tanggal,
				no_hoki: nomer_,
				teori: ramal[0]
			}
			Hasil.push(result)
		})
		return Hasil[0]
}
async function Shoope(item, limit) {
	const hasil = []
	await axios.request(`https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=${item}&limit=${limit}&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2`, {
		method: "GET",
		data: null,
		headers: {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"if-none-match-": "55b03-856cd63f16112f8a43da6096f97ac3fe",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
		}
	}).then(respon => {
		hasil.push(respon.data)
	})
	return hasil[0]
}
async function pinterest(querry) {
	let HASIL = []
	await axios.request(`https://id.pinterest.com/search/pins/?rs=typed&q=` + querry, {
			method: "GET",
			url: "https://id.pinterest.com/search/pins/?rs=typed&q="+ querry,
			headers: {
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"sec-ch-ua-mobile": "?0",
				"upgrade-insecure-requests": "1",
				"cookie": "csrftoken=ebe0be3a93cea6072be18633add953a2; _b=\"AVezvd6F4UtE24FUsA6INxipyZZDoSpyCc5vaJK4QDYXmExosVEc4h6WkiKhlVtQ430=\"; cm_sub=denied; fba=True; _ga=GA1.2.862909259.1620474446; g_state={\"i_l\":0}; _auth=1; _pinterest_sess=TWc9PSZ0VEZqZmdDSlJYaGU5REIvNklIcVlnMjE5b0ZraTE5REJVQ0JiMUwxTkZZaGFoVk1sRDVhOFlwQzhkQnQ0YkMwRlNyV0lIWUFlK0ZVTkVxYUhKNmlvZ0R1UXlQYTBRRVVhMU1yYkpmcXpHK3UyNjNhckRqUFFOYVJVa3RnVmJtVzd2MmRGaHFMZUpLNVhtaHptTDhWSnBSdXhZY0FhRnRTN3J1S0V4cGtsVTBxeE54NkF2blVNSFV3R0NTQTR1bVVNRURGVGdnYlN5UjdBbk9YcHVGbGI3a1kwd1dEZDgrZVM1SDc3V0pJMm00OWxKUDVNQjBLVlFocTB4Mjg1M1RnbGxBaFAxbS9MTnVzei91cEQvcjBtakp6N0ZnU2t1Y3NxWW1DRDV1Q3h0ankvQ3FEWGh3MXczcXBHNXJpYVNCMHB6dUoxMGF6ZzVxN2VqQVBoSElSd0tiQk41ZVRPQXlOaGNpNzVQMWJSeVZJbCtYYVMxQ1ZRUFUwalU3eGVzMGRySlNzdWo1NG5uaXNFM3ZpT0o0TkZHR1daUXlwaXFQclMwa04raW9xVnVaTTRSVGEzTE03TVlZcmZYVDd5UmVPd2lZaGw4aE9VMHJBd0tidEsrcHdPWk96RlFMekVLTzY3VU1PL0tIYUdwUE1IWVdJNnJXalBkU09Sb3dEaHlQVVR1T1RqNW5Sc2FRdmVkZmhkMk9HNHBCL0ZpZ3NMdmZvVW9ReVltTFBCTlNLWHpray9LNWJ2UTNvTlBzVm9aZjRvYWRvRFhla0dBNzdveWJVYXZmVFp2cnFFNU5DYUVwSHhxeDlIajNIVTlHaEVYdGptWm5mSGVSRmtIMmQwVVVVZlVCVEh6UHB3TnBtdWV0b2l6L3VTc3pXMXFGN3lHS3ZJM3BwL0NrWVJDMm1HY2tROGxuQVFRNS9OUW45R3dtSk8zeFJidVFSTG1qTG5PelAvKzd3T3lrN1NoKzBHVGNTY1pGSEY0bW8xcGVmc3NtclBhTWE2QUMxOXNpQWUwRmo4UHl0ZGpwUzhUQXVhbjYwT0ZJeHhHai8yOWFUVTA1Wkx2czN4VSttLzMvbkFVQ2svWnZvNC9xZ3E4VkhYSFZ5elo4TzhtU0o5c3ZDcEJyYjE3QVI1WHlmTTFhWThvWHQ1T0tSTWRsWnI3a1lpU245dEVLd1lZSXRremtkTUZmcVA2YUg0c1UrSk1JOWJVRzZpcWd3T0NVaFZkdUh3UUdURi9sbDBqT2pBZVV2ZnlTQzc5ZnBMYkFMQ1ZsWjdIYWcmaDc1Uk5kK2I4MjFMUXBaVUthci9rVHpCUWRvPQ==; _pinterest_cm=\"TWc9PSYxZnpkMS9XN29Rd2R0TnpBN0RzVktja1J4NUtINUJqRzNGODFXS0xES1pndWlNVm52a0d3V0JocmVIS3p5eDdnNXNZa0hGelNQNDBSTFRId3ZhTFFIQjRGOW1lNlJZMzFiVlg1MHhSOFpmMGhRZUoySUpJZDIyWlVYMjRXNHRaL1lodFl4eW1jWjNyTklpbytYbHZyd29nRm5DY0pQOGgyUWpDdk9zQ1craXR5VEZoNHV4ZzRnOXV4SUFFSStYZCsmT08zMFI1bktXa3pwSDFtK3NNRWpxWWNpQzNzPQ==\"; _routing_id=\"595f24cd-7f4c-4495-aa67-37212d099cd8\"; sessionFunnelEventLogged=1"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			let hasil = []
			$('body > div > div > div > div > div > div > div > div > div > div > div').each(function (a, b) {
				$(b).find('div').each(function (c, d) {
					let Link = $(d).find('div > div > div > div > a').find('img').attr('src')
					hasil.push(Link)
				})
			})
			let Data = []
			hasil.map(V => {
				if (V === undefined) return 
				Data.push(V.replace('236x', 'originals'))
			})
			let FilterArray = new Set(Data)
			let unique = [...FilterArray]
			const result = {
				status: res.status,
				result: unique
			}
			HASIL.push(result)
		})
		return HASIL[0]
}
async function TiktokDown (link) {
		return new Promise (async (resolve, reject) => {
			await axios.request(`https://toksaver.com/convertok?url=` + link, {
				method: "GET",
				data: null,
				headers: {
					"accept": "/",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
					'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
				}
			}).then(res => {
				resolve(res.data)
			}).catch(reject)
		})
}


module.exports.RandomCerpen = RandomCerpen
module.exports.emoji = emoji
module.exports.stickerSearch = stickerSearch
module.exports.ManggaToon = ManggaToon
module.exports.RamalJadian = RamalJadian
module.exports.Pantun = Pantun
module.exports.trutdare = trutdare
module.exports.SearchFilm = SearchFilm
module.exports.infoFilm123 = infoFilm123
module.exports.FaktaUnik = FaktaUnik
module.exports.Liriklagu = Liriklagu
module.exports.Otakudesu = Otakudesu
module.exports.wikipedia = wikipedia
module.exports.corona =  corona
module.exports.cuaca = cuaca
module.exports.FilmApik23 = FilmApik23
module.exports.Gempa = Gempa
module.exports.cnn = cnn
module.exports.TiktokDownloader = TiktokDownloader
module.exports.uploadFile =  uploadFile
module.exports.ytPlay = ytPlay
module.exports.igDownloader = igDownloader
module.exports.ssstik_io =  ssstik_io
module.exports.photoManipulation = photoManipulation
module.exports.ToVid = ToVid 
module.exports.fbDownloader = fbDownloader
module.exports.SpeedVid = SpeedVid
module.exports.ReverseVid = ReverseVid
module.exports.GSMArena =  GSMArena
module.exports.zodiakMing = zodiakMing
module.exports.zodiakHar =  zodiakHar 
module.exports.Shoope = Shoope
module.exports.pinterest = pinterest
module.exports.TiktokDown = TiktokDown
