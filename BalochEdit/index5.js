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
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const request = require('request');
//const wa = require('./whatsapp/message')

function randomarray(url) {
return url[Math.floor(Math.random() * url.length)]
}

exports.randomtt = async(query) => {
  return new Promise((resolve,reject) => {
    axios.get('https://brainans.com/search?query=' + query)
    .then(({data}) => {
      const $ = cheerio.load(data)
      const luser = $('#search-container > div:nth-child(1) > div.content__text > a').attr('href')
      axios.get('https://brainans.com/' + luser)
      .then(({data}) => {
        const $$ = cheerio.load(data)
        vlink = [];
        $$('#videos_container > div > div.content__list.grid.infinite_scroll.cards > div > div > a').each(function(a, b){
          vlink.push('https://brainans.com/' + $$(b).attr('href'))
        })
        randomarray(vlink).then(res => {
          axios.get(res)
          .then(({data}) => {
            const $$$ = cheerio.load(data)
            resolve({
              username: $$$('#card-page > div > div.row > div > div > div > div > div.main__user-desc.align-self-center.ml-2 > a').text(),
              caption: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__list').text(),
              like_count: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div > div:nth-child(1) > span').text(),
              comment_count: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(2) > span').text(),
              share_count: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.content__btns.d-flex > div:nth-child(3) > span').text(),
              videourl: $$$('#card-page > div > div.row > div > div > div.main__info.mb-4 > div.main__image-container > div > video').attr('src')
            })
          })
        })
      })
    })
  })
}
exports.trendtwit = (country) => {
	return new Promise((resolve,reject) => {
		axios.get(`https://getdaytrends.com/${country}/`)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const hastag = [];
      const tweet = [];
      const result = [];
      $('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each(function(a, b){
        deta = $(b).text()
        hastag.push(deta)
      })
      $('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each(function(a, b){
        deta = $(b).text()
        tweet.push(deta)
      })
      num = 1
      for(let i=0; i<hastag.length; i++){
        result.push({
          rank: num,
          hastag: hastag[i],
          tweet: tweet[i]
        })
        num += 1
      }
		    resolve({
          country: country,
          result: result
        })
		})
		.catch(reject)
	})
}
exports.pinterest = async(querry) => {
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
exports.zerochan = (query) => {
	return new Promise((resolve,reject) => {
		axios.get('https://www.zerochan.net/search?q=' + query)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const judul = [];
      const result = [];
      const id = [];
			$('#thumbs2 > li > a > img').each(function(a,b) {
        if(!$(b).attr('alt').startsWith('https://static.zerochan.net/')){
				judul.push($(b).attr('alt'))
        }
			})
      $('#thumbs2 > li > a').each(function(a, b) {
        id.push($(b).attr('href'))
      })
      for(let i=0; i<judul.length; i++){
        result.push('https://s1.zerochan.net/' + judul[i].replace(/\ /g, '.') + '.600.' + id[i].split('/')[1] + '.jpg')
      }
		  resolve({
        creator: 'Fajar Ihsana',
        result: result
      })
		})
		.catch(reject)
	})
}
exports.happymoddl = (link) => {
	return new Promise((resolve,reject) => {
		axios.get(link)
		.then(({ data }) => {
			const $ = cheerio.load(data)
      const link = [];
      const jlink = [];
      const result = [];
			const title = $('body > div > div.container-left > section:nth-child(1) > div > h1').text()
      const info = $('body > div > div.container-left > section:nth-child(1) > div > ul').text()
      $('body > div.container-row.clearfix.container-wrap.pdt-font-container > div.container-left > section:nth-child(1) > div:nth-child(11) > div:nth-child(3) > div > p > a').each(function(a, b) {
        deta = $(b).text();
        jlink.push(deta)
        if($(b).attr('href').startsWith('/')){
        link.push('https://happymod.com' + $(b).attr('href'))
        }
        else{
          link.push($(b).attr('href'))
        }
      })
      for(let i=0; i<link.length; i++){
        result.push({
          title: jlink[i],
          dl_link: link[i]
        })
      }
		  resolve({
        creator: 'Fajar Ihsana',
        title: title,
        info: info.replace(/\t|- /g, ''),
        download: result
      })
		})
		.catch(reject)
	})
}
exports.goredl = async(link) => {
	        return new Promise(async(resolve,reject) => {
            axios.get(link)
						.then(({ data }) => {
							const $$ = cheerio.load(data)
							const format = {
								judul : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
								views : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
								comment : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
								link : $$('video > source').attr('src')
							}
							const result = {
								creator: 'Fajar Ihsana',
								data : format
							}
                  resolve(result)
                })
                .catch(reject)
            })
}
exports.chara = async(query) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.anime-planet.com/characters/all?name=${query}&sort=likes&order=desc`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const linkp = $('#siteContainer > table > tbody > tr:nth-child(1) > td.tableCharInfo > a').attr('href')
      axios.get('https://www.anime-planet.com' + linkp)
      .then((data) => {
        //console.log(data.data)
        const $$ = cheerio.load(data.data)
      resolve({
        nama: $$('#siteContainer > h1').text(),
        gender: $$('#siteContainer > section.pure-g.entryBar > div:nth-child(1)').text().split('\nGender: ')[1],
        warna_rambut: $$('#siteContainer > section.pure-g.entryBar > div:nth-child(2)').text().split('\nHair Color: ')[1],
        warna_mata: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(1) > div').text().split('\n')[1],
        gol_darah: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(2) > div').text().split('\n')[1],
        birthday: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(3) > div').text().split('\n')[1],
        description: $$('#siteContainer > section:nth-child(11) > div > div > div > div:nth-child(1) > p').text()
      })
    })
    })
    .catch(reject)
  })
}
exports.anime = async(query) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const result = [];
      const judul = [];
      const link = [];
      const thumb = [];
      $('#siteContainer > ul.cardDeck.cardGrid > li > a > h3').each(function(a, b) {
        deta = $(b).text();
        judul.push(deta)
      })
      $('#siteContainer > ul.cardDeck.cardGrid > li > a').each(function(a, b) {
        link.push('https://www.anime-planet.com' + $(b).attr('href'))
      })
      $('#siteContainer > ul.cardDeck.cardGrid > li > a > div.crop > img').each(function(a, b) {
        thumb.push('https://www.anime-planet.com' + $(b).attr('src'))
      })
      for(let i=0; i<judul.length; i++){
        result.push({
          judul: judul[i],
          thumb: thumb[i],
          link: link[i]
        })
      }
      resolve(result)
    })
    .catch(reject)
  })
}
exports.manga = async(query) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.anime-planet.com/manga/all?name=${query}`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const result = [];
      const judul = [];
      const link = [];
      const thumb = [];
      $('#siteContainer > ul.cardDeck.cardGrid > li > a > h3').each(function(a, b) {
        deta = $(b).text();
        judul.push(deta)
      })
      $('#siteContainer > ul.cardDeck.cardGrid > li > a').each(function(a, b) {
        link.push('https://www.anime-planet.com' + $(b).attr('href'))
      })
      $('#siteContainer > ul.cardDeck.cardGrid > li > a > div.crop > img').each(function(a, b) {
        thumb.push('https://www.anime-planet.com' + $(b).attr('src'))
      })
      for(let i=0; i<judul.length; i++){
        result.push({
          judul: judul[i],
          thumb: thumb[i],
          link: link[i]
        })
      }
      resolve(result)
    })
    .catch(reject)
  })
}
exports.job = async(query) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.jobstreet.co.id/id/job-search/${query}-jobs/`)
    .then((data) => {
      //console.log(data.data)
      const $ = cheerio.load(data.data)
      const job = [];
      const perusahaan = [];
      const daerah = [];
      const format = [];
      const link = [];
      const upload = [];
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a > div').each(function(a, b) {
        deta = $(b).text();
        job.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > span').each(function(a, b) {
        deta = $(b).text();
        perusahaan.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > span > span').each(function(a, b) {
        deta = $(b).text();
        daerah.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a').each(function(a, b) {
        link.push($(b).attr('href'))
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div.sx2jih0.zcydq852.zcydq842.zcydq872.zcydq862.zcydq82a.zcydq832.zcydq8d2.zcydq8cq > div.sx2jih0.zcydq832.zcydq8cq.zcydq8c6.zcydq882 > time > span').each(function(a, b) {
        deta = $(b).text();
        upload.push(deta)
      })
      for(let i=0; i<job.length; i++){
        format.push({
          job: job[i],
          perusahaan: perusahaan[i],
          daerah: daerah[i],
          upload: upload[i],
          link_Detail: 'https://www.jobstreet.co.id' + link[i]
        })
      }
      resolve(format)
    })
    .catch(reject)
  })
}
exports.distance = async(kawal, ktujuan) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://jarakantarkota.com/${kawal}/${ktujuan}/`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const jarak = $('body > div.content > div > div.b-search-route > div > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-8 > div').text().replace('                       ', '')
      resolve({
        kota_asal: jarak.split('  -')[0],
        kota_tujuan: jarak.split('- ')[1].split(' (')[0],
        jarak: jarak.split(' (')[1].split(')')[0]
      })
    })
    .catch(reject)
  })
}
exports.anoboys = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://anoboy.media/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const format = [];
                        const link = [];
						const judul = [];
						const thumb = [];
						const uptime = [];
                        $('body > div.wrap > div.container > div.column-content > a > div > div.amvj > h3').each(function(a,b) {
                                jud = $(b).text();
                                judul.push(jud)
                        })
                        $('body > div.wrap > div.container > div.column-content > a > div > div.jamup').each(function(c,d) {
                        	upt = $(d).text();
                        	uptime.push(upt)
                        })
                        $('body > div.wrap > div.container > div.column-content > a > div > amp-img').each(function(e,f) {
                        	thumb.push($(f).attr('src'))
                        })
                        $('body > div.wrap > div.container > div.column-content > a').each(function(g,h) {
                        	link.push($(h).attr('href'))
                        })
        				for(let i=0; i<link.length; i++){
        					format.push({
        						judul : judul[i],
        						thumb : thumb[i],
        						link : link[i]
        					})
        				}
        				const result = {
        					status: data.status,
        					creator: 'Fajar Ihsana',
        					data: format
        				}
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.anoboydl = (query) => {
        return new Promise((resolve,reject) => {
                axios.get(query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                  resolve({
                  	judul: $('body > div.wrap > div.container > div.pagetitle > h1').text(),
                  	uptime: $('body > div.wrap > div.container > div.pagetitle > div > div > span > time').text(),
                  	mforu: {
                  		SD: $('#colomb > p > span:nth-child(1) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(1) > a:nth-child(5)').attr('href')
                  	},
                  	zippy: {
                  		SD: $('#colomb > p > span:nth-child(3) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(3) > a:nth-child(5)').attr('href')
                  	},
                  	mirror: {
                  		SD: $('#colomb > p > span:nth-child(5) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(5) > a:nth-child(5)').attr('href')
                  	}
                  })
                })
                .catch(reject)
        })
}
exports.film = async(query) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://167.99.71.200/?s=${query}`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const judul = [];
      const genre = [];
      const thumb = [];
      const link = [];
      const format = [];
      $('div > div.item-article > header > h2 > a').each(function(a, b) {
        deta = $(b).text();
        judul.push(deta)
      })
      $('div > div.item-article > header > div.gmr-movie-on').each(function(a, b) {
        deta = $(b).text();
        genre.push(deta)
      })
      $('div > div.content-thumbnail.text-center > a > img').each(function(a, b) {
        thumb.push($(b).attr('src'))
      })
      $('div > div.item-article > header > div.gmr-watch-movie > a').each(function(a, b) {
        link.push($(b).attr('href'))
      })
      for(let i=0; i<judul.length; i++){
        format.push({
          judul: judul[i],
          genre: genre[i],
          thumb: thumb[i],
          link_nonton: link[i]
        })
      }
      if(format == ''){
        resolve({
          status: 'error'
        })
      }
      else{
      resolve(format)
      }
    })
    .catch(reject)
  })
}
exports.webtoons = async(query) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const judul = [];
      const genre = [];
      const author = [];
      const link = [];
      const likes = [];
      const format = [];
      $('#content > div > ul > li > a > div > p.subj').each(function(a, b) {
        deta = $(b).text();
        judul.push(deta)
      })
      $('div > ul > li > a > span').each(function(a, b) {
        deta = $(b).text();
        genre.push(deta)
      })
      $('div > ul > li > a > div > p.author').each(function(a, b) {
        deta = $(b).text();
        author.push(deta)
      })
      $('div > ul > li > a > div > p.grade_area > em').each(function(a, b) {
        deta = $(b).text();
        likes.push(deta)
      })
      $('#content > div > ul > li > a').each(function(a, b) {
        link.push($(b).attr('href'))
      })
      for(let i=0; i<judul.length; i++){
        format.push({
          judul: judul[i],
          genre: genre[i],
          author: author[i],
          likes: likes[i],
          link: 'https://www.webtoons.com' + link[i]
        })
      }
      if(likes == ''){
        resolve({
          status: `${query} tidak dapat ditemukan/error`
        })
      }
      else{
      resolve(format)
      }
    })
    .catch(reject)
  })
}
exports.soundcloud = async(link) => {
    return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url:"https://www.klickaud.co/download.php",
      headers: { 'content-type': 'application/x-www-form-urlencoded'},
      formData: { 'value': link,
'2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37': '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3' } };
    
    request(options, async function (error, response, body) {
      console.log(body)
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      resolve({
        judul: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text(),
        download_count: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)').text(),
        thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
        link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0]
      });
    });
  })
}
exports.igdl = async(link) => {
    return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url:"https://downloadgram.org/#downloadhere",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { url: link, submit: '' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = [];
      $('#downloadBox > a').each(function(a, b) {
        result.push($(b).attr('href'))
      })
      resolve(result);
    });
  })
}
exports.igstalk = async(username) => {
    return new Promise(async(resolve, reject) => {
    let {data} = await axios('https://www.instagram.com/'+username+'/?__a=1', {
        'method': 'GET',
        'headers': {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        'cookie': 'ig_did=77ADA31F-4AB0-4D19-8875-522C891A60E6; ig_nrcb=1; csrftoken=Zuy4R9169ejQY0R20InUOfeh2fCh7cfW; ds_user_id=8779859677; sessionid=8779859677%3Az2RfuCb1tsxTh1%3A26; shbid="10275\0548779859677\0541665541164:01f7683f87e5d1e3c2db8b41bfad455d2718c549ac0aeba033c00ae0e25647a7d8b87ee1"; shbts="1634005164\0548779859677\0541665541164:01f7df3ebca9d4ae3ecdb5f3b25d845142e5f462409976c5c140ba803c85bdd15fe0d45e"; rur="EAG\0548779859677\0541665541186:01f7c8bdbba6bfaf1f0fc03d5b843fe864bb908dc49069cc77dd546a9c6b50302d83b608"'
        }
    })
    let user = data.graphql.user
    let json = {
        creator: '"hardianto02_',
        status: 'ok',
        code: 200,
        username: user.username,
        fullname: user.full_name,
        verified: user.is_verified,
        video_count_reel: user.highlight_reel_count,
        followers: user.edge_followed_by.count,
        follow: user.edge_follow.count,
        is_bussines: user.is_business_account,
        is_professional: user.is_professional_account,
        category: user.category_name,
        thumbnail: user.profile_pic_url_hd,
        bio: user.biography,
        info_account: data.seo_category_infos
    }
    resolve(json)
})
}
exports.gempa = async() => {
	        return new Promise(async(resolve,reject) => {
                axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const drasa = [];
                        $('table > tbody > tr:nth-child(1) > td:nth-child(6) > span').get().map((rest) => {
         					dir = $(rest).text();
         					drasa.push(dir.replace('\t', ' '))
        				})
        				teks = ''
        				for(let i=0; i<drasa.length; i++){
        					teks += drasa[i] + '\n'
        				}
        				const rasa = teks
                        const format = {
                        	imagemap : $('div.modal-body > div > div:nth-child(1) > img').attr('src'),
                        	magnitude : $('table > tbody > tr:nth-child(1) > td:nth-child(4)').text(),
                        	kedalaman: $('table > tbody > tr:nth-child(1) > td:nth-child(5)').text(),
                        	wilayah: $('table > tbody > tr:nth-child(1) > td:nth-child(6) > a').text(),
                        	waktu: $('table > tbody > tr:nth-child(1) > td:nth-child(2)').text(),
                        	lintang_bujur: $('table > tbody > tr:nth-child(1) > td:nth-child(3)').text(),
                        	dirasakan: rasa
                        }
                        const result = {
                        	creator: 'Fajar Ihsana',
                        	data: format
                        }
                  resolve(result)
			})
                .catch(reject)
            })
}
exports.cariresep = async(query) => {
	        return new Promise(async(resolve,reject) => {
                axios.get('https://resepkoki.id/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const link = [];
                        const judul = [];
                        const upload_date = [];
                        const format = [];
                        const thumb = [];
                        $('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-media > a').each(function(a,b){
                        	link.push($(b).attr('href'))
                        })
                        $('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-content > header > h3 > a').each(function(c,d){
                        	jud = $(d).text();
                        	judul.push(jud)
                        })
                        for( let i = 0; i < link.length; i++){
							format.push({
								judul : judul[i],
								link : link[i]
							})
						}
						const result = {
							creator: 'Fajar Ihsana',
							data : format
						}
                  resolve(result)
			})
                .catch(reject)
            })
}
exports.bacaresep = async(query) => {
	        return new Promise(async(resolve,reject) => {
                axios.get(query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const abahan = [];
                        const atakaran = [];
                        const atahap = [];
                        $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-name').each(function(a,b) {
                        	bh = $(b).text();
                        	abahan.push(bh)
                        })
                        $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-amount').each(function(c,d) {
                        	uk = $(d).text();
                        	atakaran.push(uk)
                        })
                        $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-content > div.single-steps > table > tbody > tr > td.single-step-description > div > p').each(function(e,f) {
                        	th = $(f).text();
                        	atahap.push(th)
                        })
                        const judul = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-title.title-hide-in-desktop > h1').text();
                        const waktu = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-cooking-time > span').text();
                        const hasil = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-serves > span').text().split(': ')[1]
                        const level = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-difficulty > span').text().split(': ')[1]
                        const thumb = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-main-media > img').attr('src')
                        tbahan = 'bahan\n'
                        for( let i = 0; i < abahan.length; i++){
							tbahan += abahan[i] + ' ' + atakaran[i] + '\n' 
						}
						ttahap = 'tahap\n'
						for( let i = 0; i < atahap.length; i++){
							ttahap += atahap[i] + '\n\n' 
						}
						const tahap = ttahap
						const bahan = tbahan
						const result = {
							creator : 'Fajar Ihsana',
							data : {
								judul : judul,
								waktu_masak : waktu,
								hasil : hasil,
								tingkat_kesulitan : level,
								thumb : thumb,
								bahan : bahan.split('bahan\n')[1],
								langkah_langkah : tahap.split('tahap\n')[1]
							}
						}
                  resolve(result)
			})
                .catch(reject)
            })
}
exports.searchgore = async(query) => {
	        return new Promise(async(resolve,reject) => {
	        	axios.get('https://seegore.com/?s=' + query).then(dataa => {
	        		const $$$ = cheerio.load(dataa)
	        		pagina = $$$('#main > div.container.main-container > div > div.bb-col.col-content > div > div > div > div > nav > ul > li:nth-child(4) > a').text();	
	        	rand = Math.floor(Math.random() * pagina) + 1
	        	if(rand === 1){
	        		slink = 'https://seegore.com/?s=' + query
	        	}else{
	        		slink = `https://seegore.com/page/${rand}/?s=${query}` 
	        	}
                axios.get(slink)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const link = [];
                        const judul = [];
                        const uploader = [];
                        const format = [];
                        const thumb = [];
                        $('#post-items > li > article > div.content > header > h2 > a').each(function(a,b){
                        	link.push($(b).attr('href'))
                        })
                        $('#post-items > li > article > div.content > header > h2 > a').each(function(c,d){
                        	jud = $(d).text();
                        	judul.push(jud)
                        })
                        $('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e,f){
                        	upl = $(f).text();
                        	uploader.push(upl)
                        })
                        $('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g,h){
                        	thumb.push($(h).attr('src'))
                        })
                        for( let i = 0; i < link.length; i++){
							format.push({
								judul : judul[i],
								uploader : uploader[i],
								thumb : thumb[i],
								link : link[i]
							})
						}
						const result = {
							creator: 'Fajar Ihsana',
							data : format
						}
                  resolve(result)
			})
                .catch(reject)
            })
	        })
}
exports.randomgore = async() => {
	        return new Promise(async(resolve,reject) => {
	        	axios.get('https://seegore.com/gore/').then(dataa => {
	        		const $$$ = cheerio.load(dataa)
	        		pagina = $$$('#main > div.container.main-container.bb-stretched-full > div > div > div > div > div > div > nav > ul > li:nth-child(4) > a').text();	
	        	rand = Math.floor(Math.random() * pagina) + 1
	        	randvid = Math.floor(Math.random() * 16) + 1
	        	if(rand === 1){
	        		slink = 'https://seegore.com/gore/'
	        	}else{
	        		slink = `https://seegore.com/gore/page/${rand}/` 
	        	}
                axios.get(slink)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const link = [];
                        const result = [];
                        const username = [];
                        const linkp = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a`).attr('href')
                        const thumbb = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a > div > img`).attr('src')
                        axios.get(linkp)
						.then(({ data }) => {
							const $$ = cheerio.load(data)
							const format = {
								judul : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
								views : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
								comment : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
								thumb : thumbb,
								link : $$('video > source').attr('src')
							}
							const result = {
								creator: 'Fajar Ihsana',
								data : format
							}
                  resolve(result)
                })
			})
                .catch(reject)
            })
        })
}
exports.textmakervid = async(text1, style) => {
if(style == 'poly'){
  var tstyle = 0
}
else if(style == 'bold'){
  var tstyle = 1
}
else if(style == 'glowing'){
  var tstyle = 2
}
else if(style == 'colorful'){
  var tstyle = 3
}
else if(style == 'army'){
  var tstyle = 4
}
else if(style == 'retro'){
  var tstyle = 5
}
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url:"https://photooxy.com/other-design/make-a-video-that-spells-your-name-237.html",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { optionNumber_0: tstyle ,text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
exports.bp = async(text) => {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url:"https://textpro.me/create-blackpink-logo-style-online-1001.html",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { 'text[]': text, token: '623c625172b158249e4700caf5ec792e',submit: 'Go' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('#view-image-wrapper > div:nth-child(1) > div > img').attr('src')
      }
      resolve(result);
    });
  })
}

