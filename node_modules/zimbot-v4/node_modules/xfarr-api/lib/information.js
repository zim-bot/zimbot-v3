const { axios, cheerio, author} = fc

/**
 * Jadwalbola Scraper From https://m.bola.net/jadwal_televisi/
 * @function
 * @param ()
 *
 */
exports.jadwalbola = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://m.bola.net/jadwal_televisi/')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('body > div.main > div > div:nth-child(3) > div > ul > li').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    jadwal: $(b).find('> div > div > p > a').text().split('Jadwal TV: ')[1],
                    tanggal: $(b).find('> div > div > span').text().split('jadwal televisi ')[1],
                    url: $(b).find('> div > div > p > a').attr('href'),
                    thumb: 'https://cdns.klimg.com/bola.net/library/upload/21/2019/01/100s/bola_e9af938.jpg'
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Jadwaltv Scraper From http://www.dokitv.com/jadwal-acara-tv
 * @function
 * @param ()
 *
 */
exports.jadwaltv = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://www.dokitv.com/jadwal-acara-tv')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('#tabeljadwaltv > tbody > tr ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    acara: $(b).find('> td:nth-child(2)').text(),
                    channel: $(b).find('> td > a').text(),
                    jam: $(b).find('> td.jfx').text(),
                    source: $(b).find('> td > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Jadwalsholat Scraper From https://umrotix.com/
 * @function
 * @param ()
 *
 */
exports.jadwalsholat = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://umrotix.com/jadwal-sholat/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ').each(function(a, b) {   
                    result = {
                    status: 200,
                    author: author,
                    tanggal: $(b).find('> div:nth-child(2)').text(),
                    imsyak: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)').text(),
                    subuh: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)').text(),
                    dzuhur: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)').text(),
                    ashar: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)').text(),
                    maghrib: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)').text(),
                    isya: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)').text()
                }
                resolve(result)
                })
            })
            .catch(reject)
    })
}

/**
 * Kompasnews Scraper From https://news.kompas.com/
 * @function
 * @param ()
 *
 */
exports.kompasnews = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://news.kompas.com/`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('body > div > div.container.clearfix > div:nth-child(3) > div.col-bs10-7 > div:nth-child(3) > div.latest.ga--latest.mt2.clearfix > div > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    berita: $(b).find('> div > div.article__box > h3').text(),
                    upload_time: $(b).find('> div > div.article__box > div.article__date').text(),
                    type_berita: $(b).find('> div > div.article__boxsubtitle > h2').text(),
                    link: $(b).find('> div > div.article__box > h3 > a').attr('href'),
                    thumbnail: $(b).find('> div > div.article__asset > a > img').attr('data-src'),
                    info_berita: $(b).find('> div > div.article__box > div.article__lead').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Inews Scraper From https://www.inews.id/news
 * @function
 * @param ()
 *
 */
exports.inews = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.inews.id/news`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#news-list > li ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.title-news-update.padding-0px-top').text().trim(),
                    upload_time: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.date.margin-10px-left').text().trim().split('|')[0],
                    link: $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > div > div.float-left.width-130px.position-absolute > img').attr('data-original'),
                    info_berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > p').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Wattpaduser Scraper From https://www.wattpad.com/
 * @function
 * @param {String} query - example WattpadRomanceIN
 *
 */
exports.wattpaduser = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/user/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('#app-container > div > header ').each(function(a, b) {
                    $('#profile-about > div > div ').each(function(c, d) {
                    result = {
                    status: 200,
                    author: author,
                    username: $(b).find('> div.badges > h1').text().trim(),
                    works: $(b).find('> div.row.header-metadata > div:nth-child(1) > p:nth-child(1)').text(),
                    reading_list: $(b).find('> div.row.header-metadata > div.col-xs-4.scroll-to-element > p:nth-child(1)').text(),
                    followers: $(b).find('> div.row.header-metadata > div.col-xs-4.on-followers > p.followers-count').text(),
                    joined: $(d).find('> ul > li.date.col-xs-12.col-sm-12 > span').text().trim().replace('Joined',''),
                    pp_picture: `https://img.wattpad.com/useravatar/${query}.128.851744.jpg`,
                    about: $(d).find('> div.description > pre').text() ? $(d).find('> div.description > pre').text() : 'Not found'
                }
                resolve(result)
                })
                })
            })
            .catch(reject)
    })
}

/**
 * Twitter trend Scraper From https://getdaytrends.com/
 * @function
 * @param {String} query - example indonesia
 *
 */
exports.twittertrend = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://getdaytrends.com/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                num = 1
                 $('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    rank: num++,
                    hastag: $(b).find('> td.main > a').text(),
                    tweet: $(b).find('> td.main > div > span').text().trim(),
                    link: 'https://getdaytrends.com/' + $(b).find('> td.main > a').attr('href'),
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Tiktok trend Scraper From https://brainans.com/
 * @function
 * @param ()
 *
 */
exports.tiktoktrend = async () => {
    return new Promise((resolve, reject) => {
    axios.get("https://brainans.com/").then(async(data) => {
    const $ = cheerio.load(data.data);
    const result = {};
    const plink = [];
    result["status"] = "200";
    result["author"] = author
    result["result"] = [];
    async function getmetadata(link, views) {
        const data = await axios.get("https://brainans.com" + link);
        const $$ = cheerio.load(data.data);
        result["result"].push({
            username: $$("#card-page").find("div.main__user-desc.align-self-center.ml-2 > a").text(),
            upload_time: $$("#card-page").find("div.main__user-desc.align-self-center.ml-2").text().split($$("#card-page").find("div.main__user-desc.align-self-center.ml-2 > a").text())[1].trim(),
            caption: $$("#card-page").find("div.main__list").text(),
            views: views,
            like: $$("#card-page").find("div.content__btns.d-flex > div:nth-child(1) > span").text(),
            comment: $$("#card-page").find("div.content__btns.d-flex > div:nth-child(2) > span").text(),
            share: $$("#card-page").find("div.content__btns.d-flex > div:nth-child(3) > span").text(),
            video: $$("#card-page").find("video").attr("src"),
        });
    }
    $("#welcome_videos > div > div > a").each(function(a, b) {
        plink.push({link: $(b).attr("href"),views: $(b).find("div.video_view_count.bx.bx-show > span").text(),
        });
    });
    for (let i = 0; i < 10; i++) {
        await getmetadata(plink[i].link, plink[i].views);
    }
    resolve(result)
}).catch(reject)
})
};