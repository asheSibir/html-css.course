const showBlock = () => {
    try {
        const jsBlock = document.getElementById('jscript');
        jsBlock.addEventListener('click', (ev) => {
            ev.preventDefault();
            const target = ev.target;
            if (target.closest('.panel-heading')){
                const collapse = target.closest('.panel-default').children[1];
                if (collapse){
                    collapse.classList.toggle('in');
                }
            }
        });
    } catch(e) {

    }
};
export default showBlock;
