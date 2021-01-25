window.onload = function (){
    const burgerMenu = {
        body: document.querySelector('body'),
        block: document.querySelector('.burgerMenu'),
        open(){
            this.block.classList.add('open')
            this.body.style.overflowY = 'hidden'

        },
        close(){
            this.block.classList.remove('open')
            this.body.style.overflowY = 'auto'
    }
    }
    const inputs = document.querySelectorAll('.input')
    document.querySelector('.formButton').addEventListener('click', (e) => {
        e.preventDefault()
        let ar = []
        inputs.forEach(input => {
          if (input.value ==- '' && input.value.length < 3){
              input.style.borderBottom = '1px solid #FD8080'
              ar.push(input)
          }else{
            input.style.borderBottom = '1px solid #82FF90'
          }
        })
        if (ar.length === 0){
            //Первая валидация , которая пришла в голову :)
        }

    })
    document.querySelector('.burger').addEventListener('click', () => burgerMenu.open())
    document.querySelector('.close').addEventListener('click', () => burgerMenu.close())
    document.querySelectorAll('.button').forEach(btn => btn.addEventListener('click', () => btn.parentNode.querySelector('.overlay').classList.add('openOverlay')))
    document.querySelectorAll('.closeOverlay').forEach(btn => btn.addEventListener('click', () => btn.parentElement.classList.remove('openOverlay')))
    document.querySelectorAll('#anchorContainer li').forEach(li => li.addEventListener('click', (e) => {
        e.preventDefault()
        let block = li.querySelector('a').getAttribute('href')
        document.querySelector(`#${block}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        burgerMenu.close()
    }))


    $('.theySaysSlider').slick({
        prevArrow: $('.theySaysSliderLeft'),
        nextArrow: $('.theySaysSliderRight')
    })
    $('.aboutUsSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    })

}