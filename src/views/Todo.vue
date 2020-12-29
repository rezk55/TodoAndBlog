<template>
  <div class="todoV">
    <todo-comp />
  </div>
</template>
<script>
import TodoComp from "../components/Todo/TodoComp.vue";
export default {
  name: "Todo",
  data: function() {
    return {
      pageName: "Todo",
      pageDesc: "This Page Todo"
    };
  },
  components: { TodoComp }
};
</script>
<style lang="scss" scoped>
.todoV{
  margin-top: 200px;
}
</style>
