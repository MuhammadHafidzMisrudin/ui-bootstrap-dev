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
    $(".section-1-btn").on("click", notify);

    // Set a variable to get the navbar element.
    const navbar = document.querySelector(".navbar");

    // Set a variable to get the initial position for navbar.
    const navbarOffSetTop = navbar.offsetTop;
    
    window.addEventListener("scroll", () => {
        // property (pageYOffset) -> returns the distance in pixels that has beem scrolled up vertically.
        // property (offsetTop) -> returns the distance from the top edge of the page to the navbar element.

        // compare the page-y-offset to the initial position of navbar.
        if (window.pageYOffset >= navbarOffSetTop) {
            console.log("it has reached sticky section!");
            navbar.classList.add("sticky-navbar");
        } else {
            console.log("no sticky section");
            navbar.classList.remove("sticky-navbar");
        }
    });
});