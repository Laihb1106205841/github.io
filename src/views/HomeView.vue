<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
<!--  <main>-->
<!--    <TheWelcome/>-->

<!--  </main>-->
<!--  <div class="about">-->
<!--    <h1>This is an HOME page</h1>-->
<!--    <button  @click="handleButtonClick">hello</button>>-->
<!--  </div>-->


  <div>
    <div v-html="htmlContent"></div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      htmlContent: '<p>This is some <strong>HTML</strong> content.</p>',
    };
  },
};
</script>

<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    handleButtonClick() {-->
<!--      // 在这里编写按钮点击时要执行的方法-->
<!--      console.log('按钮被点击了！');-->
<!--      // 可以调用其他方法或触发事件等-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->