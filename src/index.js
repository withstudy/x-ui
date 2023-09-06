import * as Components from "../packages/index.js";
export * from "../packages/index.js";
console.log(Components);
function install(app) {
    Object.keys(Components).forEach((key) => {
        app.use(Components[key]);
    });
}

export default {
    name: require("../package.json").name,
    version: require("../package.json").version,
    install,
    ...Components,
};
