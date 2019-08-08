const baseUrl = "http://localhost:3000/api/v1/"

const getOrder = options => {
  const { id, success, fail } = options

  return wx.request({
    url: baseUrl + `orders/${id}`,
    method: "get",
    success,
    fail
  })
}

export default {
  getOrder
}