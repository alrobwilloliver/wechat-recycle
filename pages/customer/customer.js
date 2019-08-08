// pages/customer/customer.js
Page({

  /**
   * Page initial data
   */
  data: {
    date: "2019-08-08",
    time: "12:00",
  },
  /**
   * redirection
   */
  redirection: function(){
    
  },


  submitOrder: function(e) {
    console.log(e)
    const page = this
    const address = page.data.address
    const date = page.data.date
    const phoneNumber = page.data.phoneNumber
    const time = page.data.time
    const name = page.data.name
    const order = {
      name: name,
      address: address,
      phone_number: phoneNumber,
      date: date,
      time: time,
      customer_id: 1
    }
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
  phoneInput: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  inputAddress: function (e) {
    this.setData({
    address: e.detail.value
    })
  },
  inputName: function (e) {
    this.setData({
    name: e.detail.value
    })
  },
    bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
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