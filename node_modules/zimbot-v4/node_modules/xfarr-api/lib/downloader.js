const { axios, cheerio, request, slineMetadata, author} = fc

/**
 * Imgur Downloader Scraper From https://www.expertsphp.com
 * @function
 * @param {String} url - Your Imgur url, example https://imgur.com/gallery/WGiOMgp
 *
 */
exports.imgur = async (url) => {
    return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `https://www.expertsphp.com/instagram-reels-downloader.php`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "cookie": "_ga_D1XX1R246W=GS1.1.1656127044.1.0.1656127044.0; __gads=ID=a826d8f71f32cdce-228526c6c4d30038:T=1656127044:RT=1656127044:S=ALNI_Mbc0q65XMPrQjf8pqxKtg_DfBEnNw; __gpi=UID=0000068f7e0217a6:T=1656127044:RT=1656127044:S=ALNI_MYDy-jLWlGuI8I9ZeSAgcTfDaJohQ; _ga=GA1.2.136312705.1656127045; _gid=GA1.2.728659727.1656127045; _gat_gtag_UA_120752274_1=1"
                },
                formData: {
                    url: url
                }
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                const $ = cheerio.load(body)
                const result = {
                    status: 200,
                    author: author,
                    video_link: $('#showdata > center > div:nth-child(5) > a').attr('href'),
                    image_link: $('#showdata > center > img').attr('src')
                }
                resolve(result);
            })
        })
}

/**
 * Imdb Downloader Scraper From https://freedownloadvideo.net
 * @function
 * @param {String} url - Your Imdb url, example https://www.imdb.com/video/vi146981657?listId=ls053181649
 *
 */
exports.imdb = async (url) => {
    return new Promise((resolve, reject) => {
        axios.get('https://freedownloadvideo.net/imdb-video-downloader').then((data) => {
            let a = cheerio.load(data.data)
            let token = a('#token').attr('value')
            const options = {
                method: 'POST',
                url: `https://freedownloadvideo.net/wp-json/aio-dl/video-data/`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded;",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "cookie": "PHPSESSID=jue6d59cnfgu8pmraa971cetm6; _gid=GA1.2.1096581014.1656129824; __gads=ID=855f6257a3b17608-227b1200fed200a7:T=1656129824:RT=1656129824:S=ALNI_MYlQs2q77JAmj399O3YnmMSElqAIA; __gpi=UID=0000068f8a6124cf:T=1656129824:RT=1656129824:S=ALNI_MZhz1dM3pQuLjvXkFxtGqNtiIo4yw; _ga_KN64Y44T94=GS1.1.1656129823.1.1.1656130205.0; _ga=GA1.2.1859454192.1656129824"
                },
                formData: {url: url,token: token}
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                res = JSON.parse(body)
                result = {
                    status: 200,
                    author: author,
                    ...res,
                }
                resolve(result);
            })
        }).catch(reject)
    })
}

/**
 * Soundcloud Downloader Scraper From https://soundcloudmp3.org/id
 * @function
 * @param {String} url - Your Soundcloud url, example https://soundcloud.com/mlicasiano09/talking-to-the-moon-bruno-mars?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
 *
 */
exports.soundcloud = async (url) => {
    return new Promise((resolve, reject) => {
        axios.get('https://soundcloudmp3.org/id').then((data) => {
            let a = cheerio.load(data.data)
            let token = a('form#conversionForm > input[type=hidden]').attr('value')
            const options = {
                method: 'POST',
                url: `https://soundcloudmp3.org/converter`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded;",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": data["headers"]["set-cookie"],
                },
                formData: {
                    _token: token,
                    url: url
                }
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                $get = cheerio.load(body)
                const result = {
                    status: 200,
                    author: author,
                    title: $get('#preview > div:nth-child(3) > p:nth-child(2)').text().replace('Title:',''),
                    duration: $get('#preview > div:nth-child(3) > p:nth-child(3)').text().replace(/Length\:|Minutes/g,''),
                    quality: $get('#preview > div:nth-child(3) > p:nth-child(4)').text().replace('Quality:',''),
                    thumbnail: $get('#preview > div:nth-child(3) > img').attr('src'),
                    download: $get('#download-btn').attr('href')
                }
                resolve(result)
            });
        })
    })
}

