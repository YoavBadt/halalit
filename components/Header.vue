<template>
    <section class="header_comp">
        <div class="wrapper">
            <div class="header_comp_box">

                <h1 class="header_comp_headline">{{title1}} <span>{{title2}}</span></h1>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['title1','title2']
}
</script>
<style>

.header_comp{
    width:100%;
    height:20vh;
    /* background-color: #f6f5f5; */
    /* border-bottom:1px solid lightgrey; */
}
.header_comp_box{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header_comp_headline{
    font-size:24px;
    line-height:1.2;
    font-weight: 600;
    text-align:left;
    width:100%;
    margin:0 auto;
    
  }
  @media (max-width:600px){
    .header_comp_headline{
        text-align: center;
        font-size:32px;
    }
    }
.header_comp_headline span{
    font-weight: 600;
    /* color:violet */
  }
</style>