  if (sessionStorage.getItem('page_id') == null) {
      sessionStorage.setItem('page_id', 0)
  }

  const app = new Vue({
      el: '#app',
      data: {
          active_page: 0,
          user_answer: ''
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
          checkAnswer: function (answer, page_id) {
              if (answer === btoa(this.user_answer.toUpperCase())) {
                  this.nextPage(page_id)
                  this.user_answer = ''
              }

              const answer_field = document.querySelector('#answer_field_1');
              answer_field.classList.replace('border-primary-2', 'border-red-500')
              answer_field.classList.add('animate-pulse')
              setTimeout(() => {
                  answer_field.classList.remove('animate-pulse')
                  answer_field.classList.replace('border-red-500', 'border-primary-2')
              }, 1000)
          }
      }
  })