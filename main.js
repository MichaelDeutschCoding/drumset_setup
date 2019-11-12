const drumKit = ["snare", "boom", "kick", "clap", "hihat", "openhat", "ride", "tink", "tom"];
const main = document.getElementById("main");

const capitalize = (s) => {
    if (typeof(s) !== "string") return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function addDrum(text) {
    let new_audio = document.createElement("audio");
    let source = document.createElement("source");
    source.type = "audio/wav";
    source.src = "sounds/" + text +".wav";
    new_audio.appendChild(source);

    let butt = document.createElement("button");
    butt.innerHTML = capitalize(text);
    butt.addEventListener("click", function() {
        new_audio.play();
    })
    main.appendChild(butt);
}

for (let i=0; i<drumKit.length; i++) {
    addDrum(drumKit[i])
}