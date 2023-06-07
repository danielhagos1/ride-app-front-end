<template>
    <div class="pt-16">
        <h1 class="text-3xl font-semibold mb-4">Landing Page</h1>
        <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
            <div class="bg-white px-4 py-5 sm:p-6">
                <div class="flex justify-between">
                    <button
                            @click="handleStartDriving"
                            class="rounded-md border-transparent bg-black py-2 px-4 text-sm text-white font-medium">
                        Start Driving
                    </button>

                    <button @click="handleFindARide"
                            class="rounded-md border-transparent bg-black py-2 px-4 text-sm text-white font-medium">
                        Find A Ride
                    </button>

                </div>

            </div>

        </div>
    </div>

</template>

<script setup>

import {useRouter} from "vue-router";
import http from "@/helpers/http";

const router = useRouter()
const handleStartDriving = () => {
    http().get('/api/driver').then((response) => {
            if (response.data.driver) {
                router.push({
                    name: 'standby'
                })
            } else {
                router.push({
                    name: 'driver'
                })
            }
        }
    )
    router.push({
        name: 'standby'
    }).catch((error) => {
        console.error(error)
    })
}
const handleFindARide = () => {
    router.push({
        name: 'location'
    });
}
</script>
