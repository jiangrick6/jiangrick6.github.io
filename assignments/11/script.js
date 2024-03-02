class Card {
    constructor(team,description,record,keyplayer,rank) {
        this.team=team;
        this.description=description;
        this.record=record;
        this.keyplayer=keyplayer;
        this.rank=rank;
   
    }

    getSection() {
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        h3.innerHTML(this.title);
        const image = document.createElement("img");
        image.src = `images/${file}`;
        section.append(h3,image);
        return section;
    };

    getExpandedSection() {
        const section = document.createElement("section");
        section.className = "card-details";
        section.innerHTML = `
            <h3>${this.team}</h3>
            <img src="images/${this.file}" alt="${this.team}">
            <p>Description: ${this.description}</p>
            <p>Record: ${this.record}</p>
            <p>Key Players: ${this.keyplayers}</p>
            <p>Rank: ${this.rank}</p>
        `;
        return section;
    }

    expandOrClose(e, summarySection) {
        if (!this.expanded) {
            const expandedSection = this.getExpandedSection();
            summarySection.after(expandedSection);
            this.expanded = true;
        } else {
            summarySection.nextElementSibling.remove();
            this.expanded = false;
        }
    }
}

const cards = [];
cards.push(new Card("sanfran.png","San Francisco 49ers","Overpaid and Elite Team","12-5","Brock Prody and Nick Bosa","1"));
cards.push(new Card("LA.jpg","Los Angeles Rams","Young transition team but still Old","10-7","Matt Stafford and Aaron Donald","2"));
cards.push(new Card("seattles.png","Seattle Seahawks","Young Team with the Young Mastermind Head Coach","9-8","DK MetCalf and Devon Witherspoon","3"));
cards.push(new Card("ari.png","Arizona Carinals","Young team but Low Expectations","4-13","Kyler Murray and Budda Baker","4" ));

cards.forEach((card) => {
    document.getElementById("card-list").append(card.getSection());
    document.getElementById("main").append(card.getExpandedSection());
});