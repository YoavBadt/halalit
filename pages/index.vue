<template>
    <div class="wrapper">
      <div style="height:90vh;" class="main_hero">
        <h1 style="height:40vh" class="main_hero_headline"><span>We're Studio Halalit,</span> we are an <br/>Engineering & Industrial design hub.<br/>We like to build things.</h1>
        <h2 class="main_hero_h2">From single Proof Of Concept, to Small scale manufacturing to fully industrial products. We specialize in robust and rapid prototyping, with local small scale manufacturing capabilities and experience in escorting fully industrial product manufacturing.</h2>
      </div>

      <section class="main_section">
        
      </section>

      <section class="main_section">
        <div class="main_section_1">
          <div>
            <h4 class="main_section_headline">Our Services</h4>
            <p class="main_section_txt" v-for="item in bullets"><span></span>{{item}}</p>
          </div>
        </div>
        <div class="main_section_2">
          something
        </div>
      </section>
    </div>
      <!-- <TheWelcome /> -->
  </template>
  
  <script >
  export default {
      data(){
          return{
              bullets : ['Product Design','Product Management','3D Modeling','Custom Mechanisms','Packaging','Thermal Management','Electrical, Energy & Battery Design','Physical Interfaces UX/UI']    
          }
      }
  }
  
  </script>
  
  <style>
  
  .main_hero{
    width:100%;
    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid rgba(0,0,0,0.25); 
  }
  .main_hero_headline{
    font-size:52px;
    line-height:1.2;
    font-weight: 200;
    text-align:center;
    width:75%;
    margin:0 auto;
  }
  .main_hero_headline span{
    font-weight: 600;
    color:violet;
  }
  .main_hero_h2{
    width:70%;
    margin:0 auto;
    font-size : 24px;
    line-height: 32px;
    font-weight: 300;
    text-transform: ;
    text-align: justify;
    text-align-last: center;
    
  }
  .main_section{
    width:85%;
    /* height:50vh; */
    margin:0 auto 100px auto;
    
    display: flex;
    /* outline:1px solid rgba(0,0,0,0.1); */
    border-radius:5px;
  }
  .main_section_1{
    width:50%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    /* padding:52px; */
    background:rgba(0,0,0,0.01);
    border-right:1px solid rgba(0,0,0,0.1)
  }
  .main_section_2{
    width:50%;
  }
  .main_section_headline{
    font-size:24px;
    font-weight: 600;
    color:violet;
    margin-bottom:10px;
  }
  .main_section_txt{
    font-size:20px;
    line-height:32px;
    font-weight: 400;
    /* letter-spacing:1px; */
  }
  .main_section_txt span{
    display: inline-block;
    margin-right:10px;
    margin-bottom:2px;
    height:10px;
    width:10px;
    border-radius:50%;
    background:lightgrey;
  }
  </style>
  