/**
 * Facebook Downloader Scraper From https://downvideo.net/
 * @function
 * @param {String} url - Your Facebook url, example https://www.facebook.com/gita.spense/videos/1409197592877652/?flite=scwspnss&mibextid=SPoPTSVtTECNhSoR
 *
 */
exports.facebook = async(url) => {
    return new Promise(async(resolve, reject) => {
        await axios.get('https://downvideo.net/').then(gdata => {
        const a = cheerio.load(gdata.data)
        const token = a('body > div > center > div.col-md-10 > form > div > input[type=hidden]:nth-child(2)').attr('value')
        const options = {
            method: "POST",
            url: `https://downvideo.net/download.php`,
            headers: {
                "content-type": 'application/x-www-form-urlencoded',
                "cookie": gdata["headers"]["set-cookie"],
                "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
            },
            formData: {
                URL: url,
                token: token,
            },
        };
        request(options, async function(error, response, body) {
            if (error) throw new Error(error)
            const $ = cheerio.load(body)
            const result = {
                status: 200,
                author: author,
                title: $('body').find('div:nth-child(1) > h4').text(),
                sd: $('#sd > a').attr('href'),
                hd: $('body').find('div:nth-child(7) > a').attr('href')
            }
            resolve(result)
        })
    })
})
}

/**
 * Tiktok Downloader Scraper From https://downvideo.quora-wiki.com
 * @function
 * @param {String} url - Your Tiktok url, example https://vt.tiktok.com/ZSdoxX6FE/?k=1
 *
 */
exports.tiktok = async (url) => {
    try {
        const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
        let a = cheerio.load(tokenn.data);
        let token = a("#token").attr("value");
        const param = {
            url: url,
            token: token,
        };
        const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            }
        );
        return {
            status: 200,
            author: author,
            title: data.title,
            thumbnail: "https:" + data.thumbnail,
            duration: data.duration,
            media: data.medias,
        };
    } catch (e) {
        return e
    }
}

/**
 * Instagram Downloader Scraper From https://downvideo.quora-wiki.com
 * @function
 * @param {String} url - Your Instagram url, example https://www.instagram.com/p/CfYiWX_NjsS/?igshid=YmMyMTA2M2Y=
 *
 */
exports.instagram = async (url) => {
    try {
        const tokenn = await axios.get("https://downvideo.quora-wiki.com/instagram-video-downloader#url=" + url);
        let a = cheerio.load(tokenn.data);
        let token = a("#token").attr("value");
        const param = {
            url: url,
            token: token,
        };
        const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            }
        );
        return {
            status: 200,
            author: author,
            title: data.title,
            thumbnail: "https:" + data.thumbnail,
            duration: data.duration,
            media: data.medias,
        };
    } catch (e) {
        return e
    }
}

/**
 * Twitter Downloader Scraper From https://twdown.net/
 * @function
 * @param {String} url - Your Twitter url, example https://twitter.com/LucuLucuVideo/status/1542123908052045825?s=20
 *
 */
exports.twitter = async (url) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios.request("https://twdown.net/download.php", {
            method: "post",
            data: new URLSearchParams(Object.entries({URL: url})),
            headers: {
                "cookie": "_ga=GA1.2.1719370542.1656221221; _gid=GA1.2.1028366575.1656221221; _gat=1; __gads=ID=cd819a6c3b9f7043-22093ec7c4d30051:T=1656221221:RT=1656221221:S=ALNI_Maq2SzDvBkyA7woO7Z6fNoN2u5VcA; __gpi=UID=0000069511f3d3b8:T=1656221221:RT=1656221221:S=ALNI_Mbkzo4K9cEygIF4hr5wwsKcSobikQ",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            },
        });
        const $ = cheerio.load(data)
        result = {
            status: 200,
            author: author,
            nickname: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(1) > div:nth-child(2) > h4 > strong').text(),
            caption: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(1) > div:nth-child(2) > p').text().trim(),
            thumbnail: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(1) > div:nth-child(1) > img').attr('src'),
            quality_270: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td:nth-child(4) > a').attr('href'),
            quality_360: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
            quality_720: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
            mp3: 'https://twdown.net/' + $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(4) > td:nth-child(4) > a').attr('href')
        }
        resolve(result)
    });
};

