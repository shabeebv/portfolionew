function sendMail(event){
    event.preventDefault() ;
    var params = {
        name : document.getElementById('name').value ,
        email : document.getElementById('email').value ,
        message : document.getElementById('messagee').value 
    }
    const serviceId = 'service_f051cm5' ;
const templateId = 'template_4mh71fh' ;

emailjs.send(serviceId, templateId, params).then(
    res => {
        console.log("hjihstr");
        document.getElementById('name').value = "" ;
        document.getElementById('email').value = "" ;
        document.getElementById('message').value = "" ;
        console.log(res)
        alert("your message send successfully")
    }
)
.catch(err => console.log(err))
}
