export function getWindowSize() {
    const { innerWidth: width, innerHeight: height } = window;
    const item = {
        width,
        height
    };
    return item;
}
