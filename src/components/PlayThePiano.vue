<template>
  <div>
    <!-- 页面内容 -->
    <p>按下 'A' 键发送请求</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    // 在组件挂载后添加键盘事件监听
    window.addEventListener('keydown', this.handleKeyDown);
  },
  destroyed() {
    // 在组件销毁前移除事件监听，以防止内存泄漏
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    handleKeyDown(event) {

      // this.sendRequest(event.key);
      // 检查是否按下 'A' 键
      if (event.key === 'a') {
        // 发送请求到后端
        this.sendRequest("A");
      }
    },
    sendRequest(da) {
      // 向后端发送请求
      axios.post('http://localhost:8085/api/listener', { data: da })
          .then(response => {
            // 请求成功的处理逻辑
            console.log('请求成功', response.data);
          })
          .catch(error => {
            // 请求失败的处理逻辑
            console.error('请求失败', error);
          });
    },
  },
};
</script>
