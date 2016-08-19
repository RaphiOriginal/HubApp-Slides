// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  ih: require("../assets/IHZ_150916_master_locations_1.jpg"),
  ih_logo: require("../assets/IHZ_ect_Logo_white.png"),
  logo: require("../assets/FHNW_HT_10mm.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#198caa"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={1} fit textColor="white">Bachelorthesis - HubApp</Heading>
            <Text textColor="white">Developed with ❤️ by Livio and Raphael</Text>
            <Image src={images.logo} width="300" style={{marginTop: 100}} />
          </Slide>
          <Slide bgImage={images.ih} align="flex-start" bgDarken={0.3}>
            <Layout>
              <Fill>
                <Heading fit size={1} textColor="white">Impact Hub</Heading>
              </Fill>
              <Fill>
                <Image src={images.ih_logo} align="flex-start" width="40%" />
              </Fill>
            </Layout>
            <Layout style={{ marginTop: 20 }}>
              <Fill>
                <Text textColor="white" textAlign="left">
                  Impact Hub hat weltweit über 12000 Mitglieder, davon sind etwa 700 in Zürich.
                </Text>
                <Text textColor="white" textAlign="left">
                  Zurzeit hat es vier Standorte in Zürich.
                </Text>
                <Text textColor="white" textAlign="left">
                  Das Suchen von Personen innerhalb der Community findet zurzeit durch Mundpropaganda statt, da bisherige Tools dazu nicht geeignet sind.
                </Text>
              </Fill>
              <Fill>
                <Text textColor="white" textAlign="left">
                  Dies dauert lange und kostet Ressourcen bei den Mitarbeiter.
                </Text>
                <Text textColor="white" textAlign="left">
                  Dass soll in Zukunft geändert werden.
                </Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} textColor="white">Aufgaben</Heading>
            <Layout style={{ marginTop: 20 }}>
              <Fill>
                <Heading size={2} bgColor="white" style={{ margin: 10, marginRight: 5 }} textColor="primary" padding={15}>Word2Vec</Heading>
                <Heading size={2} bgColor="white" style={{ margin: 10, marginRight: 5 }} textColor="primary" padding={15}>Jaccard</Heading>
              </Fill>
              <Fill>
                <Heading size={2} bgColor="white" style={{ margin: 10, marginLeft: 5 }} textColor="primary" padding={15}>Motivation</Heading>
                <Heading size={2} bgColor="white" style={{ margin: 10, marginLeft: 5 }} textColor="primary" padding={15}>Tagging</Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.ih.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.ih.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
