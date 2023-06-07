<template>
    <div class="pt-16 justify-center align-middle overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
        <h1 class="text-3xl font-semibold mb-4">Enter your phone number</h1>

        <form v-if="!waitingOnVerification" action="#" @submit.prevent="handleSaveDriver">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm max-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input type="text" v-model="driverDetails.name" name="name" id="name"
                               placeholder="Enter Full name"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>
                    <div class="mt-2">
                        <input type="number" v-model="driverDetails.year" name="year" id="year" placeholder="Car year"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>
                    <div class="mt-2">
                        <input type="text" v-model="driverDetails.make" name="make" id="make" placeholder="Car make"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>

                    <div class="mt-2">
                        <input type="text" v-model="driverDetails.model" name="model" id="model" placeholder="Car model"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>

                    <div class="mt-2">
                        <input type="text" v-model="driverDetails.color" name="color" id="color" placeholder="Car color"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>

                    <div class="mt-2">
                        <input type="text" v-model="driverDetails.license_plate" name="license_plate" id="license_plate"
                               placeholder="Car license plate"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>

                </div>


                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" @submit.prevent="handleLogin"
                            class="inline-flex justify-center rounded-md border border-transparent bg-black text-white px-3 py-2">
                        Continue
                    </button>
                </div>

            </div>
        </form>

    </div>
</template>

<script setup>
import {reactive} from "vue";
import http from "@/helpers/http";
import router from "@/router";

const driverDetails = reactive({
    year: null,
    name: '',
    make: '',
    model: '',
    color: '',
    license_plate: ''
})
const handleSaveDriver = () => {
    http().post('/api/driver', driverDetails)
        .then((response) => {
            router.push({
                name: 'standby'
            })
        }).catch((error) => {
        console.error(error)
    })
}
</script>
