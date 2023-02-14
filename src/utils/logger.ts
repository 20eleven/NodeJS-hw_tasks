export const logger = (name: string, data: unknown) => {
    console.log(`\x1b[34m${name}:\x1b[0m`, data);
};