exports.apkmirror = async(query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = [];
                        const developer = [];
                        const lupdate = [];
                        const size = [];
                        const down = [];
                        const version = [];
                        const link = [];
                        const format = [];
                        $('#content > div > div > div.appRow > div > div > div > h5 > a').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                        })
                        $('#content > div > div > div.appRow > div > div > div > a').each(function(c,d) {
                          dev = $(d).text();
                          developer.push(dev)
                        })
                        $('#content > div > div > div.appRow > div > div > div > div.downloadIconPositioning > a').each(function(e,f) {
                          link.push('https://www.apkmirror.com' + $(f).attr('href'))
                        })
                        $('#content > div > div > div.infoSlide > p > span.infoslide-value').each(function(g,h) {
                          data = $(h).text();
                          if(data.match('MB')){
                          size.push(data)
                          }
                          else if(data.match('UTC')){
                            lupdate.push(data)
                          }
                          else if(!isNaN(data) || data.match(',')){
                            down.push(data)
                          }
                          else{
                            version.push(data)
                          }
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            dev : developer[i],
                            size : size[i],
                            version : version[i],
                            uploaded_on : lupdate[i],
                            download_count : down[i],
                            link : link[i]
                          })
                        }
                       const result = {
                        creator : 'Hanya Orang Biasa',
                        data : format
                       }
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.sfiledown = async(link) => {
        return new Promise((resolve,reject) => {
                axios.get(link)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(2) > b').text();
                        const size = $('#download').text().split('Download File')
                        const desc = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(7) > center > h1').text();
                        const type = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(3)').text();
                        const upload = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(5)').text();
                        const uploader = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(2)').text();
                        const download = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(6)').text();
                        const link = $('#download').attr('href')
			other = link.split('/')[7].split('&is')[0]
                        const format = {
                          judul: nama + other.substr(other.length - 6).split('.')[1],
                          size: size[1].split('(')[1].split(')')[0],
                          type: type,
			  mime: other.substr(other.length - 6).split('.')[1],
                          desc: desc,
                          uploader: uploader,
                          uploaded: upload.split('\n - Uploaded: ')[1],
                          download_count : download.split(' - Downloads: ')[1],
                          link: link
                        }
                        const result = {
                        creator : 'Hanya Orang Biasa',
                        data : format
                       }
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.zippydl = async(link) => {
        return new Promise(async(resolve,reject) => {
                axios.get(link)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = $('#lrbox > div:nth-child(2) > div:nth-child(1) > font:nth-child(4)').text();
                        const size = $('#lrbox > div:nth-child(2) > div:nth-child(1) > font:nth-child(7)').text();
                        const upload = $('#lrbox > div:nth-child(2) > div:nth-child(1) > font:nth-child(10)').text();
                        const getlink = async (u) => {
                          console.log('⏳  ' + `Get Page From : ${u}`)
                          const zippy = await axios({ method: 'GET', url: u }).then(res => res.data).catch(err => false)
                          console.log('Done')
                          const $ = cheerio.load(zippy)
                          if (!$('#dlbutton').length) {
                              return { error: true, message: $('#lrbox>div').first().text().trim() }
                          }
                          console.log('⏳  ' + 'Fetch Link Download...')
                          const url = _url.parse($('.flagen').attr('href'), true)
                          const urlori = _url.parse(u)
                          const key = url.query['key']
                          let time;
                          let dlurl;
                          try {
                              time = /var b = ([0-9]+);$/gm.exec($('#dlbutton').next().html())[1]
                              dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (2 + 2 * 2 + parseInt(time)) + '3/DOWNLOAD'
                          } catch (error) {
                              time = _math.evaluate(/ \+ \((.*)\) \+ /gm.exec($('#dlbutton').next().html())[1])
                              dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (time) + '/DOWNLOAD'
                          }
                          console.log('Done')
                          return dlurl 
                      }
                      getlink(link).then(res => {
                        //_(timet) 
                        
                        var result = {
                        creator : 'Hanya Orang Biasa',
                        data : {
                          Judul: nama,
                          size: size,
                          uploaded: upload,
                          link: res
                        }
                       }
                    resolve(result)
                     })
                })
                .catch(reject)
        })
}
exports.android1 = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://an1.com/tags/MOD/?story=' + query + '&do=search&subaction=search')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = [];
                        const link = [];
                        const rating = [];
                        const thumb = [];
                        const developer = [];
                        const format = [];
                        $('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a > span').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                        })
                        $('div > ul > li.current-rating').each(function(c,d) {
                          rat = $(d).text();
                          rating.push(rat)
                        })
                        $('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.developer.xsmf.muted').each(function(e,f) {
                          dev = $(f).text();
                          developer.push(dev)
                        })
                        $('body > div.page > div > div > div.app_list > div > div > div.img > img').each(function(g,h) {
                          thumb.push($(h).attr('src'))
                        })
                        $('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a').each(function(i,j) {
                          link.push($(j).attr('href'))
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            dev : developer[i],
                            rating : rating[i], 
                            thumb : thumb[i],
                            link : link[i]
                          })
                        }
                       const result = {
                        creator : 'Hanya Orang Biasa',
                        data : format
                       }
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.apkmody = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://apkmody.io/?s=' + query)
                .then(({ data }) => {
                  //console.log(data)
                        const $ = cheerio.load(data)
                        const nama = [];
                        const link = [];
                        const mod = [];
                        const thumb = [];
                        const format = [];
                        $('#primary > section:nth-child(3) > div > div > div > article > a > div > div > div > h2').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                        })
                        $('#primary > section:nth-child(3) > div > div > div > article > a > div > div > p').each(function(c,d) {
                          modd = $(d).text();
                          mod.push(modd.split('\n')[1])
                        })
                        $('#primary > section:nth-child(3) > div > div > div > article > a > div > img').each(function(e,f) {
                          thumb.push($(f).attr('src'))
                        })
                        $('#primary > section:nth-child(3) > div > div > div > article > a').each(function(g,h) {
                          link.push($(h).attr('href'))
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            infomod : mod[i], 
                            thumb : thumb[i],
                            link : link[i]
                          })
                        }
                       const result = {
                        creator : 'Hanya Orang Biasa',
                        data : format
                       }

                  resolve(result)
                })
                .catch(reject)
        })
}
exports.happymod = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://www.happymod.com/search.html?q=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = [];
                        const link = [];
                        const rating = [];
                        const thumb = [];
                        const format = [];
                        $('body > div.container-row.clearfix.container-wrap > div.container-left > section > div > div > h3 > a').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                          link.push('https://happymod.com' + $(b).attr('href'))
                        })
                        $('body > div.container-row.clearfix.container-wrap > div.container-left > section > div > div > div.clearfix > span').each(function(c,d) {
                          rat = $(d).text();
                          rating.push(rat)
                        })
                        $('body > div.container-row.clearfix.container-wrap > div.container-left > section > div > a > img').each(function(e,f) {
                          thumb.push($(f).attr('data-original'))
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            thumb : thumb[i],
                            rating : rating[i],
                            link : link[i]
                          })
                        }
                       const result = {
                        creator : 'Hanya Orang Biasa',
                        data : format
                       }
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.ghuser = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://github.com/search?q=' + query + '&type=users')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const username = [];
                        const link = [];
                        const result = [];
                        const thumb = [];
                        $('#user_search_results > div > div > div.flex-auto > div > div.f4.text-normal > a.color-text-secondary').each(function(a,b) {
                                link.push('https://github.com/' + $(b).attr('href'))
                                usr = $(b).text();
                                username.push(usr)
                        })
                        $('#user_search_results > div > div > div.flex-shrink-0.mr-2 > a > img').each(function(c,d) {
                        thumb.push($(d).attr('src').replace('s=40&', ''))
                    })
                        for(let i=0; i<link.length; i++){
                        	result.push({
                        		name : username[i],
                        		thumb : thumb[i],
                        		link : link[i]
                        	})
                        }
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.ghfollower = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://github.com/'+ query + '?tab=followers')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const link = [];
                        const result = [];
                        const username = [];
                        $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > div > div > div.d-table-cell.col-9.v-align-top.pr-3 > a').each(function(a,b) {
                                link.push('https://github.com/' + $(b).attr('href'))
                                username.push($(b).attr('href').split('/')[1])
                        })
                        for(let i=0; i<link.length; i++){
                        	result.push({
                        		username : username[i],
                        		link : link[i]
                        	})
                        }
                        const hasil = {
                        	username : $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block').text().split('\n')[1].replace('          ',''),
                        	followers : $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(1) > span').text(),
                        	avatar : $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img').attr('src'),
                        	listfollowers : result
                        }
                  resolve(hasil)
                })
                .catch(reject)
        })
}
exports.ghfollowing = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://github.com/'+ query + '?tab=following')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const link = [];
                        const result = [];
                        const username = [];
                        $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > div > div > div.d-table-cell.col-9.v-align-top.pr-3 > a').each(function(a,b) {
                                link.push('https://github.com/' + $(b).attr('href'))
                                username.push($(b).attr('href').split('/')[1])
                        })
                        for(let i=0; i<link.length; i++){
                        	result.push({
                        		username : username[i],
                        		link : link[i]
                        	})
                        }
                        const hasil = {
                        	username : $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block').text().split('\n')[1].replace('          ',''),
                          following : $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(1) > span').text(),
                          avatar : $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img').attr('src'),
                        	listfollowing : result
                        }
                  resolve(hasil)
                })
                .catch(reject)
        })
}

