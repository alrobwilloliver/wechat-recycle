const baseUrl = "http://localhost:3000/api/v1/"

const getOrders = (options) => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + `orders`,
    method: "get",
    success,
    fail
  })
}

const updateOrder = options => {
  const { id, data, success, fail } = options
  return wx.request({
    url: baseUrl + `orders/${id}`,
    method: "patch",
    data,
    sucess,
    fail
  })
}

export default {
  getOrders,
  updateOrder
}