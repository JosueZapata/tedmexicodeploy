import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _377b8b59 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4db7f501 = () => interopDefault(import('..\\pages\\Sesion\\Login.vue' /* webpackChunkName: "pages/Sesion/Login" */))
const _94becfa0 = () => interopDefault(import('..\\pages\\Sesion\\Signup.vue' /* webpackChunkName: "pages/Sesion/Signup" */))
const _7393d9fd = () => interopDefault(import('..\\pages\\Sesion\\SignupAccount\\_id.vue' /* webpackChunkName: "pages/Sesion/SignupAccount/_id" */))
const _80934aca = () => interopDefault(import('..\\pages\\Busqueda\\_id.vue' /* webpackChunkName: "pages/Busqueda/_id" */))
const _289bc950 = () => interopDefault(import('..\\pages\\Categoria\\_id.vue' /* webpackChunkName: "pages/Categoria/_id" */))
const _3f860ff9 = () => interopDefault(import('..\\pages\\Producto\\_id.vue' /* webpackChunkName: "pages/Producto/_id" */))
const _268ca56c = () => interopDefault(import('..\\pages\\Comprar\\_cantidad\\_id.vue' /* webpackChunkName: "pages/Comprar/_cantidad/_id" */))
const _4defd9de = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _377b8b59,
    name: "inspire"
  }, {
    path: "/Sesion/Login",
    component: _4db7f501,
    name: "Sesion-Login"
  }, {
    path: "/Sesion/Signup",
    component: _94becfa0,
    name: "Sesion-Signup"
  }, {
    path: "/Sesion/SignupAccount/:id?",
    component: _7393d9fd,
    name: "Sesion-SignupAccount-id"
  }, {
    path: "/Busqueda/:id?",
    component: _80934aca,
    name: "Busqueda-id"
  }, {
    path: "/Categoria/:id?",
    component: _289bc950,
    name: "Categoria-id"
  }, {
    path: "/Producto/:id?",
    component: _3f860ff9,
    name: "Producto-id"
  }, {
    path: "/Comprar/:cantidad?/:id?",
    component: _268ca56c,
    name: "Comprar-cantidad-id"
  }, {
    path: "/",
    component: _4defd9de,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
