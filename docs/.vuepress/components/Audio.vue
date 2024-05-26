<template>
    <div>
        <div class="line-center">
            <span> eve - 廻廻奇谭</span>
            <audio controls>
                <source src="/audio/Eve-Kitan.mp3" type="audio/mp3">
            您的浏览器不支持 audio 元素。
            </audio>
        </div>
    </div>
</template>

<style>
audio {
  width: 400px; /* 宽度 */
  height: 45px; /* 高度 */
  margin: 30px; /* 外边距 */
  background-color: #f0f0f0; /* 背景颜色 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 50px; /* 边框圆角 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 阴影 */
}

/* 设置控制按钮的样式 */
audio::-webkit-media-controls {
  background-color: transparent;
  border: none;
}

/* 设置控制按钮的样式 */
audio::-moz-media-controls {
  background-color: transparent;
  border: none;
}
.line-center {
    display: flex;
    align-items: center;
}
</style>