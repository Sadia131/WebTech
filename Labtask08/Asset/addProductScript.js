const Name=document.getElementById('Name')
const Buy_Price=document.getElementById('Buy_Price')
const Sell_Price=document.getElementById('Sell_Price')

const form = document.getElementById("form")

form.addEventListener('submit', (e) => {

    if (
        isEmpty(Name, "Name") ||
        isEmpty(Buy_Price,"Buy_Price") ||
        isEmpty(Sell_Price,"Sell_Price")
    )
        e.preventDefault()
});

function isEmpty (element, msg)
{
    if (element.value === '' ||  element.value == null)
    {
       window.alert(msg+ " is empty")
       return true
    }
    else return false
    
}