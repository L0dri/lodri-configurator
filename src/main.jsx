
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Copy, Check, Mail, Eye, EyeOff } from 'lucide-react';
import './style.css';

const bases = [
  {
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "D80",
    "diameter": "80 mm",
    "height": "à confirmer",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d80.png"
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "D90",
    "diameter": "90 mm",
    "height": "à confirmer",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d90.png"
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "D100",
    "diameter": "100 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Classique",
    "price": 49,
    "image": "cylinder-d100.png"
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "D125",
    "diameter": "125 mm",
    "height": "à confirmer",
    "size": "M+",
    "tier": "Classique",
    "price": 59,
    "image": "cylinder-d125.png"
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "D150",
    "diameter": "150 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "image": "cylinder-d150.png"
  },
  {
    "family": "Cone",
    "clientName": "Cône",
    "ref": "D80",
    "diameter": "80 mm",
    "height": "à confirmer",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d80.png"
  },
  {
    "family": "Cone",
    "clientName": "Cône",
    "ref": "D90",
    "diameter": "90 mm",
    "height": "à confirmer",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d90.png"
  },
  {
    "family": "Cone",
    "clientName": "Cône",
    "ref": "D100",
    "diameter": "100 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cone-d100.png"
  },
  {
    "family": "Cone",
    "clientName": "Cône",
    "ref": "D125",
    "diameter": "125 mm",
    "height": "à confirmer",
    "size": "M+",
    "tier": "Classique",
    "price": 65,
    "image": "cone-d125.png"
  },
  {
    "family": "Cone",
    "clientName": "Cône",
    "ref": "D150",
    "diameter": "150 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "image": "cone-d150.png"
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "D80",
    "diameter": "80 mm",
    "height": "à confirmer",
    "size": "S",
    "tier": "Classique +",
    "price": 45,
    "image": "cone-wide-d80.png"
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "D100",
    "diameter": "100 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Classique +",
    "price": 59,
    "image": "cone-wide-d100.png"
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "D125",
    "diameter": "125 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Classique +",
    "price": 79,
    "image": "cone-wide-d125.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D100 H75",
    "diameter": "100 mm",
    "height": "75 mm",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "image": "arch-d100-h75.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D100 H85",
    "diameter": "100 mm",
    "height": "85 mm",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "image": "arch-d100-h85.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D100 H95",
    "diameter": "100 mm",
    "height": "95 mm",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "image": "arch-d100-h95.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D100 H105",
    "diameter": "100 mm",
    "height": "105 mm",
    "size": "M",
    "tier": "Design",
    "price": 59,
    "image": "arch-d100-h105.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D100 H115",
    "diameter": "100 mm",
    "height": "115 mm",
    "size": "M",
    "tier": "Design",
    "price": 59,
    "image": "arch-d100-h115.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D100 H140",
    "diameter": "100 mm",
    "height": "140 mm",
    "size": "L",
    "tier": "Design",
    "price": 75,
    "image": "arch-d100-h140.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D100 H165",
    "diameter": "100 mm",
    "height": "165 mm",
    "size": "XL",
    "tier": "Design",
    "price": 89,
    "image": "arch-d100-h165.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D120",
    "diameter": "120 mm",
    "height": "à confirmer",
    "size": "M+",
    "tier": "Design",
    "price": 69,
    "image": "arch-d120.png"
  },
  {
    "family": "Arch",
    "clientName": "Arche",
    "ref": "D150",
    "diameter": "150 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Design",
    "price": 89,
    "image": "arch-d150.png"
  },
  {
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "Collection standard",
    "diameter": "variable",
    "height": "à confirmer",
    "size": "M",
    "tier": "Signature douce",
    "price": 75,
    "image": "cloud-collection-standard.png"
  },
  {
    "family": "Totem Base",
    "clientName": "Totem",
    "ref": "D130",
    "diameter": "130 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Signature",
    "price": 79,
    "image": "totem-d130.png"
  },
  {
    "family": "Totem Base",
    "clientName": "Totem",
    "ref": "D200 H65",
    "diameter": "200 mm",
    "height": "65 mm",
    "size": "L",
    "tier": "Signature",
    "price": 95,
    "image": "totem-d200-h65.png"
  },
  {
    "family": "Edamame Base",
    "clientName": "Edamame Solo",
    "ref": "Solo",
    "diameter": "160 mm",
    "height": "1 module",
    "size": "M",
    "tier": "Signature modulaire",
    "price": 69,
    "image": "edamame-d160.png",
    "modules": 1
  },
  {
    "family": "Edamame Base",
    "clientName": "Edamame Duo",
    "ref": "Duo",
    "diameter": "160 mm",
    "height": "2 modules",
    "size": "L",
    "tier": "Signature modulaire",
    "price": 85,
    "image": "edamame-d160.png",
    "modules": 2
  },
  {
    "family": "Edamame Base",
    "clientName": "Edamame Trio",
    "ref": "Trio",
    "diameter": "160 mm",
    "height": "3 modules",
    "size": "XL",
    "tier": "Signature modulaire",
    "price": 95,
    "image": "edamame-d160.png",
    "modules": 3
  }
];
const shades = [
  {
    "family": "Squash",
    "clientName": "Squash",
    "ref": "D160",
    "diameter": "160 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Doux",
    "price": 69,
    "image": "squash-d160.png"
  },
  {
    "family": "Honeycomb",
    "clientName": "Honeycomb",
    "ref": "D175",
    "diameter": "175 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Graphique",
    "price": 79,
    "image": "honeycomb-d175.png"
  },
  {
    "family": "Honeycomb",
    "clientName": "Honeycomb Tall",
    "ref": "Tall D210",
    "diameter": "210 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Graphique +",
    "price": 99,
    "image": "honeycomb-tall-d210.png"
  },
  {
    "family": "Tree",
    "clientName": "Tree",
    "ref": "D175",
    "diameter": "175 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Organique",
    "price": 85,
    "image": "tree-d175.png"
  },
  {
    "family": "Tree",
    "clientName": "Tree inversé",
    "ref": "Inverted 3 segments",
    "diameter": "175 mm",
    "height": "150 mm",
    "size": "M",
    "tier": "Organique",
    "price": 85,
    "image": "tree-inverted-3-segments.png"
  },
  {
    "family": "Tree",
    "clientName": "Tree inversé haut",
    "ref": "Inverted Tall D200",
    "diameter": "200 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Organique +",
    "price": 105,
    "image": "tree-inverted-tall-d200.png"
  },
  {
    "family": "Tree",
    "clientName": "Tree large",
    "ref": "Wide 4 segments D240",
    "diameter": "240 mm",
    "height": "200 mm",
    "size": "XL",
    "tier": "Organique premium",
    "price": 119,
    "image": "tree-wide-4-segments-d240.png"
  },
  {
    "family": "Tree",
    "clientName": "Tree inversé large",
    "ref": "Inverted Wide D240",
    "diameter": "240 mm",
    "height": "200 mm",
    "size": "XL",
    "tier": "Organique premium",
    "price": 119,
    "image": "tree-inverted-wide-d240.png"
  },
  {
    "family": "Totem Shade",
    "clientName": "Totem",
    "ref": "D130",
    "diameter": "130 mm",
    "height": "à confirmer",
    "size": "M",
    "tier": "Sculptural",
    "price": 89,
    "image": "totem-d130.png"
  },
  {
    "family": "Totem Shade",
    "clientName": "Totem fin haut",
    "ref": "Thin Tall D150",
    "diameter": "150 mm",
    "height": "à confirmer",
    "size": "L fin",
    "tier": "Sculptural",
    "price": 99,
    "image": "totem-thin-tall-d150.png"
  },
  {
    "family": "Totem Shade",
    "clientName": "Totem haut",
    "ref": "Tall D200",
    "diameter": "200 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Sculptural +",
    "price": 119,
    "image": "totem-tall-d200.png"
  },
  {
    "family": "Totem Shade",
    "clientName": "Totem large",
    "ref": "Wide D200",
    "diameter": "200 mm",
    "height": "à confirmer",
    "size": "L",
    "tier": "Sculptural +",
    "price": 119,
    "image": "totem-wide-d200.png"
  },
  {
    "family": "Woven",
    "clientName": "Tissé",
    "ref": "Collection standard",
    "diameter": "variable",
    "height": "à confirmer",
    "size": "L premium",
    "tier": "Texture premium",
    "price": 129,
    "image": "woven-collection-standard.png"
  },
  {
    "family": "Edamame Shade",
    "clientName": "Edamame",
    "ref": "D160",
    "diameter": "160 mm",
    "height": "à confirmer",
    "size": "L premium",
    "tier": "Signature organique",
    "price": 119,
    "image": "edamame-d160.png"
  }
];

