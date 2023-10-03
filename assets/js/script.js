/* Author: 

*/

const images= document.querySelectorAll('.content');
const lists = document.querySelectorAll('.nav-list li');



lists.forEach((list,index) => {

    list.addEventListener('click',() => {
        hideImages();
        hideList();
        list.classList.add('active');
        images[index].classList.add('show')
    })

})
function hideImages(){
    images.forEach(image => {
        image.classList.remove('show');
    })
}
function hideList(){
    lists.forEach(list => {
        list.classList.remove('active');
    })
}

















