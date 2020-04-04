// miniprogram/pages/clubMe/clubMe.js
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
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.isLogin()
  },
  //判断用户是否登录了
  isLogin() {
    let userStorage = wx.getStorageSync('user')
    if(!userStorage) {
      wx.showModal({
        content: '登录获取更多权限',
        cancelText: '暂不登录',
        cancelColor: '#4193e2',
        confirmText: '登录',
        confirmColor: '#4193e2',
        success(res) {
          if(res.confirm) {
            var that = this
            wx.login({
              success: function(res) {
                console.log(res)
                wx.getUserInfo({
                  success: function (res) {
                    console.log(res)
                    //将用户的基本信息保存到缓存中
                    wx.setStorageSync('user', res.userInfo)
                    that.setData({
                      userInfo: res.userInfo
                    })
                  },
                  fail: function (res) {
                    console.log(res)
                  }
                })
              },
              fail: function(res) {
                console.log(res)
              }
            })
          }
        }
      })
    } else {
      this.setData({
        userInfo: userStorage
      })
    }
  },
  //点击获取个人信息
  getUserInfo(e) {
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo
    })
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