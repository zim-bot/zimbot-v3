const { axios, cheerio, bing, acr, randomobj, author} = fc

/**
 * Film Search Scraper From http://167.99.31.48/
 * @function
 * @param {String} query -  example love
 *
 */
exports.film = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`http://167.99.31.48/?s=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hasil = [];
				$('#content > div > div.los').each(function (a, b) {
                    $(b).find('article').each(function (c, d) {
                        const judul = $(d).find('div > a > div.addinfox > header > h2').text()
                        const quality = $(d).find('div > a > div > div > span').text()
                        const type = $(d).find('div > a > div.addinfox > div > i.type').text()
                        const upload = $(d).find('div > a > div.addinfox > div > span').text()
                        const link = $(d).find('div > a').attr('href');
                        const thumb = $(d).find('div > a > div > img').attr('src');
                        const result = {
                            status: 200,
                        	author: author,
                            judul: judul,
                            quality: quality,
                            type: type,
                            upload: upload,
                            link: link,
                            thumb: thumb,
                        };
                        hasil.push(result);
                    });
                });
				resolve(hasil)
			})
			.catch(reject)
	})
}

/**
 * Wattpad Search Scraper From https://www.wattpad.com/
 * @function
 * @param {String} query -  example love
 *
 */
exports.wattpad = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/search/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('div.story-card-data.hidden-xxs > div.story-info ').each(function(a, b) {
                    $('ul.list-group > li.list-group-item').each(function(c,d) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div.title').text(),
                    dibaca: $(b).find('> ul > li:nth-child(1) > div.icon-container > div > span.stats-value').text(),
                    divote: $(b).find('> ul > li:nth-child(2) > div.icon-container > div > span.stats-value').text(),
                    bab: $(b).find('> ul > li:nth-child(3) > div.icon-container > div > span.stats-value').text(),
                    waktu: $(b).find('> ul > li:nth-child(4) > div.icon-container > div > span.stats-value').text(),
                    url:'https://www.wattpad.com' + $(d).find('a').attr('href'),
                    thumb: $(d).find('img').attr('src'),
                    description: $(b).find('> div.description').text().replace(/\n/g,'')
                }
                hasil.push(result)
                })
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Mangatoons Search Scraper From https://mangatoon.mobi/
 * @function
 * @param {String} query -  example love
 *
 */
exports.mangatoons = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://mangatoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-page > div > div.comics-result > div.recommended-wrap > div > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div.recommend-comics-title > span').text(),
                    genre: $(b).find('> div.comics-type > span').text().trim(),
                    link: 'https://mangatoon.mobi' + $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > img').attr('src')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Noveltoons Search Scraper From https://noveltoon.mobi/
 * @function
 * @param {String} query -  example love
 *
 */
exports.noveltoons = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://noveltoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-content > div > div.search-content-left > a').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div > div > p.search-item-title').text(),
                    like: $(b).find('> div > div > p.search-item-like > span:nth-child(2)').text().trim(),
                    genre: $(b).find('> div > div > p.search-item-label').text().trim().replace(/\ /g,'').replace(/\n\n/g,', '),
                    thumbnail: $(b).find('> div > img').attr('src'),
                    url: 'https://noveltoon.mobi' + $(b).attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Webtoons Search Scraper From https://www.webtoons.com/
 * @function
 * @param {String} query -  example love
 *
 */
exports.webtoons = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> a > div > p.subj').text(),
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: 'https://www.webtoons.com' + $(b).find('> a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Drakor Search Scraper From https://drakorasia.blog
 * @function
 * @param {String} query -  example love
 *
 */
exports.drakor = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://drakorasia.blog//?s=${query}&post_type=post`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#post > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a > h2').text().trim(),
                    years: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.category.text-gray.font-normal.text-white.text-xs.truncate > a').text(),
                    genre: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.genrenya.text-center.text-white.text-opacity-75.text-xs.mt-1').text().trim(),
                    thumbnail: $(b).find('> div.thumbnail > a > img').attr('src'),
                    url: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

/**
 * Whatanime Scraper From trace.moe
 * @function
 * @param {String} url - example https://i.pinimg.com/236x/86/bb/a9/86bba905d055f8c523afafca0aabc93b--seraph-of-the-end-anime-characters.jpg
 *
 */
exports.whatanime = (url) => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.trace.moe/search?cutBorders&url=" + url).then(({data}) => {
            const result = {
                status: 200,
                author: author,
                ...data
            }
            resolve(result)
        }).catch(reject)
    })
}

