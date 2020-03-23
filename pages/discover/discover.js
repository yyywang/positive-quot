import {navigateToWebView} from '../../utils/util'

Page({
  data: {
    TabCur: 0,
    scrollLeft:0
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  navigateToAdPage(e) {
    navigateToWebView(e.currentTarget.dataset.linkurl)
  }
})