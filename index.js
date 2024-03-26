const listContact = [
  {
    id: 1,
    fullName: "Hanif",
    age: 25,
    hobby: "Design",
  },
  {
    id: 2,
    fullName: "Brilliant",
    age: 20,
    hobby: "Organization",
  },
  {
    id: 3,
    fullName: "Almubarak",
    age: 17,
    hobby: "moutainering",
  },
];

const addContact = (fullName, age, hobby) => {
  let id = listContact.length + 1;

  listContact.push({ id, fullName, age, hobby });
};

const renderContact = (item) => {
  console.log(
    `${item.id}. Nama Lengkap :${item.fullName} Umur : ${item.age} Hobby : ${item.hobby}`
  );
};


addContact("brilliant hanif", 25, "memancing");
listContact.map(renderContact);
