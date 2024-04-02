//load local storage
if (!localStorage.length) {
  let friends = [
    {
      id: 1,
      fullName: "Azyumardi Azra",
      phone: "+623282722",
      hobby: "Futsal",
      age: "26",
    },
    {
      id: 2,
      fullName: "Fagil Arya Baskoro",
      phone: "+623901239",
      hobby: "Bakset",
      age: "24",
    },
    {
      id: 3,
      fullName: "Fairuz Akmal Lanang",
      phone: "+623901239",
      hobby: "Voli",
      age: "25",
    },
  ];

  localStorage.setItem("friends", JSON.stringify(friends));
}

//get element friendlist container
const friendListContainer = document.getElementById("friendListContainer");
tempFriendId = null;

//search name
let searchName = document.getElementById("search");
searchName.addEventListener("input", () => {
  renderElement();
});

//show friendlist
const renderElement = () => {
  let friends = JSON.parse(localStorage.getItem("friends"));

  //if search
  let searchedName = friends.filter((item) =>
    item.fullName.toLowerCase().includes(searchName.value.toLowerCase())
  );
  if (searchName) {
    friends = searchedName;
  }

  let friendList = friends.map(
    (friend) =>
      `<div>
      <h3>${friend.fullName} </h3> 
      <p>Phone : ${friend.phone}</p> 
      <p>Hobby : ${friend.hobby}</p> 
      <p>Age : ${friend.age}</p><div>
      <button onclick="deleteFriend(${friend.id});" >Delete</button>
      <button onclick="editFriend(${friend.id});" >Edit</button>
      </div>`
  );

  friendListElement = friendList.join("");
  friendListContainer.innerHTML = friendListElement;
};

//add friend
const addFriend = () => {
  event.preventDefault();
  let friends = JSON.parse(localStorage.getItem("friends"));

  let fullName = document.getElementById("fullName").value;
  let phone = document.getElementById("phone").value;
  let hobby = document.getElementById("hobby").value;
  let age = document.getElementById("age").value;

  friends.unshift({
    id: Math.floor(Math.random() * 500),
    fullName,
    phone,
    hobby,
    age,
  });

  localStorage.setItem("friends", JSON.stringify(friends));
  renderElement();
};

//delete friendfriendfriend
const deleteFriend = (id) => {
  let friends = JSON.parse(localStorage.getItem("friends"));
  let newFriends = friends.filter((friend) => friend.id !== id);
  localStorage.setItem("friends", JSON.stringify(newFriends));
  renderElement();
};

//edit friend
const editFriend = (id) => {
  let friends = JSON.parse(localStorage.getItem("friends"));
  let editFriend = friends.find((friend) => friend.id == id);

  document.getElementById("fullName").value = editFriend.fullName;
  document.getElementById("phone").value = editFriend.phone;
  document.getElementById("hobby").value = editFriend.hobby;
  document.getElementById("age").value = editFriend.age;

  tempFriendId = editFriend.id;
};

//update friend
const updateFriend = (id) => {
  let friends = JSON.parse(localStorage.getItem("friends"));

  fullName = document.getElementById("fullName").value;
  phone = document.getElementById("phone").value;
  hobby = document.getElementById("hobby").value;
  age = document.getElementById("age").value;

  friends.map((item) => {
    if (item.id == +tempFriendId) {
      item.fullName = fullName;
      item.phone = phone;
      item.hobby = hobby;
      item.age = age;
    }
  });

  localStorage.setItem("friends", JSON.stringify(friends));
  renderElement();
  tempFriendId = null;
};

onload = renderElement(search);
