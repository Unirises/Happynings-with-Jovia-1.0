if (sessionStorage.getItem('page_id') == null) {
    sessionStorage.setItem('page_id', 0)
}

function getImageUrl(name) {
    return new URL(`../images/${name}.png`,
        import.meta.url).href
}

const app = new Vue({
    el: '#app',
    data: {
        active_page: 0,
        user_answer: '',
        sound_status: false,
        answer_1: ['SElSQVlBIE1BTkFXQVJJ', 'SElSQU1BWUFOQQ=='],
        answer_2: ['Wm9yYXlkYQ==', 'TWF0dXRpbmE='],
        answer_3: ['QW5nIFBhZ29uZyBhdCBhbmcgTWF0c2luZyBieSBKUCBSaXphbA==', 'RmxvcmFudGUgYXQgTGF1cmE=', 'YW5nIFBhZ29uZyBhdCBhbmcgTWF0c2luZw==', 'UGFnb25nIGF0IE1hdHNpbmc='],
        answer_4: ['aG95IGdpc2luZw==', 'TWFnYW5kYW5nIEdhYmkgQmF5YW4='],
        answer_5: ['eWVsbG93'],
        is_answer_correct: true
    },
    methods: {
        nextPage: function (current_page) {
            sessionStorage.setItem('page_id', current_page);
            this.active_page = current_page
        },
        getPage: function () {
            this.active_page = parseInt(sessionStorage.getItem('page_id'))
            return this.active_page
        },
        checkAnswer: function (answers, page_id) {

            for (let i = 0; i < answers.length; i++) {
                const answer = answers[i];
                if (atob(answer).toUpperCase() == this.user_answer.toUpperCase()) {
                    this.is_answer_correct = true;
                    break;
                } else {
                    this.is_answer_correct = false
                }
            }

            if (this.is_answer_correct) {
                this.nextPage(page_id)
                this.user_answer = ''
                document.querySelector('#correct').play()
            } else {
                document.querySelector('#wrong').play()
                const answer_field = document.querySelector('#answer_field');
                answer_field.classList.replace('border-primary-2', 'border-red-500')
                answer_field.classList.add('animate-pulse')
                setTimeout(() => {
                    answer_field.classList.remove('animate-pulse')
                    answer_field.classList.replace('border-red-500', 'border-primary-2')
                }, 1000)
            }
        },
        soundStatus: function () {
            this.sound_status = !this.sound_status;
            const music = document.querySelector('#music');
            const sound_status = document.querySelector('#soundStatus')

            if (this.sound_status) {
                music.play()
                sound_status.src = getImageUrl('sound-on')

            } else {
                music.pause()
                sound_status.src = getImageUrl('sound-off')
            }
        }
    }
})