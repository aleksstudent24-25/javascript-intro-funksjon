/* Først fanger vi opp elementene vi ønsker å manipulere fra index.html
   Vi bruker id fra html elementene som referanser inn i javascript (andre måter finnes).
*/
const mainContent = document.getElementById("content"); // div med id="content"
const mainImage = document.getElementById("img"); // img med id="img"
const gallery = document.getElementById("gallery"); // div med id="gallery"
const galleryBtn = document.getElementById("gallery-button");

/* Under definerer vi alle kildene til bildene vi ønsker å bruke på siden vår
   Vi bruker et array for å lagre all infoen om de forskjellige kildene til bildene.
*/
const imageUrls = [
  "../images/battle.png",
  "../images/catHotdog.png",
  "../images/greenPlanet.png",
  "../images/magicalValley.png",
  "../images/stripes.png",
  "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
];

/* For å finne en tilfeldig index i imageUrls arrayet lager vi randomNum variabelen som gjør følgende:

Math.random lager et tilfeldig nummer mellom 0 og 1, vi ganger dette med lengden av arrayet vårt over (som er 5). Alt dette er inne i Math.floor som runder NED resultatet. 

*/
const randomNum = Math.floor(Math.random() * imageUrls.length);

// Her setter vi src til mainImage til en tilfeldig verdi fra imageUrls arrayet:
mainImage.src = imageUrls[randomNum]; // [randomNum]: randomNum kan være en verdi mellom 0 og lengden på arrayet.

/* Her lager vi en loop som går igjennom alle elementer i imageUrls arrayet. Med forEach kjøres koden innenfor {} hver gang til alle elementene er kjørt igjennom.

url: referanseord for hvert element i imageUrls arrayet

Dette skjer hver gang loopen kjøres:
1. loopen ser på bruker newImage variabelen til å lage et nytt element
2. dette nye elementet får tilført en verdi i attributten src fra imageUrls arrayet
3. det nye elementet blir plassert i gallery (div med id="gallery") gjennom appendChild

*/

function showImgs() {
  disco();
  let idNum = 1;
  imageUrls.map((url) => {
    const newImage = document.createElement("img");
    newImage.src = url;
    newImage.id = `pic${idNum}`;

    gallery.appendChild(newImage);
    idNum++;
  });

  galleryBtn.setAttribute("onclick", "randomise();");
  galleryBtn.textContent = "BOHAHAAHAHAHAHAHAHAHAHHAAHHAHAHA";
  mainImage.setAttribute("onclick", "randomise();");
}

function randomise() {
  for (let i = 1; i <= imageUrls.length; i++) {
    document.getElementById(`pic${i}`).src = "../images/scary.jpg";
    //   const rndNum = Math.floor(Math.random() * imageUrls.length);
    //   document.getElementById(`pic${i}`).src = imageUrls[rndNum];
  }
}

function disco() {
  mainImage.src = "../images/scary.jpg";
  setInterval(() => {
    if (
      !document.body.classList.contains("light") &&
      !document.body.classList.contains("dark")
    ) {
      document.body.classList.toggle("light");
    } else {
      document.body.classList.toggle("light");
      document.body.classList.toggle("dark");
    }
  }, 250);
}
