const CryptoJS = require("crypto-js");
const getRandomInt = require("../utils/getRandomInt");

const HUYNYA = "idinaxuydalbayobblyatmenyavsezaebalinehochezhitshuchuhochukoneshnonoblyatzaebalsyacehstno".repeat(512)
const SECRET = 'lox';

class indexController {
    async read(req, res, next) {
        try {
            const data = CryptoJS.AES.encrypt(HUYNYA + "%%%" + req.body.count, SECRET).toString();
            const time = getRandomInt(req.body.count * .1, req.body.count)

            setTimeout(() => {
                return res.json({success: true, data})
            }, time * 1000)
        } catch (e) {
            console.log(e)
            next(e);
        }
    }
}

module.exports = new indexController()