const contacts = [
  {
    id: 1,
    fullName: "Hanif",
    email: "Hanif@gmail.com",
    age: 25,
    hobby: "Design",
  },
  {
    id: 2,
    fullName: "Brilliant",
    email: "Brilliant@gmail.com",
    age: 20,
    hobby: "Organization",
  },
  {
    id: 3,
    fullName: "Almubarak",
    email: "Hanif@gmail.com",
    age: 17,
    hobby: "moutainering",
  },
];

const contactsListContainerElement = document.getElementById("contact-list");
const addContactFormElement = document.getElementById("add-contact-form");

function addContact() {
  const contactFormData = new FormData(addContactFormElement);

  const newContact = {
    id: contacts[contacts.length - 1].id + 1,
    fullName: contactFormData.get("input-fullName"),
    email: contactFormData.get("input-email"),
    hobby: contactFormData.get("input-hobby"),
    // age: contactFormData.get("input-birthDate"),
    age:
      new Date().getFullYear() -
      new Date(contactFormData.get("input-birthDate")).getFullYear(),
  };

  contacts.push(newContact);
  renderContacts();
}


const renderContacts = () => {
  const contactItemElements = contacts.map(
    (contact) => `<li>
<h3>${contact.fullName}</h3>
<p>${contact.email}</p>
<p>${contact.age}</p>
<p>${contact.hobby}</p>
<div>
  <button onclick="deleteContactById(${contact.id})">Delete</button>
</div>
</li>
`
  );

  const contactItems = contactItemElements.join("");
  contactsListContainerElement.innerHTML = contactItems;
};
renderContacts();
addContactFormElement.addEventListener("submit", addContact);

