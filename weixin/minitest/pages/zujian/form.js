Page({
  onLoad: function (options) {
    console.log("fff")
    wx.getFileInfo({
      success(res) {
        console.log(res);
        console.log(res.size);
        console.log(res.digest);
      },
    });
  },
});
