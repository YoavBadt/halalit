<template >
    <div>
       <TopBar/>
       
        <slot/>
       

       <Footer/>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import TopBar from './components/TopBar.vue'
export default {
    
}
</script>
<style >
    
</style>