const baseColors = [
  { id: 'blanc', name: 'Blanc', hex: '#F4F1EA', note: 'neutre lumineux' },
  { id: 'noir', name: 'Noir', hex: '#171717', note: 'sobre et graphique' },
  { id: 'bleu-majorelle', name: 'Bleu Majorelle', hex: '#2654D9', note: 'bleu vif signature' },
  { id: 'orange', name: 'Orange', hex: '#F06A2A', note: 'chaud et pop' },
  { id: 'rose', name: 'Rose', hex: '#E8A6B8', note: 'doux et coloré' },
  { id: 'bleu-fonce', name: 'Bleu foncé', hex: '#142B55', note: 'profond et élégant' },
  { id: 'terracotta', name: 'Terracotta', hex: '#B65F43', note: 'terre cuite' },
  { id: 'brun', name: 'Brun', hex: '#6B4A35', note: 'chaud et naturel' },
  { id: 'beige', name: 'Beige', hex: '#D8C3A3', note: 'clair et doux' },
  { id: 'jaune', name: 'Jaune', hex: '#F2C84B', note: 'lumineux' },
];

const shadeColors = [
  { id: 'blanc', name: 'Blanc', hex: '#F4F1EA', note: 'opaque ou très clair' },
  { id: 'translucide-blanc', name: 'Translucide blanc', hex: '#F6F4EE', note: 'diffusion douce' },
  { id: 'translucide-rose', name: 'Translucide rose', hex: '#F0A9BE', note: 'lumière douce rosée' },
  { id: 'translucide-vert', name: 'Translucide vert', hex: '#A9C9A3', note: 'lumière fraîche' },
  { id: 'translucide-jaune', name: 'Translucide jaune', hex: '#F3D45C', note: 'lumière chaude' },
  { id: 'translucide-bleu', name: 'Translucide bleu', hex: '#A9D4F2', note: 'lumière froide légère' },
];

