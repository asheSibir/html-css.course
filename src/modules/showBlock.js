const showBlock = () => {
    try {
        const jsBlock = document.getElementById('jscript');
        jsBlock.addEventListener('click', (ev) => {
            const target = ev.target,
            openedEl = jsBlock.querySelector('.collapse.in');
            if (openedEl !== target.closest('.panel-default').children[1]){
                openedEl.classList.remove('in');
                target.closest('.panel-default').children[1].classList.add('in');
            }

        });
    } catch(e) {

    }
};
export default showBlock;
