// linia poniżej "łapie" element z HTMLa - czyli nasz "input" w którym uzytkownik wpisuje liczbę
const inputValue = document.getElementById("amount");
// linia poniżej "łapie" element z HTMLa, do którego będziemy "wstrzykiwać" wynik - czyli ile kg smieci
const resultElement = document.getElementById("results");
console.log("skrypt")
// linia poniżej to tzw. "event listener", czyli pod nasz "input" podłączamy nasłuchiwanie "eventu" o
// nazwie "change". Czyli jak nazwa wskazuje - na każdą zmianę inputa (czyli na każdą wpisaną liczbę)
// reagujemy wykonując funkcję która oblicza ile kg śmieci zostanie wytrzoworznych przez daną liczbę osób
inputValue.addEventListener("change", function(event) {
    console.log("triggered")
    // event to parametr ktory automagicznie przekazywany jest do funkcji, jest to obiekt ktory
    // zawiera w sobie rozne dziwne rzeczy, ale dla was najwazniejsza jest "jaka wartosc zostałą wpisana".
    // dlatego event.target.value -> tam jest "trzymana wartosc z inputa".

    // Podobno rocznie przypada średnio 358kg śmieci komunalnych na osobę więc
    // mnożymy liczbę osób x 358 i otrzymamy ilość kg śmieci rocznie
    const calculate = event.target.value * 358;
    
    resultElement.innerHTML = calculate;
})
