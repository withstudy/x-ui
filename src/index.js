import XButton from '../packages/button/index.js'

function install(app){
    app.use(XButton)
}

export default{
    name: require('../package.json').name,
    version: require('../package.json').version,
    install
}