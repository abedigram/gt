<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title" dir="rtl">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">written by {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content }}</p>
      <section class="post-feedback">
        <p>
          write down ur feedback.
          send mail to
          <a href="mailTo:contact@greentile.ir">contact@greentile.ir</a>
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1",
          title: "first post (ID: " + context.route.params.id + ")", // the same this.$route.params.id
          previewText: "an awesome post",
          author: "abedigram",
          updatedDate: new Date(),
          content: "hello it's a dummy text which doesn't have any meaning and is just to fill the container",
          thumbnail: "https://picsum.photos/400/200"
        }
      });
    }, 1000);
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>