import {navigateToWebView, navigateToDetail} from '../../utils/util'

const app = getApp()

Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    pickerIndex: 0, // 类别选择器的值
    picker: ['全部', '汪汪汪', '哼唧哼唧'],
    swiperList: app.globalData.swiperList,
    cardsData: [
      {
        id:1,
        is_ad: false,
        abstract: '汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪汪',
        statistics: {
          like_num: 22,
          collect_num: 21
        }
      },
      {
        id:2,
        is_ad: true,
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
  PickerChange(e) {
    console.log(e);
    this.setData({
      pickerIndex: e.detail.value
    })
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
  // 点击轮播图
  swiperTap(e) {
    console.log(e)
    navigateToWebView('https://wwww.baidu.com')
  },
  navgateToDetail(e) {
    navigateToDetail(e.currentTarget.dataset.id)
  },
  navigateToAdPage(e) {
    navigateToWebView(e.currentTarget.dataset.linkurl)
  },
  likeOrNotQuota(e) {
    console.log(e)
  },
  collectOrNotQuota(e) {
    console.log(e)
  }
})