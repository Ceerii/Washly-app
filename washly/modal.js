// Get the modal element
var modal = document.getElementById('simpleModal');

// Open element
var modalBtn = document.getElementById('modalBtn');

// Close element
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for Open Click
modalBtn.addEventListener('click', openModal);

// Listen for Close click
closeBtn.addEventListener('click', closeModal);

// To open the modal
    function  openModal() {
     modal.style.display = 'block';
 }

//  To close the modal
    function closeModal() {
        modal.style.display = 'none';
    }