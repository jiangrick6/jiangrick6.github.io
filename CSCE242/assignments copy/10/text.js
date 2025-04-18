const adTextList = ["Discover the secret to gourmet cooking with our premium kitchenware collection. From professional-grade knives to",
" Gear up for your next outdoor adventure with our durable and stylish range of hiking boots and backpacks.",
"Transform your home into a haven of warmth and tranquility with our exclusive selection of artisanal candles and diffusers.",
"Experience the thrill of the open road with our latest collection of high-performance vehicles.",
"Step into the new season with our latest fashion arrivals. From chic dresses to versatile separates, our collection is designed to keep you looking effortlessly stylish. "];


let index = 0;

const showAdText = () => {
    const pText = document.getElementById("ad-text");
    pText.innerHTML = adTextList[index];
    index++;
    if (index == adTextList.length) {
        index = 0;
    }
};


showAdText();

setInterval(showAdText, 2000);