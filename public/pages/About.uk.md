# Про інструмент
TIMES-Україна це лінійна оптимізаційна модель енергетичної системи, яка відноситься до класу моделей MARKAL/TIMES [^8],[^9]. Вона забезпечує багато-технологічне представлення енергетичної системи (знизу–вгору) для оцінки енергетичної динаміки в довгостроковій перспективі [^6]. Українська енергетична система у моделі поділена на сім секторів (Рисунок наведено нижче). Таким чином, структура моделі TIMES-Україна відповідає методологічному підходу Державної служби статистики України [^10] (узгоджено з методологією Євростату та МЕА) для енергетичної статистики. На даний момент в моделі представлені понад 1,6 тис. технологій.

![Рисунок: Енергетична система України в моделі TIMES-Україна](images/model_structure_ua.png "Енергетична система України в моделі TIMES-Україна")

До початку проекту база даних моделі містила економічну та енергетичну статистику за 2005-2012 рр., а модель була повністю відкалібрована за 2005, 2009 та 2012 роки (крім параметризації процесів, інші параметри моделі були належним чином оцінені для відображення енергетичного балансу; будь-який з відкаліброваних років може бути використаний як базовий рік для розрахунків). У рамках проекту база даних моделі була доповнена даними за 2013-2015 рр., що дозволило переглянути параметри енергетичних технологій. Крім того, деякі ключові вхідні дані, такі як виробництво енергії, міжнародна торгівля, виробничі показники електростанцій і котлів, також були внесені за 2016-2018 рр. Незважаючи на те, що модель не була повністю відкалібрована за новим базовим роком (2015), точність розрахункового енергетичного балансу на 2015 р. у порівнянні зі звітнім документом є досить високою. Повне калібрування моделі за 2015 р. буде завершено найближчим часом.

Промислові користувачі в моделі розділені на дві категорії залежно від рівня енергоємності виробництва. Енергоємні галузі представлені продукто-специфікованими технологіями. Споживання енергії в інших галузях промисловості представлене за чотирма типами процесів: електричні двигуни, електрохімічні процеси, теплові процеси та інші процеси.

Споживання електроенергії домашніми господарствами та комерційним сектором визначається найбільш енергоємними категоріями споживчих потреб, такими як опалення та охолодження житла, нагрів води, освітлення, приготування їжі, холодильники, прання та сушіння одягу, миття посуду та ін.

Транспортний сектор представлений за видами транспорту: автомобільний, залізничний, трубопровідний, авіаційний і водний. Енергетичними послугами, які забезпечуються технологіями автомобільного та залізничного транспорту, є перевезення пасажирів і вантажів.

Сільськогосподарський сектор поділяється на рослинництво, тваринництво, місцевий транспорт та ін.
 
Моделі енергетичних систем, такі як TIMES-Україна, зазвичай застосовуються для довгострокового аналізу шляхів розвитку енергетичної системи. Змінивши припущення щодо рівня енерговитрат, технологій, цін або інших екзогенних змінних, можна проаналізувати відповідні сценарії. На першому етапі розробляються сценарії без заходів (базовий сценарій). На наступному етапі сценарії розробляються шляхом запровадження додаткових обмежень або цілей щодо енергетичної системи для оцінки впливу різних політик. Результатом моделювання є оцінка найменших витрат для всієї енергосистеми за заданих умов і обмежень.

Модель TIMES-Україна задовольняє методичним рекомендаціям міжнародних організацій щодо розробки енергетичних та екологічних прогнозів. Зокрема, рекомендаціям Секретаріату Рамкової конвенції ООН про зміну клімату щодо розробки національних повідомлень [^11].

Моделі типу TIMES-Ukraine використовують для наступних завдань:
- oцінка оптимальної технологічної структури енергосистеми за критерієм мінімізації загальної дисконтованої вартості системи [^12],[^13],[^14],[^15]
- аналіз структури енергетичних, матеріальних і фінансових потоків у системі з урахуванням торгівлі ресурсами [^16],[^17],[^18]
- оцінка потенціалу енергозбереження, відновлюваних джерел енергії, нових видів енергії та палива та визначення пріоритетності інвестицій на основі оптимізації витрат [^19],[^20],[^21],[^22]
- прогнозування динаміки викидів парникових газів [^23],[^24],[^25]
- виявлення можливих загроз енергозабезпеченню країни та визначення заходів щодо їх запобігання [^26],[^27],[^28]
- оцінка впливу енергетичної, економічної, екологічної, кліматичної, промислової, сільськогосподарської, транспортної, інноваційної та іншої політики на розвиток енергетики [^29]
- дослідження переваг та ризиків інтеграційних процесів та міжнародних зобов'язань в енергетичній, екологічній, кліматичній та інших сферах [^30]


