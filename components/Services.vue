<template >
    <div class="services" >
        
        <div v-for="(cell,i) in col*row" class="service_box"
        :style="{
            gridColumn : `${cell % col == 0 ? col : cell % col} / span 1`,
            gridRow : `${cell % col == 0 ? Math.trunc(cell / col) : Math.trunc(cell / col)+1 } / span 1`
        }"
        
        >
      
        </div>
        
        <div class="services_img_box" :style="{ gridColumn : '1 / span 10', gridRow : '7 / span 6'}">
            <img :src="`img/main/services/${1+'.jpg'}`" class="services_img" />
        </div>

        <div class="services_img_box" :style="{ gridColumn : '11 / span 5', gridRow : '1 / span 6'}">
            <img :src="`img/main/services/${7+'.jpg'}`" class="services_img" />
        </div>

        <div class="services_img_box" :style="{ gridColumn : '16 / span 9', gridRow : '1 / span 6'}">
            <img :src="`img/main/services/${3+'.jpg'}`" class="services_img" />
        </div>

        

        <div class="services_img_box" :style="{ gridColumn : '11 / span 9', gridRow : '7 / span 6'}">
            <img :src="`img/main/services/${5+'.jpg'}`" class="services_img" />
        </div>

        <div class="services_img_box" :style="{ gridColumn : '1 / span 10', gridRow : '1 / span 6'}">
            <img :src="`img/main/services/${6+'.jpg'}`" class="services_img" />
        </div>

        <div class="services_img_box" :style="{ gridColumn : '20 / span 5', gridRow : '7 / span 6'}">
            <img :src="`img/main/services/${9+'.jpg'}`" class="services_img" />
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            col : 24,
            row:12,

        }
    }
}
</script>
<style >
    .services{
        grid-column: 1 / span 6;
        grid-row: 2 / span 5;
        display: grid;
        grid-template-columns: repeat(24,1fr);
        grid-template-rows: repeat(12,1fr);
        gap:10px;
    }
    .service_box{
        /* width:48%; */
        /* height:48%; */
        /* flex-basis: 48%; */
        /* flex-grow: 0; */
        border:1px solid rgba(255,255,255,0.5);
        border-radius:5px;
        z-index:0;
        /* display:grid; */
        /* grid-template-columns: repeat(2,1fr); */
        position:relative;
        /* overflow:hidden; */
    }
    .services_img{
        
        width:100%;
        height:100%;
        /* max-height:100%; */
        border-radius: 5px;
        /* overflow:hidden; */
        object-fit:cover;
    }
    .services_img_box{
        z-index:1;
        /* width:100%; */
        /* height:100%; */
        overflow: hidden;
        /* background:white; */
        text-align:center;
        /* grid-column: 1 / span 2 ; */
}
@media (max-width:600px){
    
}
</style>