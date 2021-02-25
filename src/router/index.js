import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const { Movie,Cinemas,Video,Profile,NowPlaying } = {
  Movie: () => import('../views/movie/Movie.vue'),
  Cinemas: () => import('../views/cinemas/Cinemas.vue'),
  Video: () => import('../views/video/Video.vue'),
  Profile: () => import('../views/profile/Profile.vue'),
}
const routes = [
  {
    path: '',
    redirect: '/movie',
  },
  {
    path: '/movie',
    component: Movie,
    meta: {
      title: '卖座电影'
    },
  },
  {
    path: '/cinemas',
    component: Cinemas,
    meta: {
      title: '影院'
    }
  },
  {
    path: '/video',
    component: Video,
    meta: {
      title: '小视频'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 配置导航守卫
router.afterEach((to, from) => {
  document.title = to.matched[0].meta.title
})
export default router