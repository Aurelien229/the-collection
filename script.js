const collection = [
    {
        picture:"asset/img/lord1.jpg",
        name: "La Communauté de l'anneau",
        director: "Peter Jackson",
        releaseYear: 2001,
        genre: ["Fantaisie"],
        cast: [
            "Elijah Wood",
            "Ian McKellen",
            "Viggo Mortensen",
            "Orlando Bloom",
        ],
    },
    {
        picture:"asset/img/lord2.jpg",
        name: "Les Deux Tours",
        director: "Peter Jackson",
        releaseYear: 2002,
        genre: ["Fantaisie"],
        cast: [
            "Elijah Wood",
            "Ian McKellen",
            "Viggo Mortensen",
            "Orlando Bloom",
        ],
    },
    {
        picture:"asset/img/lord3.jpg",
        name: "Le Retour du roi",
        director: "Peter Jackson",
        releaseYear: 2003,
        genre: ["Fantaisie"],
        cast: [
            "Elijah Wood",
            "Ian McKellen",
            "Viggo Mortensen",
            "Orlando Bloom",
        ],
    },
    {
        picture:"asset/img/forrest.jpg",
        name: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseYear: 1994,
        genre: ["Romance", "Drame", "Comédie"],
        cast: [
            "Tom Hanks",
            "Gary Sinise",
            "Robin Wright",
        ],
    },
    {
        picture:"asset/img/list.jpg",
        name: "La Liste de Schindler",
        director: "Steven Spielberg",
        releaseYear: 1994,
        genre: ["Drame", "Historique", "Biopic"],
        cast: [
            "Liam Neeson,",
            "Ben Kingsley,",
            "Ralph Fiennes",
        ],
    },
    {
        picture:"asset/img/ligne.jpg",
        name: "La Ligne verte",
        director: "Frank Darabont",
        releaseYear: 2000,
        genre: [" Fantastique", "Drame", "Policier"],
        cast: [
            "Tom Hanks",
            "Michael Clarke Duncan",
            "David Morse",
        ],
    },
    {
        picture: "asset/img/bat.jpg",
        name: "The Dark Knight, Le Chevalier Noir",
        director: "Christopher Nolan",
        releaseYear: 2008,

        genre: ["Action", "Thriller"],
        cast: [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart",
        ],
    },
    {
        picture: "asset/img/glad.jpg",
        name: "Gladiator",
        director: "Ridley Scott",
        releaseYear: 2000,
        genre: ["Action", "Aventure", "Historique"],
        cast: [
            "Russell Crowe",
            "Joaquin Phoenix",
            "Connie Nielsen",
        ],
    },
    {
        picture: "asset/img/seven.jpg",
        name: "Seven",
        director: "David Fincher",
        releaseYear: 1996,
        genre: ["Policier", "Thriller", "Drame"],
        cast: [
            "Brad Pitt",
            "Morgan Freeman",
            "Gwyneth Paltrow",
        ],
    },
    {
        picture: "asset/img/usual.jpg",
        name: "Usual Suspects",
        director: "Bryan Singer",
        releaseYear: 1995,
        genre: ["Policier", "Thriller"],
        cast: [
            "Chazz Palminteri",
            " Kevin Spacey,",
            "Gabriel Byrne",
        ],
    },
]




document.addEventListener('DOMContentLoaded', function() {
     let header = document.createElement('header');
    header.classList.add('header');
    document.body.prepend(header);

    let title = document.createElement('h1');
    title.classList.add('title');
    header.appendChild(title);
    title.innerText = "best films de tout les temps.";
   

    let main = document.createElement('main');
    main.classList.add('main');
    document.body.prepend(main);
    let body = document.querySelector('body');
    
    let content = document.createElement('content');
    content.classList.add('content');

    document.body.insertBefore(header, main);

for (i =0; i < collection.length; i++){
    let stockCollection = collection[i];

    
    let section = document.createElement('section');
    section.classList.add('mainsection');

    let image = document.createElement("img");
    image.src = stockCollection.picture;
    image.classList.add('imgclass');
    
    let titreH2 = document.createElement('h2');
    titreH2.textContent = stockCollection.name;

    let direct = document.createElement("h3");
    direct.textContent = stockCollection.director;

    let year = document.createElement("h4");
    year.textContent = stockCollection.releaseYear;

    let gender = document.createElement("div");
    gender.textContent = stockCollection.genre;
    
    let paragraphe = document.createElement('p');
    paragraphe.textContent = stockCollection.cast;
    
    section.appendChild(image);
    section.appendChild(titreH2);
    section.appendChild(direct);
    section.appendChild(year);
    section.appendChild(gender);
    section.appendChild(paragraphe);
    
    main.appendChild(section);
    }});