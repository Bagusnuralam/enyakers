const scriptURL = 'https://script.google.com/macros/s/AKfycbxX64ohH7UlPuOieqGL1vlROOFAGxnNl_QCVUZDUzNfBMR-0fhY-XWYh9eQHPqBR3z5/exec'
            const form = document.forms['contact_form'];
            
            const btnLogin= document.querySelector('.btn-login');
            const btnLoading= document.querySelector('.btn-loading');
            const myAlert = document.querySelector('.my-alert');
          
            form.addEventListener('submit', e => {
              e.preventDefault();

              btnLoading.classList.toggle('d-none');
              btnLogin.classList.toggle('d-none');

              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    btnLoading.classList.toggle('d-none');
                    btnLogin.classList.toggle('d-none');
                    myAlert.classList.toggle('d-none');
                    form.reset();

                    console.log('Success!', response)
                })
                .catch(error => console.error('Error!', error.message))
            })