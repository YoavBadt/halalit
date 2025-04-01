<template >
  
    <div :class="[{topbar_main: isMain},'topbar']">
      <div class="wrapper topbar_wrapper">
        
        <div class="hamburger">
            <!-- <div class="ham_icon">X</div> -->
            <nav >
              <RouterLink to="/"         :class="{nav_a_main_active: isMain}">Main</RouterLink>
              <RouterLink to="/projects" :class="{a_project : isProject, nav_a_main: isMain}">Projects</RouterLink>
              <RouterLink to="/about"    :class="{nav_a_main: isMain}" >About</RouterLink>
              <RouterLink to="/contact"  :class="{nav_a_main: isMain}" >Contact</RouterLink>
            </nav>
        </div>
        <!-- <h2 class="page_title">{{title}}</h2> -->
        <h1 :class="[{logo_main: isMain},'logo']">
          
            Studio<br/>Halalit
          
        </h1>

      </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  
    data(){
        return{
            title : '', 
            isProject : false,
            isMain : true   
        }
    },
    methods:{
      determine(path){
        if(path.split('/')[1] === 'projects'){
        this.isProject = true
      }else{
        this.isProject = false
      }
      if(path === '/'){
        this.isMain = true
      }else{
        this.isMain = false
      }
      }
    },
    watch: {
    $route(to, from) {
      this.determine(to.path)
    },
  },
  created(){
    // console.log(this.$route.path)
    this.determine(this.$route.path)
  }
}
</script>

<style >
.topbar {
  height:10vh;
  width:100%;
  position:sticky;
  top:0;
  
  background-color: var(--offwhite);
  z-index:10;
  border-bottom:1px solid lightgrey;
}
.topbar_main{
  background-color: #4a3e3e;
  border-bottom:1px solid #2d2626
}
.topbar_wrapper{
  height:100%;
  display:flex;
  flex-direction:row;
  align-items: center;  
  justify-content : space-between; 
}

.page_title{
    font-weight: 200;
    font-size:24px;
    text-transform: capitalize;
    letter-spacing:4px;
}
.logo {
    width:200px;
    font-family: "Homenaje";
    font-weight: 300;
    font-size:26px;
    letter-spacing: 1px;
    text-align:right;
    text-transform:uppercase;
}
.logo_main{
  color:lightgrey;
}
nav {
}


nav a.router-link-exact-active {
  font-weight: 700;
  margin-right:9px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  margin-right:10px;
}
.nav_a_main{
  color:lightgrey;
}
.nav_a_main_active{
  color:#F9DB00;
}

.a_project{
  font-weight: 700;
  margin-right:9px;
}

@media (max-width: 600px) {
  .topbar{
    padding: 10px;
  }
  .logo{
    position:absolute;
    right:0;
    /* width:20px; */
    font-size:6cqw;
  }
  nav{
    font-size:14px;
  }
}   
</style>