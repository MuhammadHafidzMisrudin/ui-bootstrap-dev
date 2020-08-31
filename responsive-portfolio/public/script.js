/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 31/08/2020
    Date last updated: 31/08/2020
*/
$(() => {
    // test jquery section.
    console.log("page ready!");
    function notify() {
        alert("my dev project button clicked!");
    }
    $(".section-1-btn").on( "click", notify );
});