/* Slider - Splide JS */
function splideTeam() {
    // Cible le composant grâce à ses classes 
    let splides = document.querySelectorAll('.splide.is-team');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        // Ouvre les paramètres du slider
        new Splide(splides[i], {
            // Personnalisez les options souhaitées ici
            type: 'loop',
            speed: 3000,
            autoWidth: false,
            perPage: 1,
            arrows: false,
            pagination: false,
            autoplay: true,
            drag: true
        }).mount( window.splide.Extensions );
    }
}
splideTeam();  