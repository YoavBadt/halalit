<template >
    <div class="main_hero techno">
        <div class="wrapper ">
            <div class="section_grid">
                <div class="main_hero_img_box">
                  <img class="main_hero_img" src="/public/img/main/tryke_yellow.jpeg" />
                </div>
                <div class="main_hero_txt_box">
                    <h2 class="main_hero_headline">
                      
                        <span class="main_span_1">We're Studio Halalit, </span><br/><span class="main_span_2">we are an </span> 
                      
                        <span class="main_span_2">Engineering & Industrial design hub. </span>

                        <span class="main_span_2">We like to build things.</span>

                    </h2>
                
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
    
}
</script>
<style scoped>
  .main_hero{
    width:100%;
    height:90vh;
    color: lightgrey;
    background-color: rgb(45, 38, 38);
    /* background-image: url('/public/img/main/tryke_yellow.jpeg'); */
    /* background-blend-mode: multiply; */
    border-bottom:1px solid rgba(211, 211, 211,0.1);
}
  /* main hero box has been replaced with section grid */
  .main_hero_box{
    /* width:70%; */
    /* margin: 0 auto; */
    height:100%;
    padding-top:40px;
    padding-bottom:40px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 40px;
    /* display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
     
  }
  .main_hero_box div{
    /* height:33.33%; */
    /* border: 1px solid red; */
  }
  .main_hero_img_box{
    grid-column: 1 / span 2;
    grid-row: 2 / span 3;
    overflow:hidden;
    border-radius:10px;
    /* height:50%; */
    /* background-image: url('/public/img/main/tryke_yellow.jpeg'); */
    -webkit-box-shadow: 3px 4px 15px -7px rgba(0,0,0,1);
    -moz-box-shadow: 3px 4px 15px -7px rgba(0,0,0,1);
    box-shadow: -0px 10px 25px 0px rgba(0,0,0,0.5);
  }
  .main_hero_img{
    width:100%;
    height:100%;
    object-fit: cover;
    object-position: 30% 50%;
    /* filter: saturate(0); */
    /* mix-blend-mode: exclusion; */
  }
  .main_hero_txt_box{
    grid-column: 3 / span 4;
    grid-row: 2 / span 3;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    /* background:red; */
  }
  .main_hero_headline{
    font-size:50px;
    /* font-size: 2.6cqw; */
    line-height:60px;
    margin-top:-12px;
    text-align:left;
    /* margin:0 auto; */
  }
  
  .main_span_1{
    font-weight: 600;
    color:#F9DB00;
  }
  .main_span_2{
    font-weight: 300;
  }
  .main_hero_subheadline{
    font-size : 24px;
    line-height: 40px;
    font-weight: 200;
    text-align: justify;
    color:white;
  }
  .techno{
    background-image: url('/img/main/techno_1_b.jpg');
    background-size:cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position-y: 10vh;
    background-blend-mode: multiply;
  }  
  @media (max-width: 1490px) {
    .main_hero_headline{
      font-size:45px;
    }
    .main_hero_subheadline{
      font-size:22px;
      line-height: 36px;
    }
  }  
</style>