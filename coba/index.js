let contacts = [
    {
      id: 1,
      fullName: "Brilliant",
      phone: "+083321232211",
      email: "brilliant@mail.com",
      hobby: "Memancing",
      age: 30,
    },
    {
      id: 2,
      fullName: "Hanif",
      phone: "+082134843810",
      email: "hanif@hanif.com",
      hobby: "Memasak",
      age: 52,
    },
    {
      id: 3,
      fullName: "Jeff Bezos",
      phone: "+0824567890",
      email: "jeff@jeff.com",
      hobby: "Mengkoding",
      age: 60,
    },
  ];
  
  const searchInputElement = document.getElementById("search-input");
  const addContactFormElement = document.getElementById("add-contact-form");
  const contactsContainerElement = document.getElementById("contacts-container");
  
  function renderContacts() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const keyword = params.get("q");
  
    if (keyword) {
      searchInputElement.value = keyword;
  
      const filteredContacts = contacts.filter((contact) =>
        contact.fullName.toLowerCase().includes(keyword.toLowerCase())
      );
  
      contacts = filteredContacts;
    }
  
    const contactItemElements = contacts.map(
      (contact) => `<li>
    <h2>${contact.fullName}</h2>
    <p>${contact.email}</p>
    <p>${contact.phone}</p>
    <p>${contact.hobby}</p>
    <p>${contact.age}</p>

    
    <div>
      <button onclick="deleteContactById(${contact.id})">Delete</button>
    </div>


  </li>
  `
    );
    const contactItems = contactItemElements.join("");
    contactsContainerElement.innerHTML = contactItems;
  }
  
  function addContact(event) {
    event.preventDefault();
    
    const contactFormData = new FormData(addContactFormElement);
  
    const newContact = {
      id: contacts[contacts.length - 1].id + 1,
      fullName: contactFormData.get("fullName"),
      email: contactFormData.get("email"),
      phone: contactFormData.get("phone"),
      hobby: contactFormData.get("hobby"),
      birthDate: new Date(contactFormData.get("birthDate")),
      age:
      new Date().getFullYear() -
      new Date(contactFormData.get("birthDate")).getFullYear(),
    };
  
    contacts.push(newContact);
    renderContacts();
  }
  
  function deleteContactById(id) {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== Number(id)
    );
  
    contacts = updatedContacts;
    renderContacts();
  }
  
  function updateContactById(id) {
    // delete
  }
  
  window.addEventListener("load", renderContacts);
  
  addContactFormElement.addEventListener("submit", addContact);