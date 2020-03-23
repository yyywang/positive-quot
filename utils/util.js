const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const navigateToWebView = linkUrl => {
  wx.navigateTo({
    url: '/pages/web-view/web-view?linkUrl=' + linkUrl,
  })
}

const navigateToDetail = id => {
  wx.navigateTo({
    url: '/pages/quota-detail/quota-detail?id=' + id,
  })
}

module.exports = {
  formatTime: formatTime,
  navigateToWebView: navigateToWebView,
  navigateToDetail: navigateToDetail
}
