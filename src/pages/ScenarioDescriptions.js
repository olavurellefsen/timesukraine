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
const ListItem = styled.li`
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
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
    <AboutHeader><Trans i18nKey='main-menu.scenario-descriptions' /></AboutHeader>
	  <AboutBody>
	    <i>Базовий</i> сценарій побудований для визначення оптимальної траєкторії розвитку енергетичного сектору для досягнення цільових показників ЕСУ2035:
        <AboutList>
           <ListItem>Енергоефективності ВВП;</ListItem>
           <ListItem>Частки відновлюваної енергетики у ЗППЕ;</ListItem>
           <ListItem>Мінімальна частка електроенергії з відновлюваних джерел;</ListItem>
		   <ListItem>Введення додатково 1 ГВт потужностей атомних електростанцій в 2025 році</ListItem>
       </AboutList>
	  </AboutBody>
	  <AboutBody>
	  Альтернативні сценарії досягнення цілей ЕСУ або сценарії «чутливості» відрізняються від Базового сценарію ефективністю реалізації окремих політик та набором технологічних рішень. <i>Сценарій низьких темпів зростання відновлюваної енергетики</i> узгоджений з припущеннями фахівців «Укренерго» щодо перспектив нарощення обсягів виробництва електроенергії гідро-, вітровими та сонячними електростанціями. В сценарії <i>Без нових ядерних реакторів у 2025 році</i> проаналізовано наслідки затримки, принаймні, до 2030 року, введення в дію нових потужностей АЕС. Нові технології, які можуть забезпечити балансування енергосистеми в умовах збільшення частки відновлюваної генерації досліджуються у сценарії <i>Нові технології балансування</i>; в сценарії <i>Зелено-вугільний парадокс</i> досліджуються можливі наслідки модернізації існуючих вугільних енергоблоків теплових електростанцій з подовженням терміну їхньої експлуатації та проаналізована можливість використання цих блоків для балансування. Метою розробки сценарію <i>Оптимізація балансування</i> була оцінка ефекту від запровадження системи прогнозування (у т.ч. чи вплине запровадження системи на необхідну кількість балансуючих потужностей).
	  </AboutBody>
	  <AboutBody>
	  Додаткові сценарії ставлять цілі ЕСУ2035 у більш широкий контекст (як національний, так і міжнародний). У сценарії <i>Національні стратегії</i> цілі ЕСУ2035 доповнено національними цілями і запланованими заходами інших стратегічних документів (Національної транспортної стратегії України на період до 2030 року, Національної стратегії управління відходами в Україні до 2030 року, Концепція реалізації державної політики у сфері теплопостачання та Стратегії низьковуглецевого розвитку України до 2050 року). У сценарії <i>Низьковуглецеве суспільство</i> умови попереднього сценарію доповнені метою скорочення викидів ПГ у 2050 році на 80% від рівня 1990 року. Такі сценарні припущення можна вважати максимально наближеними до умов та цілей прийнятої в ЄС політики попередження зміни клімату. Нарешті, сценарій Бездієвий є гіпотетичним та враховує лише ті політики, заходи та цілі, які були прийняті до 2015 року (тобто політики, заходи та цілі з ЕСУ2035 та інших стратегічних документів не бралися до уваги); цей сценарій був розроблений з метою створення бази для порівняння результатів розрахунків за іншими сценаріями.
	  </AboutBody>
      <AboutBody><Link to='/'><Trans i18nKey='pages.to-the-front-page' /></Link></AboutBody>
    <AboutHeader2 /><AboutList /><AboutImage />
  </AboutContainer>
)
