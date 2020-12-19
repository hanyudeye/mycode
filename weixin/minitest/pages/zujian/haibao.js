const app = getApp();
// 设置文本
const setText = (context, fs, color, x, y, c) => {
  context.setFontSize(fs);
  context.setFillStyle(color);
  context.setTextAlign("left");
  context.fillText(c, x, y);
  context.restore();
};
Page({
  data: {
    imagePath: "/images/haibao.png",
    canvasWidth: 300,
    canvasHeight: 500,
  },
  onLoad() {
    var that = this;
    //#####如需引用网络图片 需先下载
    // wx.downloadFile({
    //    url: 'https://xxxx.com/image',
    //    success: function (res) {
    //        that.setData({
    //           path: res.tempFilePath
    //        })
    //     }
    //  })

    var ctx = wx.createCanvasContext("mycanvas", that);

    // ctx.moveTo(0, 0);
    // ctx.lineTo(300,150)
    // ctx.stroke();
    // ctx.draw();
    // return;

    var c_avatar = "/images/timg.png";
    var wechat = "/images/wechat.png";
    var path = that.data.imagePath;
    // var path = that.data.path;

    // this.roundRect( ctx, 0, 0, this.data.canvasWidth - 80, this.data.canvasHeight - 80, 10);

    this.roundRect(ctx, 0, 0, 300, 500, 8);
    ctx.fillStyle = "#ff0000";
    // ctx.fillRect(0, 0, 300, 500);
    ctx.fill();

    // ctx.fillStyle = "#ff0000";
    // this.roundRect( ctx, 0, 0, 300, 500, 10);
    // 绘制背景颜色
    // 绘制孩子头像、姓名  年份

    ctx.drawImage(c_avatar,30, 0, 50, 50);
    setText(ctx, 20, "#ffffff", 110, 30, "盟牛商惠");
    // setText(ctx, 14, "#333333", 90, 65, "三岁6个月");
    //绘制标题
    // setText(ctx, 16, "#333333", 260, 55, "每月'心'发现");
    // 绘制画报外框
    // ctx.rect(20, 50, 260, 440);
    //绘制圆角，之前是矩形
    this.roundRect(ctx, 20, 50, 260, 440, 10);
    ctx.setFillStyle("white");
    ctx.fill();
    // 绘制画报背景图
    //这个地方的图片是需要注意，图片需要下载不然，手机上不能正常显示！！！
    ctx.drawImage(path, 20, 90, 260, 200);

    setText(ctx, 14, "#000", 32, 320, "商家名称");
    setText(ctx, 14, "#000", 32, 340, "商家地址");
    setText(ctx, 14, "#f00", 32, 360, "50元优惠券");

    // setText(ctx, 36, "#fff", 62, 200, "Jan.");
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;

    ctx.strokeStyle = "#000";

    ctx.beginPath();
    ctx.moveTo(30, 380);
    ctx.lineTo(300, 380);

    ctx.stroke();
 
    //头像

    ctx.drawImage(c_avatar,30, 400, 60, 60);
    // ctx.beginPath();
    // ctx.arc(40, 390, 25, 0, 2 * Math.PI); //画出圆
    // ctx.strokeStyle = "#f0f";

    // ctx.clip(); //裁剪上面的圆形
    // ctx.stroke();
    setText(ctx, 20, "#000", 112, 440, "长按识别小程序");
    // setText(ctx, 20, "#000", 112, 420, "长按识别小程序");

    ctx.beginPath();
    //圆弧
    // ctx.arc(100, 100, 100, 0, Math.PI);
    // ctx.strokeStyle = "#fff";
    // ctx.stroke();

    // 3 开始描边
    //画虚线
   // 4 上色

    ctx.draw();
    // 绘制生成画报

    // ctx.draw(true, setTimeout(function () {
    //   wx.canvasToTempFilePath({
    //     canvasId: 'mycanvas',
    //     success: function (res) {
    //       console.log(res)
    //       var tempFilePath = res.tempFilePath;
    //       that.setData({
    //         imagePath: tempFilePath
    //       });
    //     },
    //     fail: function (res) {
    //       console.log(res);
    //     }
    //   })
    // }, 1000));
  },
  roundRect(ctx, x, y, w, h, r) {
    // 开始绘制
    ctx.beginPath();
    // 因为边缘描边存在锯齿，最好指定使用 transparent 填充
    ctx.setFillStyle("transparent");
    // ctx.setStrokeStyle('transparent')
    // 绘制左上角圆弧
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);

    // 绘制border-top
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.lineTo(x + w, y + r);
    // 绘制右上角圆弧
    ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);

    // 绘制border-right
    ctx.lineTo(x + w, y + h - r);
    ctx.lineTo(x + w - r, y + h);
    // 绘制右下角圆弧
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);

    // 绘制border-bottom
    ctx.lineTo(x + r, y + h);
    ctx.lineTo(x, y + h - r);
    // 绘制左下角圆弧
    ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);

    // 绘制border-left
    ctx.lineTo(x, y + r);
    ctx.lineTo(x + r, y);

    ctx.fill();
    // ctx.stroke()
    ctx.closePath();
    // 剪切
    ctx.clip();
  },
});
