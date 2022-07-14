<p align="center">
<!-- <img src="https://i.pinimg.com/originals/f5/f7/6a/f5f76ac10b936083d5ed741f55a565df.jpg" width="140" height="140"/> -->
<p align="center">
  <img src="https://i.pinimg.com/originals/f5/f7/6a/f5f76ac10b936083d5ed741f55a565df.jpg" alt="shinoa" />
</p>

<div align="center">
<h2> xfarr-api </h2>
</div>
<div align="center">
  <a href="httsp://github.com/xfar05/xfarr-api">
    <img src="https://img.shields.io/github/repo-size/xfar05/xfarr-api?color=purple&label=Repo%20total%20size&style=for-the-badge&logo=github">
    </div>
<p align="center">
  <a href="https://github.com/xfar05/xfarr-api/network/members">
    <img src="https://img.shields.io/github/forks/xfar05/xfarr-api?label=Forks&color=ff69b4&style=plastic">

  </a>
  <a href="https://github.com/xfar05/xfarr-api/stargazers">
    <img src="https://img.shields.io/github/stars/xfar05/xfarr-api?color=ff69b4&label=Stargazers&style=plastic">

  </a>
  <a href="https://github.com/xfar05/xfarr-api/issues">
    <img src="https://img.shields.io/github/issues/xfar05/xfarr-api?label=Issues&color=ff69b4&style=plastic">
    </a>

## Penginstalan
> npm install xfarr-api
>
> npm uninstall xfarr-api

## ```Anime```
```js
const xa = require('xfarr-api')

const query = 'naruto'
const url = 'https://otakudesu.watch/anime/borto-sub-indo/'
  
// anime
xa.anime.anime(query).then(data => {
  console.log(data)
});

// character
xa.anime.character(query).then(data => {
  console.log(data)
});
  
// manga
xa.anime.manga(query).then(data => {
  console.log(data)
});
  
// otakudesu
xa.anime.otakudesu(query).then(data => {
  console.log(data)
});
  
// otakudesuinfo
xa.anime.otakudesuinfo(url).then(data => {
  console.log(data)
});
  
// otakudesuongoing
xa.anime.otakudesuongoing().then(data => {
  console.log(data)
});
  
// kiryu
xa.anime.kiryu(query).then(data => {
  console.log(data)
});
```

## ```Downloader```
```js
const xa = require('xfarr-api');

const url = {
  imgur: 'https://imgur.com/gallery/WGiOMgp',
  imdb: 'https://www.imdb.com/video/vi146981657?listId=ls053181649',
  soundcloud: 'https://soundcloud.com/mlicasiano09/talking-to-the-moon-bruno-mars?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  facebook: 'https://www.facebook.com/gita.spense/videos/1409197592877652/?flite=scwspnss&mibextid=SPoPTSVtTECNhSoR',
  tiktok: 'https://vt.tiktok.com/ZSdoX6rGx/?k=1',
  instagram: 'https://www.instagram.com/p/CfYiWX_NjsS/?igshid=YmMyMTA2M2Y=',
  twitter: 'https://twitter.com/LucuLucuVideo/status/1542123908052045825?s=20',
  telesticker: 'https://t.me/addstickers/c1129234339_by_HarukaAyaBot',
  linesticker: 'https://store.line.me/stickershop/product/6934597/id',
  like: 'https://l.likee.video/v/MmMNz4',
  cocofun: 'http://www.icocofun.com/share/post/457616496291?lang=id&pkg=id&share_to=copy_link&m=c6d95b35bbbbf91ce3da574262388117&d=f7445b55ca8eb354536296f34f9c2a878ccc7704deeb8e2840eed6641f41c5d7&nt=4',
  pinterestdl: 'https://pin.it/75sDbuC',
  youtube: 'https://youtu.be/zes3T4Gvpas'
}
  
// imgur
xa.downloader.imgur(url.imgur).then(data => {
  console.log(data)
});
  
// imdb
xa.downloader.imdb(url.imdb).then(data => {
  console.log(data)
});

// soundcloud
xa.downloader.soundcloud(url.soundcloud).then(data => {
  console.log(data)
});
  
// facebook
xa.downloader.facebook(url.facebook).then(data => {
  console.log(data)
});
  
// tiktok
xa.downloader.tiktok(url.tiktok).then(data => {
  console.log(data)
});
  
// instagram
xa.downloader.instagram(url.instagram).then(data => {
  console.log(data)
});
  
// twitter
xa.downloader.twitter(url.twitter).then(data => {
  console.log(data)
});
  
// telesticker
xa.downloader.telesticker(url.telesticker).then(data => {
  console.log(data)
});
  
// linesticker
xa.downloader.linesticker(url.linesticker).then(data => {
  console.log(data)
});
  
// like
xa.downloader.like(url.like).then(data => {
  console.log(data)
});
  
// cocofun
xa.downloader.cocofun(url.cocofun).then(data => {
  console.log(data)
});
  
// pinterestdl
xa.downloader.pinterestdl(url.pinterestdl).then(data => {
  console.log(data)
});
  
// youtube
xa.downloader.youtube(url.youtube).then(data => {
  console.log(data)
});
```

