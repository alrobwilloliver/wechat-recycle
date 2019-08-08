const baseUrl = "http://localhost:3000/api/v1/"

const getOrders = (options) => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + "all_orders",
    method: "get",
    success,
    fail
  })
}

export default {
  getOrders
}