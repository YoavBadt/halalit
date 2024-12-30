<template >
    <div>
        <RouterLink :to="link" class="main_button"><h6>{{ txt }}</h6><div>➔</div></RouterLink>
        
    </div>
</template>
<script>
export default {
    props : ['txt','link'],

}
</script>
<style >
     .main_button{
    height:50px;
    width: 300px;
    margin: 0 auto;
    padding:0 ;
    line-height: 50px;
    border-radius:5px;
    background:none;
    border:1px solid rgba(255,255,255,0.2);
    color: lightgrey;
    font-family: inherit;
    display:flex;
  }
  .main_button h6{
    font-size:14px;
    text-transform: uppercase;
    width:250px;
    text-align:center;
    
  }
  .main_button div{
    width:50px;
    text-align:center;
    border-left:1px solid rgba(255,255,255,0.2)
  }
</style>