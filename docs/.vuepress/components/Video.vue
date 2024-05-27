<template>
    <div class="video-container">
        <!--封面： poster="https://files.vidstack.io/sprite-fight/poster.webp"  -->
        <VidStack src="/video/gze-kxin.mp4" title="光泽 - 空心" width="80%"/>
 
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
.video-container {
    display: flex;
    text-align: center;
    align-items: center;
}
/* 暂未生效 */
.vds-button[data-active] .pip-enter-icon,
.vds-button:not([data-active]) .pip-exit-icon {
    display: none;
}
</style>