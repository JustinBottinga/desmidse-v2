import { useParams, Link } from "react-router-dom";
import { services } from "@/lib/diensten";
import Hero from "@/components/Hero";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-center my-10">
      {children}
    </h2>
  );
}

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
      {children}
    </h3>
  );
}

// Bouwtechnisch Advies
function BouwtechnischAdviesContent() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle>Onze werkwijze</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ColLabel>Erkende Inspecteurs</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              De Smidse BTA werkt uitsluitend met erkende bouwkundige
              inspecteurs (IWI integraal woning inspecteur). Deze inspecteurs
              zijn ingeschreven in het Sertum register en hebben vele jaren
              ervaring in de bouwwereld. Elk bouwkundig rapport wordt
              gevalideerd door middel van het 4 ogen principe. Dit alles om de
              kwaliteit voor uw te waarborgen.
            </p>
          </div>
          <div>
            <ColLabel>Adviesbureau</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              De Smidse BTA is een onafhankelijk adviesbureau in de
              vastgoedmarkt. Wij zijn een bedrijf dat innovatie en
              klantgerichtheid hoog in het vaandel heeft staan. Zo helpen wij
              particulieren, makelaars en hypotheekadviseurs met een keuringen
              en (energie)advies.
            </p>
          </div>
          <div>
            <ColLabel>Onze Relaties</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              In onze klantenring zitten ook projectontwikkelaars, architecten,
              bouwbedrijven, scholen, kerken, en (VVE) vereniging van eigenaars.
              Al deze organisaties en bedrijven maken gebruik van allerlei
              diensten waarbij maatwerk en advies een bepalende factor is.
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <SectionTitle>
          De branche erkende keurmerken van De Smidse BTA
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <ColLabel>IWI Woning Inspecteurs</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Het uitvoeren van inspecties is belangrijk en goed inzicht te
              geven in de staat van onderhoud van een woning. De kwaliteit van
              de uitgevoerde inspectie is daartoe van groot belang. De gevolgen
              van een rapport kunnen immers groot zijn en elk bouwkundig rapport
              moet een inspecteur aantoonbaar competent zijn en blijven op alle
              voor de inspectie relevante gebieden.
            </p>
          </div>
          <div>
            <ColLabel>Instituut Onderhoudsdiendingers</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Sertium is het enige onafhankelijke register voor erkende
              onderhoudstechnisch deskundigen in Nederland. Onze vakbekwaamheid
              staat onze kwaliteit in alles wat we doen. Onafhankelijkheid is
              belangrijk voor ons. De operationele taken van Sertium worden door
              een stichtingbureau uitgevoerd onder toezicht van het bestuur.
            </p>
          </div>
          <div>
            <ColLabel>Certificerende Onderhoudsverzekeringen</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Sertium heeft duo het continu verbeteren van het niveau van
              vastgoedonderhoud als technisch beheer. De deskundigheid van de
              onderhoudsprofessionals die in het Sertium register als
              thuisinspecteur wordt gewaarborgd via de competentieaanwijzingen.
            </p>
          </div>
          <div>
            <ColLabel>Licentie Keurmerk</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Allyup faltor magna aute faltor verum magna aula diss dasarum,
              diss. Dolor id dolor in alium aute nure capitatut as ullarco.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Aan- en Verkoopkeuring
