<template>
    <div class="swiper_wrap">
        <div class="swiper-button-next selectornx2" slot="button-next"></div>
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions2"> 
            
            <swiper-slide class="swiper_card" v-for="product in products" :key="product.name">
                <div class="card_header font_xl ">
                    <p class="clr_dark">{{product.stock}}</p>
                    <p> <Countdown class="clr_grey font_xl" :deadline="product.time"></Countdown></p>
                   
                </div>

                <div class='card_content'> 
                    <div class="card_discount">
                        <img src="/swiper/comp.svg" alt="">
                        <div class="discount bgd_green">
                            <p class="font_xxl">{{product.discount}} % </p>
                            <p class="font_xs_m">СКИДКА</p>
                        </div>
                    </div>

                    <div class="product_details">
                        <div class="flex">

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

                            <p class="clr_light font_s">{{product.feedbackAmount}} отзывов</p>

                        </div>

                        <div class="ptoduct_name">
                            <p class="clr_light font_s">{{product.name}}</p>
                            <p class="clr_dark font_m">{{product.details}}</p>
                        </div>
                        <div class="product_price clr_light font_l">
                            <p class="old_price">{{product.oldPrice}} сўм</p>
                            <div class="new_price">
                                <p class="clr_dark font_xl">{{product.price}} сўм</p>
                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.02525e-05C0.45 1.02525e-05 0 0.45001 0 1.00001C0 1.55001 0.45 2.00001 1 2.00001H3.219L5.844 12.5C6.066 13.39 6.864 14 7.781 14H20.25C21.152 14 21.918 13.402 22.156 12.531L24.75 3.00001H22.656L20.25 12H7.781L5.156 1.50001C5.04785 1.06932 4.79827 0.687394 4.44724 0.41542C4.09621 0.143445 3.66405 -0.00283625 3.22 1.02525e-05H1ZM19 14C17.355 14 16 15.355 16 17C16 18.645 17.355 20 19 20C20.645 20 22 18.645 22 17C22 15.355 20.645 14 19 14ZM10 14C8.355 14 7 15.355 7 17C7 18.645 8.355 20 10 20C11.645 20 13 18.645 13 17C13 15.355 11.645 14 10 14ZM13 1.02525e-05V3.00001H10V5.00001H13V8.00001H15V5.00001H18V3.00001H15V1.02525e-05H13ZM10 16C10.563 16 11 16.438 11 17C11 17.563 10.562 18 10 18C9.437 18 9 17.562 9 17C9 16.437 9.438 16 10 16ZM19 16C19.563 16 20 16.438 20 17C20 17.563 19.562 18 19 18C18.437 18 18 17.562 18 17C18 16.437 18.438 16 19 16Z" fill="#637381"/>
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
                
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>       
    </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
 import Countdown from 'vuejs-countdown'

export default{
 components: {
        Swiper,
        SwiperSlide,
        Countdown
    },
    
    data(){
        return{
          swiperOptions2: {
            navigation: {
                nextEl: '.selectornx2',
                prevEl: '.selectorpr2'
                    },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
          },
            slidesPerView: 1, 
            loop: true,     
          },
            products:[
                {
                    stock: 'Товар дня!', 
                    time: "May 29, 2024",
                    discount: 12,
                    img: '/swiper/comp.svg',
                    name: 'Монитор',
                    details: 'MSI Pro 16 Flex-036AU 15.6 MULTITOUCH' ,
                    oldPrice: "3 200 650",
                    price: "3 000 650",
                    feedbackAmount: 102

                },
                {
                    stock: 'Товар дня!', 
                    time: "May 28, 2024",
                    discount: 12,
                    img: '/swiper/comp.svg',
                    name: 'Монитор',
                    details: 'MSI Pro 16 Flex-036AU 15.6 MULTITOUCH' ,
                    oldPrice: "3 200 650",
                    price: "3 000 650",
                    feedbackAmount: 102
                },
                {
                    stock: 'Товар дня!', 
                    time: "May 26, 2024",
                    discount: 12,
                    img: '/swiper/comp.svg',
                    name: 'Монитор',
                    details: 'MSI Pro 16 Flex-036AU 15.6 MULTITOUCH' ,
                    oldPrice: "3 200 650",
                    price: "3 000 650",
                    feedbackAmount: 102
                },

            ]
        }
    }
}
</script>

<style scoped>
.swiper_wrap{
    width: 432px;
    height: 100%;
    position: relative;
}
.swiper{
    width: 432px;
    height: 100%;
    border: 1px solid #D5DBE1;
}
.swiper_card{
    width: 432px;
    height: 100%;    
    padding: 24px;
    position: relative
   
}
.card_header{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.card_content{
    display: flex;
    width: 100%;
}
.card_discount{
    position: relative;
}
.product_details{
    padding-left: 20px;
}

.swiper-butto{
  position: absolute;
  background-color: white;
  box-shadow: 0px 2px 6px 0px #CFCFCF;
  top: 50%;
  right: -9px;
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
  position: absolute;
  background-color: white;
  box-shadow: 0px 2px 6px 0px #CFCFCF;
  top: 50%;
  right: -19px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 10px;
  border-radius: 50%;
  width: 38px;
  height: 38px;
}


.swiper-pagination ::v-deep
  .swiper-pagination-bullet{
    opacity: 0.5;
    background-color: #637381;
  }
  .swiper-pagination ::v-deep
  .swiper-pagination-bullet-active{
    background-color: #637381;
    opacity: 1;
  }
    
  .vuejs-countdown ::v-deep .text {
  font-size: 0px !important;
}
.vuejs-countdown ::v-deep .digit {
    font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 33.6px;
  text-align: left;
}

.vuejs-countdown ::v-deep li:after {
    line-height: 33.6px;
    font-size: 24px;
    right: -8px;
}

.vuejs-countdown ::v-deep li {
    margin: 0 1px;
}
.ptoduct_name{
    width: 198px;
    height: 68px; 
    padding-top: 12px;
}
.product_price{
    padding-top: 28px;
    width: 214px;
    height: 60px;   
   
}
.new_price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4px;
}

.discount{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -61px;
    
}
</style>