<template>
  <div class="post-box">
    <span class="post-views">
      <font-awesome-icon icon="eye" /> {{ views }}</span
    >
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content }}</p>
    <div class="row">
      <div class="col-sm-6">
        <div class="post-author">{{ author }}</div>
      </div>
      <div class="col-sm-6 text-right">
        <div class="post-category">{{ category }}</div>
      </div>
    </div>
    <footer class="footer">
      <button
        @click="
          toggleLike($event, 'toggleLike'), (flagLike = !flagLike), countLike()
        "
      >
        <font-awesome-icon icon="thumbs-up" class="icon" /> Like
      </button>
      <span class="float-right transform">{{ LikesByK }}</span>
    </footer>
  </div>
</template>
<script>
export default {
  name: "BlogPosts",
  data: function() {
    return {
      flagLike: false,
      mutableLikes: this.likes,
    };
  },

  computed: {
    LikesByK: function() {
      return this.mutableLikes >= 1000
        ? this.mutableLikes / 1000 + "k"
        : this.mutableLikes;
    },
  },
  methods: {
    toggleLike: function(event, theclass) {
      event.target.classList.toggle(theclass);
    },
    countLike: function() {
      if (this.flagLike) {
        this.mutableLikes++;
      } else {
        this.mutableLikes--;
      }
    },
  },

  props: ["views", "title", "date", "content", "author", "category", "likes"],
};
</script>
<style lang="scss" scoped>
button {
  color: #6c757d;
}
.post-box {
  background-color: #fff;
  padding: 15px;
  position: relative;
  color: #35495e;
  margin-bottom: 20px;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #41b883;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    text-align: center;
    padding: 1px 5px;
    i {
      color: #fff;
      font-size: 40px;
    }
  }
  .post-title {
    font-weight: bold;
  }
  .post-date {
    color: #35495e81;
    font-weight: bold;
    font-size: 14px;
    padding: 0px 5px;
  }
  .post-content {
    line-height: 25px;
    letter-spacing: 1px;
  }
  .post-author,
  .post-category {
    width: 200px;
    background-color: #35495e;
    color: #fff;
    padding: 5px;
  }
  .post-category {
    float: right;
    background-color: #8f2080;
  }
  .footer {
    border: 1px solid #6c757d;
    border-left: none;
    border-right: none;
    margin: 10px 0px 0px 0px;
    padding: 5px;
    button {
      width: 100px;
      padding: 5px;
      background-color: transparent;
      border: none;
      outline: none;
      &:hover {
        background-color: #6c757d63;
        border-radius: 10px;
      }
      &:focus {
        outline: none;
        //color: #007bff;
      }
    }
  }
}
.toggleLike {
  color: #007bff;
}
</style>
