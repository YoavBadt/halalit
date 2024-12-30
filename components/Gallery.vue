<template >
    <div class="project_gallery">
        <ContentList path="/projects" v-slot="{ list }">
            <template v-for="(project,index) in list" :key="project._path">
                <div v-if="index < 3" class="project_gallery_box">
                    <RouterLink :to="project._path">
                        <div class="project_gallery_img_box">
                            <img class="project_gallery_img" v-if="project.cover" :src="project.cover" alt="no image">
                        </div>
                        <h5 class="project_gallery_headline">{{ project.name }}</h5>
                        <p>{{ project.description }}</p>
                    </RouterLink>
                </div>
            </template>
            </ContentList>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .project_gallery{
        min-height:300px;
        margin-bottom:50px;
        margin-top:50px;
        display: flex;
        gap:5%;
    }
    .project_gallery_box{
        width:30%;
        /* border:1px solid red; */
    }
    .project_gallery_box p{
        color: lightgrey;
        font-size:14px;
        line-height:25px;
        text-transform: capitalize;
        /* border:1px solid red; */
    }
    .project_gallery_img_box{
        height:190px;
        overflow:hidden;
        border:1px solid rgba(255,255,255,0.2);
        border-radius:5px;
    }
    .project_gallery_img{
        width:100%;
        min-height:100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .project_gallery_headline{
        color:lightgrey;
        margin-bottom:10px;
        border-bottom:2px solid violet;
        display: inline-block;
        text-transform:uppercase;
        font-size:16px;
        line-height:50px;
        font-weight :500;
    }
</style>