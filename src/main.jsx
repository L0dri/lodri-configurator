
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Copy, Check } from 'lucide-react';
import './style.css';

const basePrices = { Cylinder: { S: 49, M: 69, L: 99 }, Cone: { S: 55, M: 79, L: 109 }, 'Cone Wide': { S: 59, M: 85, L: 119 }, Arch: { S: 65, M: 95, L: 129 }, Cloud: { S: 75, M: 99, L: 139 }, Totem: { M: 129, L: 179 }, Edamame: { L: 189 } };
const shadePrices = { Squash: { S: 69, M: 89, L: 119 }, Honeycomb: { S: 79, M: 99, L: 139 }, Tree: { S: 85, M: 109, L: 149 }, Totem: { M: 119, L: 169 }, Woven: { M: 149, L: 199 }, Edamame: { M: 159, L: 219 } };
const bases = [{"family": "Cylinder", "ref": "D80", "diameter": "80 mm", "size": "S", "image": "/previews/bases/cylinder-d80.png"}, {"family": "Cylinder", "ref": "D90", "diameter": "90 mm", "size": "S", "image": "/previews/bases/cylinder-d90.png"}, {"family": "Cylinder", "ref": "D100", "diameter": "100 mm", "size": "M", "image": "/previews/bases/cylinder-d100.png"}, {"family": "Cylinder", "ref": "D125", "diameter": "125 mm", "size": "M", "image": "/previews/bases/cylinder-d125.png"}, {"family": "Cylinder", "ref": "D150", "diameter": "150 mm", "size": "L", "image": "/previews/bases/cylinder-d150.png"}, {"family": "Cone", "ref": "D80", "diameter": "80 mm", "size": "S", "image": "/previews/bases/cone-d80.png"}, {"family": "Cone", "ref": "D90", "diameter": "90 mm", "size": "S", "image": "/previews/bases/cone-d90.png"}, {"family": "Cone", "ref": "D100", "diameter": "100 mm", "size": "M", "image": "/previews/bases/cone-d100.png"}, {"family": "Cone", "ref": "D125", "diameter": "125 mm", "size": "M", "image": "/previews/bases/cone-d125.png"}, {"family": "Cone", "ref": "D150", "diameter": "150 mm", "size": "L", "image": "/previews/bases/cone-d150.png"}, {"family": "Cone Wide", "ref": "D80", "diameter": "80 mm", "size": "S", "image": "/previews/bases/cone-wide-d80.png"}, {"family": "Cone Wide", "ref": "D100", "diameter": "100 mm", "size": "M", "image": "/previews/bases/cone-wide-d100.png"}, {"family": "Cone Wide", "ref": "D125", "diameter": "125 mm", "size": "L", "image": "/previews/bases/cone-wide-d125.png"}, {"family": "Arch", "ref": "D100 H75", "diameter": "100 mm", "size": "S", "image": "/previews/bases/arch-d100-h75.png"}, {"family": "Arch", "ref": "D100 H85", "diameter": "100 mm", "size": "S", "image": "/previews/bases/arch-d100-h85.png"}, {"family": "Arch", "ref": "D100 H95", "diameter": "100 mm", "size": "S", "image": "/previews/bases/arch-d100-h95.png"}, {"family": "Arch", "ref": "D100 H105", "diameter": "100 mm", "size": "M", "image": "/previews/bases/arch-d100-h105.png"}, {"family": "Arch", "ref": "D100 H115", "diameter": "100 mm", "size": "M", "image": "/previews/bases/arch-d100-h115.png"}, {"family": "Arch", "ref": "D100 H140", "diameter": "100 mm", "size": "L", "image": "/previews/bases/arch-d100-h140.png"}, {"family": "Arch", "ref": "D100 H165", "diameter": "100 mm", "size": "L", "image": "/previews/bases/arch-d100-h165.png"}, {"family": "Arch", "ref": "D120", "diameter": "120 mm", "size": "M", "image": "/previews/bases/arch-d120.png"}, {"family": "Arch", "ref": "D150", "diameter": "150 mm", "size": "L", "image": "/previews/bases/arch-d150.png"}, {"family": "Cloud", "ref": "Collection standard", "diameter": "variable", "size": "M", "image": "/previews/bases/cloud-collection-standard.png"}, {"family": "Totem", "ref": "D130", "diameter": "130 mm", "size": "M", "image": "/previews/bases/totem-d130.png"}, {"family": "Totem", "ref": "D200 H65", "diameter": "200 mm", "size": "L", "image": "/previews/bases/totem-d200-h65.png"}, {"family": "Edamame", "ref": "D160", "diameter": "160 mm", "size": "L", "image": "/previews/bases/edamame-d160.png"}];
const shades = [{"family": "Squash", "ref": "D160", "diameter": "160 mm", "size": "M", "image": "/previews/shades/squash-d160.png"}, {"family": "Honeycomb", "ref": "D175", "diameter": "175 mm", "size": "M", "image": "/previews/shades/honeycomb-d175.png"}, {"family": "Honeycomb", "ref": "Tall D210", "diameter": "210 mm", "size": "L", "image": "/previews/shades/honeycomb-tall-d210.png"}, {"family": "Tree", "ref": "D175", "diameter": "175 mm", "size": "M", "image": "/previews/shades/tree-d175.png"}, {"family": "Tree", "ref": "Inverted 3 segments", "diameter": "175 mm", "size": "M", "image": "/previews/shades/tree-inverted-3-segments.png"}, {"family": "Tree", "ref": "Inverted Tall D200", "diameter": "200 mm", "size": "L", "image": "/previews/shades/tree-inverted-tall-d200.png"}, {"family": "Tree", "ref": "Wide 4 segments D240", "diameter": "240 mm", "size": "L", "image": "/previews/shades/tree-wide-4-segments-d240.png"}, {"family": "Tree", "ref": "Inverted Wide D240", "diameter": "240 mm", "size": "L", "image": "/previews/shades/tree-inverted-wide-d240.png"}, {"family": "Totem", "ref": "D130", "diameter": "130 mm", "size": "M", "image": "/previews/shades/totem-d130.png"}, {"family": "Totem", "ref": "Thin Tall D150", "diameter": "150 mm", "size": "M", "image": "/previews/shades/totem-thin-tall-d150.png"}, {"family": "Totem", "ref": "Tall D200", "diameter": "200 mm", "size": "L", "image": "/previews/shades/totem-tall-d200.png"}, {"family": "Totem", "ref": "Wide D200", "diameter": "200 mm", "size": "L", "image": "/previews/shades/totem-wide-d200.png"}, {"family": "Woven", "ref": "Collection standard", "diameter": "variable", "size": "L", "image": "/previews/shades/woven-collection-standard.png"}, {"family": "Edamame", "ref": "D160", "diameter": "160 mm", "size": "L", "image": "/previews/shades/edamame-d160.png"}];
const cordons = [{ id: 'standard', name: 'Cordon textile', price: 19 }, { id: 'premium', name: 'Cordon textile premium', price: 29 }, { id: 'none', name: 'Sans cordon', price: 0 }];
const filters = [{ id: 'none', name: 'Aucun filtre', price: 0, diameter: '—', image: '' }, ...[{"id": "glow-filter-s", "name": "Glow Filter S", "diameter": "80 mm", "price": 15, "image": "/previews/filters/glow-filter-s.png"}, {"id": "glow-filter-m", "name": "Glow Filter M", "diameter": "100 mm", "price": 19, "image": "/previews/filters/glow-filter-m.png"}]];
const colors = ['Milk', 'Linen', 'Amber', 'Smoke', 'Sur demande'];
const euro = n => `${n} €`;
const families = list => [...new Set(list.map(x => x.family))];

