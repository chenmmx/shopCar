<template>
  <div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>总数：<strong>{{totalNum}}</strong></th>
                <th>总价格：<strong>{{totalPrice}}</strong></th>
                <th><div @click="clearAllCart" class="btn btn-danger">清空购物车</div></th>
            </tr>
        </thead>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'goodsinfo',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['clearAllCart'])
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalNum'])
  }
}
</script>

<style>

</style>
