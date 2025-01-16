<template>
    
      <Mheader />
      
      <section class="main_section">
        <div class="wrapper">
          <div class="section_grid">
            <div class="main_section_txt_box">
              <h4 class="main_section_headline">Projects & Products</h4>
              <p class="main_section_txt" >Here is a sample of our projects and products that we have developed</p>
            </div>
            <Gallery/>
            <Mbutton class="Mbutton_main" txt="see more of our projects" link="/projects"/>

          </div>
        </div>
      </section>

      <section class="main_section">
        <div class="wrapper">
          <div class="section_grid">
            <div class="main_section_txt_box">
              <h4 class="main_section_headline">Our Work Process</h4>
              <!-- <p class="main_section_txt" >We offer a variety of technological solutions and services in the following fields</p> -->
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
                <!-- <div>{{ client.name }}</div> -->
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
  
  .main_section{
    height:90vh;
    color: lightgrey;
    background-color: #2d2626;
  }
  .main_section:nth-child(odd){
    background-color: #4a3e3e
  }

  .main_section_txt_box{
    grid-column: 1 / span 6;
    grid-row: 1 / span 1;
    align-self: end;

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
</style>
  