<template >
    <div class="services" >
        <div v-for="(n,i) in texts" class="service_box">
            <div class="d_head">{{ n }}</div>
            <div>
                <img :src="`img/main/${imgs[i]}`" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            texts : ['3D Modeling','Energy Storage & Power Circuits','Iot & Electronics','Fabrication & manufacturing'],
            imgs : ['3dmodeling.png','energy.png','system.jpeg','manufacturing.jpeg']
        }
    }
}
</script>
<style >
    .services{
        grid-column: 1 / span 6;
        grid-row: 2 / span 5;
        /* display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr); */
        display: flex;
        flex-wrap: wrap;
        gap:40px;
    }
    .service_box{
        width:48%;
        height:48%;
        /* flex-basis: 48%; */
        /* flex-grow: 0; */
        border:1px solid rgba(255,255,255,0.5);
        border-radius:5px;
        
        /* display:grid; */
        /* grid-template-columns: repeat(2,1fr); */
        position:relative;
        /* overflow:hidden; */
    }
    .service_box img{
        /* width:100%; */
        margin: 0 auto;
        height:100%;
        object-fit:cover;
        object-position: 50% 50%;
    }
    .service_box div:nth-child(2){
        width:100%;
        height:100%;
        overflow: hidden;
        background:white;
        text-align:center;
        /* grid-column: 1 / span 2 ; */
}
</style>