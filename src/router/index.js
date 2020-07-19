import Vue from 'vue'
import Router from 'vue-router'
import transformationConfiguration from '@/components/transformationConfiguration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transformationConfiguration',
      component: transformationConfiguration,
    },

  ]
})
