<!-- mp3ToMidiConverter.vue -->
<template>
  <div>
    <!-- 拖动区域 -->
    <div
        id="drop-area"
        style="border: 2px dashed #ccc; padding: 20px; text-align: center;"
        @dragover.prevent="handleDragOver"
        @dragleave="handleDragLeave"
        @drop.prevent="handleDrop"
    >
      <p>拖动 MP3 文件到此区域</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleDragOver(event) {
      event.target.style.backgroundColor = '#e1e1e1';
    },
    handleDragLeave(event) {
      event.target.style.backgroundColor = '#fff';
    },
    handleDrop(event) {
      event.target.style.backgroundColor = '#fff';

      const file = event.dataTransfer.files[0];

      if (file && file.type === 'audio/mp3') {
        // 发送文件到后端
        this.sendFileToServer(file);
      } else {
        alert('请拖动一个 MP3 文件');
      }
    },
    sendFileToServer(file) {
      const formData = new FormData();
      formData.append('audioFile', file);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            alert('文件上传成功！');
          })
          .catch(error => {
            console.error('文件上传失败:', error);
            alert('文件上传失败！');
          });
    },
  },
};
</script>
