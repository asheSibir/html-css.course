const test = () => {
    try {
        console.log(123);
    } catch(e) {
        console.warn(e);
    }
};

export default test;