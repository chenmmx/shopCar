<template>
  <div>
    <h2>物品信息</h2>
    <table class="table table-bordered">
        <thead>
            <th>物品id</th>
            <th>名称</th>
            <th>价格</th>
            <th>操作</th>
        </thead>
        <tbody>
            <tr v-for="(goods,index) in goodslist" :key="index">
                <td>{{goods.id}}</td>
                <td>{{goods.name}}</td>
                <td>{{goods.price}}</td>
                <td>
                    <div @click="addToCart(goods)" class="btn btn-primary btn-sm">添加购物车</div>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'goods',
  data () {
    return {
      goodslist: [
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
      ]
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style>

</style>
