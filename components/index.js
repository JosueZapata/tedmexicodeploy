export { default as Alert } from '../..\\components\\Alert.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as ProgressCircular } from '../..\\components\\ProgressCircular.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyAlert = import('../..\\components\\Alert.vue' /* webpackChunkName: "components_Alert" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyProgressCircular = import('../..\\components\\ProgressCircular.vue' /* webpackChunkName: "components_ProgressCircular" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
