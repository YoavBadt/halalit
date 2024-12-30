<template >
    <div class="main_hero">
        <div class="wrapper ">
            <div class="main_hero_box">
               
                <div>
                    <h2 class="main_hero_headline"><span>We're Studio Halalit,</span> we are an <br/>Engineering & Industrial design hub.<br/>We like to build things.</h2>
                </div>
                <div>
                    <h3 class="main_hero_h2">From single Proof Of Concept, to Small scale manufacturing to fully industrial products. We specialize in robust and rapid prototyping, with local small scale manufacturing capabilities and experience in escorting fully industrial product manufacturing.</h3>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .main_hero{
    width:100%;
    height:90vh;
    color: lightgrey;
    background-color: #2d2626;
    border-bottom:1px solid rgba(211, 211, 211,0.1);
}

  .main_hero_box{
    width:70%;
    height:100%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     
  }
  .main_hero_box div{
    height:33.33%;
    /* border: 1px solid red; */
  }
  .main_hero_headline{
    
    font-size:52px;
    line-height:1.2;
    font-weight: 200;
    text-align:center;
    margin:0 auto;
  }
  .main_hero_headline span{
    font-weight: 600;
    color:violet;
  }
  .main_hero_h2{
    
    margin:0 auto;
    font-size : 24px;
    line-height: 32px;
    font-weight: 300;
    text-align: justify;
    text-align-last: center;
    
  }    
</style>