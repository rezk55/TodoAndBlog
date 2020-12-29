<template>
  <div class="blog">
    <div class="container">
      <div class="row float-left">
        <div class="text-left">
          <div class="sidebar">
            <h3 class="text-center">Categories</h3>
            <div class="content">
              <blog-sidebar
                v-for="category in categories"
                :key="category.id"
                :category="category.name"
              />
            </div>
          </div>
        </div>
        <div class="text-left">
          <div class="posts-area">
            <h3 class="text-center">Posts</h3>
            <button class="write" @click="showModal = true"><font-awesome-icon icon="edit" class="icon-write" /> Write a post</button>
            <write-post v-if="showModal" @close="showModal = false"><h3 slot="header">custom header</h3></write-post>
            <blog-posts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
              :likes="post.likes"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import WritePost from "@/components/Blog/WritePost.vue";
import JsonPosts from "@/json/blog_posts.json";
import JsonCategory from "@/json/category.json";

export default {
  data: function() {
    return {
      pageName: "Blog",
      pageDesc: "This Page Blog",
      posts: JsonPosts,
      categories:JsonCategory,
      showModal: false
    };
  },
  name: "Blog",
  components: {
    BlogPosts,
    BlogSidebar,
    WritePost
  },
};
</script>
<style lang="scss" scoped>
.blog {
  margin: 50px 0 0 0;
  .row {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 0 30px;
    margin: 30px 0 0 0;
    .sidebar {
      display: grid;
      grid-template-rows: 100px auto;
      grid-gap: 10px 10px;
      padding: 0px 0px 20px 40px;
      font-weight: bold;
      letter-spacing: 1px;
      position: fixed;
      h3 {
        background-color: #fff;
        padding: 20px 0px 20px 0px;
        font-weight: bold;
      }
      .content {
        display: grid;
        grid-template-columns:120px 120px;
        grid-column-gap:20px;
        background-color: #fff;
        padding: 20px 0px 20px 40px;

      }
    }
    .posts-area{
      display: grid;
      grid-template-rows: 100px auto;
      grid-gap: 10px 10px;
      h3 {
        background-color: #fff;
        padding: 20px 0px 20px 0px;
        font-weight: bold;
      }
      .write {
        height: 50px;
        background-color:#41b883;
        color: #fff;
        border: none;
        outline:none;
        &:focus {
          border: 1px solid green;
        }
        &:hover {
          background-color: green;
        }
        .icon-write {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
