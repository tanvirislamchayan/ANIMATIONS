// document.addEventListener('DOMContentLoaded', () => {
//     const btnDiv = document.querySelector('.buttons');
//     const toastBox = document.getElementById('toastBox');
//     const btns = document.querySelectorAll('button');
//     btns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // console.log(index)
//             let toast = document.createElement('div');
//             toast.classList.add('toast');
//             toast.innerHTML = 'success';
//             toastBox.appendChild(toast);
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const btnDiv = document.querySelector('.buttons');
//     const toastBox = document.getElementById('toastBox');
//     const btns = document.querySelectorAll('button');

//     const success = '<i class="fa-solid fa-circle-check"></i> Success';
//     const warning = '<i class="fa-solid fa-triangle-exclamation"></i> Warning';
//     const info = '<i class="fa-solid fa-circle-info"></i> Info';
//     const error = '<i class="fa-solid fa-circle-xmark"></i> Error';
    

//     btns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // Create the toast element
//             let toast = document.createElement('div');
//             toast.classList.add('toastboxes', 'm-2', 'rounded');
//             toast.textContent = 'Success'; // Add text content

//             // Append the toast to the toastBox
//             toastBox.appendChild(toast);
//         });
//     });
// });


const btnDiv = document.querySelector('.buttons');
const toastBox = document.getElementById('toastBox');
const btns = document.querySelectorAll('button');

const success = '<i class="fa-solid fa-circle-check"></i> Successfully Submited!';
const warning = '<i class="fa-solid fa-triangle-exclamation"></i> Warning! Please Check Again';
const info = '<i class="fa-solid fa-circle-info"></i> You are now able to access funcionalities';
const error = '<i class="fa-solid fa-circle-xmark"></i> You are not allowed to access this page please contract the administrator';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toastboxes', 'ms-3', 'me-3', 'my-2', 'rounded');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('fa-circle-check')) {
        toast.classList.add('success');
    } else if(msg.includes('fa-triangle-exclamation')) {
        toast.classList.add('warning');
    } else if(msg.includes('fa-circle-info')) {
        toast.classList.add('info');
    } else if(msg.includes('fa-circle-xmark')) {
        toast.classList.add('error');
    }

    setTimeout(() => {
        toast.remove();
    },4000)
}