exports.corona = async (country) => {
  if (!country) return loghandler.noinput;
  try {
   const res = await axios.request(`https://www.worldometers.info/coronavirus/country/` + country, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  let result = {};
  const $ = cheerio.load(res.data);
  result.status = res.status
  result.negara = $("div").find("h1").text().slice(3).split(/ /g)[0];
  result.total_kasus = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(0).text() + " total";
  result.total_kematian = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(1).text() + " total";
  result.total_sembuh = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(2).text() + " total";
  result.informasi = $("div.content-inner > div").eq(1).text();
  result.informasi_lengkap = "https://www.worldometers.info/coronavirus/country/" + country;
  if(result.negara == ''){
  result.status = 'error'
}
  return result;
  } catch (error404) {
    return "=> Error => " + error404;
  }
};

exports.mangatoon = async (search) => {
  if (!search) return "No Querry Input! Bakaa >\/\/<";
  try {
  const res = await axios.get(`https://mangatoon.mobi/en/search?word=${search}`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  const hasil = [];
  const $ = cheerio.load(res.data);
  $('div.recommend-item').each(function(a, b) {
    let comic_name = $(b).find('div.recommend-comics-title > span').text();
    let comic_type = $(b).find('div.comics-type > span').text().slice(1).split(/ /g).join("");
    let comic_url = $(b).find('a').attr('href');
    let comic_thumb = $(b).find('img').attr('src');
    const result = {
      status: res.status,
      creator: "@dehan_j1ng",
      comic_name,
      comic_type,
      comic_url: 'https://mangatoon.mobi' + comic_url,
      comic_thumb
    };
    hasil.push(result);
  });
  let filt = hasil.filter(v => v.comic_name !== undefined && v.comic_type !== undefined);
  return filt;
  } catch (eror404) {
    return "=> Error =>" + eror404;
  }
}

exports.palingmurah = async (produk) => {
  if (!produk) {
    return new TypeError("No Querry Input! Bakaaa >\/\/<")
  }
  try {
const res = await axios.get(`https://palingmurah.net/pencarian-produk/?term=` + produk)
const hasil = []
const $ = cheerio.load(res.data)
$('div.ui.card.wpj-card-style-2 ').each(function (a, b) {
let url = $(b).find('a.image').attr('href')
let img = $(b).find('img.my_image.lazyload').attr('data-src')
let title = $(b).find('a.list-header').text().trim()
let product_desc = $(b).find('div.description.visible-on-list').text().trim()
let price = $(b).find('div.flex-master.card-job-price.text-right.text-vertical-center').text().trim()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	product: title,
	product_desc: product_desc,
	product_image: img,
	product_url: url,
	price
}
hasil.push(result)
})
  return hasil
  } catch (error404) {
    return new Error("=> Error =>" + error404)
  }
}

exports.mediafire = (query) => {
	return new Promise((resolve,reject) => {
		axios.get(query)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const judul = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').text();
		  	const size = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span').text();
		  	const upload_date = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
		  	const link = $('#downloadButton').attr('href')
		  	const hsil = {
		  		judul : link.split('/')[5],
		  		upload_date : upload_date,
		  		size : size,
                                mime : link.split('/')[5].split('.')[1],
		  		link : link
		  	}
		  resolve(hsil)
		})
		.catch(reject)
	})
}
exports.artinama = (query) => {
        return new Promise((resolve,reject) => {
        	queryy = query.replace(/ /g, '+')
                axios.get('https://www.primbon.com/arti_nama.php?nama1=' + query +'&proses=+Submit%21+')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = $('#body').text();
						const result2 = result.split('\n      \n        \n        \n')[0]
						const result4 = result2.split('ARTI NAMA')[1]
						const result5 = result4.split('.\n\n')
						const result6 = result5[0] + '\n\n' + result5[1]
                  resolve(result6)
                })
                .catch(reject)
        })
}

