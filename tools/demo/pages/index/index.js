// pages/index/index.js
Page({
    toDetail(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.page,
        })
    }
})