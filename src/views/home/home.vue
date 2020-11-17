<template>
  <div id="home">
  <navbar class="home-nar">
    <div slot="center">
      购物车
    </div>

  </navbar>
       <Swiper>
      <SwiperItem v-for="(item, index) in arr" :key="index">
          <!--<a :href="item.link">-->
          <img :src="item.image" />
      <p>我是图片</p>
      </SwiperItem>
    </Swiper>
      <button @click="btnclick">点击我</button>
      <img data-v-76f3fb8e="1" src="~assets/img/tabbar/home_active.svg">
</div>
</template>

<script>
import Swiper  from "components/common/Swiper/Swiper";
import  SwiperItem  from "components/common/Swiper/SwiperItem";
 import navbar from 'components/common/navbar/NavBar'
 import homejs from 'network/home'
export default {
  name:'home',
  components: {
   navbar,
   Swiper,
   SwiperItem
  },
  data(){
    return{
      arr:[{
      image:'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg'
      },{  image:'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg'}]
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