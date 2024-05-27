<template>
    <div>
        <div class="video-container">
            <video controls class="video">
                <source src="/video/gze-kxin.mp4" type="video/mp4">
                您的浏览器不支持视频标签。
            </video>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        },
  
    mounted() {
    }
}
</script>


<style>
/* 定义视频播放器的样式 */
.video-container {
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
}

/* 定义视频的样式 */
video {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

</style>