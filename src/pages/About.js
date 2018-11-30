import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  `
const AboutHeader = styled.h1`
  font-size: 2em;
  ${breakpoint('mobile','desktop')`
    font-size: 1.5em;
  `}
  font-weight: bold;
  `
  AboutHeader.displayName = 'AboutHeader'
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
const AboutBody = styled.p`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const BodyLink = styled.a`
  color: inherit;
  text-decoration: underline;
  `

export default () => (
  <AboutContainer>
    <AboutHeader>About the tool</AboutHeader>
    <AboutHeader2>Forbehold</AboutHeader2>
    <AboutBody>
      De viste scenarier er baseret på DTU’s fortolkning af udmeldinger fra regeringen og de forskellige partier
      og er beregnet i modellen kaldet TIMES-DK. Scenario-beregningerne er ikke koordineret med Energistyrelsen eller andre
      og det er derfor udelukkende Energisystemanalyse-gruppen på DTU, som har ansvaret for dette værktøj til visning af
      modelresultater.
    </AboutBody>
    <AboutHeader2>Hvem er ”vi”?</AboutHeader2>
    <AboutBody>
      Energisystemanalyse-gruppen er en del af afdelingen for Systemanalyse på DTU’s institut for Systemer, Produktion og
      Ledelse (DTU Management Engineering) [Link: <BodyLink href='http://www.man.dtu.dk/'>http://www.man.dtu.dk/</BodyLink>].
      Vi udvikler energisystemmodeller med fokus på en grøn omstilling, udvikler scenarier og samarbejdsformer i rummet mellem
      modeller og beslutningstagere (og andre).
    </AboutBody>
    <AboutBody>
      Se mere her: [Link: <BodyLink href='http://www.sys.man.dtu.dk/research/energy-systems-analysis'>http://www.sys.man.dtu.dk/research/energy-systems-analysis]</BodyLink>.
    </AboutBody>
    <AboutHeader2>Om værktøjet</AboutHeader2>
    <AboutBody>
      TIMES-DK, dækker alle sektorer i Danmark. Den har en detaljeret repræsentation af el- og fjernvarme sektoren, bygninger,
      industri samt transport og kan dermed belyse målsætninger og politiske virkemidler på tværs af alle sektorer. Desuden kan
      modellen analysere det danske energiafgiftssystem, så ændringer og det tilhørende provenu kan beregnes. Baseret på input
      om brændselspriser, teknologipriser og politiker (støtte, afgifter, havvind udbud, begrænsning af dieselbiler etc.) så
      finder modellen den billigste kombination af teknologier i alle sektorer, som respekterer brugerens input.
    </AboutBody>
    <AboutBody>
      Læs mere om TIMES-DK [link: <BodyLink href='http://www.esymodels.man.dtu.dk/times-dk'>http://www.esymodels.man.dtu.dk/times-dk</BodyLink>]
    </AboutBody>
    <AboutHeader2>Hvorfor viser vi disse scenario-beregninger?</AboutHeader2>
    <AboutBody>
      Energisystem analyse modellernes vigtigste formål er at give os indsigt i hvordan systemer og teknologier kan spille sammen
      i fremtiden og er dermed et værktøj til at teste forskellige muligheder og beregne konsekvenserne af disse, f.eks. hvad
      koster det, hvor meget forurener vi og hvor hurtigt kan vi skifte teknologier og brændsler. Hvis modellen, som i dette
      tilfælde, indeholder alle sektorer så kan vigtige sammenhænge og muligheder på tværs af sektorer også undersøges.
    </AboutBody>
    <AboutBody>
      Ofte er disse modeller ”sorte bokse” hvor forudsætninger puttes ind og resultater kommer ud, uden at man kan se hvad som sker
      derimellem. Vi arbejder på at åbne op for en mere demokratisk proces omkring udviklingen af vores fremtidige energisystem i Danmark.
    </AboutBody>
    <AboutBody>     
      <b>Første skridt</b> er at åbne op for diskussion af forudsætninger og resultater – ikke kun når de ligger færdige, men undervejs i processen.
      Derfor viser vi vores fortolkning af regeringens og partiers udspil, så de kan sammenlignes og diskuteres mens forhandlingerne om en ny
      energiaftale er i gang. Det er vores håb at være med til at gøre debatten mere interessant og indsigtsfuld. Desuden giver vi mulighed for
      at alle kan kommentere på resultater, antagelser, målsætninger og selve værktøjet.
    </AboutBody>
    <AboutBody>      
      <b>Andet skridt</b> er at give flere adgang til at få beregnet scenarier uden at man er en del af regeringen og dermed har adgang til embedsværket eller
      er forsker i et forskningsprojekt. Vi har derfor tilbudt alle partier (via Energiudvalget) at de kan få regnet på deres input til en energiaftale
      på vores modelsystem. Hvis andre, inkl. NGO’er, er interesseret i at få regnet på egne scenarier, så er de velkomne til at kontakte os.
    </AboutBody>
    <AboutBody>      
      <b>Tredje</b> skridt er at udvikle web-værktøjet til at brugeren selv kan ændre forudsætninger og politikker og se resultatet med det samme. Dette arbejder vi på.
    </AboutBody>
    <AboutBody>      
      <b>Fjerde</b> skridt er at give andre fuld adgang til modeller og data, hvilket vi er ved at forberede. Men kontakt os endelig, hvis det kunne have interesse
      at arbejde med modellen selv.
    </AboutBody>
    <AboutBody><Link to='/'>Tilbage til forsiden</Link></AboutBody>
  </AboutContainer>
)