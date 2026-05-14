
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Copy, Check } from 'lucide-react';
import './style.css';

const bases = [
  {
    "family": "Cylinder",
    "ref": "D80",
    "diameter": "80 mm",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "note": "petite base simple"
  },
  {
    "family": "Cylinder",
    "ref": "D90",
    "diameter": "90 mm",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "note": "petite base simple"
  },
  {
    "family": "Cylinder",
    "ref": "D100",
    "diameter": "100 mm",
    "size": "M",
    "tier": "Classique",
    "price": 49,
    "note": "format standard"
  },
  {
    "family": "Cylinder",
    "ref": "D125",
    "diameter": "125 mm",
    "size": "M+",
    "tier": "Classique",
    "price": 59,
    "note": "présence plus large"
  },
  {
    "family": "Cylinder",
    "ref": "D150",
    "diameter": "150 mm",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "note": "grande base simple"
  },
  {
    "family": "Cone",
    "ref": "D80",
    "diameter": "80 mm",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "note": "petite base contemporaine"
  },
  {
    "family": "Cone",
    "ref": "D90",
    "diameter": "90 mm",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "note": "petite base contemporaine"
  },
  {
    "family": "Cone",
    "ref": "D100",
    "diameter": "100 mm",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "note": "format standard"
  },
  {
    "family": "Cone",
    "ref": "D125",
    "diameter": "125 mm",
    "size": "M+",
    "tier": "Classique",
    "price": 65,
    "note": "plus stable / plus présent"
  },
  {
    "family": "Cone",
    "ref": "D150",
    "diameter": "150 mm",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "note": "grande base contemporaine"
  },
  {
    "family": "Cone Wide",
    "ref": "D80",
    "diameter": "80 mm",
    "size": "S",
    "tier": "Classique +",
    "price": 45,
    "note": "plus stable qu’un petit cone"
  },
  {
    "family": "Cone Wide",
    "ref": "D100",
    "diameter": "100 mm",
    "size": "M",
    "tier": "Classique +",
    "price": 59,
    "note": "standard déco"
  },
  {
    "family": "Cone Wide",
    "ref": "D125",
    "diameter": "125 mm",
    "size": "L",
    "tier": "Classique +",
    "price": 79,
    "note": "large, très stable"
  },
  {
    "family": "Arch",
    "ref": "D100 H75",
    "diameter": "100 mm",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "note": "bas / compact"
  },
  {
    "family": "Arch",
    "ref": "D100 H85",
    "diameter": "100 mm",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "note": "compact"
  },
  {
    "family": "Arch",
    "ref": "D100 H95",
    "diameter": "100 mm",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "note": "compact élancé"
  },
  {
    "family": "Arch",
    "ref": "D100 H105",
    "diameter": "100 mm",
    "size": "M",
    "tier": "Design",
    "price": 59,
    "note": "standard"
  },
  {
    "family": "Arch",
    "ref": "D100 H115",
    "diameter": "100 mm",
    "size": "M",
    "tier": "Design",
    "price": 59,
    "note": "standard élancé"
  },
  {
    "family": "Arch",
    "ref": "D100 H140",
    "diameter": "100 mm",
    "size": "L",
    "tier": "Design",
    "price": 75,
    "note": "haute"
  },
  {
    "family": "Arch",
    "ref": "D100 H165",
    "diameter": "100 mm",
    "size": "XL",
    "tier": "Design",
    "price": 89,
    "note": "très haute"
  },
  {
    "family": "Arch",
    "ref": "D120",
    "diameter": "120 mm",
    "size": "M+",
    "tier": "Design",
    "price": 69,
    "note": "plus large"
  },
  {
    "family": "Arch",
    "ref": "D150",
    "diameter": "150 mm",
    "size": "L",
    "tier": "Design",
    "price": 89,
    "note": "large / forte présence"
  },
  {
    "family": "Cloud",
    "ref": "Collection standard",
    "diameter": "variable",
    "size": "M",
    "tier": "Signature douce",
    "price": 75,
    "note": "organique / friendly"
  },
  {
    "family": "Totem Base",
    "ref": "D130",
    "diameter": "130 mm",
    "size": "M",
    "tier": "Signature",
    "price": 79,
    "note": "sculptural"
  },
  {
    "family": "Totem Base",
    "ref": "D200 H65",
    "diameter": "200 mm",
    "size": "L",
    "tier": "Signature",
    "price": 95,
    "note": "large / statement"
  },
  {
    "family": "Edamame Base",
    "ref": "Solo / 1 boudin",
    "diameter": "160 mm",
    "size": "M",
    "tier": "Signature modulaire",
    "price": 69,
    "note": "module solo"
  },
  {
    "family": "Edamame Base",
    "ref": "Duo / 2 boudins",
    "diameter": "160 mm",
    "size": "L",
    "tier": "Signature modulaire",
    "price": 85,
    "note": "composition 2 modules"
  },
  {
    "family": "Edamame Base",
    "ref": "Trio / 3 boudins",
    "diameter": "160 mm",
    "size": "XL",
    "tier": "Signature modulaire",
    "price": 95,
    "note": "composition 3 modules"
  }
];
const shades = [
  {
    "family": "Squash",
    "ref": "D160",
    "diameter": "160 mm",
    "size": "M",
    "tier": "Doux",
    "price": 69,
    "note": "abat-jour arrondi accessible"
  },
  {
    "family": "Honeycomb",
    "ref": "D175",
    "diameter": "175 mm",
    "size": "M",
    "tier": "Graphique",
    "price": 79,
    "note": "motif graphique standard"
  },
  {
    "family": "Honeycomb",
    "ref": "Tall D210",
    "diameter": "210 mm",
    "size": "L",
    "tier": "Graphique +",
    "price": 99,
    "note": "plus haut / plus présent"
  },
  {
    "family": "Tree",
    "ref": "D175",
    "diameter": "175 mm",
    "size": "M",
    "tier": "Organique",
    "price": 85,
    "note": "organique standard"
  },
  {
    "family": "Tree",
    "ref": "Inverted 3 segments",
    "diameter": "175 mm",
    "size": "M",
    "tier": "Organique",
    "price": 85,
    "note": "organique inversé"
  },
  {
    "family": "Tree",
    "ref": "Inverted Tall D200",
    "diameter": "200 mm",
    "size": "L",
    "tier": "Organique +",
    "price": 105,
    "note": "haut / sculptural"
  },
  {
    "family": "Tree",
    "ref": "Wide 4 segments D240",
    "diameter": "240 mm",
    "size": "XL",
    "tier": "Organique premium",
    "price": 119,
    "note": "large / statement"
  },
  {
    "family": "Tree",
    "ref": "Inverted Wide D240",
    "diameter": "240 mm",
    "size": "XL",
    "tier": "Organique premium",
    "price": 119,
    "note": "large inversé / statement"
  },
  {
    "family": "Totem Shade",
    "ref": "D130",
    "diameter": "130 mm",
    "size": "M",
    "tier": "Sculptural",
    "price": 89,
    "note": "vertical compact"
  },
  {
    "family": "Totem Shade",
    "ref": "Thin Tall D150",
    "diameter": "150 mm",
    "size": "L fin",
    "tier": "Sculptural",
    "price": 99,
    "note": "fin / haut"
  },
  {
    "family": "Totem Shade",
    "ref": "Tall D200",
    "diameter": "200 mm",
    "size": "L",
    "tier": "Sculptural +",
    "price": 119,
    "note": "haut premium"
  },
  {
    "family": "Totem Shade",
    "ref": "Wide D200",
    "diameter": "200 mm",
    "size": "L",
    "tier": "Sculptural +",
    "price": 119,
    "note": "large premium"
  },
  {
    "family": "Woven",
    "ref": "Collection standard",
    "diameter": "variable",
    "size": "L premium",
    "tier": "Texture premium",
    "price": 129,
    "note": "effet tissé / plus haut de gamme"
  },
  {
    "family": "Edamame Shade",
    "ref": "D160",
    "diameter": "160 mm",
    "size": "L premium",
    "tier": "Signature organique",
    "price": 119,
    "note": "signature organique"
  }
];
const cordons = [
  { id: 'standard', name: 'Cordon textile standard', price: 19 },
  { id: 'premium', name: 'Cordon textile premium', price: 29 },
  { id: 'none', name: 'Sans cordon', price: 0 }
];
const filters = [
  { id: 'none', name: 'Aucun filtre', price: 0 },
  { id: 's', name: 'Glow Filter S', price: 12 },
  { id: 'm', name: 'Glow Filter M', price: 15 }
];
const colors = ['Milk', 'Linen', 'Amber', 'Smoke', 'Sur demande'];
const euro = n => `${n} €`;
const families = list => [...new Set(list.map(x => x.family))];