## ```Information```
```js
const xa = require('xfarr-api');

const query = {
  jadwalsholat: 'padang',
  wpuser: 'WattpadRomanceIN',
  twittertrend: 'indonesia'
}

// jadwalbola
xa.information.jadwalbola().then(data => {
  console.log(data)
});
  
// jadwaltv
xa.information.jadwaltv().then(data => {
  console.log(data)
});
  
// jadwalsholat
xa.information.jadwalsholat(query.jadwalsholat).then(data => {
  console.log(data)
});

// kompasnews
xa.information.kompasnews().then(data => {
  console.log(data)
});
  
// inews
xa.information.inews().then(data => {
  console.log(data)
});
  
// wattpaduser
xa.information.wattpaduser(query.wpuser).then(data => {
  console.log(data)
});
  
// twittertrend
xa.information.twittertrend(query.twittertrend).then(data => {
  console.log(data)
});
  
// tiktoktrend
xa.information.tiktok().then(data => {
  console.log(data)
});
```

## ```Islami```
```js
const xa = require('xfarr-api');

const query = 'luqman'

// listsurah
xa.islami.listsurah().then(data => {
  console.log(data)
});

// surah
xa.islami.surah(query).then(data => {
  console.log(data)
});

// tafsirsurah
xa.islami.tafsirsurah(query).then(data => {
  console.log(data)
});
```

## ```Maker```
```js
const xa = require('xfarr-api');

const query = 'XFar'
const url = {
  photooxy: 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html',
  textpro: 'https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html',
  ephoto: 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
}

// ttp
xa.maker.ttp(query).then(data => {
  console.log(data)
});
 
// attp
xa.maker.attp(query).then(data => {
  console.log(data)
});
  
// photooxy
xa.maker.photooxy(url.photooxy,query).then(data => {
  console.log(data)
});
  
// textpro
xa.maker.textpro(url.textpro,query).then(data => {
  console.log(data)
});
  
// ephoto
xa.maker.ephoto(url.ephoto,query).then(data => {
  console.log(data)
});
```

## ```Search```
```js
const xa = require('xfarr-api');
const { readFileSync } = require('fs');
  
const whatmusic = readFileSync('./src/whatmusic.mp3');
const query = {
  q: 'love',
  chord: 'malam',
  stickersearch: 'patrick',
  pinterest: 'shinoa hiragi',
  bingsearch: 'apa itu penis',
  bingimage: 'shinoa hiragi'
}
const url = 'https://i.pinimg.com/236x/86/bb/a9/86bba905d055f8c523afafca0aabc93b--seraph-of-the-end-anime-characters.jpg'

// film
xa.search.film(query.q).then(data => {
  console.log(data)
});
  
// wattpad
xa.search.wattpad(query.q).then(data => {
  console.log(data)
});
  
// mangatoons
xa.search.mangatoons(query.q).then(data => {
  console.log(data)
});
  
// noveltoons
xa.search.noveltoons(query.q).then(data => {
  console.log(data)
});
  
// webtoons
xa.search.webtoons(query.q).then(data => {
  console.log(data)
});
  
// drakor
xa.search.drakor(query.q).then(data => {
  console.log(data)
});
  
// whatanime
xa.search.whatanime(url).then(data => {
  console.log(data)
});
  
// whatimage
xa.search.whatimage(url).then(data => {
  console.log(data)
});
  
// whatmusic
xa.search.whatmusic(whatmusic).then(data => {
  console.log(data)
});
  
// chord
xa.search.chord(query.chord).then(data => {
  console.log(data)
});
  
// stickersearch
xa.search.stickersearch(query.stickersearch).then(data => {
  console.log(data)
});
  
// pinterest
xa.search.pinterest(query.pinterest).then(data => {
  console.log(data)
});
  
// bingsearch
xa.search.bingsearch(query.bingsearch).then(data => {
  console.log(data)
});
  
// bingimage
xa.search.bingimage(query.bingimage).then(data => {
  console.log(data)
});
```
  
## ```Tools```
```js
const xa = require('xfarr-api');

const deobfuscatorjs = './src/obfus.js' //hasil obfus ex .js from file
const query = {
  q: 'xfar',
  debase64: 'eGZhcg==',
  debinary: '01111000 01100110 01100001 01110010',
  ssweb_device: 'desktop', // (desktop,tablet,phone)
  obfuscator: `function p(y) {
                    console.log(y)
  }`
}
const url = 'https://github.com/xfar05'

// ebase64
xa.tools.ebase64(query.q).then(data => {
  console.log(data)
});
 
// debase64
xa.tools.debase64(query.debase64).then(data => {
  console.log(data)
});
  
// ebinary
xa.tools.ebinary(query.q).then(data => {
  console.log(data)
});
  
// debinary
xa.tools.debinary(query.debinary).then(data => {
  console.log(data)
});
  
// ssweb
xa.tools.ssweb(url, query.ssweb_device).then(data => {
  console.log(data)
});
  
// obfuscatorjs
xa.tools.obfuscatorjs(query.obfuscatorjs).then(data => {
  console.log(data)
});
  
// deobfuscatorjs
xa.tools.deobfuscatorjs(deobfuscator).then(data => {
  console.log(data)
});
```
# CONTRIBUTOR 
<a href="http://github.com/Zynfinity"><img src="http://github.com/Zynfinity.png?size=100" width="100" height="100"></a> | [![Hexa](http://github.com/hexagonz.png?size=100)](http://github.com/hexagonz)
----|----
[Fajar ihsana](http://github.com/Zynfinity) | [Hexagonz](http://github.com/hexagonz)
Agent bokep | Olang cina
