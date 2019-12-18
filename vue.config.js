const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json',".css"],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'common': resolve('src/common'),
        'components': resolve('src/components'),
        'base': resolve('src/base'),
        'api': resolve('src/api')
      }
    }
  },
  devServer: {
    proxy: {
      '/api/getDiscList': {
        target: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
        secure: false,
        changeOrigin: true,
        ws: true,
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        pathRewrite:{
          '^/api/getDiscList': ''
        }
      },
      '/api/music': {
        target: 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg',
        secure: false,
        changeOrigin: true,
        ws: true,
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        pathRewrite:{
          '^/api/music': ''
        }
      },
      '/api/lyric': {
        target: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
        secure: false,
        changeOrigin: true,
        ws: true,
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        pathRewrite:{
          '^/api/lyric': ''
        }
      },
      '/api/getSongList': {
        target: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
        secure: false,
        changeOrigin: true,
        ws: true,
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        pathRewrite:{
          '^/api/getSongList': ''
        }
      },
      '/api/search': {
        target: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
        secure: false,
        changeOrigin: true,
        ws: true,
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        pathRewrite:{
          '^/api/search': ''
        }
      }
    }
  }
}