[^6]: Podolets RZ, Diachuk OA. Strategic Planning in Fuel and Energy Complex Based on TIMES-Ukraine Model: Scientific Report. Kyiv: 2011.

[^8]: Loulou R, Goldstein G, Kanudia A, Lettila A, Remme U. Documentation for the TIMES Model Part I: TIMES Concepts and Theory 2016:1–151.

[^9]: Loulou R, Lehtila A, Kanudia A, Remme U, Goldstein G. Documentation for the TIMES Model Part II: Reference Manual 2016:1–384.

[^10]: State Statistics Service of Ukraine. Methodological recommendations for drawing up the energy balance n.d. http://www.ukrstat.gov.ua/metod_polog/metod_doc/2011/374/mp_eb.zip.

[^11]: United Nations Framework Convention on Climate Change. UNFCCC Resource Guide for Preparing the National Communications of Non-Annex I Parties. Module 4 Measures to Mitigate Climate Change. Bonn: 2008.

[^12]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Long-term scenarios for development of nuclear energy sector of Ukraine through 2050. Kyiv: 2011.

[^13]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Modeling and Economic Assessment of Long-Term Innovative Development of Nuclear Energy in Ukraine in the Context of Low Carbon Economy Development. Kyiv: 2018.

[^14]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Forecast estimates of electricity consumption in Ukraine for the period up to 2035 and 2050 2015:7.

[^15]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Demand for energy resources in short-term and medium-term perspective 2010:26.

[^16]: Diachuk O, Podolets R. Assessment of the achievement of some key indicators of the effectiveness of the Energy Strategy of Ukraine till 2035. Kyiv: 2017.

[^17]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. The key goals of energy policy and scenario projections of energy supply for the new Energy Strategy of Ukraine 2016:37.

[^18]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Future demand of coal in Ukraine. Gen. Plan Coal Sect. Dev. Ukr. through 2020, Kyiv: 2011, p. 108–73.

[^19]: Podolets R, Diachuk О. Calculation of the national energy efficiency target until 2020 and 2030 for Ukraine according to the Directive 2012/27/EU. Kyiv: 2017.

[^20]: Diachuk О, Chepeliev М, Podolets R, Trypolska G, Venger V, Saprykina T, et al. Transition of Ukraine to the renewable energy by 2050. Kyiv: Publishing house “Art Book” Ltd; 2017.

[^21]: Podolets R, Diachuk О. National Action Plan on Energy Efficiency through 2020 2015:57.

[^22]: Podolets R, Diachuk О. National Action Plan on Renewable Energy through 2020 2014.

[^23]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Justifying the ratification of the Paris Agreement for the Ukrainian Parliament 2016:8.

[^24]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Decarbonisation of energy sector of Ukraine. Ukr. 2050 Low Emiss. Dev. Strateg., Kyiv: 2017, p. 22–38.

[^25]: Institute for Economics and Forecasting of the National Academy of Sciences of Ukraine. Forecasting GHG Emissions in Ukraine until 2030 and Beyond. Kyiv: 2015.

[^26]: Diachuk О. The new Energy Strategy of Ukraine till 2020: safety, energy performance, competition. Natl Secur Def 2015;1:17–8.

[^27]: Podolets R, Diachuk О. Integrated modelling of impacts of global chellenges on sustainable development of the energy sector of Ukraine. Kyiv: 2018.

[^28]: Podolets R, Borodina O, Diachuk О, Kyryziuk S, Trypol’ska G, Chepeliev М, et al. Development of Modelling Approaches for Analysis and Optimisation of Food, Water and Energy Nexus. Kyiv: 2018.

[^29]: Podolets R, Heets V, Ostashko T, Skrypnychenko M, Nykyforuk O, Blyzniuk V, et al. Economic, technical, technological and environmental imperatives of targeted energy development in Ukraine. Kyiv: 2018.

[^30]: Podolets R, Diachuk О, Kniazev S, Pys’menna U, Serebrenikov B, Trypol’ska G, et al. Integration factors in the transformation of the institutional environment and the structure of the energy markets of Ukraine. Kyiv: 2016.