const filterColors = shadeColors.filter(c => c.id !== 'blanc');

const cordColors = [
  { id: 'noir', name: 'Noir', hex: '#171717' },
  { id: 'blanc', name: 'Blanc', hex: '#F7F4EF' },
  { id: 'bleu', name: 'Bleu', hex: '#2E6FAE' },
  { id: 'bleu-nuit', name: 'Bleu nuit', hex: '#182947' },
  { id: 'sauge', name: 'Sauge', hex: '#A6B59A' },
  { id: 'orange', name: 'Orange', hex: '#E56B2F' },
];

const cordons = [
  { id: 'standard', name: 'Cordon textile standard', price: 19 },
  { id: 'premium', name: 'Cordon textile premium', price: 29 },
  { id: 'none', name: 'Sans cordon', price: 0 }
];

const filters = [
  { id: 'none', name: 'Aucun filtre', price: 0, image: null },
  { id: 's', name: 'Glow Filter S', price: 12, image: '/previews/filters/glow-filter-s.png' },
  { id: 'm', name: 'Glow Filter M', price: 15, image: '/previews/filters/glow-filter-m.png' }
];

const euro = n => `${n} €`;
const families = list => [...new Set(list.map(x => x.family))];

function SwatchPicker({ title, items, selected, onSelect, type = 'solid' }) {
  return (
    <div className="swatchBlock">
      <div className="swatchTitle">{title}</div>
      <div className="swatches">
        {items.map(item => (
          <button
            key={item.id}
            type="button"
            className={`swatch ${selected.id === item.id ? 'active' : ''}`}
            onClick={() => onSelect(item)}
            title={item.note || item.name}
          >
            <span
              className={`swatchDot ${type === 'translucent' || item.id.includes('translucide') ? 'translucent' : ''}`}
              style={{ backgroundColor: item.hex }}
            />
            <span className="swatchName">{item.name}</span>
          </button>
        ))}
      </div>
      <p className="swatchNote">{selected.note || selected.name}</p>
    </div>
  );
}

