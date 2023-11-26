<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>

<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
<!--  <header class="main-title">Magical Piano</header>-->
  <div class="main-wrapper">
    <aside class="navbar">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/PlayThePiano">PianoDemo</RouterLink>
        <RouterLink to="/PlayPiano">Piano</RouterLink>
        <RouterLink to="/about">弹琴</RouterLink>
      </nav>

    </aside>

  <main class="content">
    <RouterView />

  </main>

  </div>
</template>

<style>

@import '@/assets/scss/global.scss';

.main-title {
  padding: 1.5% 1.5%;
  font-family: rozha, Arial, Microsoft Yahei, sans-serif;;
  font-size: transferToRem(32);
  color: #2E9AFE;
  text-shadow: 0px 0px 1px #FFFFFF;
  user-select: none;
}

body {
  font-size: 18px; /* 设置全局字体大小 */
}
.main-wrapper {
  //display: flex;
}

.sidebar {
  width: 30rem; /* 调整侧边栏的宽度 */
  display: inline-block;
  background-color: #333;
  color: white;
}

.sidebar nav {
  display: inline-block;
  padding: 0px;
}

.sidebar nav RouterLink {
  display: inline-block;
  color: white;
  text-decoration: wheat;
  margin-bottom: 8rem;
  font-size: 16px; /* 单独设置导航链接的字体大小 */
}

.sidebar nav RouterLink:hover {
  background-color: #555;
}

.content {
  flex: 10; /* 填充剩余空间 */
  padding: 20px;
  height: 40rem;
  left: 30rem;
  display: flex;
}
nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

</style>

<!--<style>-->
<!--.main-wrapper {-->
<!--  display: flex;-->
<!--  justify-content: space-between; /* 将内部元素放置在主轴上的两端 */-->
<!--  align-items: center; /* 在交叉轴上居中 */-->
<!--  height: 100vh; /* 设置高度为视口的100% */-->
<!--  padding: 20px;-->
<!--}-->
<!--.sidebar {-->
<!--  width: 200px; /* 调整侧边栏的宽度 */-->
<!--  background-color: #333;-->
<!--  color: white;-->
<!--}-->

<!---->

<!--.navbar {//导航栏-->
<!--background-color: #333;-->
<!--color: #cccccc;-->
<!--//color: white;-->
<!--}-->
<!--.navbar nav {//导航栏内部具体设置-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->

<!--.sidebar nav RouterLink {-->
<!--  display: block;-->
<!--  color: white;-->
<!--  text-decoration: none;-->
<!--  margin-bottom: 8px;-->
<!--}-->
<!--.navbar RouterLink {-->
<!--  color: white;-->
<!--  text-decoration: none;-->
<!--  margin-bottom: 8px;-->
<!--}-->

<!--.navbar RouterLink:hover {-->
<!--  background-color: #555;-->
<!--}-->

<!--.content {-->
<!--  flex: 1;-->
<!--  margin-left: 20px; /* 为了在内容区域和侧边栏之间添加一些间距 */-->
<!--}-->
<!--</style>-->






