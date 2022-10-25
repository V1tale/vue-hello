const {createApp} = Vue;

createApp({
    data() {
        return {
            message: null,
            url: null,
        }
        
    },
    methods: {
        printMessage: function() {
        this.message = this.userInput;
        this.url = this.userInputUrl;
        },
    }
}).mount("#vue")