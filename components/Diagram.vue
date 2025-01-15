<template >
    <div class="diagram" :style="{
        gridTemplateColumns: `repeat(${col},1fr)`,
        gridTemplateRows: `repeat(${row},1fr)`,
        gap : gap + 'px'
        }"
        >
        <!-- <div 
        v-for="cell in col*row" 
        class="d_cell"
        :style="{
            gridColumn : `${cell % col == 0 ? col : cell % col} / span 1`,
            gridRow : `${cell % col == 0 ? Math.trunc(cell / col) : Math.trunc(cell / col)+1 } / span 1`
        }"
        >{{ cell }}</div> -->

        <div v-for="(cell,index) in getGrid" :style="{ gridColumn : cell.col, gridRow : cell.row, zIndex:'1'}"
        
        >

            <div 
            
            v-show="cell.row !== 6 && cell.row !== 12" :style="{
                opacity: `${cell.opacity}%`,
                borderRight: '1px dashed grey',
                borderBottom: '1px dashed grey',
                width : '100%',
                height:'100%',
                display: 'flex',
                flexWrap : 'wrap'
            }">
                <div v-for="n in 4" :style="{
                    width : '50%',
                    height:'50%',
                    opacity:'50%',
                    borderRight: '1px dashed grey',
                    borderBottom: '1px dashed grey',
                }">

                </div>
            </div>

        </div>


        <div 
        v-for="(field,name,index) in fields" 
        
        class="d_row" 
        :style="{
            
            gap : gap + 'px',
            gridTemplateColumns: `repeat(${col*2},1fr)`,
            gridTemplateRows: `repeat(${10},1fr)`,
            gridColumn: `1 / span ${col}` ,
            gridRow:  `${ index > 0 ? 1+(6*index) : 1 } / span ${5}`
            }"
        >

            <div class="d_head" >{{name}} </div>

            <div v-for="(str, i) in field" class="d_cat" :style="{ zIndex:'2',gridColumn : ` ${i*11+2} /span 9` }">
                <span>{{ str }}</span>
            </div>
        
            <div class="d_con" :style="{gridColumn : '11 / span 2',}"><span></span></div>
            <div class="d_con" :style="{gridColumn : '22 / span 2',}"><span></span></div>
            <div class="d_con" :style="{gridColumn : '33 / span 2',}"><span></span></div>

            <div class="d_con_4" v-show="index > 0"><span></span></div>
            <div class="d_con_3" v-show="index < 2"><span></span></div>

        </div>
        
        
        <div class="d_con_2" :style="{gridRow : '6 / span 1',}"><div></div><span></span><div></div></div>
        <div class="d_con_2" :style="{gridRow : '12 / span 1',}"><div></div><span></span><div></div></div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            col : 22,
            row : 17,
            gap : 0,
            fields : {
                design : [ 'Physical modeling and interface design','Electronics and power design','Embedded and cloud Software design','System design'],
                prototyping : [' 3D printing, laser cutting, CNC','Power circuits and Battery assembly','Micro controllers software development','Proof Of Concept until Final Prototype'],
                fabrication : ['Advanced tooling & machining','Energy system building','PCB and dedicated electronics fabrication','Small batches to fully commercial products']
            },
            
        }
    },
    computed: {
        getGrid(){
            let grid = []

            for(let row = 1; row < this.row+1; row++){
                
                for(let col = 1; col < this.col+1; col++){
                    grid.push({
                    col : col,
                    row : row,
                    opacity : 0
                })
                }
                
            }

            return grid
        }
    },
    methods:{
        cellHover(index){
            
        }
    }
}
</script>
<style >
    .diagram{
        grid-column: 1 / span all;
        grid-row: 2 / span 5;
        display: grid;
    }
    
    .d_row{
        border: 1px solid rgba(255,255,255,0.5);
        border-radius:5px 5px 5px 5px;
        display:grid;
        position:relative;
    }
    .d_head{
        position:absolute;
        z-index:0;
        text-align: left;
        padding-left:4px;
        text-transform: uppercase;
        line-height: 20px;
        font-size:12px;
        /* border-top: 1px solid rgba(255,255,255,0.5); */
        /* border-left: 1px solid rgba(255,255,255,0.5); */
        /* border-right: 1px solid rgba(255,255,255,0.5); */
        border-radius:3px 3px 0 0 ;
        top:-20px;
        left:calc(0% - 1px);
        height:20px;
        /* width:9%; */
        /* grid-column : 1 / span 10; */
        /* grid-row : 1 / span 1; */
    }
    .d_cat{
       grid-row: 2 / span 8;
       font-size:16px;
       line-height: 2vh;
       border:1px solid #F9DB00;
       color:#F9DB00;
       background:#2d2626;
       font-weight: 500;
       border-radius:5px;
       padding : 0 30px ;
       
       display: flex;
       align-items: center;
       text-align: left;
    }
    .d_cat:nth-child(5) span{
        font-weight: 700;
    }
    .d_cat:nth-child(5){
        background:#F9DB00;
        color:#2d2626;
        
    }
    .d_con{
        z-index: 2;
        grid-row: 5/ span 2;
        position:relative;
    }
    .d_con span{
        width:100%;
        height:50%;
        display:inline-block;
        border-bottom:1px solid #F9DB00;
    }
    .d_con::before{
        content:'';
        position:absolute;
        border-radius:50%;
        background:#2d2626;
        border:2px solid #F9DB00;
        top:calc(50% - 8px);
        left:-8px;
        width: 16px;
        height:16px;
    }
    .d_con::after{
        content:'';
        position:absolute;
        /* background:#2d2626; */
        border-right:2px solid #F9DB00;
        border-top:2px solid #F9DB00;
        width:16px;
        height:16px;
        transform: rotate(45deg);
        top:calc(50% - 8px);
        right:2px;
    }
    .d_con_2{
        grid-column: 1/ span all;
        display: grid;
        grid-template-columns: repeat(44,1fr);
        grid-template-rows: repeat(2,1fr);
        /* background:red; */
        
    }
    .d_con_2 span{
        /* height:50%; */
        /* width:50%; */
        grid-column: 7 / span 32;
        grid-row: 1 /span 1;
        display:block;
        border-bottom:1px solid #F9DB00;
    }
    .d_con_2 div:nth-child(1){
        /* left corner */
        width:52%;
        margin-left:50%;
        margin-top:-1px;
        border-radius:5px 0 0 0 ;
        border-top:1px solid #F9DB00;
        border-left:1px solid #F9DB00;
        grid-row: 2 /span 1;
        grid-column:6 / span 1;
    }
    .d_con_2 div:nth-child(3){
        /* right corner */
        width:50%;
        margin-right:50%;
        border-radius:0 0 5px   0 ;
        border-right:1px solid #F9DB00;
        border-bottom:1px solid #F9DB00;
        grid-row: 1 /span 1;
        grid-column:39 / span 1;
    }
    .d_con_3{
        grid-column: 39/ span 1;
        grid-row: 10 / span 1;
        position:relative;
        background:#2d2626;
        margin-bottom:-1px;
        margin-right:1px;
    }
    .d_con_3::before{
        z-index: 2;
        content:'';
        position:absolute;
        border-radius:50%;
        background:#2d2626;
        border:2px solid #F9DB00;
        top:-8px;
        left:calc(50% - 8px);
        width: 16px;
        height:16px;
    }
    .d_con_4{
        grid-column: 6/ span 1;
        grid-row: 1 / span 1;
        position:relative;
        background:#2d2626;
        margin-top:-1px;
        margin-right:1px;
    }
    .d_con_4::after{
        content:'';
        position:absolute;
        border-right:2px solid #F9DB00;
        border-bottom:2px solid #F9DB00;
        bottom:2px;
        left:calc(50% - 8px);
        width:16px;
        height:16px;
        transform: rotate(45deg);
    }
    .d_con_4 span, .d_con_3 span{
        width:calc(50% + 1px);
        height:100%;
        display:block;
        border-right:1px solid #F9DB00;
    }
</style>