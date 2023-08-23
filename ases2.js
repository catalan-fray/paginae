.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, #0000008c 0%, #0000008c 100%), url('../images/fondo.jpg');
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 95%, 0 80%);
    z-index: -1;
}
