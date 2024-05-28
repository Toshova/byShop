<template>
    <div class="swiper_wrap">
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions"> 

            <swiper-slide class="swiper_img" v-for="img in imgs_1" :key="img">
              <img class="sw_img" v-bind:src="img">
            </swiper-slide>
            <div class="swiper-button swiper-button-next selectornx" slot="button-next"></div>
            <div class="swiper-button swiper-button-prev selectorpr" slot="button-prev"></div>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>       
    </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default{
 components: {
        Swiper,
        SwiperSlide
    },
    
    data(){
        return{
          swiperOptions: {
            navigation: {
                nextEl: '.selectornx',
                prevEl: '.selectorpr'
                    },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
          },
            slidesPerView: 1, 
            loop: true,     
          },
            imgs_1:[
                '/swiper/img_1_1.png',
                '/swiper/img_1_2.png',
                '/swiper/img_1_3.png',
                '/swiper/img_1_4.png',
                '/swiper/img_1_5.png',
                '/swiper/img_1_6.png',
            ]
        }
    }
}
</script>

<style scoped>
.swiper_wrap{
    width:890px;
    height: 100%;
    position: relative;
}

  
.swiper{
    height: 100%;
}
.sw_img{
    height: 100%;
    object-fit: cover; 
    object-position: left; 

}
.swiper-button{
  position: absolute;
  color: transparent !important;
  background-color: #D6D6D6;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 10px;
  border-radius: 50%;
  width: 38px;
  height: 38px;
 
}
.swiper_img{
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-next {
  background-image: url('/swiper/angle_right.png');
}
.swiper-button-prev {
  background-image: url('/swiper/angle_left.png');
}

.swiper-pagination ::v-deep
  .swiper-pagination-bullet{
    opacity: 0.5;
    background-color: white;
  }
  .swiper-pagination ::v-deep
  .swiper-pagination-bullet-active{
    background-color: white;
    opacity: 1;
  }
    
   


</style>