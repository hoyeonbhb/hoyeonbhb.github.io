

function envelope_ac(){
    let lock_date= document.getElementById('lock_date');
    let keyframes;
    let options;
    let envelope = document.getElementById('envelope');
    keyframes = [
        {opacity: 1},
        {opacity: 1, transform: "translate(0px,960px)" },
    ];
    options = {
                delay: 0,
                duration: 1000,
                easing: "ease-in",
                iterations: 1,
                fill: "forwards"
            };
    setTimeout(() => {
    envelope.animate(keyframes, options);
    }, 2500/3);
}

function ghost_exit(){
    let lock_date= document.getElementById('lock_date');
    let lock = document.getElementById('lock');
    let keyframes;
    let options;
    let ghost = document.getElementById('ghost');
    const click = document.getElementById('click');
    envelope_ac();
    keyframes = [
        {opacity: 1},
        {opacity: 1, transform: "translate(0px,-400px)" },
        {opacity: 1, transform: "translate(0px,560px)" },
    ];
    options = {
                delay: 0,
                duration: 2000,
                easing: "ease-in",
                iterations: 1,
                fill: "forwards"
            };
    ghost.animate(keyframes, options);
    setTimeout(() => {
        ghost.style.left = '160px';
        ghost.style.top = '-250px';
        ghost.style.rotate = '40deg';
        setTimeout(() => {
            keyframes = [
                {scale: 1, opacity: 1},
                {scale: 0.99, opacity: 0.8},
                {scale: 1, opacity: 1},
            ];
            options = {
                delay: 0,
                duration: 3000,
                easing: "ease-in",
                easing: "ease-out",
                iterations: Infinity,
                fill: "forwards"
            };
            ghost.animate(keyframes, options);          
        }, 2000);
        keyframes = [
            {opacity: 0},
            {opacity: 0},
            {opacity: 0},
            {opacity: 0},
            {opacity: 0},
            {opacity: 1},
        ];
        options = {
            delay: 0,
            duration: 2000,
            easing: "ease-in",
            easing: "ease-out",
            iterations: 1,
            fill: "forwards"
        };
        ghost.animate(keyframes, options);
        lock.style.left = '550px';
        lock.style.top = '135px';
        lock.style.opacity = '1';
    }, 4000);
    click.play();
    click.muted = false;
}

function password(){
    let lock_date= document.getElementById('lock_date');
    let lock= document.getElementById('lock');
    let keyframes;
    const video = document.getElementById('bgmusic');
    const click = document.getElementById('click');
    const fail = document.getElementById('fail');
    const success = document.getElementById('success');
    let options;
    let envelope = document.getElementById('envelope');
    lock_date.style.opacity = '1';
    lock_date.style.zIndex = "2";
    keyframes = [
        {opacity: 1},
        { opacity: 1, transform: "translate(50px)" },
        { opacity: 1, transform: "translate(-45px)" },
        { opacity: 1, transform: "translate(40px)" },
        { opacity: 1, transform: "translate(-35px)" },
        { opacity: 1, transform: "translate(30px)" },
        { opacity: 1, transform: "translate(-25px)" },
        { opacity: 1, transform: "translate(20px)" },
        { opacity: 1, transform: "translate(-15px)" },
        { opacity: 1, transform: "translate(10px)" },
        { opacity: 1, transform: "translate(-5px)" },
        { opacity: 1, transform: "translate(0px)" }
    ];
    options = {
        delay: 0,
        duration: 500,
        easing: "ease-in",
        iterations: 1,
        fill: "forwards"
    };
    if(lock_date.value == "2025-04-19"){
        letter_in();
        setTimeout(() => {
            video.muted = false;
            video.play();
        }, 1000);
    }
    else{
        lock_date.animate(keyframes, options);
        fail.play();
        fail.muted = false;
    }
}

function letter_in(){
    let letter = document.getElementById('letter_contain');
    let lock_date= document.getElementById('lock_date');
    let lock= document.getElementById('lock');
    let envelope= document.getElementById('envelope');
    let ghost= document.getElementById('ghost');
    ghost.style.transition = 'all 1s ease-in-out';
    envelope.style.transition = 'all 1s ease-in-out';
    lock.style.transition = 'all 1s ease-in-out';
    lock_date.style.transition = 'all 1s ease-in-out';
    ghost.style.display = "none";
    envelope.style.display = "none";
    lock.style.display = "none";
    lock_date.style.display = "none";
    letter.style.top = "100px";
    letter.style.opacity = "1";
}
