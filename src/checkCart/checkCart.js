const checkCart = {
  getProductsCart: () => {
    if (localStorage.cart) {
      console.log(localStorage.cart)
      return localStorage.cart
    }else {
      return ''
    }
  },
  deleteCart: () => {
    if (localStorage.cart) {
      return localStorage.removeItem("cart")
    }
  } 
}

export default checkCart