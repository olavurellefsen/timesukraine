import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
import { Trans } from 'react-i18next';

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
const AboutList = styled.ul`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const ListItem = styled.li`
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 0.7em;
  `}
  `
  
export default () => (
  <AboutContainer>
    <AboutHeader><Trans i18nKey='main-menu.recommendations' /></AboutHeader>
      <AboutBody>
	   Результати розрахунків показують, що навіть за умов відсутності заходів енергетичної політики, спрямованих на досягнення цільових трансформацій енергетичного балансу, тобто без стимулювання реалізації потенціалу енергоефективності та ВДЕ, запровадження екологічних обмежень тощо, обсяги первинного постачання та кінцевого споживання енергії хоч і зростатимуть до 2050 року, проте навряд чи перевищать рівень 2012 року. З таких умов структура енергобалансу залежатиме, в першу чергу, від прогнозованого цінового паритету різних видів палива та зміни вартості енергетичних технологій. При цьому вугілля залишиться домінуючим ресурсом як в структурі паливозабезпечення електростанцій, так і загалом для задоволення енергетичних потреб економіки.
	  </AboutBody>
	  <AboutBody>
	   Базовий сценарій, що відображає умови та основні цільові показники Енергетичної стратегії України до 2035 року, фактично передбачає збереження обсягів енергоспоживання на рівні 2015 року при одночасному цільовому збільшення використання ВДЕ та зменшенні споживанні вугілля та природного газу. Проте в ЕСУ 2035 зберігається певна невизначеність щодо окремих стратегічно важливих питань розвитку енергетичного сектору на більш віддалену перспективу до 2050 року, зокрема щодо розвитку атомної енергетики, що зумовлює відповідну різку зміну структури електрогенерації та динаміки викидів ПГ.
	  </AboutBody>
	  <AboutBody>
	   Результати моделювання показують, що у разі досягнення цілей ЕСУ, зокрема щодо суттєвого зниження енергоємності економіки та суттєвого нарощування обсягів використання ВДЕ, спостерігатиметься неповна завантаженість існуючих блоків АЕС, а, відтак, будівництво нового блоку №3 на Хмельницькій АЕС в 2025 р. видається незатребуваним. Будівництво (введення в експлуатацію) ХАЕС №3 може бути доцільним не раніше 2030-2035 років. При цьому потужність інших електрогенеруючих об’єктів не відрізнятиметься від Базового сценарію.
	  </AboutBody>
	  <AboutBody>
	   У разі реалізації сценарію помірних темпів розвитку виробництва електроенергії з відновлюваних джерел, запропонованому у Звіті з оцінки відповідності (достатності) генеруючих потужностей ДП «НЕК «Укренерго» за 2018 рік, загальна частка ВДЕ в структурі електрогенерації зросте лише до 41% в 2050 році (63% за Базовим сценарієм), проте в 2035 р. вона становитиме близько 31%, що більше ніж передбачає ЕСУ2035. Заміщення (порівняно з Базовим сценарієм) після 2035 року електрогенерації з ВДЕ на більш дорогу теплову генерацію позначиться на загальній вартості електроенергії в системі, що зрештою може призвести до скорочення споживання електроенергії на 5-7%.
	  </AboutBody>
	  <AboutBody>
	   На сьогодні балансування електростанцій ВДЕ відбувається переважно за рахунок «брудної» вугільної генерації, що зумовлює виникнення т.з. «зелено-вугільного парадоксу». Як свідчать розрахунки, застосування сучасних балансуючих потужностей та маневруючих технологій дозволить скоротити капітальні інвестиції для досягнення заявлених цілей з використання ВДЕ на 13 млрд євро за період 2020-2050 років. Окрім того, застосування сучасних систем точного прогнозування дозволить додатково зменшити потреби в інвестиціях ще на 11,5 млрд євро, збільшивши при цьому виробництво електроенергії з ВДЕ.
	  </AboutBody>
	  <AboutBody>
	   Доповнення умов ЕСУ 2035 цільовими індикаторами інших діючих галузевих програмних документів радикально не позначиться на прогнозній динаміці розвитку енергетики – відхилення базових агрегованих показників енергетичного балансу від їхніх значень за Базовим сценарієм спостерігається на рівні 2-5%. Водночас, в деяких секторах, зокрема на транспорті та в комунальній енергетиці структура споживання палива та енергії відрізняється все ж більш суттєво. Окрім того, може відбуватися певний перерозподіл інвестиційних ресурсів та окремих видів палива між секторами. Це свідчить про потенціал удосконалення процедур узгодження галузевих політик та необхідність актуалізації індикативних показників ЕСУ 2035.
	  </AboutBody>
	  <AboutBody>
	   Як засвідчили розрахунки, реалізація амбітних цілей з декарбонізації економіки за сценарієм Низьковуглецеве суспільство насправді лише вимагатиме продовження політик і заходів, започаткованих ЕСУ 2035. І хоча це й потребуватиме додаткової інтенсифікації інвестиційних процесів, в іншому випадку послаблення або повна відмова від продовження реалізації політики декарбонізації можуть швидко нівелювати досягнення, зокрема, в зменшенні енергоємності економіки та скороченні викидів ПГ і забруднюючих речовин.
	  </AboutBody>
	  <AboutBody><Link to='/'><Trans i18nKey='pages.to-the-front-page' /></Link></AboutBody>
    <AboutHeader2 />
  </AboutContainer>
)
