var sendbtn = document.getElementById('sendbtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var user = {message:""};

var arrayOfPossiblemessage = [
    {message:"hi",Response:"hello"},
    {message:"what is your name",Response:"I'm a ChatBot"},
    {message:"can you help me understand the basics of blockchain technology",Response:"Blockchain is a decentralized ledger technology that records transactions in a chain of blocks, ensuring transparency and security through cryptographic hashes"},
    {message:"what's a technical based chatbot",Response:"a technical-based chatbot is an AI system designed to provide assistance and answer queries related to technical topics. "},
    {message:"what is your favourite food",Response:"pizza"},
    {message:"how can you assist me",Response:"basically i am a technical-based chatbot, You can ask anything within the topic."},


]
function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";


    messageElement.innerHTML = "<span> You: </span>"+
                               "<span>" +userMessage+ "</span>";
    chatContainer.appendChild(messageElement);                           


}
function chatbotResponse(userMessage){

    var chatbotmessage="";

    if (userMessage.length > 5 || userMessage == "hi"){
        var result = arrayOfPossiblemessage.filter(val => val.message.includes(userMessage.toLowerCase()));

        if(result.length > 0){
            var Response = result[0].Response;
            chatbotmessage = Response;
        }else{
            chatbotmessage = "Please try a different question";
        }
    }

    

    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span> Chatbot: </span>"+
                                "<span>"+chatbotmessage+"</span>"



    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);  
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000)
                                                        

}
sendbtn.addEventListener('click', function(e){

    var userMessage = textbox.value;

    if(userMessage == ""){
        alert('Please type in a message')
    }else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }

})