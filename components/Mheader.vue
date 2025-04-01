<template >
    <div class="main_hero techno">
        <div class="wrapper ">
            <div class="section_grid">
                <div class="main_hero_img_box">
                  <!-- <img class="main_hero_img" src="/public/img/main/tryke_yellow.jpeg" /> -->
                  <img class="main_hero_img" src="/public/img/main/tryke_white.png" />
                </div>
                <div class="main_hero_txt_box">
                    <h2 class="main_hero_headline">We are <br v-if="mobile"/>  Studio Halalit
                      <template v-if="!mobile">
                        ,
                      </template>
                      <!-- <temaplte v-else>
                        .
                      </temaplte> -->
                    </h2>
                    <h2 class="main_hero_headline_2">we are an Engineering & Industrial design hub.<br v-if="mobile"/> We like to <br v-if="mobile"/>build things.</h2>  
                        <span class="main_span_1"> </span><br/>
                        
                        <span class="main_span_2"></span>

                   
                
                    <h3 class="main_hero_subheadline">
                      From single Proof Of Concept, to Small scale manufacturing to fully industrial products. We specialize in robust and rapid prototyping, with local small scale manufacturing capabilities and experience in escorting fully industrial product manufacturing.<br/>
                      <!-- <span>Let's work together.</span> -->
                    </h3>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        mobile :  window.innerWidth <= 600 ? true : false
      }
    }
}
</script>
<style scoped >
  .main_hero{
    width:100%;
    color: lightgrey;
    background-color: rgb(45, 38, 38);
    border-bottom:1px solid rgba(211, 211, 211,0.1);
    height:90vh;
    @media (min-width:600px){
    
   
    }
    @media (max-width:600px){
      position:relative;
      padding: 10px;
      background-color:#F9DB00;
      color: var(--main-txt);
    }
}
  /* main hero box has been replaced with section grid */
  /* .main_hero_box{
    height:100%;
    padding-top:40px;
    padding-bottom:40px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 40px;
     
  } */
  .main_hero_box div{
    /* height:33.33%; */
    /* border: 1px solid red; */
  }
  .main_hero_img_box{
    grid-column: 1 / span 2;
    grid-row-start: 2 ;
    grid-row-end: 5;
    overflow:hidden;
    border-radius:10px;
    box-shadow: -0px 10px 25px 0px rgba(0,0,0,0.5);
    background:var(--offwhite);
    @media (max-width: 600px) {
      position:absolute;
      bottom:0;
      top:30%;
      z-index:1;
      border-radius:0px;
      box-shadow: none;
    }
  }

  .main_hero_img{
    width:100%;
    height:100%;
    object-fit: cover;
    
    /* for yellow */
    /* object-position: 30% 50%; */

    /* for white */
    object-position:55% 50%;

    /* filter: saturate(0); */
    /* mix-blend-mode: exclusion; */
  }



  /* max width queries is less than MAX or equal */
  .main_hero_txt_box{
    grid-column: 3 / span 4;
    grid-row-start: 2 ;
    grid-row-end:  5;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* background:red; */

    @media (max-width: 600px) { 
      position:absolute;
      z-index:2;
      display: initial;
    }
  }

  
 
  
  .main_hero_headline{
    /* font-size: 2.6cqw; */
    font-size:50px;
    line-height:60px;
    font-weight: 600;
    color:var(--main-yellow);

    margin-top:-12px;
    text-align:left;
    /* margin:0 auto; */

    @media (min-width:600px) and (max-width: 1490px){
      font-size:45px;
    }

    @media (max-width: 600px) {
      color: var(--main-txt); 
      font-size:15cqw;
      line-height:1;
      font-weight: 700;
      letter-spacing: -1px;
      margin-top:0px;
    }
    
  }
  .main_hero_headline_2{
    font-size:50px;
    line-height:60px;
    font-weight: 300;
    @media (max-width: 600px) { 
      font-weight: 400;
      font-size:7.5cqw;
      line-height:1.2;
      /* background:var(--main-yellow); */
    }
  }
  
  .main_span_1{
    
    @media  (max-width: 600px) { 
      
    }
  }
  .main_span_2{
    
    
  }
  .main_hero_subheadline{
    font-size : 22px;
    line-height: 40px;
    font-weight: 200;
    text-align: justify;
    /* color:white; */
    @media (max-width: 600px) { 
      display:none;
      font-size:15px;
      line-height:22px;
      text-align: left;
    }
  }
  .techno{
    background-image: url('/img/main/techno_1_b.jpg');
    background-size:cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position-y: 10vh;
    background-blend-mode: multiply;

    @media (max-width:600px){
      background-image: none;
    }
  }  

  


</style>