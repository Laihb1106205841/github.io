<template>
  <div class="communication-example">
    <h3>与后端通信的示例</h3>
    <div class="button-container">
      <button class="piano-key" @click="fetchData">获取数据</button>
      <button class="piano-key" @click="fetchDataWithNum(1)">发送1</button>
    </div>
    <div v-if="data">
      <h5>从后端获取的数据：</h5>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const IP = "http://10.32.61.211:8085";
export default {


  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {

        // 发送 POST 请求到后端的 /api/data 路径
        const response = await axios.post(IP+'/api/hellow');


        // 处理从后端获取的数据
        this.data = response.data;
        console.log(this.data);
      } catch (error) {
        console.error('获取数据时发生错误:', error);
      }
    },

    async fetchDataWithNum(Num) {
      try {
        const response = await axios.post(IP+'/api/hellow', {
          Num // 发送数字1给后端
        });

        // 处理从后端获取的数据
        this.data = response.data;
        console.log(this.data);
      } catch (error) {
        console.error('获取数据时发生错误:', error);
      }
    },
  },



};
</script>

<!--<style>-->
<!--.piano-key {-->
<!--  display: inline-block;-->
<!--  width: 4rem; /* 按钮宽度 */-->
<!--  height: 20rem; /* 按钮高度 */-->
<!--  background-color: white; /* 按钮背景颜色，白色 */-->
<!--  border: 1px solid #000; /* 按钮边框 */-->
<!--  border-radius: 5px; /* 按钮圆角 */-->
<!--  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 按钮阴影 */-->
<!--  cursor: pointer; /* 鼠标指针样式 */-->
<!--}-->

<!--/* 在这里添加样式，可选 */-->
<!--</style>-->
<style>
.communication-example {
  //text-align: ; /* 将组件内元素居中对齐 */
}

.button-container {
  display: flex; /* 使用 Flexbox 布局 */
  //justify-content: center; /* 在水平方向上居中对齐子元素 */
  margin-bottom: 2rem; /* 为了增加按钮与下方内容的间距 */
}

/* 其余样式与之前提供的按钮样式相同 */
.piano-key {
  display: inline-block;
  width: 4rem;
  height: 16rem;
  background-color: white;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style>