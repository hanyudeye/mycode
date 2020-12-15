App({
  globalData: {
    now: new Date().toLocaleString(),
    page:1
  },
  getlogininfo: function () {

    wx.getSetting({
      success: function (res) {
        console.log(res)
     },
    });
 
  },
  login: function () {
    wx.login({
      timeout: 10000,
      success: (result) => {
        console.log(result);
      },
      fail: () => {},
      complete: () => {},
    });
  },
});