function ProductImage({ item, title }) {
  return <div className="productImage"><img src={item.image} alt={title}/><div><strong>{title}</strong><span>{item.ref} · Ø {item.diameter} · {item.size}</span></div></div>;
}

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

  async function copy() { await navigator.clipboard.writeText(summary); setCopied(true); setTimeout(() => setCopied(false), 1200); }
  function changeBaseFamily(f) { setBaseFamily(f); setBaseRef(bases.find(x => x.family === f).ref); }
  function changeShadeFamily(f) { setShadeFamily(f); setShadeRef(shades.find(x => x.family === f).ref); }

  return <main>
    <section className="hero"><p className="pill">Configurateur maison · prévisualisation client</p><h1>Composer une lampe Lodri / Kumo</h1><p>Prix publics TVAC cohérents entre boutique, site et vente directe.</p></section>
    <section className="layout">
      <div className="card">
        <h2>Base</h2><div className="fields"><label>Collection<select value={baseFamily} onChange={e => changeBaseFamily(e.target.value)}>{families(bases).map(f => <option key={f}>{f}</option>)}</select></label><label>Référence atelier<select value={base.ref} onChange={e => setBaseRef(e.target.value)}>{baseOptions.map(x => <option key={x.ref} value={x.ref}>{x.ref} · {x.size}</option>)}</select></label></div>
        <h2>Abat-jour</h2><div className="fields"><label>Collection<select value={shadeFamily} onChange={e => changeShadeFamily(e.target.value)}>{families(shades).map(f => <option key={f}>{f}</option>)}</select></label><label>Référence atelier<select value={shade.ref} onChange={e => setShadeRef(e.target.value)}>{shadeOptions.map(x => <option key={x.ref} value={x.ref}>{x.ref} · {x.size}</option>)}</select></label></div>
        <h2>Finitions</h2><div className="fields three"><label>Cordon<select value={cordonId} onChange={e => setCordonId(e.target.value)}>{cordons.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}</select></label><label>Filtre<select value={filterId} onChange={e => setFilterId(e.target.value)}>{filters.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}</select></label><label>Coloris<select value={color} onChange={e => setColor(e.target.value)}>{colors.map(x => <option key={x}>{x}</option>)}</select></label></div>
        <div className="atelier"><h2>Repères atelier</h2><p><strong>Base :</strong> {base.family} · {base.ref} · Ø {base.diameter} · taille {base.size}</p><p><strong>Abat-jour :</strong> {shade.family} · {shade.ref} · Ø {shade.diameter} · taille {shade.size}</p></div>
      </div>
      <aside>
        <div className="previewGrid"><ProductImage item={shade} title={`Abat-jour ${shade.family}`}/><ProductImage item={base} title={`Base ${base.family}`}/>{filter.image && <ProductImage item={filter} title={filter.name}/>}</div>
        <div className="card"><h2>Composition</h2><div className="line"><span>Base {base.family} {base.size}</span><strong>{euro(basePrice)}</strong></div><div className="line"><span>Abat-jour {shade.family} {shade.size}</span><strong>{euro(shadePrice)}</strong></div><div className="line"><span>{cordon.name}</span><strong>{euro(cordon.price)}</strong></div><div className="line"><span>{filter.name}</span><strong>{euro(filter.price)}</strong></div><div className="total"><span>Total TVAC</span><strong>{euro(total)}</strong></div><button onClick={copy}>{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Copié' : 'Copier le récap'}</button></div>
      </aside>
    </section>
  </main>;
}
createRoot(document.getElementById('root')).render(<App />);
