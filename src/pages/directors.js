import {Section} from "../components/Section";
import {DirectorsCard} from "../components/DirectorsCard";

export function Directors(props){

    const {directors } = props;

    if (!directors) return;


    return (
        <Section title={"Directors"}>
            {directors.map((n,i) =>
                <DirectorsCard id={n.id} data={n.data} key={i} />)
            }
        </Section>
    );

}