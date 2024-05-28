<template>
    <div class="block_wrap">
        <div class="header">
            <p class="clr_dark font_xxl">Популярные бренды</p>
        </div>
        <div class="swiper_wrap">
            <div class="block_items">  

                <swiper ref="mySwiper" :options="swiperOptions8">      
                    <swiper-slide v-for="item in items" :key="item">   
                        <div class="item_brands">
                          
                            <img class="brand_img"  v-bind:src="item.topImg">
                            <img class="brand_img"  v-bind:src="item.bottomImg">


                        </div> 
                    </swiper-slide>
                </swiper>
            </div>

          

        </div>
      
        <div class="swiper-button swiper-button-prev selectorpr8" slot="button-prev"></div>
        <div class="swiper-button swiper-button-next selectornx8" slot="button-next"></div>    
    </div>


</template>


<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default{
    components: {
        Swiper,
        SwiperSlide,
       
    },
    data(){
        return{
            swiperOptions8: {
            navigation: {
                nextEl: '.selectornx8',
                prevEl: '.selectorpr8'
                    },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
          },
            slidesPerView: 5, 
            loop: true,     
          },
         
           items:[
                {
                    topImg:  '/brands/br_1.svg',
                    bottomImg:  '/brands/br_2.svg',
                },
                {
                    topImg:  '/brands/br_3.svg',
                    bottomImg:  '/brands/br_4.svg',
                },{
                    topImg:  '/brands/br_5.svg',
                    bottomImg:  '/brands/br_6.svg',
                },{
                    topImg:  '/brands/br_7.svg',
                    bottomImg:  '/brands/br_8.svg',
                },{
                    topImg:  '/brands/br_9.svg',
                    bottomImg:  '/brands/br_10.svg',
                },
               
                
            ]
        }
    }
}

</script>

<style scoped>
.block_wrap{
 height: 242px;
}
.block_items{
    width: 1346px;
    margin-bottom: 48px;
}
.item_brands{
    width: 250px;
    height: 184px;
    display: flex;
    flex-direction: column; 
    align-items: center; 
   justify-content: space-between;
}

.brand_img{
    width: 250px;
    height: 80px;
}
.card_icon{
    width: 24px;
    height: 24px;
    position: absolute;
    right:0
}

.swiper_wrap{
    width: 1366px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.swiper-butto{
  position: absolute;
  background-color: white;
  box-shadow: 0px 2px 6px 0px #CFCFCF;
  top: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 10px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.swiper_img{
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-next {
    position: absolute;
    background-color: white;
    box-shadow: 0px 2px 6px 0px #CFCFCF;
    top: 50%;
    right: 0;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 10px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-image: url('/swiper/angle_right.png');
}
.swiper-button-prev {
    position: absolute;
    background-color: white;
    box-shadow: 0px 2px 6px 0px #CFCFCF;
    top: 50%;
    left:0;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 10px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-image: url('/swiper/angle_left.png');
}
.feedback_wrap{
    width: 210px;
    display: flex;
    align-items: start;
    justify-content: start;
    margin-top: 12px;
}


.item_info{
    width: 340px;
    margin-top: 19px;
    display: flex;
    flex-direction: column;
    gap:8px;
}
.old_price{
 height: 22px;
 margin-top: 18px;
}
.item_price{
    height: 34px;
}
.item_details{
    width: 323px;
}
.btn_wrap{
    margin: 18px 0 24px;
}

</style>