exports.drakor = (query) => {
        return new Promise((resolve,reject) => {
        	queryy = query.replace(/ /g, '+')
                axios.get('https://drakorasia.net/?s=' + queryy + '&post_type=post')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
                        const link = [];
						const judul = [];
						const thumb = [];
                        $('#post > div > div.thumbnail > a').each(function(a,b) {
                                link.push($(b).attr('href'))
                        		thumb.push($(b).find('img').attr('src'))
                        })
                        $('#post > div > div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a > h2').each(function(c,d) {
                        	titel = $(d).text();
                        	judul.push(titel)
                        })
        for(let i=0; i<link.length; i++){
        	result.push({
        		judul : judul[i],
        		thumb : thumb[i],
        		link : link[i]

        	})
        }
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.wattpad = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://www.wattpad.com/search/' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
                        const linkk= [];
                        const judull = [];
                        const thumb = [];
                        const dibaca = [];
                        const vote = [];
                        const bab =[];
                        $('ul.list-group > li.list-group-item').each(function(a,b) {
                            linkk.push('https://www.wattpad.com' + $(b).find('a').attr('href'))
                            thumb.push($(b).find('img').attr('src'))
                        })
                        $('div.story-card-data.hidden-xxs > div.story-info > ul > li:nth-child(1) > div.icon-container > div > span.stats-value').each(function(e,f) {
                            baca = $(f).text();
                            dibaca.push(baca)
                        })
                        $('div.story-card-data.hidden-xxs > div.story-info > ul > li:nth-child(2) > div.icon-container > div > span.stats-value').each(function(g,h) {
                            vot = $(h).text();
                            vote.push(vot)
                        })
                        $('div.story-card-data.hidden-xxs > div.story-info > ul > li:nth-child(3) > div.icon-container > div > span.stats-value').each(function(i,j) {
                            bb = $(j).text();
                            bab.push(bb)
                        })
                        $('div.story-card-data.hidden-xxs > div.story-info > div.title').each(function(c,d) {
                            titel = $(d).text();
                            judull.push(titel)
                        })
for(let i=0; i<linkk.length; i++){
if(!judull[i] == ''){
result.push({
judul : judull[i],
dibaca: dibaca[i],
divote: vote[i],
thumb : thumb[i],
link : linkk[i]
})
}
}
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.dewabatch = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://dewabatch.com/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
			const linkk= [];
			const judull = [];
			const thumb = [];
			const rating = [];
                        $('div.thumb > a').each(function(a,b) {
                                linkk.push($(b).attr('href'))
				judull.push($(b).attr('title'))
				thumb.push($(b).find('img').attr('src').split('?resize')[0])
			})
			$('#content > div.postbody > div > div > ul > li > div.dtl > div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(1) > rating > ratingval > ratingvalue').each(function(c, d){
				rate = $(d).text();
				rating.push(rate.split(' ')[0])
			})
for(let i=0; i<linkk.length; i++){
result.push({
judul : judull[i],
rating : rating[i],
thumb : thumb[i],
link : linkk[i]
})
}
                  resolve(result)
                })
                .catch(reject)
        })
}


