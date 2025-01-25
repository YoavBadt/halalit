<template>
    
      <Mheader />
      
       
      <section class="main_section">
        <div class="wrapper">
          <div class="section_grid">
            <div class="main_section_txt_box">
              <h4 class="main_section_headline">Projects & Products</h4>
              <p class="main_section_txt" >Here is a sample of our projects and products that we have developed</p>
            </div>
            <Gallery class="main_section_second"/>
            <Mbutton class="Mbutton_main" txt="see more of our projects" link="/projects"/>

          </div>
        </div>
      </section>
       
      <section class="main_section">
        <div class="wrapper">
          <div class="section_grid">
            <div class="main_section_txt_box">
              <h4 class="main_section_headline">Our Work Process</h4>
              
            </div>
          <Diagram />
          </div>
        </div>
      </section>
      
      <section class="main_section" >
        <div class="wrapper">
          <div class="section_grid">
            <div class="main_section_txt_box">
              <h4 class="main_section_headline">We provide Multi-disciplinary R&D services:</h4>
              <p class="main_section_txt" >
                <span v-for="service in services">{{ service }}</span>
              </p>
            </div>
            <Services />    
          </div>
        </div>
      </section>

      <section class="main_section" >
        <div class="wrapper">
          <div class="section_grid">
            <div class="main_section_txt_box">
              <h4 class="main_section_headline">Our Clients </h4>
              <p class="main_section_txt" >
                
              </p>
            </div>

            <div class="clients">
              <div v-for="client in clients" class="client_box">
                <div class="client_img_box" :style="{backgroundImage : `url('/img/clients/${client.img}.png')`}">
                </div>
                
              </div>
            </div>    

          </div>
        </div>
      </section>
       
  </template>
  
<script >
  import Mheader from './components/Mheader.vue'
  import Gallery from './components/Gallery.vue'
  import Mbutton from './components/Mbutton.vue'
  import Services from './components/Services.vue'
  import Diagram from './components/Diagram.vue'
  export default {
      data(){
          return{
              clients : [
                {name : 'Enercon',img : 'enercon'},
                {name : 'General Motors',img : 'general'},
                {name : 'Israel Aerospace Industries', img : 'israel'},
                {name : 'Meteo Logic', img : 'meteo'},
                {name : 'Shufersal Online', img : 'shufersal'},
                {name : 'Strauss Stragety', img : 'strauss'},
                {name : 'Tigi Solar', img : 'tigi'},
                
              ],
              services : ['3D Modeling','Energy Storage & Power Circuits','Iot & Electronics','Fabrication & manufacturing'],
                  
          }
      }
  }
  
</script>
  
<style>
  .main_section:nth-child(odd){
    background-color: #4a3e3e
  }
  .main_section_txt_box{
    grid-column-start: 1;
    grid-column-end:end;
    grid-row: 1 / span 1;
    align-self: end;
  }
  .main_section_second{
    grid-column: 1 / span 6;
    grid-row: 2 / span 4;
  }
  .Mbutton_main{
    grid-column: 3 / span 2;
    grid-row: 6 / span 1;
  }
  .main_section_headline{
    font-size:24px;
    line-height:30px;
    font-weight: 600;
    color:#F9DB00;
    margin-bottom:10px;
  }
  .main_section_txt{
    font-size:20px;
    line-height:30px;
    font-weight: 400;
    /* letter-spacing:1px; */
  }
  .main_section_txt span{
    display:inline-block;
    margin-right:10px;
    padding: 0 20px;
    background: lightgrey;
    color: #2d2626;
    border-radius:2px;
    font-size:14px;
    line-height:30px;
    font-weight: 700;
  }
  .clients{
    grid-column: 1 / span all;
    grid-row: 2 / span all;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(3,1fr);
    gap:40px;
  }
  .client_box{
    text-align:center;

  }
  .client_img_box{
    width:100%;
    height:100%;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% ;
    border-radius:5px;
    
  }
  .client_img{
    
  }
  @media (max-width: 600px) {
  
      .main_section_txt_box{
      }
      .main_section_second{
        /* height:calc(100vw - 20px); */
        
      }
      .Mbutton_main{
        
      }
      .main_section_headline{
        font-size:9cqw;
        line-height:1.1;
        margin-bottom:5vw;
      }
      .main_section_txt{
        font-size:22px;
        line-height:24px;
        margin-bottom:5vw;
      }
      .main_section_txt span{
        margin-bottom:10px;
      }
      .clients{
        
        display:grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        gap:20px;
      }
      .client_box{
        height:calc(33vw - 20px);
      }
      
  }
</style>
  