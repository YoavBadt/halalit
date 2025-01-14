<template>
    <div class="wrapper">
        <ContentDoc v-slot="{ doc }">
            <div class="cover_img_box">
                <img class="cover_img" :src="doc.cover">
            </div>
            <main class="section_grid">
            <article>
                <div class="project_tagline"><RouterLink to="/projects" ><span >↩ Back to Projects</span></RouterLink> / {{ doc.name }}</div>
                <h2 class="project_headline">{{ doc.name }}</h2>
                <h3 class="project_subheadline">{{ doc.description }}</h3>
                <ContentRendererMarkdown :value="doc" class="myArticle"/>
            </article>
            </main>
        </ContentDoc>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .cover_img_box{
    width:100%;
    height:80vh;
    padding-top:40px;
    padding-bottom: 40px;
    /* border:1px solid rgba(0,0,0,0.1); */
    /* border-radius:3px; */
    /* overflow:hidden; */

    }
    .cover_img{
        width:100%;
        height:100%;
        overflow:hidden;
        border-radius: 10px;
        object-fit: cover;
        object-position: 50% 100%;
    }
    article{
        grid-column: 2 / span 4;
        grid-row: 1 / span 6;
        margin-top:-40px;

        

        /* margin-top:-200px;
        margin-left:-40px;
        margin-right:-40px;
        padding:40px;
        background-color: #ece8e8;
        border-radius:10px; */
    
    }
    .project_tagline{
        margin-bottom:20px;
    }
    .project_tagline span{
        font-weight: 600;
        color: orange;
    }
    .project_headline{
        font-size: 32px;
        line-height:50px;
        margin-bottom:14px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .project_subheadline{
        font-size:24px;
        line-height: 36px;
        font-weight: 300;
        margin-bottom:20px;
        /* margin-top:20px; */
    }
    article p{
        /* font-size:16px;
        line-height: 32px; */
        margin-bottom:32px;
    }
    article img{
        width:100%;
    }
    article strong{
        font-weight: 700;
    }
    .myArticle ul{
        /* list-style-type: none; */
        width:75%;
        margin: 0 auto 32px auto;
        padding:0px;
    }
    .myArticle ul li{
        background-color: #ece8e8;
        list-style-position: inside;
        border-radius:5px;
        font-size:18px;
        line-height: 32px;
        font-weight: 500;
        padding:32px 64px 32px 64px ;
        margin-bottom:2px;
        /* border-bottom: 1px solid #e1dddd; */
    }
</style>