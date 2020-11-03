const path = require('path')
const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

module.exports = new NextI18Next({
  defaultLanguage: 'es',
  otherLanguages: ['en'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
})