/**
 * Telesticker Downloader Scraper From https://api.telegram.org/
 * @function
 * @param {String} url - Your Telesticker url, example https://t.me/addstickers/c1129234339_by_HarukaAyaBot
 *
 */
exports.telesticker = async (url) => {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) throw 'Enther your url telegram sticker'
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const hasil = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: author,
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            hasil.push(result)
        }
    resolve(hasil)
    })
}

/**
 * Linesticker Downloader Scraper From http://dl.stickershop.line.naver.jp
 * @function
 * @param {String} url - Your Likesticker url, example https://store.line.me/stickershop/product/6934597/id
 *
 */
exports.linesticker = (url) => {
     return new Promise((resolve, reject) => {
          if (!url.match(/(https:\/\/store.line.me\/stickershop\/product\/)/gi)) return "Enther your url line sticker"
          const id = url.match(/[0-9]/g).join('')
          slineMetadata(id)
               .then(async (a) => {
                    const id = a.id
                    const creator = a.author
                    const title = a.title
                    const stiker = a.stickers
                    let urls = []
                    let url = []
                    for (let x of stiker){
                              urls.push(`https://sdl-stickershop.line.naver.jp/products/0/0/1/${id}/android/animation/${x.id}.png`)
                              url.push(`http://dl.stickershop.line.naver.jp/stickershop/v1/sticker/${x.id}/android/sticker.png`)
                          }
                          const result = {
                            status: 200,
                            author: author,
                            result: {
                                creator: creator,
                                title: title,
                                animated: a.animate,
                                sticker: url,
                                sticker_animasi: urls
                         }
                    }
                    resolve(result)
               }).catch(reject)
     })
}

/**
 * Like Downloader Scraper From https://likeedownloader.com/
 * @function
 * @param {String} url - Your Like url, example https://l.likee.video/v/MmMNz4
 *
 */
exports.like = async (url) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios.request("https://likeedownloader.com/results", {
            method: "post",
            data: new URLSearchParams(Object.entries({id: url})),
            headers: {
                "cookie": "_ga=GA1.2.553951407.1656223884; _gid=GA1.2.1157362698.1656223884; __gads=ID=0fc4d44a6b01b1bc-22880a0efed2008c:T=1656223884:RT=1656223884:S=ALNI_MYp2ZXD2vQmWnXc2WprkU_p6ynfug; __gpi=UID=0000069517bf965e:T=1656223884:RT=1656223884:S=ALNI_Map47wQbMbbf7TaZLm3TvZ1eI3hZw; PHPSESSID=e3oenugljjabut9egf1gsji7re; _gat_UA-3524196-10=1",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            },
        });
        const $ = cheerio.load(data)
        result = {
            status: 200,
            author: author,
            title: $('body > div.page-wrapper > div.container > div > div.quote-box > p.quote-text > span').text(),
            thumbnail: $('body > div.page-wrapper > div.container > div > div.quote-box > div > img').attr('src'),
            watermark: $('body > div.page-wrapper > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a').attr('href'),
            no_watermark: $('body > div.page-wrapper > div.container > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').attr('href')
        }
        resolve(result)
    });
};

/**
 * Cocofun Downloader Scraper From Your Url :v
 * @function
 * @param {String} url - Your Cocofun url, example http://www.icocofun.com/share/post/457616496291?lang=id&pkg=id&share_to=copy_link&m=c6d95b35bbbbf91ce3da574262388117&d=f7445b55ca8eb354536296f34f9c2a878ccc7704deeb8e2840eed6641f41c5d7&nt=4
 *
 */
