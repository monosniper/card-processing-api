const CryptoJS = require("crypto-js");
const axios = require("axios");
const HUYNYA = "idinaxuydalbayobblyatmenyavsezaebalinehochezhitshuchuhochukoneshnonoblyatzaebalsyacehstno".repeat(512)
const SECRET = 'lox';

class indexController {
    async read(req, res, next) {
        try {
            const cards = req.body.fileContent.split(/\r?\n/).map(row => row.split(' ')[0])
            const data = CryptoJS.AES.encrypt(HUYNYA + "%%%" + req.body.count + "%%%" + cards.join(","), SECRET).toString();

            setTimeout(() => {
                return res.json({success: true, data})
            }, 500 * req.body.count)
        } catch (e) {
            console.log(e)
            next(e);
        }
    }
}

module.exports = new indexController()