const defaultPadding = 3

const padding = 5
const drawRects = (data, i = -1, j = -1, show = 'bar-count') => {
    let barWidth = Math.floor((canvas.width - (data.length * padding - defaultPadding)) / data.length)
    let counter = 0
    for (const rect of data) {
        if (counter === i) {
            ctx.fillStyle = 'red'
        }
        if (counter === j) {
            ctx.fillStyle = 'blue'
        }
        if (i === undefined || j === undefined) {
            ctx.fillStyle = '#a5f3fc'
        }
        // If the x value is zero default to padding size
        const x = (barWidth + padding) * counter + defaultPadding
        const y = canvas.height - rect
        ctx.fillRect(x, y, barWidth, rect)

        ctx.fillStyle = 'red'
        if (show === 'bar-count') {
            ctx.fillText(counter + 1, x, y - 2)
        }
        else if (show === 'bar-value') {
            ctx.fillText(rect, x, y - 2)
        }
        else {
            ctx.fillText(rect, x, y - 2)
        }
        ctx.fillStyle = '#a5f3fc'

        counter++
    }
}


