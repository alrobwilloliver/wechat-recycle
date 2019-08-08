import apiClient from "../../utils/apiClient.js"

// pages/customer-order-information/customer-order-information.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const order = getApp().globalData.order
    const address = getApp().globalData.address
    const page = this
    page.setData({
      order,
      address
    })
    console.log(order)
    // console.log(options)
    // const { id } = options

    // const getOptions = {
    //   id,
    //   success: function (res) {
    //     console.log(res)
    //     // const order = res.data.story

    //   },
    //   fail: function (err) {
    //     console.log(err)
    //   }
    // }

    // apiClient.getOrder(getOptions)

    // page.setData({
    //   address: "Chengdu"
    // })
    // const address = page.data.story.address
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