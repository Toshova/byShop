<template>
    <div class="block_wrap">
        <div class="header">
            <p class="clr_dark font_xxl">Хиты продаж</p>
        </div>
        <div class="swiper_wrap">
            <div class="block_items">  

                <swiper ref="mySwiper" :options="swiperOptions7">      
                    <swiper-slide v-for="item in items" :key="item.name">   
                        <div class="item">
                          
                            <img class="card_img"  v-bind:src="item.img">

                            <div class="item_info">
                                <p class="clr_dark font_l"> {{ item.name }}</p>
                                <p class="clr_dark_grey font_s item_details">{{ item.details }} </p>
                                
                            </div>

                        </div> 
                    </swiper-slide>
                </swiper>
            </div>

          

        </div>
      
        <div class="swiper-button swiper-button-prev selectorpr7" slot="button-prev"></div>
        <div class="swiper-button swiper-button-next selectornx7" slot="button-next"></div>    
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
            swiperOptions7: {
            navigation: {
                nextEl: '.selectornx7',
                prevEl: '.selectorpr7'
                    },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
          },
            slidesPerView: 3.3, 
            loop: true,     
          },
            items:[
                {
                    name:'Обзор Huawei MateBook X​',
                    details:'Чем хорош​ флагманский ноутбук из​ линейки Huawei MateBook 2020 года?',
                    img: '/news/img_1.png',
                },
                {
                    name:'7 лучших сушильных машин 2020 года, которые помогут привести одежду в порядок​',
                    details:'Electroshop.uz расскажет, как выбрать сушильную машину, и предложит семь лучших моделей.',
                    img: '/news/img_2.png',
                },
                {
                    name:'Итоги конкурса Samsung Galaxy​',
                    details:'Чем хорош​ флагманский ноутбук из​ линейки Huawei MateBook 2020 года?',
                    img: '/news/img_3.png',
                },
                {
                    name:'Обзор HONOR 10X Lite​​',
                    details:'Читайте о новом смартфоне HONOR с очень живучей​ батареей',
                    img: '/news/img_4.png',
                },
               
                
            ]
        }
    }
}

</script>

<style scoped>

.block_items{
    width: 1346px;
}
.item{
    width: 380px;
    height: 437px;
    border-radius: 2px 0px 0px 0px;
    border: 1px solid #D5DBE1;
    display: flex;
    flex-direction: column; 
    align-items: center; 
}

.card_img{
    width: 380px;
    height: 260px;
    object-fit: cover;
}
.card_icon{
    width: 24px;
    height: 24px;
    position: absolute;
    right:0
}
.filter_red{
    filter: invert(57%) sepia(56%) saturate(592%) hue-rotate(45deg) brightness(101%) contrast(90%);
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