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
              <p class="main_section_txt" >We offer a variety of technological solutions and services in the following fields</p>
            </div>
          <Diagram />
          </div>
        </div>
      </section>

      <section class="main_section" >

        <div class="wrapper">
          <div class="section_grid">

            <div class="main_section_txt_box">
              <h4 class="main_section_headline">Services</h4>
              <p class="main_section_txt" > We provide Multi-disciplinary R&D services:</p>
            </div>

          <Services />    
          <!-- <div class="systems">
            <div class="systems_box" v-for="item in clients">{{ item.name }}</div>
          </div>  -->


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
              bullets : ['Product Design','Product Management','3D Modeling','Custom Mechanisms','Packaging','Thermal Management','Electrical, Energy & Battery Design','Physical Interfaces UX/UI'],
              clients : [
                {name:'enercon',img : ''}
              ],
              systems : [
                {
                  name : 'Control systems'
                },
                {
                  name : 'Robotics and actuated devices'
                },
                {
                  name : 'Solar, batteries & off grid systems'
                },
                {
                  name : 'Defence'
                },
                {
                  name: ' 3d scanning & printing'
                },
                {
                  name : 'Laser cutting & CNC'
                },
                {
                  name : 'Micro processors, IOT and software development'
                },
                {
                  name : 'Welding & Plasma cutting'
                }
              ],
              clients : [
                {
                  name : 'Iai'
                },
                {
                  name : 'Shufersal'
                },
                {
                  name : 'enercon'
                },
                {
                  name : 'tigi'
                },
                {
                  name : 'straus'
                }
              ]    
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
    font-weight: 600;
    color:#F9DB00;
    margin-bottom:10px;
  }
  .main_section_txt{
    font-size:20px;
    line-height:32px;
    font-weight: 400;
    /* letter-spacing:1px; */
  }
 
  
</style>
  