function AanEnVerkoopkeuringContent() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle>Wij helpen u met:</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ColLabel>Aankoopkeuring</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Een aankoopkeuring voorkomt de koop van een woning met bouwkundige
              gebreken, die u veel geld kunnen gaan kosten. Middels deze
              aankoopkeuring kunnen wij u inzicht geven in het onderhoud dat u
              de komende 5 jaar kunt verwachten. Ook kunnen wij een
              prijsindicatie geven van het te verwachten onderhoud.
            </p>
          </div>
          <div>
            <ColLabel>Veilig en Zonder Problemen</ColLabel>
            <p className="text-sm leading-7 text-foreground/90 mb-3">
              Maak van de aankoop van uw woning of bedrijfspand geen risico. Met
              een aankoopkeuring van De Smidse BTA koopt u veilig en zonder
              problemen:
            </p>
            <ul className="text-sm space-y-1 text-foreground/90">
              <li>• volledig onafhankelijk</li>
              <li>• NHG geschikt</li>
              <li>• Rapport 5 dagen na inspectie</li>
              <li>• Hersteladvies in duidelijke begrijpelijke taal</li>
              <li>• Kostenramingen direct herstel en op termijn</li>
            </ul>
          </div>
          <div>
            <ColLabel>Informatie Vooraf</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Alle aspecten die met het oog waarneembaar zijn, worden
              meegenomen. Onze inspecteur kan geen zaken demonstreren,
              verwijderen of beschadigen om eventueel niet-zichtbare gebreken te
              constateren. De levertermijn van het bouwkundig rapport gaat tot
              na uitlevering van de inspectie en na ontvangst van alle
              aangeleverde technische gegevens. Wij zijn daarin vriendelijk van
              de reactiesnelheid van de diebetreffende verkoopmakelaar.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="text-sm text-muted-foreground mb-8">
          Wij inspecteren onderstaande cruciale punten voor u:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ColLabel>Bouwtechnisch</ColLabel>
            <ul className="text-sm space-y-2 text-foreground/90">
              <li>• Fundering *</li>
              <li>• Draagconstructie</li>
              <li>• Vloer</li>
              <li>
                • Dakconstructie (Hoe is de algemene staat? Controle op houtworm
                en houtrot)
              </li>
              <li>• Schoorstenen (algemene staat visueel)</li>
              <li>• Trappen</li>
              <li>• Tegelwerk</li>
              <li>• Kozijnen</li>
              <li>
                • Metsel en voegwerk algemene staat en controle op scheurvorming
              </li>
              <li>
                • Schilderwerk (wat is de staat van het schilderwerk? Zijn er
                aandachtspunten en wat is de resterende levensduur van het
                schilderwerk?)
              </li>
              <li>
                • Hang en sluitwerk (wat is de staat van het hang- en sluitwerk
                en voldoet het aan de politie keurmerkkeuring wonen)
              </li>
              <li>• Keldermuren</li>
              <li>
                • Aanwezigheid asbesthoudende materialen op een visueel
                waarneembare manier, dan geen destructief onderzoek of
                monsterneming
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              De zaken aangemerkt met een * voeren wij alleen binnen de ARBO wet
              en regelgeving veilig praktisch uitvoerbaar.
            </p>
          </div>
          <div>
            <ColLabel>Installatietechnisch</ColLabel>
            <ul className="text-sm space-y-2 text-foreground/90">
              <li>
                • Verwarming (Is er centrale verwarming? En wat is de staat van
                de installatie? Hoe oud is de ketel en wat voor rendement ketel
                is het?)
              </li>
              <li>• Gasinstallatie (algehele staat zonder afpersen)</li>
              <li>• Elektrische installatie (algehele staat visueel)</li>
              <li>• Riolering (algehele staat visueel)</li>
              <li>• Sanitair (algehele staat)</li>
              <li>
                • Waterleidingen (algehele staat, zijn er nog loden leidingen?)
              </li>
              <li>• Keuken (algehele staat)</li>
            </ul>
          </div>
        </div>
        <div className="space-y-3 mt-8">
          <p className="text-sm leading-7 text-foreground/90">
            Deze aanloop/verkoopkeuring wordt ook wel verkoopkeuring genoemd en
            u laat dus bij een aan- en verkoop van een huis bij voorkeur een
            dergelijke keuring uitvoeren.
          </p>
          <p className="text-sm leading-7 text-foreground/90">
            Het rapport dat naar aanleiding van de keuring gemaakt wordt,
            voldoet aan alle eisen van de Nationale Hypotheek Garantie en is een
            erkend rapport.
          </p>
          <p className="text-sm leading-7 text-foreground/90">
            Het is altijd verstandig om een dergelijk rapport op te laten maken.
            Idealiter laat u een keuring verrichten voor u een eerste bod op een
            woning doet.
          </p>
        </div>
      </section>

      <hr />

      <section className="space-y-4">
        <h3 className="font-semibold">Goed om vooraf te weten:</h3>
        <p className="text-sm leading-7 text-foreground/90">
          Alle aspecten die het oog waarneembaar zijn, worden meegenomen. Onze
          inspecteur kan geen zaken demonstreren, verwijderen of beschadigen om
          eventueel niet-zichtbare gebreken te constateren.
        </p>
        <p className="text-sm leading-7 text-foreground/90">
          De levertermijn van het bouwkundig rapport gaat na uitlevering van de
          inspectie en na ontvangst van alle aangeleverde technische gegevens.
          Wij zijn daarin vriendelijk van de reactiesnelheid van de
          diebetreffende verkoopmakelaar.
        </p>
        <h4 className="font-semibold mt-4">Arbeidsomstandigheden:</h4>
        <p className="text-sm leading-7 text-foreground/90">
          Voor alle inspecties is een droge en minimaal vrije kruiphoogte van
          0,50 meter vereist. De kruipruimte dient daarvoor zonder gevaar
          toegankelijk te zijn. Wanneer u als opdrachtgever niet aanwezig bent
          bij een inspectie, geldt dat een derde partij aanwezig is bij de
          inspectie, kan de aannemer in de directe omgeving van het kruipruimte
          worden geïnspecteerd.
        </p>
        <p className="text-sm leading-7 text-foreground/90">
          Balkons, goten en overstekken tot een maximale hoogte van ca. 2,6
          meter of verdiepingshoogten worden geïnspecteerd, indien veilig
          bereikbaar van uit een ladder. Hoger gelegen elementen worden
          uitsluitend geïnspecteerd met de daarvoor beschikbare veilige middelen
          op opdrachtnemer.
        </p>
        <p className="text-sm leading-7 text-foreground/90">
          Indien tijdens inspectie blijkt dat bepaalde objecten of elementen
          voor moeilijk of gevaarlijk bereikbaar zijn, kunnen wij deze alleen
          maar visueel beoordelen.
        </p>
        <h4 className="font-semibold mt-4">
          Prijs van de aankoop/verkoopkeuring:
        </h4>
        <ul className="text-sm space-y-1 text-foreground/90">
          <li>• € 345,- (incl. BTW) objecten tot 500m&#xB3;</li>
          <li>• € 395,- (incl. BTW) objecten 500 tot 1000m&#xB3;</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-2">
          Objecten zoals scholen, kerken, ziekenhuizen enzovoort; daar maken we
          een passende aanbieding voor aan de hand van het aantal m&#xB3;.
        </p>
      </section>
    </div>
  );
}

