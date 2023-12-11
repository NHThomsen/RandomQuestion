Vue.createApp({
    data() {
        return {
            randomQuestion: ""
        }
    },
    methods: {
        async getRandomQuestion() {
            try {
                const response = await axios.get("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean")
                this.randomQuestion = await response.data.results[0].question
                console.log(this.randomQuestion)
            }
            catch(error) {
                console.log(error)
            }
        }
    }
}).mount("#app")