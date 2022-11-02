
let showValue = 'bar-count'
let arraySize = 10
let data = Array.from({ length: arraySize }, () => Math.floor(Math.random() * canvas.height))

ctx.fillStyle = '#22d3ee'
ctx.strokeStyle = '#22d3ee'

console.log({ dpi })


let i = 0, j = 1
let animationId
const bubbleSortFn = () => {

    if (data[j] < data[i]) {
        let temp = data[j]
        data[j] = data[i]
        data[i] = temp
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRects(data, i + 1, j, show = showValue)
    j++
    if (j === data.length) {
        i++
        j = i + 1
    }
    if (i >= data.length) {
        drawRects(data, show = showValue)
        cancelAnimationFrame(animationId)
    }
    if (i < data.length - 1) {
        animationId = requestAnimationFrame(bubbleSortFn)
    }
}
animationId = requestAnimationFrame(bubbleSortFn)

const reset = (length = 10) => {

    data = Array.from({ length }, () => Math.floor(Math.random() * canvas.height))
    i = 0, j = 1
    animationId = requestAnimationFrame(bubbleSortFn)
}


document.querySelector('#reset').addEventListener('click', () => {
    reset(arraySize)
})
document.querySelector('#number-of-items').addEventListener('change', (e) => {
    arraySize = +e.target.value
    reset(arraySize)
})

document.querySelector('#show-values').addEventListener('change', (e) => {
    showValue = e.target.value

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRects(data, -1, -1, show = showValue,)
})

