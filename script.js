document.addEventListener("DOMContentLoaded", function () {
    const siBtn = document.getElementById("siBtn");
    const noBtn = document.getElementById("noBtn");
    const pregunta = document.getElementById("pregunta");
    const gifInicial = document.querySelector(".gif-inicial");
    const gifNo = document.getElementById("gifNo");
    document.body.classList.add("fondo-difuminado");

    let scaleFactor = 1;
    let mensajes = ["¿Segura?", "Piénsalo bien pe", "Es tu última chance", "ACEPTA PS OE","Voy a contar hasta 3", "1", "2", "3", "No hagas esto más difícil", "BASTAAAAAA", "Cánsate pe", "Insertar texto", "ACEPTA CHERIII", "Y sigues :(", "¿qué esperas?", "Ahorita le digo a tu mamá", "Fuiste pe"];
    let mensajeIndex = 0;
    let clickNoCount = 0;

    noBtn.addEventListener("click", function () {
        scaleFactor += 1.5;
        siBtn.style.transform = `scale(${scaleFactor})`;
        siBtn.style.transition = "transform 0.3s ease";

        if (scaleFactor >= 27) {
            noBtn.style.display = "none";
            return;
        }

        this.textContent = mensajes[mensajeIndex];
        mensajeIndex = (mensajeIndex + 1) % mensajes.length;

        clickNoCount++;

        if (clickNoCount === 1) {
            gifInicial.style.display = "none";

            const gifElement = document.createElement("img");
            gifElement.src = "/images/Bugcat Sticker by Capoo (1).gif"; 
            gifElement.alt = "Primer intento de rechazo";
            gifElement.classList.add("gif-no");
            gifNo.appendChild(gifElement);
        } 

        else if (clickNoCount === 2) {
            gifNo.innerHTML = ""; 

            const finalGifElement = document.createElement("img");
            finalGifElement.src = "/images/Sad Cat Sticker by Capoo.gif"; 
            finalGifElement.alt = "Reacción definitiva al No";
            finalGifElement.classList.add("gif-no");
            gifNo.appendChild(finalGifElement);
        }

        if (clickNoCount >= 4 && scaleFactor < 26) {
            const maxX = window.innerWidth - noBtn.offsetWidth;
            const maxY = window.innerHeight - noBtn.offsetHeight;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            noBtn.style.position = "absolute";
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
        }
    });

    siBtn.addEventListener("click", function () {
        pregunta.innerHTML = `
            <h1>¡Sabía que aceptarías!</h1>
            <img src="/images/Heart Love Sticker by Capoo.gif" alt="Imagen romántica" class="gif-final">
            <h2>Si no, te secuestraba</h2>
            <h3>Te quiero mi cachetona, nos vemos el viernes</h3>
            <button id="verSorpresa">Ver sorpresa</button>
        `;
    
        const verSorpresa = document.getElementById("verSorpresa"); 
        const modalVideo = document.getElementById("modalVideo");
        const videoSorpresa = document.getElementById("videoSorpresa");
        const verOtraSorpresa = document.getElementById("verOtraSorpresa");
    
        verOtraSorpresa.classList.remove("show");
    
        verSorpresa.addEventListener("click", function () {
            modalVideo.classList.remove("hidden");
            modalVideo.style.display = "flex";
            videoSorpresa.play();
        });
    
        videoSorpresa.addEventListener("ended", function () {
            verOtraSorpresa.classList.add("show");
            document.getElementById("mensajeAgain").classList.remove("hidden");
        });
    });
    const modalImagen = document.getElementById("modalImagen");
    const audioSorpresa = document.getElementById("audioSorpresa");
    const cerrarModal = document.getElementById("cerrarModal");

    verOtraSorpresa.addEventListener("click", function () {
        modalImagen.classList.remove("hidden");
        modalImagen.style.display = "flex";
        audioSorpresa.play();
        const mensajeRepetir = document.createElement("div");
        mensajeRepetir.classList.add("mensaje-repetir");
        mensajeRepetir.innerHTML = "🔼 Repítelo las veces que quieras jeje (desliza hacia abajo si estás en tu celu)";
        document.body.appendChild(mensajeRepetir);
    });

    cerrarModal.addEventListener("click", function () {
        modalImagen.classList.add("hidden");
        modalImagen.style.display = "none";
        audioSorpresa.pause();
        audioSorpresa.currentTime = 0;

    });

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            document.querySelectorAll(".gif-lateral").forEach(gif => {
                gif.style.opacity = "1";
            });
        }, 1000);
    });

});