var func = require("../../utils/function.js");
var app = getApp();

Page({
  data: {},
  upper: function (e) {
    console.log(e);
  },
  request: function () {
    console.log("ff");
    var reqTask = wx.request({
      url: "http://api.bb/array.php",
      data: {},
      header: { "content-type": "application/json" },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (result) => {
        console.log(result.data);
      },
      fail: () => {
        console.log("fuck you");
      },
      complete: () => {},
    });
  },
  fuckyou: function () {
    wx.showToast({
      title: "你个泵但",
      icon: "none",
      image: "",
      duration: 1500,
      mask: false,
      success: (result) => {
        console.log("success");
      },
      fail: () => {},
      complete: () => {},
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    func.wel();
    app.getlogininfo()
 },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
