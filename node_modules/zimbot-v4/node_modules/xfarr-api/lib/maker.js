const { axios, cheerio, FormData, fs, randomobj, request, author} = fc

/**
 * Ttp Maker Scraper From https://www.picturetopeople.org/
 * @function
 * @param {String} text - example xfar
 *
 */
exports.ttp = async (text) => {
    return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
                },
                formData: {
                    'TextToRender': text,
                    'FontSize': '100',
                    'Margin': '30',
                    'LayoutStyle': '0',
                    'TextRotation': '0',
                    'TextColor': 'ffffff',
                    'TextTransparency': '0',
                    'OutlineThickness': '3',
                    'OutlineColor': '000000',
                    'FontName': 'Lekton',
                    'ResultType': 'view'
                }
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                const $ = cheerio.load(body)
                const result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
                resolve({ status: 200, author: author, result: result })
            });
        })
}

/**
 * Attp Maker Scraper From https://id.bloggif.com/text
 * @function
 * @param {String} text - example XFar
 *
 */
exports.attp = async(text) => {
  return new Promise(async(resolve, reject) => {
  const getid = await axios.get('https://id.bloggif.com/text')
  const id = cheerio.load(getid.data)('#content > form').attr('action')
  const options = {
            method: "POST",
            url: `https://id.bloggif.com${id}`,
            headers: {
                "content-type": 'application/x-www-form-urlencoded',
                "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
            },
            formData: {
                target: 1,
                text: text,
                glitter_id: Math.floor(Math.random() * 2821),
                font_id: 'lucida_sans_demibold_roman',
                size: 50,
                bg_color: 'FFFFFF',
                transparent: 1,
                border_color: '000000',
                border_width: 2,
                shade_color: '000000',
                shade_width: 1,
                angle: 0,
                text_align: 'center'
            },
        };
        request(options, async function(error, response, body) {
          if (error) return new Error(error)
          const $ = cheerio.load(body)
          const url = $('#content > div:nth-child(10) > a').attr('href')
          resolve({status: 200, author: author, result: 'https://id.bloggif.com' + url})
        })
    })
}

/**
 * Photooxy Text Maker Scraper From https://photooxy.com
 * @function
 * @param {String} url - example https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
 * @param {String} text - example XFar
 *
 */
exports.photooxy = async(url,text) => {
  return new Promise(async(resolve,reject) => {
    if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url)) throw new Error("Url Salah!")
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','GO')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const p = JSON.parse($('#form_value').text().replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]'))
    axios({url: 'https://photooxy.com/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(p),
        headers: {
            'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const result = {
            status: 200,
            author: author,
            result: 'https://e2.yotools.net' + a.data.image
        }
        resolve(result)
    }).catch(reject)
  }).catch(reject)
})
})
}

/**
 * Textpro  Maker Scraper From https://textpro.me
 * @function
 * @param {String} url - example https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html
 * @param {String} text - example XFar
 *
 */
exports.textpro = async(url,text) => {
  return new Promise(async(resolve,reject) => {
    if (!/^https:\/\/textpro\.me\/.+\.html$/.test(url)) throw new Error("Url Salah!")
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','Go')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const gdata = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(da.data)
    axios({url: 'https://textpro.me/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(JSON.parse(gdata[1].replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]').replace(/text\[\]pro\.me/g,'textpro.me'))),
        headers: {
            'cookie': '_ga=GA1.2.973149439.1655802326; __gads=ID=48c7bf36c499a70a-2250dc73a4d300d3:T=1655802326:RT=1655802326:S=ALNI_MZutfiaIw3EmxBoKDfSTxZMydnKrA; PHPSESSID=24eg6g44qnh7f34evgskg1ehf1; cookieconsent_status=dismiss; _gid=GA1.2.1310090408.1656776919; __gpi=UID=0000067655c41509:T=1655802326:RT=1656832156:S=ALNI_MYb5ILRvXyZT7o_Ts9jfr_e86-_8w; _gat_gtag_UA_114571019_5=1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const result = {
            status: 200,
            author: author,
            result: 'https://textpro.me' + a.data.image
        }
        resolve(result)
    }).catch(reject)
  }).catch(reject)
})
})
}

/**
 * Ephoto  Maker Scraper From https://en.ephoto360.com/
 * @function
 * @param {String} url - example https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html
 * @param {String} text - example XFar
 *
 */
exports.ephoto = async(url,text) => {
  return new Promise(async(resolve,reject) => {
        axios({url: url,
            method: 'get',
            headers: {
                'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
            }
        }).then(da => {
            const $ = cheerio.load(da.data)
            const form = new FormData()
            form.append('text[]',text)
            form.append('submit','GO')
            form.append('token',$('#token').val())
            form.append('build_server',$('#build_server').val())
            form.append('build_server_id',$('#build_server_id').val())
            axios({url: url,
                method: 'POST',
                data: form,
                headers: {
                    'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
                }
    }).then(da =>{
    const $ = cheerio.load(da.data)
    const p = JSON.parse($('#form_value_input').attr('value').replace(/\[/g,'').replace(/\]/g,'').replace(/text/g,'text[]'))
    console.log(p)
    axios({url: 'https://en.ephoto360.com/effect/create-image',
        method: 'POST',
        data: new URLSearchParams(p),
        headers: {
            'cookie': '_gid=GA1.2.1885119409.1656864706; __gads=ID=dc094aa760fdfc92-22b4a69967d30082:T=1656864706:RT=1656864706:S=ALNI_MapJhFNdgQujQ-avWct-u3snYXntQ; __gpi=UID=000006c0c6809d99:T=1656864706:RT=1656864706:S=ALNI_MbNlply1Ric98nkJqC81m4LussWaw; PHPSESSID=qasusfb11958k62t0cv3u0pim2; _gat_gtag_UA_114571019_11=1; _ga_SK0KDDQM5P=GS1.1.1656864706.1.1.1656867224.0; _ga=GA1.1.359514262.1656864706',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    }).then(a => {
        const result = {
            status: 200,
            author: author,
            result: 'https://e2.yotools.net' + a.data.image
        }
        resolve(result)
    }).catch(reject)
  }).catch(reject)
})
})
}