<template>
  <div id="home">
  <navbar class="home-nar">
    <div slot="center">
      购物车
    </div>

  </navbar>
      大家好我是home
      <button @click="btnclick">点击我</button>
</div>
</template>

<script>
 import navbar from 'components/common/navbar/NavBar'
 import homejs from 'network/home'
export default {
  name:'home',
  components: {
   navbar
  },
  data(){
    return{
      
    }
  },
  created(){

  },
  methods:{
    btnclick()
    {
      homejs.ShowDialog();
    }
  }
}
</script>

<style>
  .home-nar{
    background-color: var(--color-tint);
  }
</style>