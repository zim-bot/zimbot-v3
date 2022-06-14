const { aiovideodl, joox, soundcloud, tiktok, umma, ringtone, twitter, youtube, igdl, igstory, dafontDown, anoboydl } = require('./lib/social-media/download.js')
const { konachan, anime, manga, characters, myanimelist, quotesanime, anoboy } = require('./lib/anime/anime.js')
const { lirik, linkwa, dafontSearch, GSMArena, emoji } = require('./lib/search/search.js')
const { kompasnews, inews, merdekanews } = require('./lib/news/news.js')
const { wattpad, wattpaduser, komiku, komikuv2 } = require('./lib/comic/comic.js')
const { igstalk } = require('./lib/stalker/stalker.js')

//Download
module.exports.aiovideodl = aiovideodl
module.exports.joox = joox
module.exports.soundcloud = soundcloud
module.exports.tiktok = tiktok
module.exports.umma = umma
module.exports.ringtone = ringtone
module.exports.twitter = twitter
module.exports.youtube = youtube
module.exports.igdl = igdl
module.exports.igstory = igstory
module.exports.dafontDown = dafontDown
module.exports.anoboydl = anoboydl

//Anime
module.exports.konachan = konachan
module.exports.anime = anime
module.exports.manga = manga
module.exports.characters = characters
module.exports.myanimelist = myanimelist
module.exports.quotesanime = quotesanime
module.exports.anoboy = anoboy

//Search
module.exports.lirik = lirik
module.exports.linkwa = linkwa
module.exports.dafontSearch = dafontSearch
module.exports.GSMArena = GSMArena
module.exports.emoji = emoji

//News
module.exports.kompasnews = kompasnews
module.exports.inews = inews
module.exports.merdekanews = merdekanews

//Comic
module.exports.wattpad = wattpad
module.exports.wattpaduser = wattpaduser
module.exports.komiku = komiku
module.exports.komikuv2 = komikuv2

//Stalker
module.exports.igstalk = igstalk