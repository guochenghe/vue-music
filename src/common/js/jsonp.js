/* eslint-disable */
import originJsonp from 'jsonp';

export default function jsonp(url, data, option) {
    url += (~url.indexOf('?') ? '&' : '?') + param(data)
    return new Promise((resolve, reject) => {
        originJsonp(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let str = '';
    for (let key in data) {
        let value = data[key] ? data[key] : ''
        str += `&${key}=${encodeURIComponent(value)}`
    }
    return str ? str.substring(1) : ''
}