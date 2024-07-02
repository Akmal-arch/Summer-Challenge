const inventory = document.querySelector('.inventory');
const container = document.querySelector('.container');
inventory.style.transform = 'scale(0)';
container.style.transform = 'scale(0)';
let opener = false;

window.addEventListener('keydown', (e) => {
    if(e.key === 'e') {
        if(opener) {
            opener = false;
            inventory.style.transform = 'scale(0)';
            container.style.transform = 'scale(0)';
            document.querySelector('.span1').style.display = 'block';
            document.querySelector('.span2').style.display = 'block';
        } else {
            opener = true;
            inventory.style.transform = 'scale(1)';
            container.style.transform = 'scale(1)';
            document.querySelector('.span1').style.display = 'none';
            document.querySelector('.span2').style.display = 'none';
        }
    }
})