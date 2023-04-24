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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const got_1 = __importDefault(require("got"));
function ManggaToon(querry) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield axios_1.default(`https://mangatoon.mobi/id/search?word=${querry}`, {
                    method: "GET",
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "cache-control": "max-age=0",
                    }
                }).then(response => {
                    if (response.status !== 200)
                        return;
                    const $ = cheerio_1.default.load(response.data);
                    const hasil = [];
                    $('#page-content > div.search-page > div > div.comics-result > div.recommended-wrap > div').each(function (_a, b) {
                        $(b).find('div').each(function (_c, d) {
                            const judul = $(d).find('div.recommend-comics-title > span').text().trim();
                            const tema = $(d).find('div.comics-type > span').text().trim();
                            const thumb = $(d).find('a > div > img').attr('src');
                            const url = $(d).find('a').attr('href');
                            const result = {
                                judul: judul,
                                tema: tema,
                                thumb: thumb,
                                url: "https://mangatoon.mobi" + url
                            };
                            hasil.push(result);
                        });
                    });
                    const data = [];
                    hasil.map(v => {
                        if (v.judul === undefined)
                            return;
                        if (v.tema === undefined)
                            return;
                        if (v.thumb === undefined)
                            return;
                        if (v.url.replace(/[https:\/\/mangatoon.mobi]/, '') === undefined)
                            return;
                        data.push(v);
                    });
                    const result = {
                        status: response.status,
                        author: "I`am Ra",
                        data: data
                    };
                    resolve(result);
                }).catch(reject);
            }));
        }
        catch (err) {
            return err;
        }
    });
}
function EmojiScrapper(emoji) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const emot = encodeURIComponent(emoji);
            yield axios_1.default.request({
                url: `https://emojipedia.org/${emot}/`,
                method: "GET"
            }).then(respon => {
                if (respon.status !== 200)
                    return;
                const $ = cheerio_1.default.load(respon.data);
                const emot = [];
                const hasil = [];
                $('body > div > div > article > section > ul').each(function (_chuwi, Tyuzu) {
                    $(Tyuzu).find('li').each(function (_ryu, itzy) {
                        const nama = $(itzy).find('div > div > img').attr('alt');
                        const image = $(itzy).find('div > div > img').attr('srcset');
                        const result = {
                            name: nama,
                            image: image
                        };
                        emot.push(result);
                    });
                });
                emot.map(tyuzu => {
                    if (tyuzu.name === undefined)
                        return;
                    if (tyuzu.image === undefined)
                        return;
                    hasil.push({ name: tyuzu.name, image: tyuzu.image.replace('2x ', '') });
                });
                const res = {
                    status: respon.status,
                    emoticon: hasil
                };
                resolve(res);
            }).catch(reject);
        }));
    });
}
function RandomCerpen() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const link = yield axios_1.default.get(`http://cerpenmu.com/`);
            if (link.status !== 200)
                return;
            const $ = cheerio_1.default.load(link.data);
            const link_input = [];
            $('#sidebar > div:nth-child(9) > ul').each(function (_a, b) {
                $(b).find('li').each(function (_tyu, zu) {
                    const url = $(zu).find('a').attr('href');
                    link_input.push(url);
                });
            });
            const random = link_input[Math.floor(Math.random() * (link_input.length))];
            const Url = yield axios_1.default.get(random);
            if (Url.status !== 200)
                resolve({ status: Url.status, mess: "ERROR" });
            const ch = cheerio_1.default.load(Url.data);
            const Data = [];
            ch('#content > article').each(function (_hm, to) {
                ch(to).find('article').each(function (_chu, chuwi) {
                    const Url = ch(chuwi).find('h2 > a').attr('href');
                    Data.push(Url);
                });
            });
            const acak = Data[Math.floor(Math.random() * (Data.length))];
            yield axios_1.default.get(acak).then(respon => {
                if (respon.status !== 200)
                    return;
                const $ = cheerio_1.default.load(respon.data);
                const judul = $('#content').find('article > h1').text().trim();
                const kategori = $('#content').find('article > a:nth-child(4)').text().trim();
                const cerita = $('#content').find('article').text().trim();
                const res = {
                    status: respon.status,
                    author: "I`am RA",
                    data: {
                        judul: judul,
                        kategori: kategori,
                        cerita: cerita
                    }
                };
                resolve(res);
            }).catch(reject);
        }));
    });
}
function StickerSearch(querry) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.get(`https://getstickerpack.com/stickers?query=` + querry).then((res) => __awaiter(this, void 0, void 0, function* () {
                const $ = cheerio_1.default.load(res.data);
                const Data = [];
                $('#stickerPacks > div > div:nth-child(3)').each(function (_a, b) {
                    $(b).find('div').each(function (_c, d) {
                        const url = $(d).find('a').attr('href');
                        Data.push(url);
                    });
                });
                const data = [];
                Data.map(tyuzu => {
                    if (tyuzu === undefined)
                        return;
                    data.push(tyuzu);
                });
                const random = data[Math.floor(Math.random() * (data.length))];
                yield axios_1.default.get(random).then(respon => {
                    const $ = cheerio_1.default.load(respon.data);
                    const Sticker = [];
                    $('#stickerPack > div > div.row').each(function (_a, b) {
                        $(b).find('div').each(function (_c, d) {
                            const sticker = $(d).find('img').attr('data-src-large');
                            Sticker.push(sticker);
                        });
                    });
                    const data = [];
                    Sticker.map(tyuzu => {
                        if (tyuzu === undefined)
                            return;
                        data.push(tyuzu);
                    });
                    const Format = {
                        judul: $('#intro').find('div > div > h1').text().trim(),
                        creator: $('#intro').find('div > div > h5 > a').text().trim(),
                        sticker: data
                    };
                    const result = {
                        status: respon.status,
                        author: "I`am RA",
                        data: Format
                    };
                    resolve(result);
                }).catch(reject);
            }));
        }));
    });
}
function UploadFile(_path) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            const BodyForm = new form_data_1.default();
            const FileSys = fs_1.default.createReadStream(_path);
            BodyForm.append('files[]', FileSys);
            yield axios_1.default({
                url: "https://uguu.se/upload.php",
                method: "POST",
                data: BodyForm,
                headers: Object.assign({ "accept": "*/*", "accept-language": "en-US,en;q=0.9,id;q=0.8" }, BodyForm.getHeaders())
            }).then(respon => {
                const result = {
                    author: 'Created by Ra',
                    status: respon.data.success ? 200 : 404,
                    result: {
                        url: respon.data.files[0].name,
                        namaFile: respon.data.files[0].url,
                        size: respon.data.files[0].size,
                        hash: respon.data.files[0].hash
                    }
                };
                resolve(result);
            }).catch(rejects);
        }));
    });
}
function igDownload(Link) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const Form = {
                url: Link,
                submit: ""
            };
            yield axios_1.default(`https://downloadgram.org/`, {
                method: "POST",
                data: new URLSearchParams(Object.entries(Form)),
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "cache-control": "max-age=0",
                    "content-type": "application/x-www-form-urlencoded",
                    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                    "cookie": "_ga=GA1.2.1695343126.1621491858; _gid=GA1.2.28178724.1621491859; __gads=ID=8f9d3ef930e9a07b-2258e672bec80081:T=1621491859:RT=1621491859:S=ALNI_MbqLxhztDiYZttJFX2SkvYei6uGOw; __atuvc=3%7C20; __atuvs=60a6eb107a17dd75000; __atssc=google%3B2; _gat_gtag_UA_142480840_1=1"
                },
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                const $ = cheerio_1.default.load(res.data);
                const url = $('#downloadBox').find('a').attr('href');
                yield axios_1.default(Link, {
                    method: "GET",
                    data: null,
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "cache-control": "max-age=0",
                        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                        "cookie": "ig_did=08A3C465-7D43-4D8A-806A-88F98384E63B; ig_nrcb=1; mid=X_ipMwALAAFgQ7AftbrkhIDIdXJ8; fbm_124024574287414=base_domain=.instagram.com; shbid=17905; ds_user_id=14221286336; csrftoken=fXHAj5U3mcJihQEyVXfyCzcg46lHx7QD; sessionid=14221286336%3A5n4czHpQ0GRzlq%3A28; shbts=1621491639.7673564; rur=FTW"
                    }
                }).then(respon => {
                    const ch = cheerio_1.default.load(respon.data);
                    const title = ch('title').text().trim();
                    const result = {
                        author: "RA BOT",
                        result: {
                            link: url,
                            desc: title,
                            LinkAwal: Link
                        }
                    };
                    resolve(result);
                }).catch(reject);
            }));
        }));
    });
}
function Pantun() {
    const pantun = JSON.parse(fs_1.default.readFileSync('./database/pantun.json').toString());
    const acak = pantun[Math.floor(Math.random() * (pantun.length))];
    return acak;
}
function TruthOrDare(querry) {
    const result = JSON.parse(fs_1.default.readFileSync('./database/truthdare.json').toString());
    if (querry === 'truth id') {
        const res = result.Truth.id[Math.floor(Math.random() * result.Truth.id.length)];
        return res;
    }
    else if (querry === 'truth eng') {
        const res = result.Truth.eng[Math.floor(Math.random() * result.Truth.eng.length)];
        return res;
    }
    else if (querry === 'dare id') {
        const res = result.Dare.id[Math.floor(Math.random() * result.Dare.id.length)];
        return res;
    }
    else if (querry === 'dare eng') {
        const res = result.Dare.eng[Math.floor(Math.random() * result.Dare.eng.length)];
        return res;
    }
    else {
        return `Querry tidak terdaftar dimenu harap masukkan dengan benar.\n\ncara pakai :\n1. TruthOrDare ('truth id')\n2. TruthOrDare('truth eng')\n3. TruthOrDare ('dare id')\n4. TruthOrDare ('dare eng')`;
    }
}
function SearchFilm(querry) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield got_1.default.get(`http://167.99.31.48/?s=${querry}`).then(respon => {
                const $ = cheerio_1.default.load(respon.body);
                const hasil = [];
                $('#content > div > div.los').each(function (a, b) {
                    $(b).find('article').each(function (tyu, zu) {
                        const judul = $(zu).find('div > a > div > div > header > h2').text().trim();
                        const thumb = $(zu).find('div > a > div > img').attr('src');
                        const kualitas = $(zu).find('div > a > div > div > span').text().trim();
                        const Url = $(zu).find('div > a').attr('href');
                        const result = {
                            judul: judul,
                            thumb: thumb,
                            quality: kualitas,
                            link: Url
                        };
                        hasil.push(result);
                    });
                });
                resolve(hasil);
            }).catch(reject);
        }));
    });
}
function OtakudesuSearch(querry) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield got_1.default(`https://otakudesu.moe/?s=${querry}&post_type=anime`, {
                method: "GET",
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                }
            }).then(respon => {
                const $ = cheerio_1.default.load(respon.body);
                const hasil = [];
                $('#venkonten > div > div.venser > div > div').each(function (a, b) {
                    $(b).find('ul > li').each(function (c, d) {
                        const judul = $(d).find('h2 > a').text().trim();
                        const Url = $(d).find('h2 > a').attr('href');
                        const thumb = $(d).find('img').attr('src');
                        const rating = $(d).find('div:nth-child(5)').text().trim();
                        const status = $(d).find('div:nth-child(4)').text().trim();
                        const Genre = $(d).find('div:nth-child(3)').text().trim();
                        const Result = {
                            judul: judul,
                            thumb: thumb,
                            url: Url,
                            rating: rating.replace(/[Rating :]/g, ''),
                            status: status.replace(/[Status : ]/g, ''),
                            genre: Genre.replace(/[Genres : ]/g, '')
                        };
                        hasil.push(Result);
                    });
                });
                const Data = {
                    status: respon.statusCode,
                    author: "I`am Ra",
                    result: hasil
                };
                resolve(Data);
            }).catch(reject);
        }));
    });
}
function InfoOtakudesu(URL) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield got_1.default.get(URL, {
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                }
            }).then(res => {
                const $ = cheerio_1.default.load(res.body);
                const hasil = [];
                const thumb = $('#venkonten').find('div.venser > div.fotoanime > img').attr('src');
                const sinopsis = [];
                $('#venkonten > div.venser > div.fotoanime > div.infozin > div').each(function (a, b) {
                    $(b).find('span').each(function (tyu, zu) {
                        const Data = $(zu).text().trim();
                        hasil.push(Data);
                    });
                });
                $('#venkonten > div.venser').find('div.fotoanime > div.sinopc').each(function (c, d) {
                    const Data = $(d).find('p').text().trim();
                    sinopsis.push(Data);
                });
                let Bio = "";
                for (const i of hasil) {
                    Bio += i + "\n";
                }
                const Result = {
                    status: res.statusCode,
                    author: "I`am Ra",
                    result: {
                        thumb: thumb,
                        bio: Bio,
                        sinopsis: sinopsis[0]
                    }
                };
                resolve(Result);
            }).catch(reject);
        }));
    });
}
function Musikmatch(querry) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield got_1.default.get(`https://www.musixmatch.com/search/${querry}`, {
                method: "GET",
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                }
            }).then(({ body }) => __awaiter(this, void 0, void 0, function* () {
                const $ = cheerio_1.default.load(body);
                const Url = $('#search-all-results > div.main-panel > div').find('div.box-content > div > ul > li > div > div.media-card-body > div > h2 > a').attr('href');
                yield got_1.default(`https://www.musixmatch.com${Url}`, {
                    method: "GET",
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                    }
                }).then(res => {
                    const $ = cheerio_1.default.load(res.body);
                    const judul = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim();
                    const artis = $('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim();
                    const thumb = $('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div > img').attr('src');
                    const lirik = [];
                    $('#site > div > div > div > main > div > div > div.mxm-track-lyrics-container').find('div.container > div > div > div > div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function (a, b) {
                        const isi = $(b).find('span').text().trim();
                        lirik.push(isi);
                    });
                    const result = {
                        status: res.statusCode,
                        author: "I`am Ra",
                        result: {
                            judul: judul.replace('Lyrics', ''),
                            penyanyi: artis,
                            thumb: "https:" + thumb,
                            lirik: lirik[0]
                        }
                    };
                    resolve(result);
                });
            })).catch(reject);
        }));
    });
}
function Snaptik (Url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const BodyForm = new form_data_1.default();
            BodyForm.append('url', encodeURI(Url));
            yield axios_1.default({
                url: "https://snaptik.app/action.php?lang=ID",
                method: "POST",
                data: BodyForm,
                headers: Object.assign({ "accept": "*/*", "accept-language": "en-US,en;q=0.9,id;q=0.8", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36" }, BodyForm.getHeaders())
            }).then(respon => {
                const $ = cheerio_1.default.load(respon.data);
                const result = {
                    status: respon.status,
                    author: "Ra",
                    result: {
                        judul: $('div.zhay-middle.center').find('h1 > a').text().trim(),
                        caption: $('div.zhay-middle.center').find("p:nth-child(2) > span").text().trim(),
                        tanggal: $('div.zhay-middle.center > p:nth-child(3)').text().trim(),
                        thumb: $("div.zhay-left.left").find('img').attr('src'),
                        link1: 'https://snaptik.app' + $('div.zhay-right.is-desktop-only.right').find('div > a:nth-child(1)').attr('href'),
                        link2: 'https://snaptik.app' + $('div.zhay-right.is-desktop-only.right').find('div > a:nth-child(2)').attr('href'),
                        link3: 'https://snaptik.app' + $('div.zhay-right.is-desktop-only.right').find("div > a:nth-child(3)").attr('href')
                    }
                };
                resolve(result);
            }).catch(reject);
        }));
    });
}
module.exports.ManggaToon = ManggaToon;
module.exports.EmojiScrapper = EmojiScrapper;
module.exports.RandomCerpen = RandomCerpen;
module.exports.StickerSearch = StickerSearch;
module.exports.UploadFile = UploadFile;
module.exports.igDownload = igDownload;
module.exports.Pantun = Pantun;
module.exports.TruthOrDare = TruthOrDare;
module.exports.SearchFilm = SearchFilm;
module.exports.OtakudesuSearch = OtakudesuSearch;
module.exports.InfoOtakudesu = InfoOtakudesu;
module.exports.Musikmatch = Musikmatch;
module.exports.Snaptik = Snaptik;
