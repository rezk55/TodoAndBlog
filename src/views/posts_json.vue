<template>
  <div class="">
    {{ posts }}
  </div>
</template>
<script>
import BlogPosts from "../json/blog_posts.json";
export default {
    name: 'PostsJSon',
  data: function() {
    return {
      posts: BlogPosts,
    };
  },
};
</script>
>
