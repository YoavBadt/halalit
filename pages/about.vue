<template>
    <div>
      <Header title1="About" title2="Studio Halalit"/>
      
      <div class="wrapper">

        <ContentList path="/_about" v-slot="{ list }">
          <div v-for="item in list" :key="item._path" class="about_content">
            <div class="about_img_box">
              <img class="about_img" :src="item.img">
            </div>
            <div class="about_txt">
              <h2>{{ item.name }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
  </template>

<script>
import Header from './components/Header.vue'
export default {

}


</script>

<style>
  .about_content{
    height:300px;
    border:1px solid lightgrey;
    background-color: #f6f5f5;
    border-radius:5px;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
        
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom:10vh;
  }
  .about_img_box{
    /* background:Red; */
    grid-column: 1 / span 1;
    padding: 20px;
    border-right:1px solid lightgrey;
    overflow:hidden;
  }
  .about_txt{
    grid-column: 2 / span 2;
    padding:20px 20px 20px 0;
  }
  .about_content img{
    width:100%;
    height:100%;
    /* margin-top:10px; */
    overflow: hidden;
    border-radius:5px;
    object-fit: cover;
    object-position: 50% 50%;
  }
  .about_content h2{
    font-size: 18px;
    line-height:32px;
    font-weight: 700;
    text-transform: uppercase;
    display:inline-block;
    /* border-bottom:4px solid violet; */
  }
  .about_content p{
    font-size:16px;
    line-height: 24px;
    font-weight: 500;
    color:rgb(70, 70, 70);
    /* margin-bottom:100px; */
    /* height:300px; */

  }

  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
</style>