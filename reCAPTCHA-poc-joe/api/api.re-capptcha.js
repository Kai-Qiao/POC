var request = require('request');

async function sendRequestToGoogle(req, res) {

    const secret = "//6LdCO-//EUAAAAAFRDjETPauNeQ-//mcdFHdC21i7isI//";
    const token = req.body.token;

    //Domestic network access is not available
    // const googleURL = "https://www.google.com/recaptcha/api/siteverify";
    const recaptchaURL = "https://www.recaptcha.net/recaptcha/api/siteverify";

    const url = `${recaptchaURL}?secret=${secret}&response=${token}`;

    return request.post(url, (error, response, body) => {
        if (error) {
            console.error("[ERROR]", error);
            return res.status(403).send(error);
        }
        if (body) {
            if (body.success == "false" || body.score == 0.0) {
                return res.status(403).send(body);
            }
            console.log("[BODY]", body);
            return res.status(200).send(body);
        }

    });



}
module.exports = {
    sendRequestToGoogle,
}