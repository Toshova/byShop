<template>
    <div>
        <div class="cat_wrap bgd_lg" >
            <div v-for="cat in categories" :key="cat.id" class="cat_items" >
                <div class="cat_item" :class="{'bgd_green':cat.bgdGreen}"  >
                    <div class="cat_block" @mouseover="hoverIt(cat.id)" >
                        <div class="cat_text"  >
                            <svg v-if="cat.img" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.25V1.75H18V0.25H0ZM0 6.25V7.75H18V6.25H0ZM0 12.25V13.75H18V12.25H0Z" fill="#637381"/>
                            </svg>

                            <a class="clr_dark_grey hovered" :class="{'green_hovered clr_white':cat.bgdGreen, }">{{ cat.name }}</a>
                        </div>
                    </div>
                </div> 
                <div class="hover_wrap" 
                v-show="cat.id===2 && categories[1].hover"  
                @mouseleave= hoverCatBlockOut 
                :class="{'hover_wrap_cat': cat_hovered}">

                    <div class="arrow_up arrow_up_2" v-show="!cat_hovered"></div>

                    <div class="hover_block">
                        <div v-for="item in categories[1].range" :key="item" class="items_block">
                            <p class="clr_dark font_l item_type">{{ item.type }}</p>
                            <div class="items_list" v-for="el in item.list" :key="el" >
                                <p class="clr_dark_grey font_s">{{ el}}</p>
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

                        

                    </div>
                </div>   
                <div class="hover_catalog" v-show="cat.id===1 && categories[0].hover"  @mouseleave="categories[0].hover=false">
                    <div class="arrow_up arrow_up_1"></div>
                    <div 
                        v-for="item in categories[0].range" 
                        :key="item" 
                        class="hover_cat_block"
                        @mouseover="hoverCatBlock">

                        <p class="clr_dark_grey font_s"  :class="{'clr_green': item.clrGreen}">{{ item.name }}</p>
                        <a href="">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.67351 1.87292L5.04395 2.50249L9.54232 6.99999L5.04482 11.4979L5.67351 12.127L10.486 7.31455L10.7866 6.99999L10.486 6.68542L5.67351 1.87292Z" fill="#8E979E"/>
                            </svg>
                        </a>
                        

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
                { name:'Смартфоны и гаджеты'},
                {name:'Телевизоры, аудио, видео'},
                {name:'Ноутбуки и компьютеры'},
                {name:'Всё для офиса'},
                {name:'Техника для дома'},
                {name:'Техника для кухни'},
                {name:'Красота и здоровье'},
                {name:'Игры и софт, развлечения'},
                {name:'Товары для авто'},
                {name:'Фото и видео'},
                {
                    name:'Акции',
                    clrGreen: true
                },
                {
                    name:'Товары на распродаже',
                    clrGreen: true
            }
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
                bgdGreen: true,
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
            if (idx===2){      
                this.categories[idx-1].hover=true;
                this.categories[0].hover=false;     
            } else if (idx===10){
                this.categories[idx-1].hover=true;  
            } else{ 
                this.categories[idx-1].hover=true;
                this.categories[idx].hover=false      
            }
        },
        hoverCatBlock(){
            this.categories[1].hover=true;
            this.cat_hovered=true
        },
        hoverCatBlockOut(){
            this.categories[1].hover=false
            this.cat_hovered=false
        }
    }

}
</script>


<style scoped>
.cat_wrap{
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #D5DBE1 solid 1px; 
}
.cat_wrap>div{
    height: 100%;
}
.cat_items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1346px;
    position: relative;  
}
.cat_item{
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px;  
    border-right: #D5DBE1 solid 1px;  
}

.cat_block{
    width: 134px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border-right: #D5DBE1 solid 1px;  
}
.cat_text{
    width: 100px;
    display: flex;
}
.cat_block svg{
    margin: 0 8px 0 -10px;
    width: 18px;
    height: 13.5px;
}
.hovered:hover{
    color:#76BC21
}
.green_hovered:hover{
    color: white;
}

.hover_catalog{
    display: flex;
    flex-direction: column;
    width: 240px; 
    height: 515px; 
    position: absolute;
    box-shadow: 0px 10px 25px 0px #00000040;
    background-color: white;
    z-index: 100;
    top:60px;
    left: 0px;      
}
.hover_cat_block{
    width: 240px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    padding: 14px;
}

.hover_cat_block:hover{
    filter: invert(63%) sepia(76%) saturate(450%) hue-rotate(44deg) brightness(89%) contrast(92%);
}

.hover_wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1346px;
    height: 464px; 
    position: absolute; 
    box-shadow: 0px 10px 25px 0px #00000040;
    background-color: white;
    z-index: 100;
    top:60px;
    left: -136px;  
}
.hover_wrap_cat{
    left: 105.5px;
}
.arrow_up {
    position: absolute;
    top:-9px;
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 24px solid white;
    z-index: 10;
}
.arrow_up_1 {
    left: 47px
}

.arrow_up_2 {
    left: 181px
}

.hover_block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: auto auto;
    grid-auto-flow: row;
    width: 1008px;
    height: 384px;
}
.hover_brands{
    width:268px;
    height: 384px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
.brands_icons{
    width:268px;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows:1fr 1fr 1fr;
    gap:36px;
}
.items_block{
    display: flex;
    flex-direction: column;
    height: auto;
    gap:10px;
    height: 204px;
    margin-bottom: 36px;
}
 
.items_list{
    text-align: left;
}

.item_type{
  margin-bottom: 2px;
}
.back_menu{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
}
.brand_img{
    width: 130px;
    height: 42.71px;
}
</style>