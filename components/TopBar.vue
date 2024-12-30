<template >
    <header class="topbar">
        <div class="hamburger">
            <!-- <div class="ham_icon">X</div> -->
            <nav>
            <RouterLink to="/">Main</RouterLink>
            <RouterLink to="/projects" :class="{ a_active: isActive }">Projects</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            </nav>
        </div>
        <!-- <h2 class="page_title">{{title}}</h2> -->
        <h1 class="logo">Studio<br/>Halalit</h1>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    data(){
        return{
            title : '', 
            isActive : false   
        }
    },
    watch: {
    $route(to, from) {
      console.log()
      if(to.path.split('/')[1] === 'projects'){
        this.isActive = true
      }else{
        this.isActive = false
      }
    },
    created(){
        // this.title = ''
    }
}
}
</script>

<style >
.topbar {
  height:10vh;
  width:100%;
  position:sticky;
  top:0;
  background:#e7e7e7;
  z-index:10;
  border-bottom:1px solid rgba(0,0,0,0.25);  
  display:flex;
  flex-direction:row;
  align-items: center;  
  justify-content : space-between; 
  /* line-height: 1.5;
  max-height: 100vh; */
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
    color:rgba(0,0,0,0.6);
    letter-spacing: 1px;
    text-align:right;
    text-transform:uppercase;
}

nav {
  /* display:none;   */
  /* width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem; */
}
.a_active{
  color:violet
}
nav a.router-link-exact-active {
  /* color: var(--color-text); */
  /* color:hsla(160, 100%, 37%, 1) */
  color:violet
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /* display: inline-block; */
  /* padding: 0 1rem; */
  padding-right:10px;
  /* border-left: 1px solid var(--color-border); */
}



@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}   
</style>