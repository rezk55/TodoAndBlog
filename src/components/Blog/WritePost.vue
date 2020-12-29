<template>
  <transition name="modal-post">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <form action class="form">
            <input
              type="text"
              name="title"
              class="title"
              placeholder="Title"
              v-model="title"
            />
            <textarea
              name="content"
              class="content"
              placeholder="Content"
              v-model="content"
              id="content"
            ></textarea>
            <div class="category row">
              <label class="lbl-category col-3">Select category</label>
              <select name="category" class="select-category col-5" size="4">
                <option
                  v-for="post in posts"
                  :key="post.id"
                  :id="(id = post.id)"
                  @click="category = post.category"
                  >{{ post.category }}</option
                >
              </select>
            </div>
            <button class="post col-3" @click.prevent="addPost(),$emit('close')">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import JsonPosts from "../../json/blog_posts.json";
import axios from "axios";

// import posts from "/blog_posts.json";
/*var fs = require("browserify-fs");
 fs.readFile("/blog_posts.json", "utf-8", function(err, data) {
          const posts = JSON.parse(data);
          console.log(posts);
          var title = posts[0].title
          // document.getElementById('content').innerHTML = title;
           console.log(title);
        });

var data = fs.readFileSync('/blog_posts.json');
 console.log("Synchronous read: " + data.toString());


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    //  document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "blog_posts.json", true);
  xhttp.send();
}
loadDoc();*/

export default {
  name: "WritePost",
  data: function() {
    return {
      posts: JsonPosts,
      id: "",
      title: "",
      content: "",
      category: "",
      test: "",
    };
  },
  methods: {
    addPost: function() {
      var d = new Date();
      var dateToday =
        d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
      var post = {
        id: this.id + 1,
        title: this.title,
        date: dateToday,
        content: this.content,
        author: "amarusic0",
        category: this.category,
        views: 0,
        likes: 0,
      };
      this.posts.unshift(post);
      axios
        .post(
          "http://www.json-generator.com/api/json/get/cqKnHZiOPS?indent=2",
          JSON.stringify(post)
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

         axios
        .get(
          "http://www.json-generator.com/api/json/get/cqKnHZiOPS?indent=2"
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      // console.log(this.posts);
      // console.log(JSON.stringify(this.posts));
      // const fs = require("browserify-fs");
      // fs.writeFile("/blog_posts.json", JSON.stringify(this.posts), (err) => {
      //   if (err) throw err;
      //   console.log("Data written to file");
      // });
    },
    set: function() {
      axios
        .get("https://my.api.mockaroo.com/posts.json?key=77a8abc0")

        .then((response) => (this.test = response.data));
      console.log(this.test.data);
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    .modal-container {
      width: 40%;
      height: 50%;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #41b883;
      border-radius: 5px;
      border: 2px solid green;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
      .form {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 15% 40% 25% 15%;
        grid-gap: 10px;
        color: #35495e;
        .title {
          // border-style: none none solid none;
          border: 1px solid green;
          border-radius: 5px;
          padding: 10px 0 0 10px;
          letter-spacing: 1px;
        }
        .content {
          padding: 10px 0 0 10px;
          border: 1px solid green;
          border-radius: 5px;
          letter-spacing: 1px;
        }
        .category {
          .lbl-category {
            padding: 0 0 0 10px;
            color: #35495e;
            font-weight: bold;
            // border:1px solid green;
          }
          .select-category {
            border-radius: 5px;
            border: 1px solid green;
          }
        }
        .post {
          margin: 0 0 0 400px;
          background-color: green;
          color: #fff;
          border: 1px solid green;
          border-radius: 5px;
          font-weight: bold;
          font-size: 19px;
        }
        :focus {
          outline: none;
        }
      }
    }
  }
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

// .modal-enter {
//   opacity: 0;
// }

// .modal-leave-active {
//   opacity: 0;
// }

// .modal-enter .modal-container,
// .modal-leave-active .modal-container {
//   -webkit-transform: scale(1.1);
//   transform: scale(1.1);
// }
</style>
