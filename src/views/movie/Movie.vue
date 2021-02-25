<template>
  <div id="films-list">
    <tabs-wrap></tabs-wrap>
    <now-playing></now-playing>
  </div>
</template>

<script>
import TabsWrap from './tabsnav/TabsWrap'
import NowPlaying from '../movie/playing/NowPlaying'
import {request} from '../../network/request'
export default {
  data() {
    return {
      // imgURL: ''
      dataList: []
    }
  },
  components: { TabsWrap,NowPlaying },
  created() {
 request({
  url: '/gateway',
  params: {
    cityId: 360700,
    pageNum: 1,
    pageSize: 10,
    type: 1,
    k: 162833
  },
  headers: {
    'X-Host': 'mall.film-ticket.film.list'
  }
})
.then(res => {
  // console.log(res);
  this.dataList = res.data.data.films
})
.catch(err => {
  console.log(err);
})
  }
}
</script>

<style scoped>

</style>