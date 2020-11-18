<template>
  <div id="home">
 
 
 
</div>
</template>

<script>

 import homejs from 'network/home'
export default {
  name:'home',
  components: {

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