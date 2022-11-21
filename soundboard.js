const audios = {
    audio1: [".b1", "./mouse-click.mp3"],
    audio2: [".b2", "./shutter.wav"],
    audio3: [".b3", "./burp.wav"]
}

const audioKeys = Object.keys(audios);

for(let i = 0; i < audioKeys.length; i++) {
    const selector = audios[audioKeys[i]][0];
    const audioLink = audios[audioKeys[i]][1];

    const btn = document.querySelector(selector);
    const audioNew = new Audio(audioLink);

    btn.addEventListener("click", () => {
        audioNew.play();
    });

    btn.addEventListener("mouseenter", () => {
        audioNew.play();
    })
}