import { createRouter, createWebHistory } from 'vue-router'
import { useGlobalStore } from '@/stores'


// Layouts
import errorLayout from '@/layouts/Error.vue'
import defaultLayout from '@/layouts/Default.vue'


const routes = [
    {
        path: '/:pathMatch(.*)',
        name: 'Error',
        component: () => import('../views/Error404.vue'),
        meta: {
            layout: errorLayout,
            accessDenied: []
        }
    },
    {
        path: '/',
        redirect: '/network/cosmoshub'
    },
    {
		path: '/network/:network',
		name: 'Network',
		component: () => import('../views/Network.vue'),
		meta: {
			layout: defaultLayout
		}
	},
]


const router = createRouter({
	history: createWebHistory(),
	routes
})


router.beforeResolve(async (to, from, next) => {
	let store = useGlobalStore()

    // Current network from url
	if (to.params.network) {
		store.currentNetwork = to.params.network
	}

    // App full loaded
    if(!store.isAppFullLoaded) {
        store.isAppFullLoaded = true
    }

	next()
})


export default router
