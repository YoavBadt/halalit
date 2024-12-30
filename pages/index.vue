<template>
    
      <Mheader />
      
      <section class="main_section">
        <div class="wrapper">
          <h4 class="main_section_headline">Projects & Products</h4>
          <p class="main_section_txt" >Here is a sample of our projects and products that we have developed</p>
          <Gallery/>
          <Mbutton txt="see more of our projects" link="/projects"/>
        </div>
      </section>

      <section class="main_section" style="background-color: #2d2626">
        <div class="wrapper">
          <h4 class="main_section_headline">Technological Services</h4>
          <p class="main_section_txt" >We offer a variety of technological solutions and services in the following fields</p>
          <div class="services">
            <div class="services_box" v-for="item in bullets"><span></span>{{ item }}</div>
          </div>
          <Mbutton txt="contact us for more details" link="/contact"/>
        </div>
      </section>

      <section class="main_section" >

        <div class="wrapper">
          <h4 class="main_section_headline">Tools, Systems & Capabilities</h4>
          <p class="main_section_txt" >We work with...</p>
          <div class="systems">
            <div class="systems_box" v-for="item in systems">{{ item.name }}</div>
          </div>
        </div>

      </section>

    
  </template>
  
<script >
  import Mheader from './components/Mheader.vue'
  import Gallery from './components/Gallery.vue'
  import Mbutton from './components/Mbutton.vue'
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
              ]    
          }
      }
  }
  
</script>
  
<style>
  
  .main_section{
    min-height:60vh;
    display:flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    padding-top:50px;
    padding-bottom:50px;
    color: lightgrey;
    
    background-color: #4a3e3e;
    border-bottom:1px solid rgba(211, 211, 211,0.1);
    /* outline:1px solid rgba(0,0,0,0.1); */
  }
  .services{
    width:100%;
    margin-top:50px;
    margin-bottom:30px;
    display:flex;
    flex-wrap:wrap;
    gap:4%;
  }
  .services_box{
    width:22%;
    height:80px;
    margin-bottom:20px;
    padding:20px;
    font-size:14px;
    line-height:20px;
    text-align:left;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    display:flex;
    /* align-items:center; */
    /* justify-content:center; */
    /* background:violet; */
    border:1px solid rgba(211, 211, 211,0.5);
    border-radius:10px;
    position:relative;
  }
  .services_box span{
    position:absolute;
    left:-5px;
    top:-5px;
    display: inline-block;
    margin-right:10px;
    margin-bottom:2px;
    height:10px;
    width:10px;
    border-radius:50%;
    background:lightgrey;
  }
  .systems{
    width:100%;
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
 
 
</style>
  