exports.kiryu = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://kiryuu.id/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
			const linkk= [];
			const judull = [];
			const thumb = [];
			const rating = [];
                        $('div.bsx > a').each(function(a,b) {
                                linkk.push($(b).attr('href'))
				judull.push($(b).attr('title'))
				thumb.push($(b).find('img').attr('src').split('?resize')[0])
			})
			$('div.rating > div.numscore').each(function(c,d) {
			rate = $(d).text();
			rating.push(rate)
			})
for(let i=0; i<linkk.length; i++){
result.push({
judul : judull[i],
rating : rating[i],
thumb : thumb[i],
link : linkk[i]
})
}
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.sfilesearch = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://sfile.mobi/search.php?q=' + query + '&search=Search')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
                        const link = [];
                        const neme = [];
const size = [];
                        $('div.w3-card.white > div.list > a').each(function(a,b) {
                                link.push($(b).attr('href'))
                        })
                        $('div.w3-card.white > div.list > a').each(function(c,d) {
                                name = $(d).text();
                                neme.push(name)
                                })
			$('div.w3-card.white > div.list').each(function(e,f) {
                                siz = $(f).text();
                               //sz = siz.
				size.push(siz.split('(')[1])
                                })
for(let i=0; i<link.length; i++){
        result.push({
                nama: neme[i],
		size : size[i].split(')')[0],
                link: link[i]
        })
}
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.carigc = (nama) => {
	return new Promise((resolve,reject) => {
		axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search='+ nama +'&searchby=name')
		.then(({ data }) => {
			const $ = cheerio.load(data);
			const result = [];
			const lnk = [];
			const nm = [];
		$('div.wa-chat-title-container').each(function(a,b){
			const limk = $(b).find('a').attr('href');
			lnk.push(limk)
			})
		$('div.wa-chat-title-text').each(function(c,d) {
			const name = $(d).text();
			nm.push(name)
			})
		for( let i = 0; i < lnk.length; i++){
			result.push({
				nama: nm[i].split('. ')[1],
				link: lnk[i].split('?')[0]
			})
		}
		resolve(result)
		})
	.catch(reject)
	})
}

