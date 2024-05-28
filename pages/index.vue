<template>
  <div class="container">
      <Nav-bar/>
      <Cat-bar/>
     
      <div class="header_categories">
        <Swipe-img/>
        <Product-day/>
      </div>
      <div class="centered">
        <Hits-products/>
        <div class="banner_wrap">
          <img src="/narrow_banner.jpg">
        </div>
        <New-products/>
        <Recom-you/>
        <div class="banner_wrap">
          <img src="/narrow_banner_2.jpg">
        </div>
        <Sale-products/>
        <News-promotions/>
        <Pop-brands/>

      </div>
      <Footer-bar/>
  </div>
</template>

<script>
export default {
 }
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  cursor: pointer;
}
ul[class],
ol[class] {
  list-style: none;
}
.container{
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header{
  width: 1346px;
  display: flex;
  align-items: start;
  justify-content: left;
}
.header_categories{
  height: 320px;
  width: 1346px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 24px 0 48px;
  gap: 24px;
}
.centered{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
}
.block_wrap{
    width: 1394px;
    height: 519px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:24px;    
}
.block_items{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
}

button{
  border: none;
  background-color: transparent;
  color: white;
  height: 100%;
}
.clr_grey{
    color:#637381
}

.clr_light{
  color: #8E979E;

}
.clr_dark_grey{
  color:#454F5B
}

.clr_black{
  color: black
}

.bgd_green{
    background-color: #76BC21;
}
.bgd_lg{
    background-color: #F4F6F8;
}
.bgd_grey{
  background-color: #DFE3E8
}

.shabow_dvd{
    border: 1px solid #D5DBE1
}
.flex{
  display: flex;
}

.font_xs{
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
}
.font_s_m{
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
}
.font_s_l{
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
}
.font_xs_m{
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
}
.font_s{
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
}
.font_m{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
}
.font_l{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
}
.font_xl{
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 33.6px;
}
.font_xxl{
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
}
.old_price{
  text-decoration: line-through;
}

.main_btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 40px;
  border-radius: 2px 0px 0px 0px;
  color: white;
  background-color: #76BC21;
  background-repeat: no-repeat;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  text-align: left;
}
.main_btn img{
  padding-right: 8px;
}

.banner_wrap{
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
