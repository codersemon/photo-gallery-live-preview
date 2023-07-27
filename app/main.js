
/**
 * Photo Uploader
 */
const photo = document.getElementById('photo');
const imgWrap = document.querySelector('.img-wrap');

photo.onchange = (e) => {

    const allFiles = e.target.files;
    let imgItem = '';
    for(let i = 0; i < allFiles.length; i++){
        let imgURL = URL.createObjectURL(allFiles[i]);
        imgItem += `<div class="img-item">
        <img src="${imgURL}" class="img-fluid">
        <span class="close-btn">x</span>
      </div>`;
    }
    imgWrap.innerHTML = imgItem;


  removeImg();
}

// remove img 
function removeImg(){
    // select all close btn
    const closeBtns = document.querySelectorAll('.close-btn');

    // add remove to all close btns 
    closeBtns.forEach(item => {
        item.onclick = (e) => {
            e.target.parentElement.remove();
        }
    })
}
