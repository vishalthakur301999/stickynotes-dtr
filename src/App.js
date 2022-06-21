import { Page } from '@geist-ui/react';
import Header from "./components/header";
import Footer from "./components/footer";
import CardComponent from "./components/card";
import { Grid} from "@geist-ui/core";

const App = () => {
    let today = new Date();
    const card1Content = "The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. Adult male lions are larger than females and have a prominent mane.";
    const card1Title = "Lion";
    const card1Time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    today.setHours(today.getHours() + 4);
    const card2Content = "Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are an informal grouping within the subfamily Elephantinae of the order Proboscidea.";
    const card2Title = "Elephant";
    const card2Time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    today.setHours(today.getHours() - 8);
    const card3Content = "The giraffe is a tall African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies.";
    const card3Title = "Giraffe";
    const card3Time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return (
        <Page>
            <Page.Header>
                <Header />
            </Page.Header>
            <Page.Content>
                <Grid.Container gap={1.5} justify="center">
                    <CardComponent title={card1Title} description={card1Content} time={card1Time}/>
                    <CardComponent title={card2Title} description={card2Content} time={card2Time}/>
                    <CardComponent title={card3Title} description={card3Content} time={card3Time}/>
                </Grid.Container>
            </Page.Content>
            <Page.Footer>
                <Footer />
            </Page.Footer>
        </Page>
    )
}
export default App
