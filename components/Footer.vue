<template >
    <div :class="[{footer_main: isMain},'footer']">
        <div class="wrapper">
            
            <h6 class="footer_h6">
                <span>
                    © All Rights Reserved. 
                </span>
                Website Design & Build by Yoav Badt , Powered by Jamstack
            </h6>
            <img v-if="isMain" src="/public/img/halalit_logo_white.png"/>
            <img v-if="!isMain" src="/public/img/halalit_logo.png"/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isMain : true
        }
    },
    methods:{
      determine(path){
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
    .footer{
        height:25vh;
        padding-top:50px;
        font-size:18px;
        text-align:center;
        border-top:1px solid rgba(0,0,0,0.1); 
    }
    .footer_main{
        color:lightgrey;
        background-color: #4a3e3e;
    }
    .footer span{
        opacity:65%;
    }
    .footer img{
        width:80px;
        opacity:50%
    }
</style>