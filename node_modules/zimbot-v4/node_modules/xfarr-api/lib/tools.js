const { axios, request, child, fs, encodeBinary, jsobfus, decodeBinary, author} = fc

/**
 * Ebase64 Tools
 * @function
 * @param {String} query - example xfar
 *
 */
exports.ebase64 = (query) => {
    return new Promise((resolve, reject) => {
        if (query.length > 2048) return 'Maximal 2.048 String!'
        const result = {
            status: 200,
            author: author,
            result: Buffer.from(query).toString('base64')
        }
        resolve(result)
    })
}

/**
 * Debase64 Tools
 * @function
 * @param {String} query - example eGZhcg==
 *
 */
exports.debase64 = (query) => {
    return new Promise((resolve, reject) => {
        if (query.length > 2048) return 'Maximal 2.048 String!'
        const result = {
            status: 200,
            author: author,
            result: Buffer.from(query, 'base64').toString('ascii')
        }
        resolve(result)
    })
}

/**
 * Ebinary Tools
 * @function
 * @param {String} query - example xfar
 *
 */
exports.ebinary = (query) => {
    return new Promise((resolve, reject) => {
        if (query.length > 2048) return 'Maximal 2.048 String!'
        const result = {
            status: 200,
            author: author,
            result: encodeBinary(query)
        }
        resolve(result)
    })
}

/**
 * Debinary Tools
 * @function
 * @param {String} query - example 01111000 01100110 01100001 01110010
 *
 */
exports.debinary = (query) => {
    return new Promise((resolve, reject) => {
        if (query.length > 2048) return 'Maximal 2.048 String!'
        const result = {
            status: 200,
            author: author,
            result: decodeBinary(query)
        }
        resolve(result)
    })
}

/**
 * Ssweb Scraper from https://www.screenshotmachine.com
 * @function
 * @param {String} url - example https://github.com/xfar05
 * @param {String} device - example desktop or tablet & phone
 *
 */
exports.ssweb = (url, device = 'desktop') => {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                        result = {
                            status: 200,
                            author: author,
                            result: data
                        }
                         resolve(result)
                    })
               } else {
                    reject({ status: 404, author: author, message: data.data })
               }
          }).catch(reject)
     })
}

/**
 * Obfuscatorjs Tools
 * @function
 * @param {String} query - example function p(y){ return 'y'}
 *
 */
exports.obfuscatorjs = (query) => {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: author,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

/**
 * Deobfuscatorjs Tools
 * @function
 * @param {String} path - example ./src/obfus.js
 *
 */
exports.deobfuscatorjs = async(path) => {
    return new Promise((resolve, reject) => {
        child.exec(`synchrony deobfuscate ${path}`, async (err, stdout) => {
                    if (err) return err
                    setTimeout(() => {
                        const result = {
                            status: 200,
                            author: author,
                            run: stdout.trim(),
                            result: fs.readFileSync(path.replace('.js','.cleaned.js')).toString().trim()
                        }
                        resolve(result)
                        fs.unlinkSync(path.replace('.js','.cleaned.js'))
                    }, 5000) 
        })
    })
}
