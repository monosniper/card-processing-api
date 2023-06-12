const CryptoJS = require("crypto-js");

const HUYNYA = "idinaxuydalbayobblyatmenyavsezaebalinehochezhitshuchuhochukoneshnonoblyatzaebalsyacehstno".repeat(512)
const SECRET = 'lox';

class indexController {
    async read(req, res, next) {
        try {
            const data = CryptoJS.AES.encrypt(HUYNYA + "%%%" + req.body.count, SECRET).toString();

            console.log(req.body.fileContent)

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