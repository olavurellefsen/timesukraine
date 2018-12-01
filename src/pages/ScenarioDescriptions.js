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
  padding: 10px 0px 0px 0px;
  margin: 0px;
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const AboutList = styled.ul`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const AboutImage = styled.img`
  padding: 20px 0px;
  max-width: 752px;
  ${breakpoint('mobile','desktop')`
    max-width: 250px;
    max-height: 142px;
  `}  
  `

export default () => (
  <AboutContainer>
    <AboutHeader>Scenario Descriptions</AboutHeader>
    <AboutHeader2>Energiaftelen 2018</AboutHeader2>
    <AboutBody>
      Energiaftelen 2018 scenario er som Energistyrelsens basisfremskrivning. Det
      indeholder alle allerede besluttede politikker, inklusiv den seneste energiaftales
      beslutninger, samt samme brændselspriser som anvendes af Energistyrelsen. Dvs.
      et energiscenarie med fastlåst politik frem til 2050. Det antages, at der udpeges
      områder til udbygning af havvindmøller i både øst og vest Danmark, samt at
      udbuddet af EL og Hybrid biler i 2025 er på niveau med i dagens udbud af benzin
      biler – dette kræver formentlig en klar udmelding fra regeringen om at de ser elbiler
      som den fremtidige løsning i Danmark, ellers vil bil-producenterne sandsynligvis ikke
      bringe nok el- og hybridbiler på markedet i Danmark. Der i modellen taget højde for
      omkostninger til udbygning af infrastruktur til el- og gasbiler og modellen bygger
      automatisk denne infrastruktur og dermed er det implicit antaget at der er politisk
      opbakning til en sådan udbygning.
    </AboutBody>
    <AboutBody>
      Der er i modellen antaget en maksimal udbygning af 6200 MW landvind, 50000 MW
      havvind, 3000 MW bølgeenergi, 12000 MW tag solceller og 3000 MW mark
      solcelleanlæg - det sidste svarende til et areal på ca. halvdelen af Langeland.
      Scenariet inkluderer international bunkering fra shipping industrien. Dvs. det
      inkluderer den danske del af den internationale skibstrafik og tilhørende
      energiforbrug og emissioner. Det er vigtigt at betragte hele den danske udledning af
      drivhusgasser i forbindelse med dansk ansvar i en global klimaaftale.
    </AboutBody>
   <AboutBody>
      Målsætninger:
    </AboutBody>
      <AboutList>
        <li>55 % Ve andel i 2030</li>
        <li>Et grønt baseret elsystem</li>
        <li>Fjernvarmesektoren højst 10 % af produktionen baseret på fossile brændsler</li>
      </AboutList>
    <AboutBody>
      Politikker:
    </AboutBody>
      <AboutList>
        <li>3 nye havvindmølleparker (estimeret til at blive 3 GW)</li>
        <li>Landvind begrænses til maksimalt 1850 vindmøller (estimeret til at være 6.2 GW i 2030)</li>
        <li>4.2 Mia. DKK i teknologi neutral støtte for perioden 2020-2024</li>
        <li>statsstøtten til biomasse-kraftvarmeanlæg fjernes for nye anlæg fra april 2019. Eksisterende ikke afskrevne
             anlæg modtager fortsats støtte i resterende levetid dog maksimalt 15/20 år. (Antages at støtte i gennemsnit
             bliver udbetalt i 7.5 år år yderligt)</li>
        <li>Støtte til biogas forlænges frem til 2032</li>
        <li>Afgiftslempelse på elafgift</li>
          <AboutList>
            <li>El-varmeafgift sænkes til 15,5 øre/kWh</li>
            <li>Den almindelige elafgift sænkes med 4 øre/kWh i 2019-2022, 7 øre/kWH i 2023, 8 øre/kWH i 2024 
            og 14 øre/kWh i 2025 (2018-priser). Som følger af aftalen vil elafgiften således udgøre 77,4 øre/kWh 
            i 2025 (2018-priser).</li>
            <li>Elafgiften til liberale erhverv sænkes til proces sats</li>
          </AboutList>
        <li>Udfasning af kul i el-produktion i 2030</li>
      </AboutList>
    <AboutBody>
      Politikker endnu ikke implementereet i modellen:
    </AboutBody>
      <AboutList>
        <li>500 mio. årligt til energibesparelser i industrien i perioden 2020-2024</li>
        <AboutList>
          <li>200 mio. er øremærker til energibesparelser i bygninger</li>
        </AboutList>
        <li>Fuld genopbygning af Thyra-anlæggene i Nordsøen, sikre at de resterende resourcer hentes op fra undergrunden.</li>
     </AboutList>
    <AboutBody>
      De følgende scenarier bygger alle oven på Energiaftelen 2018 scenario: 
    </AboutBody>
    <AboutHeader2>Regeringens klimaudspil</AboutHeader2>
    <AboutBody>
      Regeringen kom i oktober 2018 med 39 forslag til den kommende klimaaftale. Dette scenarie beskriver udviklingen frem mod 
      2030 for energi og transport sektoren, dvs. landbrug endnu ikke er implementeret. I billedet herunder kan man se de konkrete 
      39 forslag (overstreget betyder disse er implementeret i vores energimodel).  
    </AboutBody>
        <AboutBody>
      <AboutImage src="images/climate_agreement.gif" />
    </AboutBody>
    <AboutHeader2>DTU Energisparescenarie</AboutHeader2>
    <AboutBody>
      Dette scenarie viser det danske energi system under antagelse at man i fremtiden
      udbygger væsentligt med energibesparelser i både industrien og bygningsmasse.
    </AboutBody>
    <AboutHeader2>DTU Lav vækst scenarie</AboutHeader2>
    <AboutBody>
      Dette scenarie viser det danske energi system under antagelse at den økonomiske
      vækst i Danmark er lavere end finansministeriets forventede fremskrivninger. Den
      finansielle udvikling stagnere i 2030 og forbliver kontant frem mod 2050 i dette
      scenarie.
    </AboutBody>    
    <AboutHeader2>Måtsætningsscenarier</AboutHeader2>
    <AboutBody>
      De følgende scenarier skal udelukkende anvendes som målestok til at politik scenarierne når henholdsvis 2 og 1.5 
      graders scenarierne. Da der ikke er afgifter inkluderet i målsætningsscenarierne, skal disse udelukkende bruges 
      til at sammenligne emissioner og energiforbrug. 
    </AboutBody> 
    <AboutHeader2>Carbon budget 2 graders temperatur stigning</AboutHeader2>
    <AboutBody>
      Et scenarie, der viser den maksimale grænse for CO2 Danmark kan udlede såfremt man vil holde 
      sig med 66% sikkerhed inden for en 2 graders temperatur stigning frem mod 2050. Danmarks andel 
      af det globale kulstofbudget, som kan udledes til atmosfæren er beregnet via en fordelingsnøgle 
      der vægter befolkningstal og historiske emissioner med hver 50%. 
    </AboutBody>
    <AboutBody>
      Kulstofbudgettet er beregnet ud fra IPCC´s tal, der også er brugt som grundlag til Parisaftalen.
    </AboutBody>
    <AboutHeader2>Carbon budget, der opfylder Parisaftalen</AboutHeader2>
    <AboutBody>
      Dette scenarie viser den maksimale grænse for CO2 Danmark kan udlede såfremt man vil holde sig 
      med 66 % sikkerhed inden for en 1.5 graders temperatur stigning frem mod 2050. Grænsen for 
      Danmarks CO2-udledning blev overskrevet i slutningen af 2017, hvorfor det kun kan lade sig gøre 
      for Danmark at opfylde sin del af Paris-aftalen såfremt Carbon Capture and Storage (CCS) 
      teknologier bliver implementeret i fremtiden.
    </AboutBody>
    <AboutBody>
      Kulstofbudgettet er beregnet ud fra IPCC´s tal, der også er brugt som grundlag til Parisaftalen.
    </AboutBody>
     <AboutBody>
       <Link to='/'>Tilbage til forsiden</Link>
     </AboutBody>
  </AboutContainer>
)
