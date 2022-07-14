const { axios, cheerio, author} = fc

/**
 * Anime Scraper From https://www.anime-planet.com
 * @function
 * @param {String} query - example naruto
 *
 */
exports.anime = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: $(b).find('> a > div.crop > img').attr('src').startsWith('https://') ? $(b).find('> a > div.crop > img').attr('src') : 'https://www.anime.planet.com' + $(b).find('> a > div.crop > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            }).catch(reject)
    })
}

/**
 * Character Scraper From https://www.anime-planet.com
 * @function
 * @param {String} query - example naruto
 *
 */
exports.character = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/characters/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > table > tbody > tr').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            character: $(b).find('> td.tableCharInfo > a').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> td.tableCharInfo > a').attr('href'),
                            thumbnail: $(b).find('> td.tableAvatar > a > img').attr('src').startsWith('https://') ? $(b).find('> td.tableAvatar > a > img').attr('src') : 'https://www.anime.planet.com' + $(b).find('> td.tableAvatar > a > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Manga Scraper From https://www.anime-planet.com
 * @function
 * @param {String} query - example naruto
 *
 */
exports.manga = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/manga/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: $(b).find('> a > div.crop > img').attr('src').startsWith('https://') ? $(b).find('> a > div.crop > img').attr('src') : 'https://www.anime.planet.com' + $(b).find('> a > div.crop > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Otakudesu Scraper From https://otakudesu.watch
 * @function
 * @param {String} query - example owari no seraph
 *
 */
exports.otakudesu = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://otakudesu.watch/?s=${query}&post_type=anime`).then(({data}) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#venkonten > div > div.venser > div > div > ul > li').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> h2 > a').text(),
                            thumbnail: $(b).find('> img').attr('src'),
                            link: $(b).find('> h2 > a').attr('href')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            }).catch(reject)
    })
}

/**
 * Otakudesuinfo Scraper From https://otakudesu.watch
 * @function
 * @param {String} url - example https://otakudesu.watch/anime/owari-seraph-season-2-subtitle-indonesia/
 *
 */
exports.otakudesuinfo = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(({data}) => {
                const $ = cheerio.load(data)
                        result = {
                            status: 200,
                            author: author,
                            judul: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(1) > span').text().split(': ')[1],
                            japanese: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(2) > span').text().split(': ')[1],
                            rating: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(3) > span').text().split(': ')[1],
                            produser: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(4) > span').text().split(': ')[1],
                            tipe: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(5) > span').text().split(': ')[1],
                            anime_status: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(6) > span').text().split(': ')[1],
                            total_episode: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(7) > span').text().split(': ')[1],
                            durasi: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(8) > span').text().split(': ')[1],
                            rilis: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(9) > span').text().split(': ')[1],
                            studio: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(10) > span').text().split(': ')[1],
                            genre: $('#venkonten > div.venser > div.fotoanime > div.infozin > div > p:nth-child(11)').text().split(': ')[1],
                            download_lengkap: $('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href'),
                            thumbnail: $('#venkonten > div.venser > div.fotoanime > img').attr('src'),
                            sinopsis: $('#venkonten > div.venser > div.fotoanime > div.sinopc').text().trim()
                        };
                resolve(result)
            }).catch(reject)
    })
}

/**
 * Otakudesuongoing Scraper From https://otakudesu.watch
 * @function
 * @param ()
 *
 */
exports.otakudesuongoing = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://otakudesu.watch`).then(({data}) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#venkonten > div > div.venser > div.venutama > div > div.rapi > div > ul > li').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> div > div.thumb > a > div > h2').text().trim(),
                            episode: $(b).find('> div > div.epz').text().trim(),
                            tanggal: $(b).find('> div > div.newnime').text().trim(),
                            hari: $(b).find('> div > div.epztipe').text().trim(),
                            thumbnail: $(b).find('> div > div.thumb > a > div > img').attr('src'),
                            link: $(b).find('> div > div.thumb > a').attr('href')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            }).catch(reject)
    })
}

/**
 * Kiryu Scraper From https://kiryuu.id
 * @function
 * @param {String} query - example naruto
 *
 */
exports.kiryu = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://kiryuu.id/?s=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#content > div.wrapper > div.postbody > div > div.listupd > div ').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> div > a').attr('title'),
                            manga_status: $(b).find('> div > a > div.limit > span.status.Completed').text() ? $(b).find('> div > a > div.limit > span.status.Completed').text() : 'Not Complete',
                            last_chapter: $(b).find('> div > a > div.bigor > div.adds > div.epxs').text(),
                            ranting: $(b).find('> div > a > div.bigor > div.adds > div.rt > div > div.numscore').text(),
                            thumbnail: $(b).find('> div > a > div.limit > img').attr('src'),
                            link: $(b).find('> div > a').attr('href')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}