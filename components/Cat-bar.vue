<template>
    <div>
        <div class="cat_wrap bgd_lg" >
            <div class="cat_items" v-for="cat in categories" :key="cat.id">
                <div class="cat_item" >
                    <div class="cat_block">
                        <div class="cat_text">
                            <svg v-if="cat.img" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.25V1.75H18V0.25H0ZM0 6.25V7.75H18V6.25H0ZM0 12.25V13.75H18V12.25H0Z" fill="#637381"/>
                            </svg>

                            <a>{{ cat.name }}</a>
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

            categories:[
            {
                id:1,
                name:'Каталог',
                img:true,
            },
            {
                id:2,
                name:'Смартфоны и гаджеты',
                hover:false,
                range:{
                'Смартфоны':[
                    {
                       name:'Apple', 
                    },
                    {
                       name:'Samsung'
                    },
                    {
                       name:'Xiaomi', 
                    },
                    {
                       name:'Huawei', 
                    },
                    {
                       name:'Alcatel', 
                    },
                    {
                       name:'Realme', 
                    },

                ]
                },
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
          
            ]
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
    max-width: 1346px;
}
.cat_items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    
}
.cat_item{
    display: flex;
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
    position: relative;
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
a:hover{
    color:#76BC21
}
.hover_block{
    position: absolute;
    width: 1346px;
    max-height: 464px;
    background-color: white;
    border: 1px solid red;
    border-radius: 2px 0px 0px 0px;   
    z-index: 100; 
    top: 180px;
}
</style>