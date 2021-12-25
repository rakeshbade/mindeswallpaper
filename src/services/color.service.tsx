const createColorPalette = (item: any) => {
    const colors = item.swatches;
    const backgroundColor = colors[1].hex;
    const patternColor = colors[2].hex;
    const textColor = colors[3].hex;
    const id = item.id;
    
    return {
        background: convertHexToRGBA(backgroundColor),
        pattern: convertHexToRGBA(patternColor, .7),
        text: convertHexToRGBA(textColor),
        id: id
    }
}

const convertHexToRGBA = (hexCode: string, opacity = 1) => {  
    let hex = hexCode.replace('#', '');
    
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }    
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
        opacity = opacity / 100;   
    }

    return `rgba(${r},${g},${b},${opacity})`;
};
export { createColorPalette, convertHexToRGBA }