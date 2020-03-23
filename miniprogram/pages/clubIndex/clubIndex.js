// miniprogram/pages/clubIndex/clubIndex.js
let img1 = '../../images/1.jpeg'
let img2 = '../../images/2.jpeg'
let img3 = '../../images/3.jpeg'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [img1, img2, img3],
    indicatorDots: true, //是否显示面板指示点
    vertical: false, //滑动方向是否为纵向
    autoplay: true,//是否自动切换
    interval: 2000,//是否自动切换时间间隔
    duration: 1500, //滑动动画时长
    tipColor: 'white',//指示点的颜色
    tipActiveColor: 'blue',//指示点被选择的颜色
    titleList: ['最新发布','最多阅读','最多点赞','最多评论'],
    listNowIndex: 0
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },
  chooseTitle(e) {
    console.log(e)
    this.setData({
      listNowIndex : e.currentTarget.dataset.index
    })
  },
  toPostDetail(){
    wx.navigateTo({
      url: "/pages/clubPostDetail/clubPostDetail",
      success(e) {
        console.log(e)
        console.log('跳转成功')
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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