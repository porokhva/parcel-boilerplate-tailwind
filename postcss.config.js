const rucksack = require("rucksack-css");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const plugins = [rucksack(), tailwindcss("tailwind.config.js"), autoprefixer];

module.exports = { plugins };
