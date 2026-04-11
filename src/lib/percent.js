const getPercent = (maxCount, variantCount) => {
    let div = (100 / maxCount) * variantCount
    
    if (Number.isNaN(div)) {
        div = 0
    }

    return div.toFixed(1)
}

export default getPercent