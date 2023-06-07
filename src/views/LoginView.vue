<template>
    <div class="pt-16 justify-center">
        <h1 class="text-3xl font-semibold mb-4">Enter your phone number</h1>

        <form v-if="!waitingOnVerification" action="#" @submit.prevent="handleLogin">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm max-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input type="text" v-maska data-maska="###########" v-model="credentials.phone" name="phone"
                               id="phone" placeholder="Enter phone number"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>

                </div>

                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" @submit.prevent="handleLogin"
                            class="inline-flex justify-center rounded-md border border-transparent bg-white py-2">
                        Continue
                    </button>
                </div>

            </div>
        </form>

        <form v-else action="#" @submit.prevent="handleVerification">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm max-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input type="text" v-maska data-maska="######" v-model="credentials.login_code"
                               name="login_code"
                               id="login_code" placeholder="123456"
                               class="mt-1 block w-full px-3 py-2 rounded-mb border border-gray-300 shadow-sm"/>
                    </div>

                </div>

                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" @submit.prevent="handleVerification"
                            class="inline-flex justify-center rounded-md border border-transparent bg-white py-2">Verify
                    </button>
                </div>

            </div>
        </form>


    </div>
</template>

<script setup>
import {vMaska} from "maska"
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()

const credentials = reactive({
    phone: null,
    login_code: null
});

const waitingOnVerification = ref(false)

onMounted(() => {
    if(localStorage.getItem('token')){
        router.push({
            name: 'landing'
        });
    }
});

const getformattedCredentials = () => {
    return {
        phone: credentials.phone,
        login_code: credentials.login_code
    }
}

const handleLogin = () => {
    axios.post('http://127.0.0.1:8000/api/login', getformattedCredentials())
        .then((response) => {
            console.log(response.data)
            waitingOnVerification.value = true
        })
        .catch((error) => {
            console.log(error)
        })
}

const handleVerification = () => {
    axios.post('http://127.0.0.1:8000/api/login/verify', getformattedCredentials()).then((response) => {
        console.log(response.data) //auth token
        localStorage.setItem('token', response.data)
        router.push({
            name: 'landing'
        })
    }).catch((error) => {
        console.log(error);
    })
}
</script>

<style>

</style>
