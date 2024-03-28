let contacts = [
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

const searchInputElement = document.getElementById("search-input");
const contactsListContainerElement = document.getElementById("contact-list");
const addContactFormElement = document.getElementById("add-contact-form");

const addContact = (event) => {
  event.preventDefault();

  const contactFormData = new FormData(addContactFormElement);

  const newContact = {
    id: contacts[contacts.length - 1].id + 1,
    fullName: contactFormData.get("fullName-input"),
    email: contactFormData.get("email-input"),
    hobby: contactFormData.get("hobby-input"),
    // age: contactFormData.get("input-birthDate"),
    age:
      new Date().getFullYear() -
      new Date(contactFormData.get("birthDate-input")).getFullYear(),
  };

  contacts.push(newContact);
  renderContacts();
};

function renderContacts() {

  const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const keyword = params.get("search-input");
  
    if (keyword) {
      searchInputElement.value = keyword;
  
      const filteredContacts = contacts.filter((contact) =>
        contact.fullName.toLowerCase().includes(keyword.toLowerCase())
      );
  
      contacts = filteredContacts;
    }

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
}

function deleteContactById(id) {

  let updatedContacts = contacts.filter(contacts => contacts.id !== id);

  contacts = updatedContacts;
  

  renderContacts();
}

window.addEventListener("load", renderContacts);
addContactFormElement.addEventListener("submit", addContact);
