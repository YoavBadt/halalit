<template>
        <Header title1="Our" title2="Projects"/>
        <div class="wrapper">
        <main>

       
            <div class="projects_gallery">
                <ContentList path="/projects" v-slot="{ list }">
                    <div v-for="project in list" :key="project._path" class="project_box">
                        <RouterLink :to="project._path">
                            <div class="projects_img_box">
                                <img class="projects_img" :src="project.cover">
                            </div>
                            <div class="projects_txt">
                                <h2 class="projects_headline">{{ project.name }}</h2>
                                <h3 class="projects_description">{{ project.description }}</h3>
                            </div>
                            <div class="projects_button">
                                <div class="projects_button_1">OPEN PROJECT</div>
                                <div class="projects_button_2">➔</div>
                            </div> 
                        </RouterLink>
                    </div>
                </ContentList>
            </div>
        </main>
        </div>
</template>

<script>
import Header from './components/Header.vue'
import Mbutton from './components/Mbutton.vue'
export default {

}
</script>
<style >
    .projects_gallery{
        /* margin-top: 50px; */
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        /* grid-auto-flow: column; */
        
        column-gap: 20px;
        row-gap: 20px;
    }
    .project_box{
        height: 400px;
        /* padding:10px; */
        /* background-color: #ebebeb; */
        /* background-color: #f6f5f5; */
        
        border:1px solid rgba(0,0,0,0.1);
        border-radius:5px;
        overflow:hidden;
        
    }
    .project_box:hover{
        -webkit-box-shadow: 3px 4px 15px -7px rgba(0,0,0,0.2);
        -moz-box-shadow: 3px 4px 15px -7px rgba(0,0,0,0.2);
        box-shadow: 3px 4px 15px -7px rgba(0,0,0,0.2);
    }
    
    .projects_img_box{
        width:100%;
        height:250px;
        padding:10px;
        border-bottom:1px solid lightgrey;
        /* border-radius:3px; */
        overflow:hidden;
    }
    .projects_img{
        width:100%;
        height:100%;
        
        object-fit: cover;
        object-position: 50% 50%;
    }
    .projects_txt{
        height:110px;
        padding-left:10px;
        padding-right:10px;
    }
    .projects_headline{
        /* font-size: 24px;
        line-height:50px;
        margin-bottom:10px;
        font-weight: 500;
        text-transform: capitalize;
        border-bottom:4px solid violet;
        display:inline-block; */
    }
    .projects_headline{
        margin-bottom:10px;
        border-bottom:2px solid violet;
        display: inline-block;
        text-transform:uppercase;
        font-size:16px;
        line-height:40px;
        font-weight :500;
    }
    .projects_description{
        font-size:14px;
        line-height:20px;
        height:40px;
        overflow:hidden;
        text-overflow: ellipsis;
        
    }
    .projects_button{
        width:100%;
        height:40px;
        font-size:14px;
        line-height:40px;
        color:grey;
        text-transform: uppercase;
        display:flex;
        align-items:center;
        border-top:1px solid lightgrey;
        /* width:250px; */
        /* text-align:center; */
    }
    .projects_button_1{
        width:500px;
        border-right:1px solid lightgrey;
        padding-left:10px;
    }
    .projects_button_2{
        width:50px;
        text-align:center;
    }
</style>