/* eslint-disable */
/**
 * 音乐推荐模块数据获取
 * ?g_tk=2049017582&uin=1245508398&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1538973512683&jsonpCallback=ewe
 */
import { commonParam, options } from 'src/api/config'
import jsonp from '../common/js/jsonp';

export default function getRecommendList() {
    let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    let data = Object.assign({}, commonParam, {
        uin: 0,
        plantform: 'h5',
        needNewCode: 1
    })
    return jsonp(url, data, options);
}