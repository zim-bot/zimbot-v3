const axios = require('axios');

function igstalk (username) {
    return new Promise(async(resolve, reject) => {
    let {data} = await axios('https://www.instagram.com/'+username+'/?__a=1', {
        'method': 'GET',
        'headers': {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        'cookie': 'ig_did=77ADA31F-4AB0-4D19-8875-522C891A60E6; ig_nrcb=1; csrftoken=Zuy4R9169ejQY0R20InUOfeh2fCh7cfW; ds_user_id=8779859677; sessionid=8779859677%3Az2RfuCb1tsxTh1%3A26; shbid="10275\0548779859677\0541665541164:01f7683f87e5d1e3c2db8b41bfad455d2718c549ac0aeba033c00ae0e25647a7d8b87ee1"; shbts="1634005164\0548779859677\0541665541164:01f7df3ebca9d4ae3ecdb5f3b25d845142e5f462409976c5c140ba803c85bdd15fe0d45e"; rur="EAG\0548779859677\0541665541186:01f7c8bdbba6bfaf1f0fc03d5b843fe864bb908dc49069cc77dd546a9c6b50302d83b608"'
        }
    })
    let user = data.graphql.user
    let json = {
        creator: '@Iqbalzz',
        username: user.username,
        fullname: user.full_name,
        verified: user.is_verified,
        video_count_reel: user.highlight_reel_count,
        followers: user.edge_followed_by.count,
        follow: user.edge_follow.count,
        is_bussines: user.is_business_account,
        is_professional: user.is_professional_account,
        category: user.category_name,
        thumbnail: user.profile_pic_url_hd,
        bio: user.biography,
        info_account: data.seo_category_infos
    }
    resolve(json)
})
}

module.exports.igstalk = igstalk