/**
 * Whatimage Scraper From https://google-reverse-image-search.p.rapidapi.com
 * @function
 * @param {String} url - example https://i.pinimg.com/236x/86/bb/a9/86bba905d055f8c523afafca0aabc93b--seraph-of-the-end-anime-characters.jpg
 *
 */
exports.whatimage = (url) => {
    return new Promise((resolve, reject) => {
        axios("https://google-reverse-image-search.p.rapidapi.com/imgSearch",{
            method: "get",
            params: {url},
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
                'X-RapidAPI-Host': 'google-reverse-image-search.p.rapidapi.com',
                'X-RapidAPI-Key': '53513471femsh11b7c46a7da0a85p119682jsncc66a4e30134' //key from irfan
            }
        }).then(({data}) => {
            const result = {
                status: 200,
                author: author,
                ...data
            }
            resolve(result)
        }).catch(reject)
    })
}

/**
 * Whatmusic Scraper From npmjs acrcloud
 * @function
 * @param {String} buffer
 *
 */
exports.whatmusic = (buffer) => {
    return new Promise((resolve, reject) => {
    	acr.identify(buffer).then(metadata => {
            const result = {
                status: 200,
                author: author,
                ...metadata.metadata
            }
    		resolve(result)
        }).catch(reject)
    })
}

/**
 * Chord Search Scraper From https://www.gitagram.com
 * @function
 * @param {String} query -  example malam
 *
 */
exports.chord = async (query) => {
	try {
    const glink = await axios.get(`https://www.gitagram.com/?s=${query}`)
    const plink = cheerio.load(glink.data)('#content').find('tbody > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1)').attr('href')
    if (plink == undefined) return ({
        status: false,
        message: 'Chord not found!'
    })
    const { data } = await axios.get(plink)
    const $ = cheerio.load(data)
    const result = {
        status: 200,
        author: author,
        title: $('article > div > header > h1').text(),
        artist: $('article > div > header > div > a:nth-child(2) > span').text(),
        chord: $('article > div > div.content > pre').text().trim()
    }
    return result
} catch (e) {
	return e
}
};


/**
 * Sticker Search Scraper From https://getstickerpack.com/
 * @function
 * @param {String} query -  example patrick
 *
 */
exports.stickersearch = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://getstickerpack.com/stickers?query=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const source = [];
                const link = [];
                $('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
                    source.push($(b).attr('href'))
                })
                axios.get(source[Math.floor(Math.random() * source.length)])
                    .then(({
                        data
                    }) => {
                        const $$ = cheerio.load(data)
                        $$('#stickerPack > div > div.row > div > img').each(function(c, d) {
                            link.push($$(d).attr('src').replace(/&d=200x200/g,''))
                        })
                        result = {
                            status: 200,
                            author: author,
                            title: $$('#intro > div > div > h1').text(),
                            sticker_url: link
                        }
                        resolve(result)
                    })
            }).catch(reject)
    })
}

/**
 * Pinterest Search Scraper From https://www.pinterest.com/
 * @function
 * @param {String} query -  example shinoa hiragi
 *
 */
exports.pinterest = (query) => {
    return new Promise((resolve, reject) => {
         axios(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`).then((data) => {
                const random = randomobj(data.data.resource_response.data.results)
                var result = [];
                result = {
                        status: 200,
                        author: author,
                        url: random.images.orig.url
                }
                resolve(result)
            }).catch(reject)
        })
    }

/**
 * Bing Search Scraper From npmjs bing-scraper
 * @function
 * @param {String} query -  example anime top
 *
 */
exports.bingsearch = (query) => {
    return new Promise((resolve, reject) => {
    	bing.search({q: query,enforceLanguage: true}, function(err, resp) {
    		if (err) {
    			console.log(err)
    		} else {
    			const result = {
    				status: 200,
    				author: author,
    				...resp
    			}
    			resolve(result)
    		}
    	})
    })
}

/**
 * BingImage Search Scraper From npmjs bing-scraper
 * @function
 * @param {String} query -  example shinoa hiragi
 *
 */
exports.bingimage = (query) => {
    return new Promise((resolve, reject) => {
    	bing.imageSearch({q: query,enforceLanguage: true}, function(err, resp) {
    		if (err) {
    			console.log(err)
    		} else {
    			const result = {
    				status: 200,
    				author: author,
    				...resp
    			}
    			resolve(result)
    		}
    	})
    })
}