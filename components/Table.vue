<template>
    <div class="Table_">
        <div class="Table_0 ">

            <div class="">
            </div>
            <div v-for="row in rows[0]" class="Table_head_1">
                {{  row }}
            </div>

        </div>
        <div v-for="(col,i) in col1" class="Table_0 ">

            <div class="Table_1 Table_center">
                {{ col }}
            </div>

            <div v-for="(row,k) in rows[i+1]" class="Table_2 Table_center">
                <span></span>{{  row }}<span></span> <div class="line" v-if="k<3"></div>
            </div>

            <div class="connector" v-if="i<2">
                <span></span><div></div><span></span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            col1 : ['Services','Tools','Products'],
            rows : [
                ['Design & Engineering','Energy & Power Systems','Software & IoT','Manufacturing & Production'],
                ['Physical design','Power and energy design','Embedded Software and cloud integration','Small & large scale manufacturing'],
                ['3D scanning, modeling and printing','Pack assembly and BMS integration','Microcontrollers, web apps, local & remote computation','Advanced tooling, CNC machining, Plastic molding, laser cutting'],
                ['Multi disciplinary systems','Solar, batteries & off grid systems','Connected devices','Prototypes, small batches & fully commercial products']
            ]
         
        }
    }
}
</script>
<style>
    .Table_{
        /* background:red; */
        
        /* text-transform: uppercase; */
        grid-column: 1 / span 6;
        grid-row: 2 / span 5;
        display: grid;
        grid-template-rows: 20px repeat(3,1fr);
        row-gap: 40px;
        /* -webkit-box-shadow: -0px 10px 25px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: -0px 10px 25px 0px rgba(0,0,0,0.5);
        box-shadow: -0px 10px 25px 0px rgba(0,0,0,0.5); */
    }
    .Table_0{
        /* overflow: hidden; */
        
        display: grid;
        grid-template-columns: 80px repeat(4,1fr);
        column-gap: 40px;
        position:relative;
    }
    .Table_head_1{
        /* display: flex; */
        /* background:red; */
        /* justify-content: center; */
        color:#F9DB00;
        align-items: center; 
        font-weight: 700;
        font-size:14px;
        line-height:20px;
    }
    .Table_center{
        border-radius:5px;
        display: flex;
        align-items: center; 
    }
    .Table_1{
        /* padding:10px; */
        
        color:#f9db00;
        font-weight: 700;
        font-size:14px;
        line-height:20px;
        /* -webkit-box-shadow: inset -15px 0px 20px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: inset -15px 0px 20px 0px rgba(0,0,0,0.3);
        box-shadow: inset -15px 0px 20px -10px rgba(0,0,0,0.3); */
    }
    .Table_2{
        padding:20px;
        /* background:#4a3e3e; */
        border:2px solid #f9db00;
        border-radius:10px;
        position:relative;
        /* -webkit-box-shadow:  0px 0px 0px 5px rgba(0,0,0,0.1),inset 0px 0px 0px 8px rgba(0,0,0,0.1);
        -moz-box-shadow:  0px 0px 0px 5px rgba(0,0,0,0.1),inset 0px 0px 0px 8px rgba(0,0,0,0.1);
        box-shadow:  0px 0px 0px 8px #2d2626, 0px 0px 10px 5px rgba(249, 219, 0,0.1) , inset 0px 0px 0px 8px rgba(0,0,0,0.1); */
    }
   
    .Table_2 .line{
        content:'';
        display:block;
        height:50%;
        width:40px;
        border-bottom: 2px solid #f9db00;
        position:absolute;
        top:0;
        right:-40px;
        z-index:2;
    }
    

    .Table_2 span{
    position:absolute;
    z-index:3;
    top:calc(50%-6px);
    display: inline-block;
    height:12px;
    width:12px;
    border-radius:50%;
    border:2px solid #f9db00;
    background-color: #2d2626;
    }
    .Table_2:nth-child(2) span:nth-child(1){
        /* background:red; */
        left: calc(50% - 6px);
        top:-6px;
    }

    .Table_2 span:nth-child(1){
        left:-7px;  
        /* background:blue; */
    }

    .Table_2 span:nth-child(2){
        right:-7px;  
        
    }
    .Table_2:nth-child(5) span:nth-child(2){
        /* background:red; */
        left: calc(50% - 6px);
        bottom:-6px;
    }
    .connector{
        grid-column: 2 / span 4;
        width:100%;
        height:40px;
        top:100%;
        /* bottom:40px; */
        /* display:block; */
        /* left:80px; */
        position:absolute;
        display:grid;
        grid-template-columns: repeat(4,1fr);
        column-gap: 40px;
    }
    .connector span{
        display: inline-block;
        height:40px;
        width:40px;
        /* position:absolute; */
    }
    
    .connector span:nth-child(1){
        /* background:blue; */
        width:50%;
        height:50%;
        margin-left:50%;
        margin-top:18px;
        grid-row:1 / span 1;
        grid-column: 1 / span 1;
        border-left:2px solid #f9db00;
        border-top:2px solid #f9db00;
        border-radius: 5px 0 0 0 ;
    }
    .connector div{
        /* background: pink; */
        margin-left:-40px;
        margin-right:-40px;
        height:50%;
        grid-row:1 / span 1;
        grid-column: 2 / span 2;
        border-bottom:2px solid #f9db00;
    }
    .connector span:nth-child(3){
        width:50%;
        height:50%;
        grid-row:1 / span 1;
        grid-column: 4 / span 1;
        border-right:2px solid #f9db00;
        border-bottom:2px solid #f9db00;
        border-radius: 0 0 5px 0;
    }
</style>