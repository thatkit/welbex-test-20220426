export const log = (variable: object) => {
    const key = variable.constructor.name;
    console.log(`${key}: `, variable);
}