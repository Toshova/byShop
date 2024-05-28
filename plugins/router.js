import Vue from 'vue'
import Router from 'vue-router'

import ClientZone from "..pages/clientZone.vue"
import Contacts from "..pages/contacts.vue"
import Index from "..pages/index.vue"
import Login from "..pages/login.vue"
import Store from "..pages/store.vue"
import Video from "..pages/video.vue"


Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/contacts',
        component: Contacts,
      },
      {
        path: '/clientZone',
        component: ClientZone,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/video',
        component: Video,
      },
      {
        path: '/store',
        component: Store,
      },
    ],
    
  })
}

export default new VueRouter (
    {
       mode: 'history',
       routes
   }
)