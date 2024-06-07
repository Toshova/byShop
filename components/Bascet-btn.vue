<template>
    <div class="btn_wrap">
        
        <button
            v-if="!bascetAdded"
            @click="addGood(item.price)"
            class="main_btn" 
            >
            <img src="/bascet.svg">  
        
            <p >В корзину</p>
           
        </button>
        <button
            v-if="bascetAdded"
            class="main_btn clicked_btn"
           >
            <img src="/bascet_added.svg">
            <p >В корзине</p>
        </button>
       
                            
                               
       
    </div>

</template>

<script>   
export default{
    data(){
        return{
            addedGoods: 0,
            bascetAdded: false
        }
    },
    props:{
        item: {
            required: true,
            type: Object
        },
        goodsAmount: {
            required: true,
            type: Array
        },
        goodsCost: {
            required: true,
            type: Number
        },
    },
    methods: {
        addGood(cost){
            this.bascetAdded=true;
            this.$emit('count-allGoods', cost)        
        },
        
       
      
    },
   
} 

</script>

<style scoped>
.btn_wrap{
    margin: 18px 0 24px;
}

</style>