<script setup>
import Communicate from "@/components/Communicate.vue";
import listener from "@/components/PlayThePiano.vue";
</script>


<template>
<!--  <div class="about">-->
<!--    <h1>This is an about page</h1>-->
<!--    <button  @click="handleButtonClick">hello</button>>-->
<!--  </div>-->
  <main>
    <Communicate/>
    <listener/>
<!--    <h1>This is an</h1>>-->
  </main>
</template>

<script>
export default {
  methods: {
    handleButtonClick() {
      // 在这里编写按钮点击时要执行的方法
      console.log('按钮被点击了！');
      // 可以调用其他方法或触发事件等
    },
  },
};
</script>

<style>
@media (min-width: 264px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

}
</style>