function App() {
  const [baseFamily, setBaseFamily] = useState('Cone');
  const [shadeFamily, setShadeFamily] = useState('Honeycomb');
  const [baseRef, setBaseRef] = useState('D100');
  const [shadeRef, setShadeRef] = useState('D175');
  const [cordonId, setCordonId] = useState('standard');
  const [filterId, setFilterId] = useState('none');
  const [color, setColor] = useState('Linen');
  const [copied, setCopied] = useState(false);

  const baseOptions = bases.filter(x => x.family === baseFamily);
  const shadeOptions = shades.filter(x => x.family === shadeFamily);
  const base = baseOptions.find(x => x.ref === baseRef) || baseOptions[0];
  const shade = shadeOptions.find(x => x.ref === shadeRef) || shadeOptions[0];
  const cordon = cordons.find(x => x.id === cordonId);
  const filter = filters.find(x => x.id === filterId);
  const total = base.price + shade.price + cordon.price + filter.price;

  const summary = `Composition Lodri / Kumo
Base : ${base.family} ${base.size} (${base.ref}, Ø ${base.diameter}) — ${euro(base.price)}
Abat-jour : ${shade.family} ${shade.size} (${shade.ref}, Ø ${shade.diameter}) — ${euro(shade.price)}
Cordon : ${cordon.name} — ${euro(cordon.price)}
Filtre : ${filter.name} — ${euro(filter.price)}
Coloris : ${color}
Total public TVAC : ${euro(total)}`;

  async function copy() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function changeBaseFamily(f) {
    setBaseFamily(f);
    setBaseRef(bases.find(x => x.family === f).ref);
  }

  function changeShadeFamily(f) {
    setShadeFamily(f);
    setShadeRef(shades.find(x => x.family === f).ref);
  }

  return (
    <main>
      <section className="hero">
        <p className="pill">Configurateur maison · V4</p>
        <h1>Composer une lampe Lodri / Kumo</h1>
        <p>Prix publics TVAC cohérents boutique / site / vente directe. Plafond conseillé : 250 € pour une lampe complète avec cordon standard.</p>
      </section>

      <section className="layout">
        <div className="card">
          <h2>Base</h2>
          <div className="fields">
            <label>Collection
              <select value={baseFamily} onChange={e => changeBaseFamily(e.target.value)}>
                {families(bases).map(f => <option key={f}>{f}</option>)}
              </select>
            </label>
            <label>Référence atelier
              <select value={base.ref} onChange={e => setBaseRef(e.target.value)}>
                {baseOptions.map(x => <option key={x.ref} value={x.ref}>{x.ref} · {x.size} · {euro(x.price)}</option>)}
              </select>
            </label>
          </div>

          <h2>Abat-jour</h2>
          <div className="fields">
            <label>Collection
              <select value={shadeFamily} onChange={e => changeShadeFamily(e.target.value)}>
                {families(shades).map(f => <option key={f}>{f}</option>)}
              </select>
            </label>
            <label>Référence atelier
              <select value={shade.ref} onChange={e => setShadeRef(e.target.value)}>
                {shadeOptions.map(x => <option key={x.ref} value={x.ref}>{x.ref} · {x.size} · {euro(x.price)}</option>)}
              </select>
            </label>
          </div>

          <h2>Finitions</h2>
          <div className="fields three">
            <label>Cordon
              <select value={cordonId} onChange={e => setCordonId(e.target.value)}>
                {cordons.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}
              </select>
            </label>
            <label>Filtre
              <select value={filterId} onChange={e => setFilterId(e.target.value)}>
                {filters.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}
              </select>
            </label>
            <label>Coloris
              <select value={color} onChange={e => setColor(e.target.value)}>
                {colors.map(x => <option key={x}>{x}</option>)}
              </select>
            </label>
          </div>

          <div className="atelier">
            <h2>Repères atelier</h2>
            <p><strong>Base :</strong> {base.family} · {base.ref} · Ø {base.diameter} · taille {base.size} · {base.tier}</p>
            <p><strong>Abat-jour :</strong> {shade.family} · {shade.ref} · Ø {shade.diameter} · taille {shade.size} · {shade.tier}</p>
          </div>
        </div>

        <aside>
          <div className="preview">
            <div className="shade"></div>
            <div className="neck"></div>
            <div className="base"></div>
          </div>

          <div className="card">
            <h2>Composition</h2>
            <div className="line"><span>Base {base.family} {base.size}</span><strong>{euro(base.price)}</strong></div>
            <div className="line"><span>Abat-jour {shade.family} {shade.size}</span><strong>{euro(shade.price)}</strong></div>
            <div className="line"><span>{cordon.name}</span><strong>{euro(cordon.price)}</strong></div>
            <div className="line"><span>{filter.name}</span><strong>{euro(filter.price)}</strong></div>
            <div className={total > 250 ? 'warning' : 'ok'}>{total > 250 ? 'Attention : dépasse 250 €' : 'Sous le plafond conseillé de 250 €'}</div>
            <div className="total"><span>Total TVAC</span><strong>{euro(total)}</strong></div>
            <button onClick={copy}>{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Copié' : 'Copier le récap'}</button>
          </div>
        </aside>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
