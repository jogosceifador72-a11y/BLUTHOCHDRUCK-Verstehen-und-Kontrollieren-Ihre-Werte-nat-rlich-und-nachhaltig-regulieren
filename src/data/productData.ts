import { SocialLink } from '../types';

export const CHECKOUT_URL = 'https://pay.hotmart.com/L108024302J';
export const PRICE_EUR = '27,66';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@karinzeit',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    platform: 'instagram',
    color: 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500',
    hoverColor: 'hover:opacity-95',
  },
  {
    id: 'facebook-profile',
    name: 'Facebook Profil',
    handle: 'Karin Zeit',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    platform: 'facebook',
    color: 'bg-[#1877F2]',
    hoverColor: 'hover:bg-[#166fe5]',
  },
  {
    id: 'facebook-page',
    name: 'Facebook Seite',
    handle: 'Karin Zeit Offiziell',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/',
    platform: 'facebook',
    color: 'bg-[#0E5296]',
    hoverColor: 'hover:bg-[#0c4782]',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@karinzeit',
    url: 'https://www.tiktok.com/@karinzeit',
    platform: 'tiktok',
    color: 'bg-black text-white',
    hoverColor: 'hover:bg-neutral-800',
  },
  {
    id: 'youtube',
    name: 'YouTube Kanal',
    handle: '@karinzeit',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    platform: 'youtube',
    color: 'bg-[#FF0000]',
    hoverColor: 'hover:bg-[#e60000]',
  },
  {
    id: 'threads',
    name: 'Threads',
    handle: '@karinzeit',
    url: 'https://www.threads.com/@karinzeit',
    platform: 'threads',
    color: 'bg-neutral-900',
    hoverColor: 'hover:bg-black',
  },
  {
    id: 'kwai',
    name: 'Kwai',
    handle: '@kariningrid673',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    platform: 'kwai',
    color: 'bg-[#FF5000]',
    hoverColor: 'hover:bg-[#e64800]',
  },
];

export const FOUR_WEEKS_PLAN = [
  {
    week: 1,
    title: 'Fundament & Richtiges Messen',
    focus: 'Fehlerfreie Heimmessung & Ausgangswerte',
    description: 'Beseitigen Sie Unsicherheiten und Messfehler. Sie lernen die goldene 5-Minuten-Ruhe-Regel, die optimale Manschettenposition und wie Sie Ihr persönliches Blutdruck-Tagebuch ohne Stress führen.',
    keyPoints: [
      'Die 7 häufigsten Messfehler zu Hause vermeiden',
      'Den wahren Ruhewert bestimmen statt spontaner Panikwerte',
      'Systematisches Erfassen der Morgen- und Abendwerte',
      'Verständnis für natürliche physiologische Schwankungen',
    ],
  },
  {
    week: 2,
    title: 'Die DASH-Ernährung & Salzkontrolle',
    focus: 'Gefäßschonende Ernährung ohne Verzicht',
    description: 'Schluss mit Diäten-Chaos. Sie integrieren die wissenschaftlich am besten erprobte DASH-Ernährungsform: sanfte Reduktion von verstecktem Natrium bei gleichzeitiger Zufuhr von Gefäßentspannern.',
    keyPoints: [
      'Versteckte Salzfallen in Alltagslebensmitteln enttarnen',
      'Kalium-Booster für die natürliche Natriumausscheidung',
      'Magnesium und Calcium für elastische Arterienwände',
      'Einfache Rezeptideen & Würz-Alternativen mit Kräutern',
    ],
  },
  {
    week: 3,
    title: 'Sanfte Bewegung & Gefäßelastizität',
    focus: 'Alltagsbewegung statt Leistungssport',
    description: 'Keine anstrengenden Marathons oder riskanten Kraftakte. Sie entdecken, wie moderate, rhythmische Bewegung die Stickstoffmonoxid-Ausschüttung stimuliert und den Gefäßwiderstand natürlich senkt.',
    keyPoints: [
      'Der optimale Pulsbereich für sanften Gefäßschutz',
      'Kleine 10-Minuten-Spaziergänge nach Mahlzeiten',
      'Gelenkschonende Routinen für jedes Fitnesslevel',
      'Warum Regelmäßigkeit 10x wichtiger ist als Intensität',
    ],
  },
  {
    week: 4,
    title: 'Stressreduktion, Schlaf & Langzeitroutine',
    focus: 'Das Nervensystem beruhigen & Werte festigen',
    description: 'Dauerhafter Stress verengt Arterien. In der letzten Woche verankern Sie bewährte Atem- und Entspannungstechniken, optimieren Ihren zirkadianen Schlafrhythmus und sichern Ihre Erfolge dauerhaft ab.',
    keyPoints: [
      'Die 4-7-8 Atemtechnik zur akuten Blutdruckberuhigung',
      'Schlafqualität steigern: Warum die Nachtruhe die Gefäße heilt',
      'Umgang mit emotionalen Triggern und Alltagshektik',
      'Ihr persönlicher Langzeit-Kompass für die kommenden Monate',
    ],
  },
];

