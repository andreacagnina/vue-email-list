const app = Vue.createApp({
    data() {
        return {
            arrEmail: []

        }
    },
    // ottengo le mail non appena il documento viene creato
    // created() {
    //     this.generateRandomEmail();
    // },
    watch: {

    },
    computed: {

    },
    // tramite axios chiedo la mail dall'API e DOPO attendo risposta. 
    methods: {
        generateRandomEmail() {
            this.cleanArray();
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.arrEmail.push(result.data.response)
                });
            }
        },
        // quando riclicco sul bottone, viene avviata la funzione per ripulire i risultati precedenti
        cleanArray() {
            this.arrEmail = []

        }

    }
})

app.mount('#app')