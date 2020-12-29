<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>
<script>

export default {
  data: function(){
     return {
      pageName: "Help",
      pageDesc: "This Page Help"
    };
  },
};
</script>
