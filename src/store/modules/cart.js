const state = {
  goods_list: [
    {
      id: 1,
      name: 'iphoneX',
      price: '8888'
    },
    {
      id: 2,
      name: 'iphoneXS',
      price: '10999'
    },
    {
      id: 3,
      name: '华为p20',
      price: '3099'
    },
    {
      id: 4,
      name: '魅族16',
      price: '2699'
    }
  ],
  added: JSON.parse(localStorage.getItem('mycarts')) // 添加后的商品
}
const getters = {
  goodslist: state => state.goods_list,
  cartProducts: state => {
    let res = state.added.map(({id, num}) => {
      let product = state.goods_list.find(n => n.id === id)
      return {
        ...product,
        num
      }
    })
    if (res.length !== 0) {
      localStorage.setItem('mycarts', JSON.stringify(res))
    }
    return JSON.parse(localStorage.getItem('mycarts')) || {}
  },
  totalPrice: (state, getters) => {
    let total = 0
    getters.cartProducts.forEach(element => {
      total += element.price * element.num
    })
    return total
  },
  totalNum: (state, getters) => {
    let total = 0
    getters.cartProducts.forEach(element => {
      total += element.num
    })
    return total
  }
}
const actions = {
  addToCart ({commit}, product) {
    commit('add', {
      id: product.id // goods列表点击添加购物车的good.id赋值给id
    })
  },
  clearAllCart ({commit}) {
    commit('clearAll')
  },
  delGoods ({commit}, product) {
    commit('del', product)
  }
} // 异步操作
const mutations = {
  // 添加购物车操作
  add (state, {id}) {
    let record = state.added.find(n => n.id === id)
    if (!record) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
  },
  clearAll (state) {
    state.added = []
    localStorage.setItem('mycarts', JSON.stringify(state.added))
  },
  del (state, product) {
    state.added.forEach((n, i) => {
      if (n.id === product.id) {
        state.added.splice(i, 1)
      }
    })
    localStorage.setItem('mycarts', JSON.stringify(state.added))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