exports.cocofun = (url) => {
  return new Promise((resolve, reject) => {
    axios({url, method: "get",
      headers: {
        "Cookie": "client_id=1a5afdcd-5574-4cfd-b43b-b30ad14c230e",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      }
    }).then(data => {
      $ = cheerio.load(data.data)
      let json
      const res = $('script#appState').get()
      for(let i of res){
        if(i.children && i.children[0] && i.children[0].data){
          ress = i.children[0].data.split('window.APP_INITIAL_STATE=')[1]
          json = JSON.parse(ress)
        }
        const result = {
          status: 200,
          author: author,
          topic: json.share.post.post.content ? json.share.post.post.content : json.share.post.post.topic.topic,
          caption: $("meta[property='og:description']").attr('content'),
          play: json.share.post.post.playCount,
          like: json.share.post.post.likes,
          share: json.share.post.post.share,
          duration: json.share.post.post.videos[json.share.post.post.imgs[0].id].dur,
          thumbnail: json.share.post.post.videos[json.share.post.post.imgs[0].id].coverUrls[0],
          watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].urlwm,
          no_watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].url
        }
        resolve(result)
      }
    }).catch(reject)
  })
}

/**
 * Pinterest Downloader Scraper From https://www.expertsphp.com/
 * @function
 * @param {String} url - Your Pinterest url, example https://pin.it/75sDbuC
 *
 */
exports.pinterestdl = async(url) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            url: `https://www.expertsphp.com/facebook-video-downloader.php`,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                "cookie": "__gads=ID=a826d8f71f32cdce-228526c6c4d30038:T=1656127044:RT=1656127044:S=ALNI_Mbc0q65XMPrQjf8pqxKtg_DfBEnNw; __gpi=UID=0000068f7e0217a6:T=1656127044:RT=1656334216:S=ALNI_MYDy-jLWlGuI8I9ZeSAgcTfDaJohQ; _gid=GA1.2.1776710921.1656334217; _gat_gtag_UA_120752274_1=1; _ga_D1XX1R246W=GS1.1.1656354473.4.1.1656354584.0; _ga=GA1.2.136312705.1656127045"
            },
            formData: {url: url}
        }
        request(options, async function(error, response, body) {
            if (error) throw new Error(error);
            const $ = cheerio.load(body)
            const hasil = [];
            $('#showdata > div:nth-child(4) > table > tbody > tr ').each(function(a, b) {
                const result = {
                    status: 200,
                    author: author,
                    quality: $(b).find('> td:nth-child(2) > strong').text(),
                    format: $(b).find('> td:nth-child(3) > strong').text(),
                    url: $(b).find('> td:nth-child(1) > a').attr('href')
                }
                hasil.push(result)
            })
            resolve(hasil)
        });
    })
}

/**
 * Youtube Downloader Scraper From https://yt1s.com/
 * @function
 * @param {String} url - Your Youtube url, example https://youtu.be/zXiSTrOQhxM
 * @param {String} type - mp3 or empty empty
 *
 */
exports.youtube = async(url,type) => {
  return new Promise((resolve, reject) => {
    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/;
    if (ytIdRegex.test(url)) {
    const iconfig = {
        q: ytIdRegex.exec(url), 
        vt: "home",
    }
    axios.request("https://yt1s.com/api/ajaxSearch/index",{
        method: "post",
        data: new URLSearchParams(Object.entries(iconfig)),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        }}).then(async(gdata) => {
        const cconfig = {
            vid: gdata.data.vid,
            k: type === "mp3" ? gdata.data.links.mp3["mp3128"]["k"] : gdata.data.links.mp4["135"]["k"],
        }
        const { data } = await axios.request("https://yt1s.com/api/ajaxConvert/convert",{
            method: "post",
            data: new URLSearchParams(Object.entries(cconfig)),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                "Cookie": "__atuvc=2|26; __atssc=google;2",
            }})
        const result = {
            status: 200,
            author: author,
            title: data.title,
            username: gdata.data.a,
            id: data.vid,
            ftype: type === "mp3" ? "mp3" : "mp4",
            fquality: type === "mp3" ? gdata.data.links.mp3.mp3128.q : gdata.data.links.mp4["135"].q,
            size: type === "mp3" ? gdata.data.links.mp3["mp3128"].size : gdata.data.links.mp4["135"].size,
            thumbnail: `https://i.ytimg.com/vi/${data.vid}/0.jpg`,
            download_url: data.dlink,
        };
        resolve(result)
    }).catch("Error")
    } else resolve("Invalid url")
})
}