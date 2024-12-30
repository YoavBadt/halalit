<template>
    <div class="wrapper">
        <div class="projects_gallery">
            <ContentList path="/projects" v-slot="{ list }">
                <div v-for="project in list" :key="project._path" class="project_box">
                    <RouterLink :to="project._path">
                        <div class="project_img_box">
                            <img class="project_img" :src="project.cover">
                            <!-- <img class="project_img" src="https://tikz.net/efra/dodecahedron.png"> -->
                        </div>
                        <h2 class="project_headline">{{ project.name }}</h2>
                        <!-- <p>{{ project.description }}</p> -->
                    </RouterLink>
                </div>
            </ContentList>

            
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style >
    .projects_gallery{
        margin-top: 50px;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        /* grid-auto-flow: column; */
        
        column-gap: 50px;
        row-gap: 50px;
    }
    .project_box{
        /* width:30%; */
        /* height: 400px; */
        /* border:1px solid rgba(0,0,0,0.1); */
        /* border-radius:3px; */
        /* overflow:hidden; */
    }
    .project_img_box{
        width:100%;
        height:300px;
        border:1px solid rgba(0,0,0,0.1);
        border-radius:3px;
        overflow:hidden;
    }
    .project_img{
        width:100%;
        min-height:100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .project_headline{
        font-size: 24px;
        line-height:50px;
        font-weight: 500;
        text-transform: capitalize;
    }
</style>