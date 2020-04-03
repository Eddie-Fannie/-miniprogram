// miniprogram/pages/clubMe/clubMe.js
var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    controlLists: [
      { title: '我的浏览', opentype: ''},
      { title: '我的点赞',opentype: ''},
      { title: '我的收藏', opentype: ''},
      { title: '意见反馈', opentype: 'feedback'},
      { title: '联系开发者', opentype: 'contact'},
      { title: '日志更新', opentype: ''},
      { title: '消息订阅', opentype: ''}
    ],
    // hasUserInfo: true,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.g_userInfo
    })
    // wx.getSetting({
    //   success(res) {
    //     if(res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: function(res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})