// Opleveringskeuring
function OpleveringskeuringContent() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle>
          DE SMIDSE BTA OPLEVERINGSKEURING; HOE WERKT HET?
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ColLabel>De Inspectiedag</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Op de dag van de inspectie komt de bouwkundig inspecteur bij uw
              woning. De aannemer is daar soms ook bij aanwezig. Samen met hem
              en de inspecteur controleert u de gehele woning op mogelijke
              gebreken. De keuring vindt zowel aan de binnen als aan de
              buitenkant plaats. Aarzel niet om vragen te stellen. De aannemer
              zal uw vragen behandelen. Zo bekijken we per ruimte of alles in
              orde is. De bouwkundig inspecteur bekijkt alle onderdelen en
              installaties op functionaliteit, afwerking en markeringen. Na
              afloop tekent iedereen het proces-verbaal van de keuring en dan
              krijgt u het keuringsrapport opgestuurd.
            </p>
          </div>
          <div>
            <ColLabel>Welke Onderdelen</ColLabel>
            <p className="text-sm leading-7 text-foreground/90 mb-3">
              De inspecteur gaat zeer grondig te werk bij de opleveringskeuring
              en controleert alle onderdelen van het nieuwbouw- of aanbouwhuis.
            </p>
            <p className="text-sm font-medium mb-2">
              Waar de inspecteur zowel op let:
            </p>
            <ul className="text-sm space-y-2 text-foreground/90">
              <li>
                • Rondom de woning kijkt de bouwkundige of paden en
                erfafscheiding in orde zijn.
              </li>
              <li>
                • Aan de buitenkant van de woning of de nieuwe aanbouw wordt
                gecontroleerd op het metselwerk, voegwerk, hemelsafvoeren,
                dakpannen, schilderwerk en ventilatie.
              </li>
              <li>
                • Binnen in de nieuwbouw controleert de inspecteur in iedere
                ruimte de afwerking, kozijnen, beglazing, elektro en
                schilderwerk.
              </li>
              <li>
                • De badkamer en toilet wordt gecontroleerd op leidingen,
                sanitair en tegelwerk.
              </li>
              <li>
                • In de keuken controleert de inspecteur o.a. de
                keukenopstelling, leidingen en het tegelwerk.
              </li>
              <li>
                • Ook wordt naar de installaties gekeken zoals, de ketel,
                warmwatervoorziening en de mechanische ventilatie.
              </li>
            </ul>
          </div>
          <div>
            <ColLabel>Het Rapport</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Het rapport begint met de algemene gegevens van de woning zoals
              adres en type woning. Ook noteert de inspecteur de bevindingen in
              het rapport. Bij ieder aspect staat vermeld of er gebreken zijn en
              of de aannemer heeft gezegd die direct tijdens de keuring op te
              lossen.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold">
                Kosten opleveringskeuring:
              </p>
              <ul className="text-sm mt-2 text-foreground/90 space-y-1">
                <li>• € 245,- inclusief btw.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Nulmeting
