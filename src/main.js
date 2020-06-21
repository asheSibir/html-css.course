const mainIdeaToggle = document.querySelector('.main-idea-block_toggle'),
    mainIdeaToggleLi = mainIdeaToggle.querySelectorAll('li');

    mainIdeaToggleLi.forEach(li => {
        const activeText = document.querySelectorAll('.main-idea-block-text');
        li.addEventListener('click', event => {
            const target = event.target.textContent.toLowerCase();
            activeText.forEach(text => {
                if (text.classList.contains(target)){
                    text.classList.add('active-item');
                    text.style.opacity = '1';
                } else {
                    text.classList.remove('active-item');
                }
            });
        });
    });

    document.addEventListener('click', event => {
        const menuPanel = document.querySelector('.menu-panel'),
        menu = document.querySelector('.menu');
        if (event.target.classList.contains('menu')){
            menuPanel.style.display = 'block';
            menu.style.display = 'none';
        } else {
            menuPanel.style.display = 'none';
        }

    });


$('*');
$('.active-item');
$('#advantages');

console.log($('.active-item'));

$(document).ready(function () {

});