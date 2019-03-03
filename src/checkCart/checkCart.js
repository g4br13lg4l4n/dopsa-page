const checkCart = {
  getProductsCart: () => {
    if (localStorage.cart) {
      return localStorage.cart
    }else {
      return ''
    }
  }
}

export default checkCart