function NulmetingContent() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle>Hoe gaat de Nulmeting te werk</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ColLabel>Discussie(s) Achteraf</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Om discussie achteraf te voorkomen over eventuele schade kan het
              zinvol zijn om voor aanvang van de werkzaamheden een nulmeting uit
              te laten voeren. Met de nulmeting van De Smidse BTA voeren we een
              gedegen bouwkundige opname uit. Zowel van het interieur als het
              exterieur. Ook inspecteren wij eventuele risicoonderdelen. Met
              digitaal beeldmateriaal leggen wij alles zorgvuldig voor u vast in
              het rapport.
            </p>
          </div>
          <div>
            <ColLabel>Bewijslast en Acceptatie</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              De nulmetingen van De Smidse BTA zijn te gebruiken als bewijslast
              en worden als zodanig geaccepteerd. De nulmetingen zijn dus
              onafhankelijk en neutraal. Het rapport dat voorkomt uit de
              nulmeting kan als bewijslast dienen tegen diegene die
              aansprakelijk is voor de schade aan uw pand.
            </p>
          </div>
          <div>
            <ColLabel>Kosten Nulmeting</ColLabel>
            <div className="text-sm space-y-3 text-foreground/90">
              <div>
                <p>Object met een inhoud tot 400 m&#xB3;</p>
                <p className="font-semibold">€ 350,- incl. 21% BTW</p>
              </div>
              <div>
                <p>Object met een inhoud 401 m&#xB3; t/m 750 m&#xB3;</p>
                <p className="font-semibold">€ 400,- incl. 21% BTW</p>
              </div>
              <div>
                <p>Object met een inhoud 751 m&#xB3; t/m 1000 m&#xB3;</p>
                <p className="font-semibold">€ 450,- incl. 21% BTW</p>
              </div>
              <div>
                <p>Object met een inhoud groter dan 1000 m&#xB3;</p>
                <p className="font-semibold">prijs op aanvraag</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Bouwkundig rapport met NHG
function BouwkundigRapportContent() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle>Rapport voor verkrijgen NHG-garantie</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ColLabel>Wat kijken we na</ColLabel>
            <ul className="text-sm space-y-2 text-foreground/90">
              <li>• Fundering</li>
              <li>
                • Kruipruimte en/of kelder (ventilatie indien van toepassing en
                toegankelijk)
              </li>
              <li>• Riolering (indien van toepassing en bereikbaar)</li>
              <li>• Balken, vloerdelen en/of constructie</li>
              <li>• Cv-ketel</li>
              <li>• Brandveiligheid</li>
              <li>• Metalen en houten constructiedelen per verdieping</li>
              <li>• Kozijnen, ramen en buitendeuren per verdieping</li>
              <li>• Beglazing/waterwering en ventilatie per verdieping</li>
              <li>• Buizijnen, ramen en binnendeuren per verdieping</li>
              <li>• Vloeren, plafonds en wanden per verdieping</li>
              <li>• Keuken, badkamer, toilet en sanitair per verdieping</li>
              <li>• Controle op asbesthoudende materialen. Alleen visueel.</li>
              <li>• Aanwezigheid olietank/soptank.</li>
            </ul>
          </div>
          <div>
            <ColLabel>
              Kosten Integrale Woninginspectie met NTA 8060 Norm
            </ColLabel>
            <div className="text-sm space-y-3 text-foreground/90">
              <div>
                <p>Bouwkundige keuring tot 400 m&#xB3;</p>
                <p className="font-semibold">€ 340,-</p>
              </div>
              <div>
                <p>Bij elke +100 m&#xB3; een toeslag van</p>
                <p className="font-semibold">€ 30,-</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 italic">
              Bij appartementen keurt de bouwexpert alleen het prive gedeelte.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Bouw en verbouw controle
