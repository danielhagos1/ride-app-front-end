<template>

  <div class="pt-16">
      <h1 class="text-3xl font-semibold mb-4">Here's your trip</h1>
      <div>
          <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
              <div class="bg-white px-4 py-5 sm:p-6">
                  <div class="mt-2">
                      <p class="text-xl">Going to <strong>my destination</strong></p>
                  </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                      @click="handleConfirmTrip"
                  class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 text-white px-4"
                  >
                      Let's Go!
                  </button>

              </div>

          </div>
      </div>

  </div>

</template>

<script setup>
import {useRouter} from "vue-router";
import axios from "axios";
import http from "@/helpers/http";

const router = useRouter()

const handleConfirmTrip = () => {
    http().post('/api/trip', {
        origin: "",
        destination: "",
        destination_name: "test dest name"
    }).then((response) => {
        router.push({
            name: 'trip'
        })
    })
        .catch((error) => {
            console.log(error)
        })
}

</script>
