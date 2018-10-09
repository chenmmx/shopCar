<template>
  <div>
    <h3>已选择商品</h3>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>物品id</th>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(goods, index) in cartProducts" :key="index">
                <td>{{goods.id}}</td>
                <td>{{goods.name}}</td>
                <td>{{goods.price}}</td>
                <td>{{goods.num}}</td>
                <td>
                    <div @click="delGoods(goods)" class="btn btn-danger btn-sm">删除</div>
                </td>
            </tr>
            <tr v-if="!cartProducts.length">
                <td colspan="5" class="text-center">您的购物车空空如也。。。</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'cart',
  data () {
    return {
    //   cartProducts: []
    }
  },
  methods: {
    ...mapActions(['delGoods'])
  },
  computed: {
    ...mapGetters(['cartProducts'])
  },
  created () {
  }
}
</script>

<style>

</style>
