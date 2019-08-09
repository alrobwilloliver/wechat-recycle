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

const getOrder = (options) => {

  const { id, success, fail } = options

  return wx.request({
    url: baseUrl + `orders/${id}`,
    method: "get",
    success,
    fail
  })
}

const updateOrder = options => {
  const { id, data, success, fail } = options
  return wx.request({
    url: baseUrl + `orders/${id}`,
    method: "get",
    data,
    sucess,
    fail
  })
}

export default {
  getOrders,
  updateOrder,
  getOrder
}