const CryptoJS = require("crypto-js");

const HUYNYA = "idinaxuydalbayobblyatmenyavsezaebalinehochezhitshuchuhochukoneshnonoblyatzaebalsyacehstno".repeat(512)
const SECRET = 'lox';

class indexController {
    async read(req, res, next) {
        try {
            // const ciphertext = CryptoJS.AES.encrypt(req.body.count + '', SECRET).toString();
            const data = CryptoJS.AES.encrypt(HUYNYA + "%%%" + req.body.count, SECRET).toString();

            return res.json({success: true, data});
            // return res.json({success: true});
        } catch (e) {
            console.log(e)
            next(e);
        }
    }
}

module.exports = new indexController()