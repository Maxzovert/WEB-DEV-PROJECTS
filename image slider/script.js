(function () {
    const pics = ["one", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];


    const buttons = document.querySelectorAll('.btn')
    const imageDiv = document.querySelector('.img-container')
    let index = 0;


    buttons.forEach(function (buttons) {
        buttons.addEventListener('click', function (e) {
            if (buttons.classList.contains('btn-left')) {
                index--
                if (index < 0) {
                    index = pics.length - 1
                }
                imageDiv.style.backgroundImage = `url('./images/${pics[index]}.jpg')`
            }

            if (buttons.classList.contains('btn-right')) {
                index++
                if (index > pics.length - 1) {
                    index = 0
                }
                imageDiv.style.backgroundImage = `url('./images/${pics[index]}.jpg')`
            }
            
        })
    })
})();