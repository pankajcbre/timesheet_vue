module.exports = {
  "pluginOptions": {
    "autoRouting": {
      "chunkNamePrefix": "page-"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/'
}