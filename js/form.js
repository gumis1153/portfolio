// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", "send_mail.php"); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2');
heading.style.fontFamily = "'Cinzel', serif";
heading.style.fontWeight = "300";
heading.style.fontSize = "16px"; // Heading of Form
heading.innerHTML = "Formularz kontaktowy ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var titlelabel = document.createElement('label'); // Create Label for Name Field
titlelabel.innerHTML = "Temat : "; // Set Field Labels
createform.appendChild(titlelabel);

var inputelement = document.createElement('input');
// Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("title", "dtitle");
inputelement.style.border = "1px solid ##403f3d";
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Twój adres mail : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Twoja wiadomość : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input');
// Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
submitelement.value = "wyślij";
createform.appendChild(submitelement);