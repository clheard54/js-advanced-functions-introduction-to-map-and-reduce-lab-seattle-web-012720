// Your code here
function mapToNegativize(sourceArray){
    let mapped = []
    for (let i = 0; i<sourceArray.length; i++){
        let x = sourceArray[i]*(-1)
        mapped.push(x)
    }
    return mapped
}

function mapToNoChange(sourceArray){
    let mapped = []
        for (let i = 0; i<sourceArray.length; i++){
            let x = sourceArray[i]
            mapped.push(x)
        }
        return mapped
}

function mapToDouble(sourceArray){
    let mapped = []
    for (let i = 0; i<sourceArray.length; i++){
        let x = sourceArray[i]*(2)
        mapped.push(x)
    }
    return mapped
}

function mapToSquare(sourceArray){
    let mapped = []
    for (let i = 0; i<sourceArray.length; i++){
        let x = sourceArray[i]**2
        mapped.push(x)
    }
    return mapped
}



function reduceToTotal(sourceArray, startingPoint=0){
    let a = startingPoint
    for (let i = 0; i<sourceArray.length; i++){
        a += sourceArray[i]
    }
    return a
}

function reduceToAllTrue(sourceArray){
    let a = true
    for (let i = 0; i<sourceArray.length; i++){
        if (!sourceArray[i]){
        a = false}
    }
    return a
}

function reduceToAnyTrue(sourceArray){
    let a = false
    for (let i = 0; i<sourceArray.length; i++){
        if (!!sourceArray[i]){
        a = true}
    }
    return a
}

