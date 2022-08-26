let state = '';

document.addEventListener('click', (e) => {
    let arr = document.querySelectorAll('button');
    const classname = e.target.className;
    if (classname.includes('button')) {
        arr.forEach(index => {
            const nam = index.className;
            if (nam.includes('active')) {
                index.classList.remove('active')
                state = 0;
            }
        });
        let arr1 = classname.split(' ')
        $('.' + arr1[1]).addClass('active')
        state = e.target.innerText;
        console.log(state);
    }
})





