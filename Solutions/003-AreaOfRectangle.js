function calculateArea (length, width){
    if(length <= 0){
        throw new RangeError ("Length should be a Positive Number")
    }
     if(width <= 0){
        throw new RangeError ("width should be a Positive Number")
    }
    const area = length * width

    return console.log(`the area of rectangle: ${area}`)
}

calculateArea(20, 40)        //800
calculateArea(1, 1)          // 1
calculateArea(2.5, 4)        // 10
// calculateArea(0, 5)          // range error
// calculateArea(-3, 500)         // Range error
calculateArea("3", 4)       // 12
calculateArea("abc", 4)     // NaN
calculateArea(4)             // NaN
