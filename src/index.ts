import "./styles.scss";

const menuBtn = document.querySelector(".navbar-btn");
const showMenu = document.querySelector(".navbar");
const banner = document.querySelector(".banner");
const content = document.querySelector(".main");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close-btn");
  showMenu.classList.toggle("show");
});

const observer = new IntersectionObserver(
  (entries, self) => {
    if (!entries[0].isIntersecting) {
      header.classList.remove("static");
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
      header.classList.add("static");
    }
  },
  {
    threshold: 0,
    rootMargin: "-10px 0px",
  }
);

observer.observe(banner);

class WorksCard {
  private worksGrid: Element;
  public works: any[];

  constructor(works: any[]) {
    this.worksGrid = document.querySelector(".works");
    this.works = works;

    this.buildGrid();
  }

  private buildGrid() {
    this.works.forEach((work) => {
      this.worksGrid.innerHTML += `<div class="work-card"><h3>${work.title}</h3></div>`;
    });
  }
}

new WorksCard([
  { title: "a" },
  { title: "b" },
  { title: "c" },
  { title: "d" },
  { title: "e" },
  { title: "f" },
  { title: "g" },
  { title: "h" },
]);
