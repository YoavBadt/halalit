<template >
    <div class="project_gallery">
        <ContentList  v-slot="{ list }" :query="query">
            <template v-for="(project,index) in list" :key="project._path" >
                
                    <RouterLink :to="project._path" class="project_gallery_box" >
                            <!-- <div class="project_gallery_box"> -->

                                <div class="project_gallery_img_box">
                                    <img class="project_gallery_img"  :src="project.cover" alt="no image">
                                </div>
                                <div class="project_gallery_txt_box">
                                    <h5 class="project_gallery_headline">{{ project.name }}</h5>
                                    <p>{{ project.description }}</p>
                                </div>
                                
                            <!-- </div> -->
                        

                    </RouterLink>
                    
            </template>
            </ContentList>
    </div>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/projects', limit: 3 }
</script>
<style >
    .project_gallery{
        grid-column: 1 / span 6;
        grid-row: 2 / span 4;
        /* border:1px solid red; */
        display:grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        /* display: flex; */
        gap:40px;
    }
    .project_gallery_box{
        grid-row: 1 / span 1;
        display:grid;
        grid-template-rows: 1fr 100px;

        gap:10px;
        /* width:33.33%; */
        
    }
    
    .project_gallery_img_box{
        grid-row: 1 / span 1;
        overflow:hidden;
        border:1px solid rgba(255,255,255,0.2);
        border-radius:5px;
    }
    .project_gallery_txt_box{
        /* border:1px solid red; */
        grid-row: 2 / span 1;
        /* align-self: end; */
    }
    .project_gallery_txt_box p{
        color: lightgrey;
        font-size:14px;
        line-height:25px;
        text-transform: capitalize;
        /* border:1px solid red; */
    }
    .project_gallery_img{
        width:100%;
        height:100%;
        overflow:hidden;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .project_gallery_headline{
        color:white;
        /* margin-bottom:10px; */
        /* border-bottom:2px solid #F9DB00; */
        display: inline-block;
        text-transform:uppercase;
        font-size:16px;
        line-height:30px;
        font-weight :700;
    }
</style>