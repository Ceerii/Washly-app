$(document).ready(() => {
    $('#findlaundry').on('submit', (e) => {
      let searchlaundry = $('#searchlaundry').val();
      getLaundyPlaces(searchlaundry);
        e.preventDefault();
    });
});

function getLaundyPlaces(searchlaundry){
    // console.log(searchlaundry);
  axios.get('http://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-9.0820,8.6753&radius=100&type=laundry&key=AIzaSyBxU97S2aPp4TM1irLJIYFgWzeh_BLBfPI')
   .then((response) => {
       console.log(response);
   })
   .catch((err) =>{
       console.log(err);
   })
}