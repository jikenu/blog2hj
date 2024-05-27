<template>
    <div class="line-center">
      <h1>Music</h1>
        <div class="item">
          <h4>eve - 廻廻奇谭</h4>
            <VidStack class="audio" src="/audio/Eve-Kitan.mp3" title="eve - 廻廻奇谭"></VidStack>
        </div>
    </div>
</template>

<style>
.audio {
  width: 60%; /* 宽度 */
  margin: 20px; /* 外边距 */
  background-color: rgba(50, 50, 50, 0.5);  /*背景颜色 */
  /* border: 1px solid #ccc; 边框 */
  border-radius: 50px; /* 边框圆角 */
  box-shadow: 0 0 5px rgba(50, 50, 50, 0.2); /* 阴影 */
}
.line-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
</style>