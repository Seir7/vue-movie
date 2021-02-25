<template>
  <div id="swiper-wrap">
    <img src="https://static.maizuo.com/v5/upload/dfb943b2b8771769a9adef95459fe2ae.jpg?x-oss-process=image/quality,Q_70" alt="">
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper'
import 'swiper/swiper-bundle'
export default {
  components: { Swiper, SwiperSlide }
}
</script>

<style>
#swiper-wrap {
  overflow: hidden;
  height: 40vw;
}
#swiper-wrap img {
  width: 100%;
}
</style>