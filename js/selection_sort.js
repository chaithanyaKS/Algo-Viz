
let showValue = 'bar-count'
let arraySize = 10
let arr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * canvas.height))

ctx.fillStyle = '#22d3ee'
ctx.strokeStyle = '#22d3ee'

console.log({ dpi })


let i = 0, j = i + 1, min = i
let animationId
const selectionSortFn = () => {

    if (arr[j] < arr[min]) {
        min = j
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRects(arr, i + 1, j, show = showValue)
    console.log({ i, j, min })
    j++
    if (j === arr.length) {
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp

        i++
        j = i + 1
        min = i
    }
    if (i >= arr.length) {
        drawRects(arr, show = showValue)
        cancelAnimationFrame(animationId)
    }
    if (i < arr.length) {
        animationId = requestAnimationFrame(selectionSortFn)
    }
}
animationId = requestAnimationFrame(selectionSortFn)

const reset = (length = 10) => {

    arr = Array.from({ length }, () => Math.floor(Math.random() * canvas.height))
    i = 0, j = 1
    animationId = requestAnimationFrame(selectionSortFn)
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
    drawRects(arr, -1, -1, show = showValue,)
})

