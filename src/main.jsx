
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Copy, Check } from 'lucide-react';
import './style.css';

const basePrices = {
  Cylinder: { S: 49, M: 69, L: 99 },
  Cone: { S: 55, M: 79, L: 109 },
  'Cone Wide': { S: 59, M: 85, L: 119 },
  Arch: { S: 65, M: 95, L: 129 },
  Cloud: { S: 75, M: 99, L: 139 },
  Totem: { M: 129, L: 179 },
  Edamame: { L: 189 }
};

const shadePrices = {
  Squash: { S: 69, M: 89, L: 119 },
  Honeycomb: { S: 79, M: 99, L: 139 },
  Tree: { S: 85, M: 109, L: 149 },
  Totem: { M: 119, L: 169 },
  Woven: { M: 149, L: 199 },
  Edamame: { M: 159, L: 219 }
};

const bases = [
  ['Cylinder','D80','80 mm','S'], ['Cylinder','D90','90 mm','S'], ['Cylinder','D100','100 mm','M'], ['Cylinder','D125','125 mm','M'], ['Cylinder','D150','150 mm','L'],
  ['Cone','D80','80 mm','S'], ['Cone','D90','90 mm','S'], ['Cone','D100','100 mm','M'], ['Cone','D125','125 mm','M'], ['Cone','D150','150 mm','L'],
  ['Cone Wide','D80','80 mm','S'], ['Cone Wide','D100','100 mm','M'], ['Cone Wide','D125','125 mm','L'],
  ['Arch','D100 H75','100 mm','S'], ['Arch','D100 H85','100 mm','S'], ['Arch','D100 H95','100 mm','S'], ['Arch','D100 H105','100 mm','M'], ['Arch','D100 H115','100 mm','M'], ['Arch','D100 H140','100 mm','L'], ['Arch','D100 H165','100 mm','L'], ['Arch','D120','120 mm','M'], ['Arch','D150','150 mm','L'],
  ['Cloud','Collection standard','variable','M'],
  ['Totem','D130','130 mm','M'], ['Totem','D200 H65','200 mm','L'],
  ['Edamame','D160','160 mm','L']
].map(([family, ref, diameter, size]) => ({family, ref, diameter, size}));

const shades = [
  ['Squash','D160','160 mm','M'],
  ['Honeycomb','D175','175 mm','M'], ['Honeycomb','Tall D210','210 mm','L'],
  ['Tree','D175','175 mm','M'], ['Tree','Inverted 3 segments','175 mm','M'], ['Tree','Inverted Tall D200','200 mm','L'], ['Tree','Wide 4 segments D240','240 mm','L'], ['Tree','Inverted Wide D240','240 mm','L'],
  ['Totem','D130','130 mm','M'], ['Totem','Thin Tall D150','150 mm','M'], ['Totem','Tall D200','200 mm','L'], ['Totem','Wide D200','200 mm','L'],
  ['Woven','Collection standard','variable','L'],
  ['Edamame','D160','160 mm','L']
].map(([family, ref, diameter, size]) => ({family, ref, diameter, size}));

const cordons = [
  { id: 'standard', name: 'Cordon textile', price: 19 },
  { id: 'premium', name: 'Cordon textile premium', price: 29 },
  { id: 'none', name: 'Sans cordon', price: 0 }
];

const filters = [
  { id: 'none', name: 'Aucun filtre', price: 0 },
  { id: 's', name: 'Glow Filter S', price: 15 },
  { id: 'm', name: 'Glow Filter M', price: 19 }
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
  const basePrice = basePrices[base.family]?.[base.size] || 0;
  const shadePrice = shadePrices[shade.family]?.[shade.size] || 0;
  const total = basePrice + shadePrice + cordon.price + filter.price;

  const summary = `Composition Lodri / Kumo
Base : ${base.family} ${base.size} (${base.ref}, Ø ${base.diameter}) — ${euro(basePrice)}
Abat-jour : ${shade.family} ${shade.size} (${shade.ref}, Ø ${shade.diameter}) — ${euro(shadePrice)}
Cordon : ${cordon.name} — ${euro(cordon.price)}
Filtre : ${filter.name} — ${euro(filter.price)}
Coloris : ${color}
Total public TVAC : ${euro(total)}`;

  const copy = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

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
        <p className="pill">Configurateur maison · version test</p>
        <h1>Composer une lampe Lodri / Kumo</h1>
        <p>Prix publics TVAC cohérents entre boutique, site et vente directe.</p>
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
                {baseOptions.map(x => <option key={x.ref} value={x.ref}>{x.ref} · {x.size}</option>)}
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
                {shadeOptions.map(x => <option key={x.ref} value={x.ref}>{x.ref} · {x.size}</option>)}
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
            <p><strong>Base :</strong> {base.family} · {base.ref} · Ø {base.diameter} · taille {base.size}</p>
            <p><strong>Abat-jour :</strong> {shade.family} · {shade.ref} · Ø {shade.diameter} · taille {shade.size}</p>
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
            <div className="line"><span>Base {base.family} {base.size}</span><strong>{euro(basePrice)}</strong></div>
            <div className="line"><span>Abat-jour {shade.family} {shade.size}</span><strong>{euro(shadePrice)}</strong></div>
            <div className="line"><span>{cordon.name}</span><strong>{euro(cordon.price)}</strong></div>
            <div className="line"><span>{filter.name}</span><strong>{euro(filter.price)}</strong></div>
            <div className="total"><span>Total TVAC</span><strong>{euro(total)}</strong></div>
            <button onClick={copy}>{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Copié' : 'Copier le récap'}</button>
          </div>
        </aside>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
