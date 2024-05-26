<template>
    <div>
        <div class="video-container">
            <video controls>
                <source src="/video/gze-kxin.mp4" type="video/mp4">
                您的浏览器不支持视频标签。
            </video>
            <div class="video-controls">
                <button class="play-button" onclick="togglePlayPause()"></button>
                <div class="progress-bar" onclick="seek(event)">
                    <div class="progress-bar-filled"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var video = document.querySelector('video');
var playButton = document.querySelector('.play-button');
var progressBar = document.querySelector('.progress-bar');
var progressBarFilled = document.querySelector('.progress-bar-filled');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = '❚❚'; // Pause symbol
    } else {
        video.pause();
        playButton.innerHTML = '►'; // Play symbol
    }
}

function updateProgressBar() {
    var percent = (video.currentTime / video.duration) * 100;
    progressBarFilled.style.width = percent + '%';
}

function seek(event) {
    var percent = event.offsetX / progressBar.offsetWidth;
    video.currentTime = video.duration * percent;
}

video.addEventListener('timeupdate', updateProgressBar);
</script>


<style>
/* 定义视频播放器的样式 */
.video-container {
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 定义视频的样式 */
video {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

/* 定义控制栏的样式 */
.video-controls {
    display: flex;
    align-items: center;
    background-color: #333;
    padding: 10px;
}

/* 定义播放/暂停按钮的样式 */
.play-button {
    background-color: #fff;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

/* 定义进度条的样式 */
.progress-bar {
    flex-grow: 1;
    background-color: #555;
    height: 4px;
    margin: 0 10px;
    position: relative;
    cursor: pointer;
}

/* 定义进度条填充的样式 */
.progress-bar-filled {
    background-color: #fff;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>