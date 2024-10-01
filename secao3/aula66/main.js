function timer(){
    function getTimeSeconds(s) {
        const date = new Date(s * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    const timer = document.querySelector('.timer')
    let seconds = 0
    let clock
    
    function timerInit() {
        clock = setInterval(function(){
            seconds++
            timer.innerHTML = getTimeSeconds(seconds)
        }, 1000)
    }
    
    document.addEventListener('click', function(e){
        const el = e.target
    
        if (el.classList.contains('clear')) {
            timer.classList.remove('paused')
            clearInterval(clock)
            timer.innerHTML = '00:00:00'
            seconds = 0
        }
    
        if (el.classList.contains('start')) {
            timer.classList.remove('paused')
            clearInterval(clock)
            timerInit()
        }
    
        if (el.classList.contains('pause')) {
            clearInterval(clock)
            timer.classList.add('paused')
        }
    })
}

timer()