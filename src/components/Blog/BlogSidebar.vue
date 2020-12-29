<template>
  <div class="sidebar-widgets">
    <a href="#" class="category">{{ category }}</a>
  </div>
</template>
<script>
export default {
  name: "BlogSidebar",
  data: function() {
    return {};
  },
  props: ["category"],
};
</script>
<style lang="scss" scoped>
.sidebar-widgets {
 
  .category {
     color: #35495e;
     text-decoration-color: #41b883;
     &:hover {
         color:#41b883;
     }
  }
}
</style>
