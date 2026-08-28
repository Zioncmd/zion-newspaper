import {ConsultationBand,PageIntro,SiteShell} from '../site-shell';

const principles=[
  ['01','CLEAR BEFORE COMPLEX','We begin by understanding the business problem, the operating environment, and the outcome that would make the work useful.'],
  ['02','HUMANS STAY IN CONTROL','Important decisions remain visible and intentional. Automation supports judgment; it does not obscure it.'],
  ['03','BUILT FOR THE REAL OPERATION','Every system is shaped around the people, tools, constraints, and responsibilities already in the room.'],
  ['04','USEFUL FROM DAY ONE','The goal is practical leverage: clearer information, less repeated work, and systems that can grow with the organization.'],
];

export default function Process(){return <SiteShell><PageIntro kicker="INSTITUTIONAL / HOW ZION WORKS" title="A PRACTICAL PARTNERSHIP"><p className="lead">Clear thinking, accountable decisions, and useful systems—without unnecessary complexity or technology for technology’s sake.</p></PageIntro><section className="content-section container"><div className="cards">{principles.map(([n,t,d])=><article className="card" key={n}><span className="num">{n}</span><h2>{t}</h2><p>{d}</p></article>)}</div></section><ConsultationBand/></SiteShell>}
