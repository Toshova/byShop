<template>
    <div class="block_wrap">
        <div class="header">
            <p class="clr_dark font_xxl">Хиты продаж</p>
        </div>
        <div class="swiper_wrap">
            <div class="block_items">   
                <swiper ref="mySwiper" :options="swiperOptions3">      
                    <swiper-slide v-for="item in items" :key="item.name">   
                        <div class="item">
                            <div class="img_wrap">
                                <img class="card_img" v-bind:src="item.img">
                                <button v-if="!item.liked" class="card_icon" @click ="countAllLikes(item)">
                                    <img src="/products/like.svg">
                                </button>   
                                <button v-if="item.liked" class="card_icon"  @click ="minusLike(item)">
                                    <img src="/products/like.svg" :class="{'filter_red': item.liked, 'transparent': liked}">
                                </button>        
                            </div>
                            <div class="feedback_wrap">

                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.168 6.2735L10.082 5.7365L8.00003 1.0665L5.91803 5.7365L0.832031 6.2735L4.63103 9.6975L3.57003 14.699L8.00003 12.145L12.43 14.7L11.369 9.698L15.168 6.2735Z" fill="#76BC21"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.168 6.2735L10.082 5.7365L8.00003 1.0665L5.91803 5.7365L0.832031 6.2735L4.63103 9.6975L3.57003 14.699L8.00003 12.145L12.43 14.7L11.369 9.698L15.168 6.2735Z" fill="#76BC21"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.168 6.2735L10.082 5.7365L8.00003 1.0665L5.91803 5.7365L0.832031 6.2735L4.63103 9.6975L3.57003 14.699L8.00003 12.145L12.43 14.7L11.369 9.698L15.168 6.2735Z" fill="#76BC21"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.168 6.2735L10.082 5.7365L8.00003 1.0665L5.91803 5.7365L0.832031 6.2735L4.63103 9.6975L3.57003 14.699L8.00003 12.145L12.43 14.7L11.369 9.698L15.168 6.2735Z" fill="#76BC21"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00003 1.0665L5.91803 5.7365L0.832031 6.2735L4.63103 9.6975L3.57003 14.699L8.00003 12.145V1.0665Z" fill="#76BC21"/>
                                </svg>

                                <p class="clr_light font_s">{{item.feedbackAmount}} отзывов</p>
                                              
                            </div>                         
                           
                            <div class="item_info">
                                <p class="clr_dar font_s item_name"> {{ item.name }}</p>
                                <p class="clr_light font_l old_price">{{ item.oldPrice }} </p>
                                <p class="clr_dar font_xl item_price">{{ item.price.toLocaleString() }} сўм</p>
                                
                            </div>
                            
                          
                            <Bascet-btn
                            :item="item" 
                            :goodsAmount="goodsAmount" 
                            :goodsCost="goodsCost"
                           
                            @add-good="addGood"
                            @count-allGoods="countAllGoods"/>

                           </div>

                       
                    </swiper-slide>
                </swiper>
            </div>

          

        </div>
      
        <div class="swiper-button swiper-button-prev selectorpr3" slot="button-prev"></div>
        <div class="swiper-button swiper-button-next selectornx3" slot="button-next"></div>    
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
            swiperOptions3: {
            navigation: {
                nextEl: '.selectornx3',
                prevEl: '.selectorpr3'
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
                    name:'Смартфон Huawei P40 Lite E 4/64GB Midnight Black (ART-L29) Exclusive Edition',
                    oldPrice: "3 200 650 сўм",
                    price: 3000650,
                    feedbackAmount: 102,
                    img: '/products/img_1.svg',
                    liked: false,
                },
                {
                    name:'Моноблок HP 200 G3 3VA45EA',
                    price: 3000000,
                    feedbackAmount: 102,
                    img: '/products/img_2.svg',
                    liked: false,
                },
                {
                    name:'Пылесос с контейнером Tefal City Space  TW2711EA',
                    oldPrice: "910 000 сўм",
                    price: 800000,
                    feedbackAmount: 102,
                    img: '/products/img_3.svg',
                    liked: false,
                },
                {
                    name:'Ultra HD (4K) LED телевизор 43" LG 43UN73506LD',
                    price: 2840000,
                    feedbackAmount: 102,
                    img: '/products/img_4.svg',
                    liked: false,
                },
                {
                    name:'Ноутбук игровой Lenovo IdeaPad L340-17IRH Gaming (81LL00F2RU)',
                    price: 4620050,
                    feedbackAmount: 102,
                    img: '/products/img_5.svg',
                    liked: false,
                },
                {
                    name:'Смартфон Huawei P40 Lite E 4/64GB Midnight Black (ART-L29) Exclusive Edition',
                    oldPrice: "3 200 650 сўм",
                    price: 3000650,
                    feedbackAmount: 102,
                    img: '/products/img_1.svg',
                    liked: false,
                },
                {
                    name:'Смартфон Huawei P40 Lite E 4/64GB Midnight Black (ART-L29) Exclusive Edition',
                    oldPrice: "3 200 650 сўм",
                    price: 3000650,
                    feedbackAmount: 102,
                    img: '/products/img_2.svg',
                    liked: false,
                },
                {
                    name:'Смартфон Huawei P40 Lite E 4/64GB Midnight Black (ART-L29) Exclusive Edition',
                    oldPrice: "3 200 650 сўм",
                    price: 3000650,
                    feedbackAmount: 102,
                    img: '/products/img_3.svg',
                    liked: false,
                },
                {
                    name:'Смартфон Huawei P40 Lite E 4/64GB Midnight Black (ART-L29) Exclusive Edition',
                    oldPrice: "3 200 650 сўм",
                    price: 3000650,
                    feedbackAmount: 102,
                    img: '/products/img_4.svg',
                    liked: false,
                },
                {
                    name:'Смартфон Huawei P40 Lite E 4/64GB Midnight Black (ART-L29) Exclusive Edition',
                    oldPrice: "3 200 650 сўм",
                    price: 3000650,
                    feedbackAmount: 102,
                    img: '/products/img_5.svg',
                    liked: false,
                },
                
            ]
        }
    },
   
    props:{
     
     goodsAll:  {
         required: true,
         type: Number
     }, 
     goodsCost:  {
         required: true,
         type: Number
     }, 
     likedAmount: {
        required: true,
        type: Number
        },
 },
    methods:{
        
    countAllGoods(cost){  
        this.$emit('count-allGoods', cost )   
    },
    countAllLikes(el){
        if(!el.liked){
            el.liked=true;
            this.$emit('count-allLikes')
        }   
    },
    minusLike(el){
        el.liked=!el.liked;
            this.$emit('minus-like')
        }  
}, 
}

</script>

<style scoped>


.item{
    width: 255px;
    height: 461px;
    border-radius: 2px 0px 0px 0px;
    border: 1px solid #D5DBE1;
    margin-left: 8px;
    display: flex;
    flex-direction: column; 
    align-items: center; 
}
.img_wrap{
    width: 210px;
    height: 180px;
    position:relative;
    display: flex;
    margin: 20px 0 8px;
}
.card_img{
    width: 210px;
    height: 180px;
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
.swiper_wrap
{
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

.item_name{
    margin-top: 8px;
    height: 60px;
}

.item_info{
    width: 210px;
}
.old_price{
 height: 22px;
 margin-top: 18px;
}
.item_price{
    height: 34px;
}
.btn_wrap{
    margin: 18px 0 24px;
}

</style>