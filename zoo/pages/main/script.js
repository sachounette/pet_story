const pets = [
    {
        "name": "giant Pandas",
        "imageLink": "../../assets/images/pandas.jpg",
        "type": "../../assets/icons/banana-bamboo_icon.svg",
        "description": "Native to Southwest China"
    },
    {
            "name": "Eagles",
            "imageLink": "../../assets/images/eagle.jpg",
            "type": "../../assets/icons/meet-fish_icon.svg",
            "description": "Native to South America"
    },
    {
        "name": "Gorillas",
        "imageLink": "../../assets/images/gorilla.jpg",
        "type": "../../assets/icons/banana-bamboo_icon.svg",
        "description": "Native to Congo",
    },

{
    "name": "Two-toed Sloth",
    "imageLink": "../../assets/images/sloth.jpg",
    "type": "../../assets/icons/banana-bamboo_icon.svg",
    "description": "Mesoamerica, South America"
},
{
    "name": "cheetahs",
    "imageLink": "../../assets/images/cheetas.jpg",
    "type": "../../assets/icons/meet-fish_icon.svg",
    "description": "Native to Africa"
},
{
    "name": "Penguins",
    "imageLink": "../../assets/images/pinguino.jpg",
    "type": "../../assets/icons/meet-fish_icon.svg",
    "description": "Native to Antarctica"
},


]

class Pet {
    constructor(name,imageLink,type, description) {
      this.name = name;
      this.imageLink = imageLink;
      this.type = type;
      this.description = description;
    

    }
    draw() {
        const petsContainer = document.querySelector('.pets-container');
        for (let i = 0; i < pets.length; i++){
            let pet = document.createElement('div');
            pet.classList.add('pet-card');
            petsContainer.append(pet);

            let petImage = document.createElement('img');
            petImage.src = pets[i].imageLink;
            pet.append(petImage);


            let petInfo = document.createElement('div');
            petInfo.classList.add('pet-info')
            pet.append(petInfo);

            let petText = document.createElement('div');
            petText.classList.add('pet-text')
            petInfo.append(petText);


            let petH5 = document.createElement('h5');
            petH5.textContent =  pets[i].name;
            petText.append(petH5);

            let petdescr = document.createElement('p');
            petdescr.textContent =  pets[i].description;
            petText.append(petdescr);

            let petType = document.createElement('img');
            petType.classList.add('pet-type');
            petType.src = pets[i].type;
            petInfo.append(petType);


            
        }
    }
  }

 let addPets = new Pet().draw();






 const feedbacks = [
    {
        "name": "Michael John",
        "imageLink": "../../assets/icons/anon.svg",
        "type": "Today",
        "description": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."

    },
    {
            "name": "Oskar Samborsky",
            "imageLink": "../../assets/icons/oskar.svg",
            "type": "Yesterday",
            "description": "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
    },
    {
        "name": "Fredericka Michelin",
        "imageLink": "../../assets/icons/frederika.svg",
        "type": "Yesterday",
        "description": "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
    },

{
    "name": "Mila Riksha",
    "imageLink": "../../assets/icons/mila.svg",
    "type": "Yesterday",
    "description": "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals."
},
]






 class Feedback {
    constructor(name,imageLink,type, description) {
      this.name = name;
      this.imageLink = imageLink;
      this.type = type;
      this.description = description;
    

    }

    draw() {
        const feedbackContainer = document.querySelector('.feedbacks');
        for (let i = 0; i < feedbacks.length; i++){
            let feedback = document.createElement('div');
            feedback.classList.add('feedback-card');
            feedbackContainer.append(feedback);

            const feedbackHeader = document.createElement('div');
            feedbackHeader.classList.add('feedback-header');
            feedback.append(feedbackHeader);

            const feedbackAvatar = document.createElement('img');
            feedbackAvatar.src = feedbacks[i].imageLink;
            feedbackHeader.append(feedbackAvatar);

            const feedbackTitle = document.createElement('div');
            feedbackTitle.classList.add('feedback-title');
            feedbackHeader.append(feedbackTitle);

            const customerName = document.createElement('h6');
            customerName.classList.add('customer-name');
            customerName.textContent = feedbacks[i].name;
            feedbackTitle.append(customerName);


            const feedbackText = document.createElement('p');
            feedbackText.classList.add('feedback-text');
            feedbackText.textContent = feedbacks[i].description;
            feedback.append(feedbackText);

        
        
        }
}

}



let addFeedback = new Feedback().draw();