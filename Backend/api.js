const { default: axios } = require("axios");

const instance = axios.create({
    headers: { "private-key": "875df9b0-0f61-41a3-bb22-75e67ef7caf1", "Project-ID": "7c386c88-d7cc-47c4-b6d0-bd8b4e9991f0" },
    withCredentials: true,
  });

const getOrcreateUser = (payload) =>  instance.put( 'https://api.chatengine.io/users/', payload )



module.exports = getOrcreateUser // Экспорт в node.js



