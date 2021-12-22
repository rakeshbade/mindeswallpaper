const createColorPalette = (item: any) => {
    const colors = item.swatches;
    const backgroundColor = colors[0].hex;
    const patternColor = colors[Math.floor(colors.length / 2)].hex;
    const textColor = colors[Math.floor(colors.length - 1)].hex;
    const id = item.id;
    
    return {
        background: '#' + backgroundColor,
        pattern: '#' + patternColor + 70,
        text: '#' + textColor,
        id: id
    }
}
export { createColorPalette }