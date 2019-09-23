<template>
    
        <section class="post-list">   
            <PostPreview id="1"
                        title="the first story"
                        previewText="lorem ipsum sit amet dolor"
            />
            <PostPreview id="2"
                        title="the second story"
                        previewText="lorem ipsum sit amet dolor"
            />
            <PostPreview id="3"
                        title="the third story"
                        previewText="lorem ipsum sit amet dolor"
            />

        </section> 
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
    components:{
        PostPreview
    }
}
</script>

<style scoped>

      .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>