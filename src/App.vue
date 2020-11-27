<template>
  <div id="app">
 
  <mt-header title="信息管理系统">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
  <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="~assets/img/tabbar/home.svg">
    首页
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="~assets/img/tabbar/home.svg">
    会员
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="~assets/img/tabbar/home.svg">
    购物车
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="~assets/img/tabbar/home.svg">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
 

export default {
  name: 'App',
  components: {
  
  },
  data(){
    return{
      active:'',
      selected:''
    }
  },
  watch(){
 
  }
 
}
</script>

<style>
  @import "assets/css/base.css";
</style>
