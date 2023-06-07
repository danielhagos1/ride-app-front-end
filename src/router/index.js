import {createRouter, createWebHistory} from 'vue-router'
import LandingView from "@/views/LandingView.vue";
import axios from "axios";
import LoginView from "@/views/LoginView.vue";
import LocationView from "@/views/LocationView.vue";
import MapView from "@/views/MapView.vue";
import TripView from "@/views/TripView.vue";
import DriverView from "@/views/DriverView.vue";
import StandbyView from "@/views/StandbyView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView
        },
        {
            path: '/landing',
            name: 'landing',
            component: LandingView
        },
        {
            path: '/location',
            name: 'location',
            component: LocationView
        },
        {
            path: '/map',
            name: 'map',
            component: MapView
        },
        {
            path: '/trip',
            name: 'trip',
            component: TripView
        },
        {
            path: '/driver',
            name: 'driver',
            component: DriverView
        },
        {
            path: '/standby',
            name: 'standby',
            component: StandbyView
        }

    ]
})

router.beforeEach((to, from) => {
    if (to.name === 'login') {
        return true
    }

    if (!localStorage.getItem('token')) {
        return {
            name: 'login'
        }
    }

    checkTokenAuthenticity();
})

const checkTokenAuthenticity = () => {
    axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((response) => {
        })
        .catch((error) => {
            localStorage.removeItem('token')
            router.push({
                name: 'login'
            }).then(r => {
            });
        })
}

export default router
