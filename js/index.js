const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')


const dpi = window.devicePixelRatio
function fix_dpi() {
    let style = {
        height() {
            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2)
        },
        width() {
            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2)
        }
    }
    canvas.setAttribute('width', style.width() * dpi)
    canvas.setAttribute('height', style.height() * dpi)
}
fix_dpi()