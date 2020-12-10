App({
  globalData: {
    now: new Date().toLocaleString(),
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
