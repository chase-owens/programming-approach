import Cards from "../layouts/Cards";
import Main from "../layouts/Main";
import { CardProps } from "../shared/Card/";
import Introduction from "../renderings/Introduction";

const cards: CardProps[] = [
  {
    description: "Find and start your personalized program.",
    heading: "Courses",
    to: "/courses",
  },
  {
    description:
      "Learn about the current state of instructional design technology.",
    heading: "IDT",
    to: "/idt",
  },
  {
    description: "Learn about who we are and contact us.",
    heading: "About",
    to: "/about",
  },
];

export default function Home() {
  return (
    <Main heading="Programming Approach">
      <Introduction />
      <Cards cards={cards} />
    </Main>
  );
}
