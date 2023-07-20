const sentence = document.querySelector(".joke_section_sentence"),
    button = document.querySelector(".joke_section_btn"),
    arr = [
        "How do you make a 'one' disappear? You add a 'g' and it's 'gone'",
        "How are false teeth like stars? They come out at night!",
        "I went to a Foo Fighters Concert once... It was Everlong...",
        "How do you organize a space party? You planet.",
        "Why did the cookie cry? It was feeling crumby.",
        "I got a reversible jacket for Christmas, I can't wait to see how it turns out.",
        "What's blue and not very heavy? Light blue.",
        "I'm practicing for a bug-eating contest and I've got butterflies in my stomach.",
        "Someone broke into my house last night and stole my limbo trophy. How low can you go?",
        "Somebody stole my Microsoft Office and they're going to pay - you have my Word.",
    ];

function getRandomSentence(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

window.addEventListener("load", () => {
    sentence.textContent = getRandomSentence(arr);
});

button.addEventListener("click", () => {
    sentence.textContent = getRandomSentence(arr);
});
