<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>
<script>

export default {
  data: function(){
     return {
      pageName: "About Us",
      pageDesc: "This Page About"
    };
  },
};
</script>
