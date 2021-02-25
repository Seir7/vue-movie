import {request} from '../network/request'
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
  console.log(res);
})
.catch(err => {
  console.log(err);
})
