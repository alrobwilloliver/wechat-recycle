// pages/orders/all_orders/all_orders.js
Page({
  data: {
    tabs: ["All orders", "My orders"],
    activeIndex: 0,
  },
  onLoad: function () {
    var that = this;
    wx.getLocation({
      type: 'GCJ-02', // **1
      success: function (res) {
        const my_latitude = res.latitude
        const my_longitude = res.longitude
        const my_speed = res.speed
        const my_accuracy = res.accuracy
        that.setData({ my_latitude, my_longitude, my_speed, my_accuracy })
      },
      // mk: [
      //   {
      //     iconPath: "/img/marker.png", // **1
      //     id: 0,
      //     latitude: my_latitude,
      //     longitude: my_longitude,
      //     width: 40,
      //     height: 40
      //   }//, add more markers here
      // ]
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    wx.navigateTo({
      url: "/pages/orders/my_orders/my_orders"
    })
  },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})