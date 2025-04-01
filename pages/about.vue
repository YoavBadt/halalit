<template>
    <div>
      <Header title1="About" title2="Studio Halalit"/>
      
      <div class="wrapper">
        <ContentList path="/_about" v-slot="{ list }">
          <div v-for="item in list" :key="item._path" class="about_main">

          <h2 class="project_subheadline">{{ item.description }}</h2>
         
          </div>
        </ContentList>
      </div>


      <Header title1="The Team" />

      <div class="wrapper">

        <ContentList path="/_team" v-slot="{ list }">
          <div v-for="item in list" :key="item._path" class="about_content">
            
            

            <div class="about_txt">

              <div class="about_txt_head">

                <span class="about_txt_name" style="border-right : var(--greyline);">
                  <h2>{{ item.name }} </h2>

                  <template v-if="item.pos">
                  <!-- <span style="border-left : var(--greyline);width:10%"> -->
                    <p style="">&nbsp •  {{ item.pos }}</p>
                  <!-- </span> -->
                  </template>

                </span>

                <span >
                  <p style="font-weight: 600;">{{ item.cat }}</p>
                </span>
                
              </div>

              <div class="about_txt_content">

                <div class="about_img_box">
                 <img class="about_img" :src="item.img">
                </div>
                <p class="content_p"
                style="padding:20px;border-right : var(--greyline)"
                >{{ item.description }}</p>

              </div>
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
    min-height:300px;
    
    border:1px solid lightgrey;
    background-color:var(--offwhite);
    border-radius:5px;

    margin-bottom:60px;
  }
  
  .about_txt{
    width:100%;

    
  }
  .about_txt_head{
    border-bottom:var(--greyline);
    height:60px;
    display:flex;
    align-content: stretch;
    /* padding:20px; */
  }
  .about_txt_head span{
    padding:0 20px;
    display:flex;
    align-items: center;
  }
  .about_txt_name{
    width:30%;
  }
  .about_txt_content{
    display:flex;
    
    /* padding:100px; */
  }

  .about_img_box{
    /* background:Red; */
    /* grid-column: 1 / span 1; */
    height:250px;
    width:30%;
    /* padding: 20px; */
    border-right:1px solid lightgrey;
    overflow:hidden;
  }
  .about_content img{
    width:100%;
    height:100%;
    /* margin-top:10px; */
    overflow: hidden;
    /* border-radius:5px; */
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
  .content_p{
    width:60%;
  }

  @media (max-width: 600px) {
    .about_content{
      display:inline-block;
      border-radius:0;
      height:auto;
      /* margin-bottom:40px; */
      /* background:red; */
    }
    .about_txt_head{
      height:100px;
      flex-direction: column;
    }
    .about_txt_head span{
      width:100%;
      height:50px;
    }
   .about_txt_name{
    border-bottom:var(--greyline)
   }
   .about_txt_content{
    flex-direction: column;
   }
   .about_img_box{
    width:100%;
    height:75vw;
   }
    .content_p{
    width:100%;
    }
    .about_txt{
      /* padding:20px; */
      
    }
    .about_img_box{
      
      /* border-bottom:1px solid lightgrey */
    }
  }
</style>