export const CHAPTERS_OUTLINE = [
  {
    number: '01',
    title: 'Grundlagen: Was Bluthochdruck wirklich im Körper bewirkt',
    pages: 'S. 4–7',
    summary: 'Systole & Diastole verständlich erklärt, warum die „stille Gefahr" oft unbemerkt bleibt und wie Gefäße regenerieren können.',
  },
  {
    number: '02',
    title: 'Die Kunst der richtigen Heimmessung',
    pages: 'S. 8–11',
    summary: 'Richtige Sitzhaltung, Manschettengröße, Tageszeiten und warum der Weißkittel-Effekt beim Arzt oft falsche Alarme auslöst.',
  },
  {
    number: '03',
    title: 'Das DASH-Ernährungsprinzip im Alltag',
    pages: 'S. 12–16',
    summary: 'Die klinisch erforschte Ernährungsform zur natürlichen Senkung des Blutdrucks ohne striktes Kalorienzählen oder Hungern.',
  },
  {
    number: '04',
    title: 'Salz intelligent regulieren statt geschmacklos essen',
    pages: 'S. 17–19',
    summary: 'Verstecktes Salz in Brot, Saucen und Fertiggerichten enttarnen und durch frische Kräuter und Gewürze vollen Genuss erleben.',
  },
  {
    number: '05',
    title: 'Mineralstoffe: Die Schutzengel Ihrer Gefäße',
    pages: 'S. 20–22',
    summary: 'Wie Kalium, Magnesium und Calcium im Team zusammenspielen, um Arterienwände zu entspannen und zu schützen.',
  },
  {
    number: '06',
    title: 'Bewegung, Schlaf & vegetative Entlastung',
    pages: 'S. 23–26',
    summary: 'Gezielte Mikrobewegungen, erholsamer Tiefschlaf und einfache Atemübungen, die den Parasympathikus sofort aktivieren.',
  },
  {
    number: '07',
    title: 'Ihr 4-Wochen-Aktionsplan für dauerhafte Vitalität',
    pages: 'S. 27–30',
    summary: 'Der konkrete Wochenfahrplan zum Eintragen, Mitmachen und langfristigen Erhalten gesunder Werte.',
  },
];

export const FAQS = [
  {
    q: 'Wie und wann erhalte ich das E-Book nach dem Kauf?',
    a: 'Direkt nach der erfolgreichen Zahlungsbestätigung erhalten Sie eine automatische E-Mail von unserem zertifizierten Zahlungsanbieter Hotmart mit Ihrem persönlichen Download-Link. Sie können das E-Book innerhalb weniger Sekunden als PDF herunterladen und sofort loslegen.',
  },
  {
    q: 'Auf welchen Geräten kann ich das E-Book lesen?',
    a: 'Das E-Book liegt im universellen PDF-Format vor. Es ist für alle modernen Bildschirme optimiert – egal ob Apple iPhone, iPad, Android-Smartphone, Tablet, Mac oder Windows-PC. Sie können es speichern, weiterblättern oder bei Bedarf auch einzelne Seiten ausdrucken.',
  },
  {
    q: 'Ich nehme bereits Medikamente gegen Bluthochdruck. Ist das E-Book trotzdem für mich geeignet?',
    a: 'Ja, absolut. Ein gesunder, gefäßschonender Lebensstil (Ernährung, Bewegung, Stressreduktion) ist laut allen kardiologischen Leitlinien das fundamentale Basis-Element jeder Blutdrucktherapie. Das E-Book unterstützt Sie dabei, Ihren Alltag positiv zu gestalten. Wichtig: Reduzieren oder verändern Sie verschriebene Medikamente niemals eigenmächtig, sondern besprechen Sie Ihre Fortschritte stets mit Ihrem behandelnden Arzt.',
  },
  {
    q: 'Brauche ich Vorkenntnisse oder medizinisches Fachwissen?',
    a: 'Nein, überhaupt nicht! Der Leitfaden ist bewusst ohne langes Fachchinesisch und akademische Ausschweifungen geschrieben. Alles wird in klarer, bildhafter und leicht verständlicher Sprache erklärt, sodass Sie jeden Tipp sofort im Alltag umsetzen können.',
  },
  {
    q: 'Welche Bezahlmöglichkeiten gibt es bei Hotmart?',
    a: 'Über den sicheren Hotmart-Checkout können Sie bequem per Kreditkarte (Visa, Mastercard, etc.), PayPal, Sofortüberweisung oder weiteren lokalen Zahlungsarten bezahlen. Ihre Daten werden nach modernsten 256-Bit SSL-Sicherheitsstandards verschlüsselt.',
  },
  {
    q: 'Ersetzt dieses E-Book meinen Arztbesuch?',
    a: 'Nein. Dieses E-Book dient der Information, Bildung und praktischen Lebensstil-Orientierung. Es ersetzt keine ärztliche Diagnose, Beratung oder Therapie. Bei akuten Beschwerden oder sehr hohen Werten sollten Sie immer umgehend einen Arzt konsultieren.',
  },
];
