<template>
    <div>
        <div class="cat_wrap bgd_lg" >
            <div v-for="cat in categories" :key="cat.id" class="cat_items" >
                <div class="cat_item" >
                    <div class="cat_block">
                        <div class="cat_text"  @mouseover="cat.hover=true" >
                            <svg v-if="cat.img" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.25V1.75H18V0.25H0ZM0 6.25V7.75H18V6.25H0ZM0 12.25V13.75H18V12.25H0Z" fill="#637381"/>
                            </svg>

                            <a>{{ cat.name }}</a>
                        </div>
                    </div>
                </div>     

                <div>
                    
                </div>




                <div class="hover_wrap" v-show="cat.id>1 && cat.hover" @mouseleave="cat.hover=false" :class="{'hover_wrap': cat.id>1 && cat.hover}">
                   <div class="arrow_up"></div>
                    <div class="hover_block">
                        <div v-for="item in cat.range" :key="item" class="items_block">
                            <p class="clr_dark font_l item_type">{{ item.type }}</p>
                            <div class="items_list" v-for="el in item.list" :key="el" >
                                <p class="clr_dark_grey font_s">{{ el }}</p>
                            </div>
                        </div>
                    </div>  
                    
                    <div class="hover_brands">
                        <div class="brands_icons">
                            <img v-for="brand in brands" :key="brand"  class="brand_img"  v-bind:src="brand">
                        </div>
                        <div class="back_menu">
                            <p class="clr_dark_grey font_l">Все категории</p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.10543 2.6756L7.20605 3.57497L13.6323 9.99997L7.2073 16.4256L8.10543 17.3243L14.9804 10.4493L15.4098 9.99997L14.9804 9.5506L8.10543 2.6756Z" fill="#454F5B"/>
                            </svg>

                        </div>

                        <div :class="{'hover_wrap': cat.id>1 && cat.hover, 'hover_catalog':cat.id===1 && cat.hover}"  @mouseleave="cat.hover=false">
                    <div class="arrow_up" :class="{'arrow_up': cat.id>1 && cat.hover}"></div>
                  <div class="arrow"></div>
                </div>

                    </div>
                  
                </div>
                
                             
            </div>
                    
            </div>

    </div>
    
</template>

<script>
export default{
    data(){
        return{
            cat_hovered: false,
            categories:[
            {
                id:1,
                name:'Каталог',
                img:true,
                hover:false,
                range:[
                'Смартфоны и гаджеты',
                'Телевизоры, аудио, видео',
                'Ноутбуки и компьютеры',
                'Всё для офиса',
                'Техника для дома',
                'Техника для кухни',
                'Красота и здоровье',
                'Игры и софт, развлечения',
                'Товары для авто',
                'Фото и видео',
                'Акции',
                'Товары на распродаже'
                ]
            },
            {
                id:2,
                name:'Смартфоны и гаджеты',
                hover:false, 
                range:[
                    {
                        type: 'Смартфоны',
                            list: [
                                'Apple',
                                'Samsung',
                                'Xiaomi',
                                "Huawei",
                                'Alcatel',
                                'Realme'
                            ]
                            
                    },
                    {
                        type: 'Планшеты',
                        list: [
                        'Apple',
                       'Samsung',
                       "Huawei",
                       'Pocketbook',
                       'Электронные книги'
                        ]
                    },
                    {
                        type: 'Аксессуары',
                        list: [
                        'Power bank',
                       'Наушники',
                       'Беспроводные наушники',
                       'Зарядные устройства',
                       'Стёкла и плёнки',
                       'Карты памяти',
                       'Кабели',
                       'Чехлы',
                        ]
                    },
                   
                    {
                        type: 'Гаджеты',
                        list: [
                        'Смарт-часы',
                       'Фитнес-браслеты',
                       'Спортивные часы',
                       'Apple iWatch',
                       'Samsung Gear',
                       'Amazfit',
                        ]
                    },
                    {
                        type: 'Кнопочные телефоны',
                        list: [
                            'Nokia',
                            'Philips',
                            'BQ',
                            'Samsung Verizon'
                        ]
                    },
                    
                    {
                        type: 'Домашние телефоны',
                        list: [
                       'Радиотелефоны',
                       'Проводные телефоны',
                        ]
                    },
                ]          
            },
            {
                id:3,
                name:'Телевизоры, аудио, видео',
            },
            {
                id:4,
                name:'Ноутбуки и компьютеры',
            },

            {
                id:5,
                name:'Техника для дома',
            },
            {
                id:6,
                name:'Техника для кухни',
            },
            {
                id:7,
                name:'Красота и здоровье',
            },
            {
                id:8,
                name:'Игры и софт, развлечения',
            },
            {
                id:9,
                name:'Товары для авто',
            },
           
            {
                id:10,
                name:'Товары на распродаже',
            },
          
            ],
            brands:[
                '/brands/samsung.svg',
                '/brands/mi.svg',
                '/brands/apple.svg',
                '/brands/sony.svg',
                '/brands/philips.svg',
                '/brands/huawey.svg',
            ]
        }
        
    },
    methods:{
        hoverIt(idx){
            idx.hover=true
        },
        hoverOut(idx){
            idx.hover=false
        }
    }

}
</script>


<style scoped>