exports.wikisearch = async (query) => {
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

exports.devianart = (query) => {
	return new Promise((resolve,reject) => {
		axios.get('https://www.deviantart.com/search?q=' + query)
		.then(({ data }) =>{
		const $$ = cheerio.load(data)
		 no = ''
		$$('#root > div.hs1JI > div > div._3WsM9 > div > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div:nth-child(1) > div > section > a').each(function(c,d){
			no = $$(d).attr('href')
		})
		axios.get(no)
		.then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		$('#root > main > div > div._2QovI > div._2rKEX._17aAh._1bdC8 > div > div._2HK_1 > div._1lkTS > div > img').each(function(a,b){
			result.push($(b).attr('src'))
		})
		resolve(result)
		})
	})
		.catch(reject)
	})
}
exports.konachan = (chara) => {
	return new Promise((resolve,reject) => {
		let text = chara.replace(' ','_')
		axios.get('https://konachan.net/post?tags='+ text +'+')
		.then(({ data }) =>{
		const $$ = cheerio.load(data)
		const no = [];
		$$('div.pagination > a').each(function(c,d){
			no.push($$(d).text())
		})
		let mat = Math.floor(Math.random() * no.length)
		axios.get('https://konachan.net/post?page='+ mat +'&tags=' + text + '+')
		.then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		$('#post-list > div.content > div:nth-child(4) > ul > li > a.directlink.largeimg').each(function(a,b){
			result.push($(b).attr('href'))
		})
		resolve(result)
		})
	})
		.catch(reject)
	})
}

exports.wallpapercave = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://wallpapercave.com/search?q=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
                        $('div.imgrow > a').each(function(a,b) {
			if(!$(b).find('img').attr('src').includes('.gif')){
                                result.push('https://wallpapercave.com/' + $(b).find('img').attr('src').replace('fuwp','uwp'))  
                        }})
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.wallpapercraft = (query) => {
	return new Promise((resolve,reject) => {
		axios.get('https://wallpaperscraft.com/search/?query=' + query)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			$('span.wallpapers__canvas').each(function(a,b) {
				result.push($(b).find('img').attr('src'))	
			})
		  resolve(result)
		})
		.catch(reject)
	})
}
exports.wallpaperhd = (chara) => {
	return new Promise((resolve,reject) => {
		axios.get('https://wall.alphacoders.com/search.php?search=' + chara + '&filter=4K+Ultra+HD')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			$('div.boxgrid > a > picture').each(function(a,b) {
				result.push($(b).find('img').attr('src').replace('thumbbig-',''))	
			})
		  resolve(result)
		})
		.catch(reject)
	})
}
