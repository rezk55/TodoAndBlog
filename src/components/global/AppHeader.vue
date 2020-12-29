<template>
  <div class="header">
    <div class="container">
      <div class="logo">Rezcoder</div>
      <ul class="text-right">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/todo" tag="li">
          <a>Todo</a>
        </router-link>
        <router-link to="/about" tag="li">
          <a>About</a>
        </router-link>
        <router-link to="/blog" tag="li">
          <a>Blog</a>
        </router-link>
        <router-link to="/help" tag="li">
          <a>Help</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  data: function() {
    return {
      isSelected: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #41b8836c;
  height: 70px;
  .logo {
    float: left;
    width: 200px;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    color: #35495e;
  }
  ul {
    float: left;
    width: calc(100% - 200px);
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      a {
        text-decoration: none;
        color: #35495e;
      }
      &:hover {
        background-color: #fff;
        a {
          color: #41b883;
        }
      }
    }
    li.router-link-active {
      background-color: #fff;
      border: 1px solid #35495e;
      a {
        color: #41b883;
      }
    }
  }
}
</style>

