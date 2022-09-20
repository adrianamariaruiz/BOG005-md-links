const fetch = require('node-fetch')

const httpFunction = (links) => {

    const promisesFetch = links.map(hrefLinks =>
        fetch(hrefLinks.href)
            .then(res => {
                if (res.status >= 200 && res.status <= 299) {
                    // console.log(({ status: res.status, OK: res.statusText, href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text }))
                    return ({ href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text, status: res.status, OK: res.statusText })
                } else if (res.status >= 400 && res.status <= 499) {
                    // console.log(({ status: res.status, OK: 'Fail', href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text }))
                    return ({ href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text, status: res.status, OK: 'Fail' })
                }
            })
            .catch(() => {
                // console.log({ status: 404, OK: 'Fail', href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text })
                return ({ href: hrefLinks.href, file: hrefLinks.file, text: hrefLinks.text, status: 404, OK: 'Fail' })

            })
    )
    return Promise.all(promisesFetch)
}

module.exports = {
    httpFunction
};