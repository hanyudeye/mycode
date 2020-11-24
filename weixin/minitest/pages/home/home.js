const app =  getApp();

Page({
data:{
    name:'张三',
    now:app.globalData.now
},
show(event){
    this.setData({
        name:'李四'
    },function(){
        wx.showToast({
            title: '操作完成',
            icon: 'none',
            image: '',
            duration: 1500,
        });
    })
}
});