function BouwEnVerbouwControleContent() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle>De 3 controle fases</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <ColLabel>Fase 1: Start Bouw Eerste Verdieping</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Voordat het moment dat de eerste verdieping gebouwd wordt is het
              meest ideale moment voor de controle uit te voeren. Dit is het
              moment dat de wanden staan en de eerste verdiepisvloer gelegd is.
              Vaak wordt er dan begonnen met de bouw van de sloepen en wordt er
              gestart, met balken en het metselwerk van de buitengevel.
            </p>
          </div>
          <div>
            <ColLabel>Fase 2: Bij Nieuwe Casco</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Dit is het beste moment voor een controle tijdens de bouw als nu
              de woning staat. Na het optrekken van de buitenmuren en het
              isoleren van de buitenkant worden nu ook de dakplaten en de
              kozijnen geplaatst.
            </p>
          </div>
          <div>
            <ColLabel>Fase 3: Woning Wind- en Waterdicht</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Na de woning wind en waterdicht is, is de dakbedekking er op na te
              kijken en de afbouw van de woning. Op dit moment van de bouw valt
              er veel te controleren, omdat er in de afbouw vaak dingen moeten
              staan in de afwerking.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <p className="text-sm font-semibold">Tip:</p>
            <p className="text-sm leading-7 text-foreground/90">
              Overleg met wel met de aannemer wanneer u de keuring wilt laten
              voeren. De aannemer kan bekijken welk moment qua veiligheid en
              planning het best uitkomt.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Eindresultaat:</p>
            <p className="text-sm leading-7 text-foreground/90">
              De bevindingen van de bouwkundige krijgt u in een rapport
              onderbouwd met fotos van de eventuele gebreken en het advies over
              de te nemen vervolg stappen.
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section className="space-y-4">
        <ColLabel>Kosten Controle Tijdens Bouw/Verbouw</ColLabel>
        <ul className="text-sm space-y-2 text-foreground/90">
          <li>
            • Basistarief voor 1 uur:{" "}
            <span className="font-semibold">€ 290,- inclusief 21% BTW</span>
          </li>
          <li>
            • Meerprijs per extra half uur:{" "}
            <span className="font-semibold">€ 50,- inclusief 21% BTW</span>
          </li>
        </ul>
        <p className="text-sm text-foreground/90">
          Meerprijs op Ameland, Schiermonnikoog, Texel, Vlieland of
          Terschelling:{" "}
          <span className="font-semibold">€ 200,- inclusief 21% BTW</span>
        </p>
      </section>
    </div>
  );
}

