import XButton from './button.vue'

XButton.install = function(app) {
    app.component(XButton.name, XButton)
}

export const Button = XButton

export default XButton
