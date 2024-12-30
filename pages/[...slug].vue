<template>
    <div class="wrapper">
        <ContentDoc v-slot="{ doc }">
        <div class="cover_img_box">
            <img class="cover_img" :src="doc.cover">
        </div>
            <article>
            <div class="project_tagline"><RouterLink to="/projects" ><span >↩ Back to Projects</span></RouterLink> / {{ doc.name }}</div>
            <h2 class="project_headline">{{ doc.name }}</h2>
            <h3 class="project_subheadline">{{ doc.description }}</h3>
            <ContentRendererMarkdown :value="doc" />
        </article>
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
    height:50vh;
    border:1px solid rgba(0,0,0,0.1);
    border-radius:3px;
    overflow:hidden;
    margin-bottom: 40px;
}
.cover_img{
    width:100%;
    min-height:100%;
    object-fit: cover;
    object-position: 50% 50%;
}
article{
    width:50%;
    margin: 0 auto;
}
.project_tagline{
    margin-bottom:20px;
}
.project_tagline span{
    font-weight: 600;
    color: violet;
}
.project_headline{
        font-size: 24px;
        line-height:50px;
        font-weight: 500;
        text-transform: uppercase;
    }
.project_subheadline{
    font-size:20px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom:20px;
    margin-top:20px;
}
article p{
    /* font-size:16px;
    line-height: 32px; */
    margin-bottom:32px;
}
</style>