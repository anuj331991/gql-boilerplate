const fetch = require("node-fetch");

class API {
  async getData() {
    const url = "https://cat-fact.herokuapp.com/facts";
    let res = await fetch(url);
    const result = await res.json();
    return result;
  }
}

module.exports = API;
