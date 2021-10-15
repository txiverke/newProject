const webpack_analyze = require("./webpack.analyze")
// @ponicode
describe("webpack_analyze", () => {
    test("0", () => {
        let callFunction = () => {
            webpack_analyze()
        }
    
        expect(callFunction).not.toThrow()
    })
})
