function myfunction(data1: number, data2: number) {
    if (data2) {
        console.log(data1 + data2)
    }
    else {
        console.log("data2 not available")

    }
}
// myfunction(1)
// myfunction(1, false)
myfunction(1, 2)