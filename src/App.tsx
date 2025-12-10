import { ButtonText } from "./components/Button";
import { Caption } from "./components/Caption";
import { Heading } from "./components/Heading";
import { Label } from "./components/Label";
import { LeadText } from "./components/Lead";
import { Overline } from "./components/Overline";
import { Paragraph } from "./components/Paragraph";
import { Subheading } from "./components/Subheading";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <Heading children="This is the Heading tag" size="3xl" />
      <Title children="This is the Title tag" />
      <Subheading children="This is the Subheading tag" size="xl" />
      <Subtitle children="This is the Subtitle tag" />
      <Paragraph children="This is the Paragraph tag" />
      <Label children="This the Label tag" size="md" />
      <Caption children="This is the Caption tag" />
      <Overline children="This is the Overline tag" />
      <LeadText children="This is the Leadtext tag" />
      <ButtonText children="This is the Button text tag" />
    </div>
  );
}

export default App;
