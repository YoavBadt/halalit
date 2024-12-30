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
    height:25vh;
    
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
    font-size:52px;
    line-height:1.2;
    font-weight: 200;
    text-align:center;
    width:75%;
    margin:0 auto;
  }
.header_comp_headline span{
    font-weight: 600;
    color:violet;
  }
</style>