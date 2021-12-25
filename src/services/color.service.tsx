const createColorPalette = (item: any) => {
    const colors = item.swatches;
    const backgroundColor = colors[1].hex;
    const patternColor = colors[2].hex;
    const textColor = colors[3].hex;
    const id = item.id;
    
    return {
        background: '#' + backgroundColor,
        pattern: '#' + patternColor + 75,
        text: '#' + textColor,
        id: id
    }
}
export { createColorPalette }