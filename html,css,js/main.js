let audio = document.getElementById('death_sound')
let book = document.querySelector(".container")

book.addEventListener("mouseover", function()
{
        audio.play()
})

book.addEventListener("mouseleave", function()
{
        audio.pause()

})