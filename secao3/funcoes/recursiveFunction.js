function recursive(max){
    if(max >= 11283) return
    max++
    console.log(max)
    recursive(max)
}

recursive(0)