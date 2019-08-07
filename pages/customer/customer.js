// pages/customer/customer.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  /**
   * redirection
   */
  redirection: function(){
    
  },


  submitOrder: function(e) {
    console.log(e)
    let time = e.detail.value.time;
    let location = e.detail.value.location;
    let phone_number = e.detail.value.phonenumber;

    let order = {
      time: time,
      address: location,
      customer_phone_number: phone_number,
      customer_id: 37
    }
    console.log(order)
    wx.request({
      url:'http://localhost:3000/api/v1/orders',
      method: 'POST',
      data: order,
      success(){
        wx.redirectTo({
          url: '../customer-order-information/customer-order-information',
        });
      }
    });
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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