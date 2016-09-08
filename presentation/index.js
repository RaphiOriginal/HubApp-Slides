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
  iha: require("../assets/IHZ_150916_master_locations_3.jpg"),
  ih_logo: require("../assets/IHZ_ect_Logo_white.png"),
  logo: require("../assets/FHNW_HT_10mm.png"),
  ihlogo: require("../assets/151009_MashUp_Banner1.png"),
  coffee: require("../assets/SkillShare.png"),
  garage: require("../assets/IHZ_150916_master_locations_L2.jpg"),
  postit: require("../assets/ImpactWS.png"),
  architecture: require("../assets/react-redux.png"),
  postman: require("../assets/10251060.png"),
  lookback: require("../assets/mark.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#198caa",
  light: 'white',
  dark: 'black',
  blue: '#198caa',
  green: '#99b149',
  red: '#e46648',
  orange: '#d2930f',
  gray: 'rgb(146, 146, 146)'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide", "spin"]} transitionDuration={500}>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            {
              //Egal
            }
            <Heading size={1} fit textColor="white">Bachelorthesis - HubApp</Heading>
            <Text textColor="white">Developed with ❤️ by Livio and Raphael</Text>
            <Image src={images.logo} width="300" style={{marginTop: 100}} />
          </Slide>
          <Slide bgImage={images.postit} bgDarken={0.3} align="flex-start">
            {
              //Egal
            }
            <Heading size={1} textColor="white">Inhalt</Heading>
            <Layout style={{ marginTop: 40 }}>
              <Fill>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Impact Hub</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Vorgehen</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Analyse</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Herausforderungen</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Demo</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Umsetztung</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Highlights</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Reflexion</Heading>
                <Heading padding={10} margin={10} size={6} textColor="white" bgColor="primary">Ausblick</Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.ih} align="flex-start" bgDarken={0.3} notes=
            "<ul>
              <li>Vorstellung Impact Hub</li>
              <li>Aktuelle Situation im Impact Hub wie man Personen sucht</li>
              <li>Hubnet, Persönliche Suche, Hubonauten</li>
            </ul>">
            {
              //Raffi
            }
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
                <Text textColor="white" textAlign="left" style={{ paddingRight: 20 }}>
                  Impact Hub hat weltweit über 12000 Mitglieder, davon sind etwa 700 in Zürich.
                </Text>
                <Text textColor="white" textAlign="left" style={{ paddingRight: 20 }}>
                  Zurzeit hat es vier Standorte in Zürich.
                </Text>
              </Fill>
              <Fill>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.postit} bgDarken={0.7} align="flex-start">
            {
              //Egal
            }
            <Heading size={1} textColor="white">Vorgehen</Heading>
            <Layout style={{ marginTop: 40 }}>
              <Fill>
                <Text textAlign="left" textColor="white">Initiale Analyse: 7 Wochen</Text>
                <Text textAlign="left" textColor="white"></Text>
                <Text textAlign="left" textColor="white">Iteratives Vorgehen: 18 Wochen / 6 Sprints</Text>
              </Fill>
              <Fill>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Sprint Planung</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Wireframing</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Testing</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Styleguide</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Implementation</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Sprint Demo</Heading></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.postit} bgDarken={0.3} align="flex-start">
            {
              //Egal
            }
            <Heading size={1} textColor="white">Analyse</Heading>
          </Slide>
          <Slide bgImage={images.iha} bgDarken={0.5} notes=
            "<ul>
              <li>Übersicht über die Herausforderungen</li>
              <li>Word2Vec: Was es ist, was es kann, wie wir es verwendet hatten</li>
              <li>Styling: Erstellen von Guis mit React-Native</li>
              <li>Motivation: Design Pattern</li>
              <li>Tagging: Repräsentation der Skills als Tag</li>
            </ul>">
            {
              //Raffi
            }
            <Heading size={1} textColor="white" padding={20} margin={10} style={{ marginBottom: 0 }} bgColor="primary">Herausforderungen</Heading>
            <Layout style={{ marginTop: 0 }}>
              <Fill>
                <Heading size={2} bgColor="primary" style={{ margin: 10, marginRight: 5 }} textColor="white" padding={15}>Word2Vec</Heading>
                <Heading size={2} bgColor="primary" style={{ margin: 10, marginRight: 5 }} textColor="white" padding={15}>Styling</Heading>
              </Fill>
              <Fill>
                <Heading size={2} bgColor="primary" style={{ margin: 10, marginLeft: 5 }} textColor="white" padding={15}>Motivation</Heading>
                <Heading size={2} bgColor="primary" style={{ margin: 10, marginLeft: 5 }} textColor="white" padding={15}>Tagging</Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.iha} align="flex-start" bgDarken={0.5} notes=
            "<ul>
              <li>Quellen</li>
              <li>Java vs. Python</li>
              <li>Demo: Postman</li>
              <li>Funny Quote</li>
            </ul>">
            {
              //Raffi
            }
            <Heading size={1} textColor="white">Word2Vec</Heading>
            <Layout style={{ marginTop: 40 }}>
              <Fill>
                <Text textAlign="left" textColor="white">Das finden einer geeigneten Datenquelle zum lernen.</Text>
                <Text textAlign="left" textColor="white">Python-Implementierung bietet mehr als die Java-Implementierung.</Text>
              </Fill>
              <Fill>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">LinkedIn</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Xing</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Wikipedia</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">StackExchange</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Google News</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Impact Hub</Heading></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="primary">
            {
              //Raffi
            }
            <Heading size={1} caps fit textColor="white">Demo</Heading>
            <Image src={images.postman} width="10%"/>
          </Slide>
          <Slide bgColor="white">
            {
              //Raffi
            }
            <BlockQuote style={{ marginTop: 100 }}>
              <Quote textColor="primary">
                Das isch jo wie Google!
              </Quote>
              <Cite textColor="black">
                Jana Neumann
              </Cite>
            </BlockQuote>
          </Slide>
          <Slide bgImage={images.iha} align="flex-start" bgDarken={0.5}>
            {
              //Livio
            }
            <Heading size={1} textColor="white">Styling</Heading>
            <Layout style={{ marginTop: 40 }}>
              <Fill>
                <Text textAlign="left" textColor="white">Erstellen von brauchbaren UI-Komponenten.</Text>
              </Fill>
              <Fill>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Tags</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Tagcloud</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Buttons</Heading></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.iha} align="flex-start" bgDarken={0.5} notes=
            "<ul>
              <li>Nir Eyal</li>
              <li>Trigger: Person suchen</li>
              <li>Action: Suche starten</li>
              <li>Reward: Resultate erhalten, Similarity unterstützt dabei</li>
              <li>Investment: Angabe von skills, weitere investments notwendig</li>
              <li>Nächsten Trigger vorbereiten</li>
            </ul>">
            {
              //Raffi
            }
            <Heading size={1} textColor="white">Motivation</Heading>
            <Layout style={{ marginTop: 40 }}>
              <Fill>
                <Text textAlign="left" textColor="white">Das Design-Pattern von Nir Eyal umfasst vier States.</Text>
              </Fill>
              <Fill>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Trigger</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Action</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Reward</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Investement</Heading></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.iha} align="flex-start" bgDarken={0.5} notes=
            "<ul>
              <li>Skills als Tags</li>
              <li>Messy Metadata</li>
              <li>Suggestions</li>
              <li>Tagcloud als Unterstützung</li>
              <li>Tags als Button verwenden und weitere Funktionalitäten</li>
            </ul>">
            {
              //Raffi
            }
            <Heading size={1} textColor="white">Tagging</Heading>
            <Layout style={{ marginTop: 40 }}>
              <Fill>
                <Text textAlign="left" textColor="white">Mit dem Tagging kann man Probleme wie Messy Metadata mithilfe von einfachen Tools lösen.</Text>
              </Fill>
              <Fill>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Suggestions</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Tag Cloud</Heading></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={1} fit caps textColor="white">Demo</Heading>
            <Heading size={3} textColor="white" margin={70}>📲</Heading>
          </Slide>
          <Slide bgImage={images.iha} align="flex-start" bgDarken={0.5}>
            {
              //Livio
            }
            <Heading size={1} textColor="white">Umsetzung</Heading>
            <Layout style={{ marginTop: 40 }}>
              <Fill>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">React Native</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="primary">Redux &amp; ImmutableJS</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="green">Java / Spring</Heading></Appear>
                <Appear><Heading padding={10} margin={10} size={5} textColor="white" bgColor="green">Word2Vec</Heading></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="white" >
            <Layout>
              <Fill>
                <Image src={images.architecture} width="50%"/>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.iha} align="flex-start" bgDarken={0.5}>
            <Heading>Testing &amp; Qualität</Heading>
            <Layout style={{ marginTop: 220 }}>
              <Fill>
                <Link href="https://www.youtube.com/watch?v=XG5lap9xEIk" target="_blank">
                  <Text textAlign="left" textColor="white">Unittests: Sicherstellen, dass bestehender Code nicht bricht.</Text>
                </Link>
                <Text textAlign="left" textColor="white">Code Reviews &amp; statische Codeanalyse (Linting)</Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.coffee} align="flex-start" bgDarken={0.3} notes=
            "<ul>
              <li>Lookback ist kostenlos</li>
              <li>Lookback braucht keinen Jailbreak</li>
              <li>Sendet Aufnahme direkt auf das Dashboard</li>
              <li>Verlangsamt die Applikation bei der Aufnahme</li>
              <li>im Debug nicht verwenden, nur beim Release</li>
            </ul>">
            {
              //Raffi
            }
            <Heading>Usertests</Heading>
            <Layout style={{ marginTop: 220 }}>
              <Fill>
                <Text textAlign="left" textColor="white">Lookback direkt in die Applikation integriert.</Text>
                <Text textAlign="left" textColor="white">Nimmt die Tabs auf und sendet die Aufnahme direkt auf das Dashboard.</Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="primary">
            {
              //Raffi
            }
            <Heading size={1} caps fit textColor="white">Demo</Heading>
            <Image src={images.lookback} width="10%"/>
          </Slide>
          <Slide bgImage={images.garage} align="flex-start" bgDarken={0.7}>
            {
              //
            }
            <Heading>Reflexion</Heading>
            <Layout style={{ marginTop: 100 }}>
              <Fill>
                <Text textSize={60} textAlign="left" textColor="white">Langsamer Start des Projektes.</Text>
                <Text textSize={60} textAlign="left" textColor="white">Qualität erster Interviews.</Text>
                <Text textSize={60} textAlign="left" textColor="white">Mitarbeit der Members.</Text>
                <Text textSize={60} textAlign="left" textColor="white">Usability Testing.</Text>
                <Text textSize={60} textAlign="left" textColor="white">Motivation.</Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            {
              //
            }
            <Heading size={1} textColor="white">Ausblick</Heading>
          </Slide>
          <Slide>
            {
              //
            }
            <Heading fit>Fragen?</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
