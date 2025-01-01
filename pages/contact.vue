<template >
    <div>
        <Header title1="Contact" title2="Us"/>
        <div class="wrapper">
            <main class="content_contact">
                
                    <p>We believe in Rapid prototyping and Rapid communication</p>
                    <p>Visit Studio Halalit : Haharuv 12 Rishpon</p>
                
                <div class="whatsapp">
                    <a href="https://wa.me/972548300624"  target="_blank">
                        <img src="/public/WhatsApp.png" />
                        <div>Click to start a Whatsapp conversation with Us</div>
                    </a>
                </div>
                
                
            </main>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .content_contact{
        /* width : 75%; */
        /* margin: 10vh auto; */
        /* text-align:center; */
    }
    .content_contact p{
        margin: 0 0 5vh 0 ;
    }
    .whatsapp{
        /* margin:0 auto; */
        width:600px;
        background-color: #f6f5f5;
        border:1px solid lightgrey;
        border-radius: 5px;
        overflow:hidden;
        -webkit-box-shadow: 3px 4px 15px -7px rgba(0,0,0,0.2);
        -moz-box-shadow: 3px 4px 15px -7px rgba(0,0,0,0.2);
        box-shadow: 3px 4px 15px -7px rgba(0,0,0,0.2);
    }
    .whatsapp a{
        /* height: 100px; */
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:left;
        
    }
    .whatsapp img{
        width:80px;
        padding:10px;
        /* background: rgb(104, 210, 104); */
        /* background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.241) 0%, rgba(0, 0, 0, 0.1) 100%); */
        border-right:1px solid lightgrey;
    }
    .whatsapp div{
        font-weight: 700;
        width:100%;
        text-align:center;
    }
</style>