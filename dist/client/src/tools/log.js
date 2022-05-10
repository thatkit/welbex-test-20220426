"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const log = (variable) => {
    const key = variable.constructor.name;
    console.log(`${key}: `, variable);
};
exports.log = log;
//# sourceMappingURL=log.js.map