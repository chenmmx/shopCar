<template>
  <div id="app">
    <goods></goods>
    <cart></cart>
    <goodsinfo></goodsinfo>
  </div>
</template>

<script>
import goods from '@/components/goods'
import cart from '@/components/cart'
import goodsinfo from '@/components/goodsinfo'
export default {
  name: 'App',
  components: {
    goods,
    cart,
    goodsinfo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