// Bouwkundig Consult
function BouwkundigConsultContent() {
  return (
    <div className="space-y-16">
      <section>
        <SectionTitle>Bouwkundig consult informatie</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ColLabel>Werkwijze</ColLabel>
            <p className="text-sm leading-7 text-foreground/90">
              Met moderne hulpmiddelen zijn wij in staat veel problemen op te
              sporen. Wel richten wij ons op een probleem per onderzoek. Heeft u
              meerdere bouw gerelateerde problemen dan is een bouwtechnische
              keuring een betere optie.
            </p>
          </div>
          <div>
            <ColLabel>Kosten Bouwkundig Consult</ColLabel>
            <div className="text-sm space-y-3 text-foreground/90">
              <p>
                De kosten voor een bouwconsult zijn{" "}
                <span className="font-semibold">€ 185,- inclusief</span> 21% BTW
                en exclusief rapport.
              </p>
              <p>
                Voor een eenvoudige rapportage van ons onderzoek zonder
                kostenbegroting is de meerprijs{" "}
                <span className="font-semibold">€ 50,- inclusief</span> 21% BTW.
              </p>
              <p>
                Voor een uitgebreid rapport met kostenbegroting is de meerprijs{" "}
                <span className="font-semibold">€ 150,- inclusief</span> 21%
                BTW.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Page registry
type DienstPage = {
  title: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  content: () => React.ReactNode;
};

const dienstPages: Record<string, DienstPage> = {
  "bouwtechnisch-advies": {
    title: "Bouwtechnisch Advies",
    subtitle: "Jeroen Klikkert",
    intro:
      "De Smidse BTA voert diverse bouwtechnische keuringen uit voor particulieren en bedrijven. Wij bieden het gemak en effici&#xEB;ntie binnen het kopen, verkopen, verhuizen, verbouwen of onderhoud aan uw woning of bedrijfspand. De Smidse BTA is het aanspreekpunt voor alle diensten die worden aangeboden tijdens dit proces. Wij houden u op de hoogte van de voortgang van alle stappen die aan bod komen.",
    heroImage: "/media/hero-placeholder.svg",
    content: () => <BouwtechnischAdviesContent />,
  },
  "aan-en-verkoopkeuring": {
    title: "Aan- en Verkoopkeuring",
    subtitle: "De mening van uw dromen in dan?",
    intro:
      "Als u de woning van uw dromen gevonden heeft dan kan het afsluiten van een lening (en beslissing van een verbouwing aan uw woning) een bouwkundige keuring vereist zijn. De kredietverstrekker wil ook graag de huidige staat van het huis en eventuele verbouwingskosten weten... u natuurlijk ook! Onze inspecteurs helpen u hier graag mee.",
    heroImage: "/media/hero-placeholder.svg",
    content: () => <AanEnVerkoopkeuringContent />,
  },
  opleveringskeuring: {
    title: "Opleveringskeuring",
    subtitle: "De woning van uw dromen en dan?",
    intro:
      "Wordt uw nieuwbouwhuis bijna opgeleverd? Of is de verbouwing van uw huidige woning bijna klaar? Met een opleveringskeuring laat u de nieuwbouw visueel keuren. Dan weet u zeker of de woning zich in een goede staat bevindt en of er geen gebreken zijn. Als alles in orde is neemt u bij de oplevering de sleutels zorgeloos in ontvangst.",
    heroImage: "/media/hero-placeholder.svg",
    content: () => <OpleveringskeuringContent />,
  },
  nulmeting: {
    title: "Nulmeting",
    subtitle: "Jeroen Klikkert",
    intro:
      "Wordt er binnenkort met bouwwerkzaamheden gestart in de directe omgeving van uw woning of bedrijfspand? Denk hierbij aan een grote verbouwing bij de buren of heiwerkzaamheden, graafwerkzaamheden, baggerwerken en dergelijke.",
    heroImage: "/media/hero-placeholder.svg",
    content: () => <NulmetingContent />,
  },
  "bouwkundig-rapport": {
    title: "Bouwkundig rapport met NHG",
    subtitle: "NTA 8060/NEN 2767",
    intro:
      "Het NTA 8060 rapport is een normering om op een objectieve visuele manier en op een eenvoudige wijze de integrale technische kwaliteit van een woning, of bedrijfspand te beoordelen en deze vast te leggen in een NTA bouwkundig rapport. Hierdoor bent u verzekerd van een rapport dat geschikt is voor aankoop/verkoop en het verkrijgen van een hypotheek met Nationale Hypotheek Garantie. Dit rapport geeft u een duidelijk inzicht in de technische staat van uw woning of bedrijfspand en geeft ook direct de staat van het onderhoud aan.",
    heroImage: "/media/hero-placeholder.svg",
    content: () => <BouwkundigRapportContent />,
  },
  "bouw-en-verbouwcontrole": {
    title: "Controle tijdens bouw/verbouw",
    subtitle: "wanneer controleren?",
    intro:
      "Wanneer laat je een controle tijdens de bouw/verbouw uitvoeren? Heb je vragen of twijfels over de verloop van de bouw en wil je dat een bouwkundige de bouw beoordeelt? Dan is een controle of meerdere controlepunten tijdens de bouw een goede keus. Tijdens de bouw zijn 3 handige momenten om een keuring al te laten voeren.",
    heroImage: "/media/hero-placeholder.svg",
    content: () => <BouwEnVerbouwControleContent />,
  },
  "bouwkundig-consult": {
    title: "Bouwkundig consult",
    subtitle: "wanneer controleren?",
    intro:
      "Wanneer u in uw woning of bedrijfspand met een specifiek probleem zit dan kunt u een bouwkundig consult laten uitvoeren. Dit consult is bedoeld om ter plaatse van een bouwkundige advies te krijgen over bijvoorbeeld een verzakking, vochtprobleem, scheurvorming of problemen bij een oplevering van een object. Maar ook bij veel andere bouw gerelateerde problemen kunnen wij u helpen zoeken naar een oplossing.",
    heroImage: "/media/hero-placeholder.svg",
    content: () => <BouwkundigConsultContent />,
  },
};

// Route component
export default function Diensten() {
  const { slug } = useParams<{ slug?: string }>();
  const activeSlug = slug ?? "";
  const page = activeSlug ? dienstPages[activeSlug] : undefined;

  return (
    <>
      {page && (
        <Hero
          image={page.heroImage}
          title={page.title}
          subtitle={page.subtitle}
          paragraph={page.intro}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {!page && (
          <>
            <header className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Onze diensten
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Bouwtechnisch advies en woninginspecties voor particulieren en
                bedrijven.
              </p>
            </header>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  to={s.href}
                  key={s.href}
                  className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-semibold">{s.label}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Meer over {s.label.toLowerCase()}.
                  </p>
                </Link>
              ))}
            </section>
          </>
        )}

        {page && page.content()}
      </div>
    </>
  );
}
