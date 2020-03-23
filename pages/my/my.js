// pages/my/my.js
import {navigateToWebView, navigateToDetail} from '../../utils/util'

Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    cardsData: [
      {
        id:1,
        abstract: '汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪',
        statistics: {
          like_num: 22,
          collect_num: 21
        }
      },
      {
        id:2,
        abstract: '444444444',
        statistics: {
          like_num: 22,
          collect_num: 21
        }
      }
    ]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  navgateToDetail(e) {
    navigateToDetail(e.currentTarget.dataset.id)
  },
  navigateToAdPage(e) {
    navigateToWebView(e.currentTarget.dataset.linkurl)
  },
  // 复制文字
  copyContent(e) {
    var data = e.currentTarget.dataset.abstract
    wx.setClipboardData({
      data: data,
      success: res => {
        wx.vibrateShort()
      }
    })
  },
  likeOrNotQuota(e) {
    console.log(e)
  },
  collectOrNotQuota(e) {
    console.log(e)
  }
})