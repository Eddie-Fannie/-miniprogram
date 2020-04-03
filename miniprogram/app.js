//app.js
App({
  globalData: {
    g_userInfo: null
  },
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    // this.globalData = {}
    this._getUserInfo()
  },
  //获取用户基本信息
  _getUserInfo() {
    var userInfoStorage = wx.getStorageSync('user');
    if(!userInfoStorage) {
      //如果缓存没有用户信息，就获取用户信息
      var that = this;
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res){
              that.globalData.g_userInfo = res.userInfo
              //将用户的基本信息保存到缓存中
              wx.setStorageSync('user', res.userInfo)
            },
            fail: function(res){
              console.log(res)
            }
          })
        }
      })
    }
    else {
      //如果缓存有基本信息，那么将信息保存到全局变量中去
      this.globalData.g_userInfo = userInfoStorage
    }
  }
})
