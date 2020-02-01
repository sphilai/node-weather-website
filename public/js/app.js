console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })

})

fetch('/weather?address=london').then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log(data.error)
        }
        else{
            console.log(data.forecast)
            console.log(data.location)
            console.log(data.address)
        }
        
    })

})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const lcation = search.value

    messageOne.textContent= 'Loading.....'
    messageTwo.textContent= ''


    fetch('/weather?address='+lcation).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            messageOne.textContent= data.error
        }
        else{
            messageOne.textContent = data.forecast
            messageTwo.textContent = data.location
           // messageOne.textContent= data.address
        }
        
    })

})
    // console.log('lcation '+lcation)
})
