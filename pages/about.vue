<template>
    <div>
      <Header title1="About" title2="Studio Halalit"/>
      
      <div class="wrapper">

        <ContentList path="/_about" v-slot="{ list }">
          <div v-for="item in list" :key="item._path" class="about_content">
            <div>
              <img class="about_img" :src="item.img">
            </div>
            <div>
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
    width:75%;
    margin: 10vh auto;
    display:flex;
    gap:52px;
  }

  .about_content img{
    width:200px;
    height:200px;
    margin-top:10px;
    overflow: hidden;
    border-radius:50%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  .about_content h2{
    font-size: 24px;
    line-height:32px;
    font-weight: 500;
    text-transform: uppercase;
    display:inline-block;
    margin-bottom:20px;
    border-bottom:4px solid violet;
  }
  .about_content p{
    font-size:18px;
    line-height: 32px;
    font-weight: 500;
    color:rgb(70, 70, 70);
    margin-bottom:100px;
    height:300px;
  }

  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
</style>