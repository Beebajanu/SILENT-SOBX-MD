const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3jo1QYII#J0Bt_vn4z0m8pT21MPNltD6hbIL3Gx3_qK9rvgHWbTY",
MONGODB: process.env.MONGODB || "enter mongodb url",
};
