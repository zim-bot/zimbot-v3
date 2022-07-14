module.exports = class Functions {
  constructor() {
    this.author = '#𝑿𝑭𝒂𝒓'
    this.acrcloud = require("acrcloud")
    this.acr = new this.acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
    this.axios = require('axios')
    this.cheerio = require('cheerio')
    this.bing = require('bing-scraper')
    this.child = require('child_process')
    this.FormData = require('form-data')
    this.fs = require('fs')
    this.jsobfus = require('javascript-obfuscator')
    this.request = require('request')
  }
  randomobj(aray) {
    return aray[Math.floor(Math.random() * (aray.length))]
  }
  decodeBinary(char) {
     return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
  }
  encodeBinary(char) {
     return char.split("").map(str => {
          const converted = str.charCodeAt(0).toString(2);
          return converted.padStart(8, "0");
     }).join(" ")
  }
  slineMetadata(id) {
     return new Promise((resolve, reject) => {
          fc.axios.get(`http://dl.stickershop.line.naver.jp/products/0/0/1/${id}/android/productInfo.meta`)
               .then(({ data }) => {
                    const id = data.packageId
                    const title = data.title.en
                    const author = data.author.en
                    const ani = data.hasAnimation
                    let stickers = []
                    data.stickers.forEach((rest) => {
                         stickers.push(rest)
                    })
                    resolve({
                         id: id,
                         title: title,
                         animate: ani,
                         author: author,
                         stickers: stickers
                    })
               }).catch(reject)
     })
}
}