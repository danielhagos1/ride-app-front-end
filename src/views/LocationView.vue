<template>
    <div class="pt-16">
        <h1 class="text-3xl font-semibold mb-4">Where are we going</h1>
        <form action="#">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input type="text" @place_changed="handleSelectedLocationChanged" name="data.location" id="location" placeholder="My destination"
                               class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm"/>
                    </div>

                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                            @click.prevent="handleSelectedLocation"
                            type="button"
                            class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 text-white px-4"
                    >
                        Find A Ride
                    </button>

                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()


const handleSelectedLocationChanged = (e) => {
   console.log('handleLocationChanged', e)
}
const handleSelectedLocation = () => {
    if (handleSelectedLocationChanged) {
        router.push({
            name: 'map'
        });
    }
}
</script>
