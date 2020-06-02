const showBlock = () => {
    try {
        const jsBlock = document.getElementById('jscript'),
        pageProof = document.getElementById('html-css');

        document.addEventListener('click', (ev) => {
            ev.preventDefault();
            const target = ev.target;
            if (target.closest('#jscript') || target.closest('#html-css')){
                if (target.closest('.panel-heading')){
                    document.querySelector('.in').classList.remove('in');
                    const collapse = target.closest('.panel-default').children[1];
                    if (collapse){
                        collapse.classList.toggle('in');
                    }
                }
            }
        });
    } catch(e) {

    }
};
export default showBlock;
