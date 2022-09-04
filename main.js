// let state = '';

// document.addEventListener('click', (e) => {
//     let arr = document.querySelectorAll('button');
//     const classname = e.target.className;
//     if (classname.includes('button')) {
//         arr.forEach(index => {
//             const nam = index.className;
//             if (nam.includes('active')) {
//                 index.classList.remove('active')
//                 state = '';
//             }
//         });
//         let arr1 = classname.split(' ')
//         $('.' + arr1[1]).addClass('active')
//         state = e.target.innerText;
//         console.log(state);
//     }else{
//         arr.forEach(index => {
//             const nam = index.className;
//             if (nam.includes('active')) {
//                 index.classList.remove('active')
//                 state = '';
//             }
//         });
//     }
// })





// window.onload = function(){
//     what();

//     function what() {
//         document.getElementById('output').innerHTML = state;

//     }
// }


const submit_btn = document.querySelector('.submit');
const cardContent1 = document.querySelector('.box1');
const cardContent2 = document.querySelector('.box2');
const buttonWrapper = document.querySelector('.buttonCollector');
const msg1 = document.querySelector('.msg')


for(let i=0; i<buttonWrapper.children.length;i++){
    buttonWrapper.children[i].addEventListener('click', (event)=> {
        for(let i=0;i<buttonWrapper.children.length;i++){
            buttonWrapper.children[i].classList.remove('active');
        }
        event.target.classList.add('active');
        let x = event.target.classList[1].substring(2,3);
        msg1.innerHTML = 'You Selected '+x+' out of 5';
    })
}


submit_btn.addEventListener('click', ()=> {
    cardContent1.classList.add('hide');
    cardContent2.classList.remove('hide');
    // console.log('click hhua')
})