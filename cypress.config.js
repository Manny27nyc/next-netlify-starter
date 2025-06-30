// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888/',
    supportFile: false,
  },
});