function PreviewImage({ item, folder, color, stacked = 1, label }) {
  const count = Math.max(1, stacked || 1);
  return (
    <div className={`previewItem stacked stacked-${count}`}>
      <div className="imageStack">
        {Array.from({ length: count }).map((_, index) => (
          <img
            key={index}
            className={`previewImg module-${index + 1}`}
            src={`/previews/${folder}/${item.image}`}
            alt={label}
          />
        ))}
      </div>
      <span>{label}</span>
      <small>{color.name}</small>
    </div>
  );
}

function App() {
  const [baseFamily, setBaseFamily] = useState('Cone');
  const [shadeFamily, setShadeFamily] = useState('Honeycomb');
  const [baseRef, setBaseRef] = useState('D100');
  const [shadeRef, setShadeRef] = useState('D175');
  const [cordonId, setCordonId] = useState('standard');
  const [filterId, setFilterId] = useState('none');
  const [baseColor, setBaseColor] = useState(baseColors[8]);
  const [shadeColor, setShadeColor] = useState(shadeColors[1]);
  const [filterColor, setFilterColor] = useState(filterColors[2]);
  const [cordColor, setCordColor] = useState(cordColors[0]);
  const [showWorkshop, setShowWorkshop] = useState(true);
  const [copied, setCopied] = useState(false);

  const baseOptions = bases.filter(x => x.family === baseFamily);
  const shadeOptions = shades.filter(x => x.family === shadeFamily);
  const base = baseOptions.find(x => x.ref === baseRef) || baseOptions[0];
  const shade = shadeOptions.find(x => x.ref === shadeRef) || shadeOptions[0];
  const cordon = cordons.find(x => x.id === cordonId) || cordons[0];
  const filter = filters.find(x => x.id === filterId) || filters[0];
  const total = base.price + shade.price + cordon.price + filter.price;

  const summary = useMemo(() => `Composition Lodri / Kumo
Base : ${base.clientName} ${base.size} (${base.ref}, Ø ${base.diameter}, H ${base.height}) — ${euro(base.price)} · coloris ${baseColor.name}
Abat-jour : ${shade.clientName} ${shade.size} (${shade.ref}, Ø ${shade.diameter}, H ${shade.height}) — ${euro(shade.price)} · coloris ${shadeColor.name}
Cordon : ${cordon.name} — ${euro(cordon.price)} · coloris ${cordColor.name}
Filtre : ${filter.name} — ${euro(filter.price)}${filter.id !== 'none' ? ` · coloris ${filterColor.name}` : ''}
Total public TVAC : ${euro(total)}
Contact : lodri@lodri.be`, [base, shade, cordon, filter, baseColor, shadeColor, filterColor, cordColor, total]);

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

  const mailHref = `mailto:lodri@lodri.be?subject=${encodeURIComponent('Composition Lodri / Kumo')}&body=${encodeURIComponent(summary)}`;

  return (
    <main>
      <section className="hero">
        <div>
          <p className="pill">Configurateur maison · V6</p>
          <h1>Composer une lampe Lodri / Kumo</h1>
          <p>Une base, un abat-jour, un cordon, éventuellement un filtre lumineux. Les prix sont publics TVAC et cohérents entre boutique, site et vente directe.</p>
        </div>
        <button className="smallButton" onClick={() => setShowWorkshop(!showWorkshop)}>{showWorkshop ? <EyeOff size={17} /> : <Eye size={17} />} {showWorkshop ? 'Masquer atelier' : 'Voir atelier'}</button>
      </section>

      <section className="layout">
        <div className="card">
          <h2>1. Choisir la base</h2>
          <div className="fields">
            <label>Collection
              <select value={baseFamily} onChange={e => changeBaseFamily(e.target.value)}>
                {families(bases).map(f => <option key={f}>{f}</option>)}
              </select>
            </label>
            <label>Format
              <select value={base.ref} onChange={e => setBaseRef(e.target.value)}>
                {baseOptions.map(x => <option key={x.ref} value={x.ref}>{x.clientName} · {x.ref} · Ø {x.diameter} · H {x.height} · {x.size} · {euro(x.price)}</option>)}
              </select>
            </label>
          </div>
          <SwatchPicker title="Couleur de la base" items={baseColors} selected={baseColor} onSelect={setBaseColor} />

          <h2>2. Choisir l’abat-jour</h2>
          <div className="fields">
            <label>Collection
              <select value={shadeFamily} onChange={e => changeShadeFamily(e.target.value)}>
                {families(shades).map(f => <option key={f}>{f}</option>)}
              </select>
            </label>
            <label>Format
              <select value={shade.ref} onChange={e => setShadeRef(e.target.value)}>
                {shadeOptions.map(x => <option key={x.ref} value={x.ref}>{x.clientName} · {x.ref} · Ø {x.diameter} · H {x.height} · {x.size} · {euro(x.price)}</option>)}
              </select>
            </label>
          </div>
          <SwatchPicker title="Couleur de l’abat-jour" items={shadeColors} selected={shadeColor} onSelect={setShadeColor} type="translucent" />

          <h2>3. Finitions</h2>
          <div className="fields">
            <label>Cordon
              <select value={cordonId} onChange={e => setCordonId(e.target.value)}>
                {cordons.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}
              </select>
            </label>
            <label>Filtre lumineux
              <select value={filterId} onChange={e => setFilterId(e.target.value)}>
                {filters.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}
              </select>
            </label>
          </div>

          <SwatchPicker title="Couleur du cordon" items={cordColors} selected={cordColor} onSelect={setCordColor} />
          {filter.id !== 'none' && (
            <SwatchPicker title="Couleur du filtre translucide" items={filterColors} selected={filterColor} onSelect={setFilterColor} type="translucent" />
          )}

          {showWorkshop && (
            <div className="atelier">
              <h2>Repères atelier</h2>
              <p><strong>Base :</strong> {base.family} · {base.ref} · Ø {base.diameter} · H {base.height} · taille {base.size} · {base.tier}</p>
              <p><strong>Abat-jour :</strong> {shade.family} · {shade.ref} · Ø {shade.diameter} · H {shade.height} · taille {shade.size} · {shade.tier}</p>
              <p><strong>Note :</strong> Les dimensions affichées servent de repères atelier. Les proportions et couleurs restent indicatives et peuvent légèrement varier selon l’impression et le filament utilisé.</p>
            </div>
          )}
        </div>

        <aside>
          <div className="previewCard">
            <div className="previewTitle">Prévisualisation client</div>
            <div className="previewImages">
              <PreviewImage item={shade} folder="shades" color={shadeColor} label={shade.clientName} />
              <div className="plus">+</div>
              <PreviewImage item={base} folder="bases" color={baseColor} label={base.clientName} stacked={base.modules || 1} />
            </div>
            {filter.image && (
              <div className="filterPreview">
                <img src={filter.image} alt={filter.name} />
                <div>
                  <strong>{filter.name}</strong>
                  <span>{filterColor.name}</span>
                </div>
              </div>
            )}
            <p className="previewDisclaimer">Les couleurs sont indicatives : elles servent à composer l’ambiance avant validation ensemble.</p>
          </div>

          <div className="card">
            <h2>Composition</h2>
            <div className="line"><span>Base {base.clientName} {base.size}</span><strong>{euro(base.price)}</strong></div>
            <div className="line subtle"><span>Dimensions base</span><strong>Ø {base.diameter} · H {base.height}</strong></div>
            <div className="line subtle"><span>Couleur base</span><strong>{baseColor.name}</strong></div>
            <div className="line"><span>Abat-jour {shade.clientName} {shade.size}</span><strong>{euro(shade.price)}</strong></div>
            <div className="line subtle"><span>Dimensions abat-jour</span><strong>Ø {shade.diameter} · H {shade.height}</strong></div>
            <div className="line subtle"><span>Couleur abat-jour</span><strong>{shadeColor.name}</strong></div>
            <div className="line"><span>{cordon.name}</span><strong>{euro(cordon.price)}</strong></div>
            <div className="line subtle"><span>Couleur cordon</span><strong>{cordColor.name}</strong></div>
            <div className="line"><span>{filter.name}</span><strong>{euro(filter.price)}</strong></div>
            {filter.id !== 'none' && <div className="line subtle"><span>Couleur filtre</span><strong>{filterColor.name}</strong></div>}
            <div className={total > 250 ? 'warning' : 'ok'}>{total > 250 ? 'Attention : dépasse 250 €' : 'Sous le plafond conseillé de 250 €'}</div>
            <div className="total"><span>Total TVAC</span><strong>{euro(total)}</strong></div>
            <button onClick={copy}>{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Copié' : 'Copier le récap'}</button>
            <a className="mailButton" href={mailHref}><Mail size={18} /> Me contacter pour finaliser</a>
          </div>
        </aside>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
