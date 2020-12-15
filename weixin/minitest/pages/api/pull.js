var app = getApp();
var page = app.globalData.page;

Page({
  data: {
    moment: ["hello", "world"],
  },
  /**
   * 页面上拉触底事件的处理函数
   *
   */
  onReachBottom: function () {
    var that = this; // 显示加载图标
    wx.showLoading({
      title: "玩命加载中",
    });

    wx.request({
      url: "http://api.bb/page.php?page=" + page,
      method: "GET",
      header: {
        "content-type": "application/text",
      },

      success: function (res) {
        console.log(res);
        // data = res.data;

        console.log(page);
        // 页数+1
        page = page + 1;
        // 回调函数
        if (res.data.error == 0) {
          var moment_list = that.data.moment;

          for (var i = 0; i < res.data.data.length; i++) {
            moment_list.push(res.data.data[i]);
          }
          // 设置数据
          that.setData({
            moment: that.data.moment,
          });

          // 隐藏加载框
          wx.hideLoading();
        } else {
          // 隐藏加载框
          wx.hideLoading();
          console.log("没有数据了");
 
        }
      },
    });
  },
});
