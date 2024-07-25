const app = Vue.createApp({
    data() {
        return {
            arrEmail: []

        }
    },
    // ottengo le mail non appena il documento viene creato
    created() {
        this.generateRandomEmail();

    },
    watch: {

    },
    computed: {

    },
    methods: {

    }
})

app.mount('#app')