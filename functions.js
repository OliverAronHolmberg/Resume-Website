

function CopyFunction() {
    const button = document.getElementById("MailID");
    const email = button.textContent.trim();



    navigator.clipboard.writeText(email)

    
}