
// let question = Array.from(document.getElementsByClassName('question'));
// let answer = Array.from(document.getElementsByClassName('ans'));

// let icon = document.querySelectorAll('.fa-plus');


// question.forEach((el, index) => {
//     el.addEventListener('click', () => {

//         if (answer[index].style.display == 'block') {
//             answer[index].style.display = 'none';
//             icon[index].classList.remove('fa-close')
//         } 
        
//         else {
//             answer.forEach((e) => {
//                 e.style.display = 'none';
//             })
//             answer[index].style.display = 'block';
//             icon[index].classList.add('fa-close')
//         }
       
//     })
// })

// ---------------------------------------------------------------------------------------------------------------- //

let question = Array.from(document.getElementsByClassName('question'));
let answer = Array.from(document.getElementsByClassName('ans'));

var icon = document.querySelectorAll('.fa-plus');


question.forEach((el, index) => {
    el.addEventListener('click', () => {
        
        icon.forEach((i) => {
            i.classList.remove('fa-close');
          });

        if (answer[index].style.height == 'auto') {
            answer[index].style.height = '0';
            answer[index].style.padding = '0';
        } 
        
        else {
            answer.forEach((e) => {
                e.style.height = '0';
                e.style.padding = '0';
            })
            answer[index].style.height = 'auto';
            answer[index].style.padding = '30px 20px';
            icon[index].classList.add('fa-close')
        } 
    })
})



