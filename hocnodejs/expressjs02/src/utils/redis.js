const { createClient } = require("redis");

module.exports = {
  client: null,
  connect: async function () {
    this.client = await createClient()
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();
  },
  setData: async function (key, value, time) {
    if (!time) {
      return await this.client.set(key, value);
    }
    await this.client.set(key, value, { EX: time });
  },
  getData: async function (key) {
    return await this.client.get(key);
  },
  deleteData: async function (key) {
    await this.client.del(key);
  },
  disconnect: async function () {
    await this.client.disconnect();
  },
};
