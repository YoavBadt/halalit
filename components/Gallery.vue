<template >
    <div class="project_gallery">
        <ContentList  v-slot="{ list }" :query="query">
            <template v-for="(project,index) in list" :key="project._path" >
                
                    <RouterLink :to="project._path" class="project_gallery_box" >
                            <!-- <div class="project_gallery_box"> -->
                              
                                <div class="project_gallery_img_box" >
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
import { ref } from 'vue'
const count = ref(0)
let mobile = window.innerWidth <= 600 ? true : false
let limit = window.innerWidth <= 600 ? 1 : 3
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/projects', limit: 3 }




</script>
<style >
    .project_gallery{
        
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
        /* display:grid;
        grid-template-rows: 1fr 200px;

        gap:10px; */
        /* width:33.33%; */
        
    }
    
    .project_gallery_img_box{
        height:400px;
        margin-bottom:20px;
        overflow:hidden;
        border:1px solid rgba(255,255,255,0.2);
        border-radius:5px;
    }
    .project_gallery_txt_box{
        
    }
    .project_gallery_txt_box p{
        color: lightgrey;
        font-size:14px;
        line-height:25px;
        height:50px;
        text-transform: capitalize;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
        display: inline-block;
        text-transform:uppercase;
        font-size:16px;
        line-height:30px;
        font-weight :700;
    }
    @media (max-width: 600px) {
        .project_gallery{
            display:initial;
        }
        .project_gallery_box{
            grid-row:none;
            display:inline-block;
            border-bottom:1px solid rgba(255,255,255,0.1);
            margin-bottom:40px;
            /* background:red; */
        }
        
        .project_gallery_img_box{
            height:200px;
        }
        .project_gallery_txt_box{
            margin-bottom:20px;
        }
        .project_gallery_txt_box p{
            font-size:18px;
            font-weight: 300;
        }
        
        .project_gallery_headline{
        }
    }
</style>