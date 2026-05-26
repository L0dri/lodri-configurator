
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const ITEMS = [
  {
    "type": "Abat-jour",
    "family": "Edamame",
    "clientName": "Edamame 1 segments",
    "ref": "AEDAMAM-D160-H100-S1",
    "dimensions": "Ø 160 × H 100 mm",
    "diameter": 160,
    "height": 100,
    "segments": 1,
    "price": 95,
    "status": "Standard",
    "image": "edamame-d160.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Edamame",
    "clientName": "Edamame 2 segments",
    "ref": "AEDAMAM-D160-H200-S2",
    "dimensions": "Ø 160 × H 200 mm",
    "diameter": 160,
    "height": 200,
    "segments": 2,
    "price": 120,
    "status": "Standard",
    "image": "edamame-d160.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Edamame",
    "clientName": "Edamame 3 segments",
    "ref": "AEDAMAM-D160-H300-S3",
    "dimensions": "Ø 160 × H 300 mm",
    "diameter": 160,
    "height": 300,
    "segments": 3,
    "price": 160,
    "status": "Sur demande",
    "image": "edamame-d160.png",
    "note": "Sur demande : valider machine, temps et matière avant confirmation."
  },
  {
    "type": "Abat-jour",
    "family": "Honeycomb",
    "clientName": "Honeycomb 3 segments",
    "ref": "AHONEYC-D175-H150-S3",
    "dimensions": "Ø 175 × H 150 mm",
    "diameter": 175,
    "height": 150,
    "segments": 3,
    "price": 110,
    "status": "Standard",
    "image": "honeycomb-d175.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Honeycomb",
    "clientName": "Honeycomb 4 segments",
    "ref": "AHONEYC-D175-H200-S4",
    "dimensions": "Ø 175 × H 200 mm",
    "diameter": 175,
    "height": 200,
    "segments": 4,
    "price": 125,
    "status": "À valider",
    "image": "honeycomb-d175.png",
    "note": "À valider avant commande ferme."
  },
  {
    "type": "Abat-jour",
    "family": "Honeycomb Tall",
    "clientName": "Honeycomb haut 3 segments",
    "ref": "AHONEYC-D210-H185-S3",
    "dimensions": "Ø 210 × H 185 mm",
    "diameter": 210,
    "height": 185,
    "segments": 3,
    "price": 125,
    "status": "À valider",
    "image": "honeycomb-tall-d210.png",
    "note": "À valider avant commande ferme."
  },
  {
    "type": "Abat-jour",
    "family": "Honeycomb Tall",
    "clientName": "Honeycomb haut 4 segments",
    "ref": "AHONEYC-D210-H250-S4",
    "dimensions": "Ø 210 × H 250 mm",
    "diameter": 210,
    "height": 250,
    "segments": 4,
    "price": 160,
    "status": "Sur demande",
    "image": "honeycomb-tall-d210.png",
    "note": "Sur demande : valider machine, temps et matière avant confirmation."
  },
  {
    "type": "Abat-jour",
    "family": "Squash",
    "clientName": "Squash",
    "ref": "ASQUASH-D160-H150",
    "dimensions": "Ø 160 × H 150 mm",
    "diameter": 160,
    "height": 150,
    "segments": null,
    "price": 100,
    "status": "Standard",
    "image": "squash-d160.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Squash Inverted",
    "clientName": "Squash inversé",
    "ref": "ASQUASH-D160-H150",
    "dimensions": "Ø 160 × H 150 mm",
    "diameter": 160,
    "height": 150,
    "segments": null,
    "price": 100,
    "status": "Standard",
    "image": "squash-d160.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem",
    "clientName": "Totem 2 segments",
    "ref": "ATOTEM-D130-H100-S2",
    "dimensions": "Ø 130 × H 100 mm",
    "diameter": 130,
    "height": 100,
    "segments": 2,
    "price": 90,
    "status": "Standard",
    "image": "totem-d130.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem",
    "clientName": "Totem 3 segments",
    "ref": "ATOTEM-D130-H150-S3",
    "dimensions": "Ø 130 × H 150 mm",
    "diameter": 130,
    "height": 150,
    "segments": 3,
    "price": 105,
    "status": "Standard",
    "image": "totem-d130.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem",
    "clientName": "Totem 4 segments",
    "ref": "ATOTEM-D130-H200-S4",
    "dimensions": "Ø 130 × H 200 mm",
    "diameter": 130,
    "height": 200,
    "segments": 4,
    "price": 120,
    "status": "Standard",
    "image": "totem-d130.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem",
    "clientName": "Totem 5 segments",
    "ref": "ATOTEM-D130-H250-S5",
    "dimensions": "Ø 130 × H 250 mm",
    "diameter": 130,
    "height": 250,
    "segments": 5,
    "price": 145,
    "status": "À valider",
    "image": "totem-d130.png",
    "note": "À valider avant commande ferme."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Tall",
    "clientName": "Totem haut 2 segments",
    "ref": "ATOTEMT-D200-H130-S2",
    "dimensions": "Ø 200 × H 130 mm",
    "diameter": 200,
    "height": 130,
    "segments": 2,
    "price": 105,
    "status": "Standard",
    "image": "totem-tall-d200.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Tall",
    "clientName": "Totem haut 3 segments",
    "ref": "ATOTEMT-D200-H195-S3",
    "dimensions": "Ø 200 × H 195 mm",
    "diameter": 200,
    "height": 195,
    "segments": 3,
    "price": 125,
    "status": "À valider",
    "image": "totem-tall-d200.png",
    "note": "À valider avant commande ferme."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Tall",
    "clientName": "Totem haut 4 segments",
    "ref": "ATOTEMT-D200-H260-S4",
    "dimensions": "Ø 200 × H 260 mm",
    "diameter": 200,
    "height": 260,
    "segments": 4,
    "price": 155,
    "status": "Sur demande",
    "image": "totem-tall-d200.png",
    "note": "Sur demande : valider machine, temps et matière avant confirmation."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Thin Tall",
    "clientName": "Totem fin haut 2 segments",
    "ref": "ATOTEMT-D150-H130-S2",
    "dimensions": "Ø 150 × H 130 mm",
    "diameter": 150,
    "height": 130,
    "segments": 2,
    "price": 100,
    "status": "Standard",
    "image": "totem-thin-tall-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Thin Tall",
    "clientName": "Totem fin haut 3 segments",
    "ref": "ATOTEMT-D150-H195-S3",
    "dimensions": "Ø 150 × H 195 mm",
    "diameter": 150,
    "height": 195,
    "segments": 3,
    "price": 120,
    "status": "Standard",
    "image": "totem-thin-tall-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Thin Tall",
    "clientName": "Totem fin haut 4 segments",
    "ref": "ATOTEMT-D150-H260-S4",
    "dimensions": "Ø 150 × H 260 mm",
    "diameter": 150,
    "height": 260,
    "segments": 4,
    "price": 150,
    "status": "À valider",
    "image": "totem-thin-tall-d150.png",
    "note": "À valider avant commande ferme."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Wide",
    "clientName": "Totem large 3 segments",
    "ref": "ATOTEMW-D200-H150-S3",
    "dimensions": "Ø 200 × H 150 mm",
    "diameter": 200,
    "height": 150,
    "segments": 3,
    "price": 115,
    "status": "Standard",
    "image": "totem-wide-d200.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Wide",
    "clientName": "Totem large 4 segments",
    "ref": "ATOTEMW-D200-H200-S4",
    "dimensions": "Ø 200 × H 200 mm",
    "diameter": 200,
    "height": 200,
    "segments": 4,
    "price": 130,
    "status": "Sur demande",
    "image": "totem-wide-d200.png",
    "note": "Sur demande : valider machine, temps et matière avant confirmation."
  },
  {
    "type": "Abat-jour",
    "family": "Totem Wide",
    "clientName": "Totem large 5 segments",
    "ref": "ATOTEMW-D200-H250-S5",
    "dimensions": "Ø 200 × H 250 mm",
    "diameter": 200,
    "height": 250,
    "segments": 5,
    "price": 155,
    "status": "Sur demande",
    "image": "totem-wide-d200.png",
    "note": "Sur demande : valider machine, temps et matière avant confirmation."
  },
  {
    "type": "Abat-jour",
    "family": "Tree",
    "clientName": "Tree 3 segments",
    "ref": "ATREE-D175-H150-S3",
    "dimensions": "Ø 175 × H 150 mm",
    "diameter": 175,
    "height": 150,
    "segments": 3,
    "price": 105,
    "status": "Standard",
    "image": "tree-d175.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree",
    "clientName": "Tree 4 segments",
    "ref": "ATREE-D175-H200-S4",
    "dimensions": "Ø 175 × H 200 mm",
    "diameter": 175,
    "height": 200,
    "segments": 4,
    "price": 115,
    "status": "Standard",
    "image": "tree-d175.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree Inverted",
    "clientName": "Tree inversé 3 segments",
    "ref": "ATREEIN-D175-H150-S3",
    "dimensions": "Ø 175 × H 150 mm",
    "diameter": 175,
    "height": 150,
    "segments": 3,
    "price": 105,
    "status": "Standard",
    "image": "tree-inverted-3-segments.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree Inverted Tall",
    "clientName": "Tree inversé haut 2 segments",
    "ref": "ATREEIN-D200-H130-S2",
    "dimensions": "Ø 200 × H 130 mm",
    "diameter": 200,
    "height": 130,
    "segments": 2,
    "price": 105,
    "status": "Standard",
    "image": "tree-inverted-tall-d200.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree Inverted Tall",
    "clientName": "Tree inversé haut 3 segments",
    "ref": "ATREEIN-D220-H185-S3",
    "dimensions": "Ø 220 × H 185 mm",
    "diameter": 220,
    "height": 185,
    "segments": 3,
    "price": 120,
    "status": "Standard",
    "image": "tree-inverted-tall-d200.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree Inverted Wide",
    "clientName": "Tree inversé large 4 segments",
    "ref": "ATREEIN-D240-H200-S4",
    "dimensions": "Ø 240 × H 200 mm",
    "diameter": 240,
    "height": 200,
    "segments": 4,
    "price": 125,
    "status": "Standard",
    "image": "tree-inverted-wide-d240.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree Tall",
    "clientName": "Tree haut 2 segments",
    "ref": "ATREETA-D200-H130-S2",
    "dimensions": "Ø 200 × H 130 mm",
    "diameter": 200,
    "height": 130,
    "segments": 2,
    "price": 105,
    "status": "Standard",
    "image": "tree-inverted-tall-d200.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree Tall",
    "clientName": "Tree haut 3 segments",
    "ref": "ATREETA-D220-H185-S3",
    "dimensions": "Ø 220 × H 185 mm",
    "diameter": 220,
    "height": 185,
    "segments": 3,
    "price": 120,
    "status": "Standard",
    "image": "tree-inverted-tall-d200.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Abat-jour",
    "family": "Tree Wide",
    "clientName": "Tree large 4 segments",
    "ref": "ATREEWI-D240-H200-S4",
    "dimensions": "Ø 240 × H 200 mm",
    "diameter": 240,
    "height": 200,
    "segments": 4,
    "price": 125,
    "status": "À valider",
    "image": "tree-wide-4-segments-d240.png",
    "note": "À valider avant commande ferme."
  },
  {
    "type": "Abat-jour",
    "family": "Woven",
    "clientName": "Tissé mini",
    "ref": "AWOVEN-H120-160",
    "dimensions": "H 12–16 cm",
    "diameter": null,
    "height": 140,
    "segments": null,
    "price": 89,
    "status": "Standard",
    "image": "woven-collection-standard.png",
    "note": "Famille très variable. Visuel indicatif. Dimensions à confirmer."
  },
  {
    "type": "Abat-jour",
    "family": "Woven",
    "clientName": "Tissé standard",
    "ref": "AWOVEN-H180-240",
    "dimensions": "H 18–24 cm",
    "diameter": null,
    "height": 210,
    "segments": null,
    "price": 129,
    "status": "Standard",
    "image": "woven-collection-standard.png",
    "note": "Famille très variable. Visuel indicatif. Dimensions à confirmer."
  },
  {
    "type": "Abat-jour",
    "family": "Woven",
    "clientName": "Tissé grande",
    "ref": "AWOVEN-H260-340",
    "dimensions": "H 26–34 cm",
    "diameter": null,
    "height": 300,
    "segments": null,
    "price": 159,
    "status": "Sur demande",
    "image": "woven-collection-standard.png",
    "note": "Sur demande : valider machine, temps et matière."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D100-H60",
    "dimensions": "Ø 100 × H 60 mm",
    "diameter": 100,
    "height": 60,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "arch-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D100-H70",
    "dimensions": "Ø 100 × H 70 mm",
    "diameter": 100,
    "height": 70,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "arch-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D100-H80",
    "dimensions": "Ø 100 × H 80 mm",
    "diameter": 100,
    "height": 80,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "arch-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D100-H90",
    "dimensions": "Ø 100 × H 90 mm",
    "diameter": 100,
    "height": 90,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "arch-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D100-H100",
    "dimensions": "Ø 100 × H 100 mm",
    "diameter": 100,
    "height": 100,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "arch-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D100-H125",
    "dimensions": "Ø 100 × H 125 mm",
    "diameter": 100,
    "height": 125,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "arch-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D100-H150",
    "dimensions": "Ø 100 × H 150 mm",
    "diameter": 100,
    "height": 150,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "arch-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H60",
    "dimensions": "Ø 120 × H 60 mm",
    "diameter": 120,
    "height": 60,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H70",
    "dimensions": "Ø 120 × H 70 mm",
    "diameter": 120,
    "height": 70,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H80",
    "dimensions": "Ø 120 × H 80 mm",
    "diameter": 120,
    "height": 80,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H90",
    "dimensions": "Ø 120 × H 90 mm",
    "diameter": 120,
    "height": 90,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H100",
    "dimensions": "Ø 120 × H 100 mm",
    "diameter": 120,
    "height": 100,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H125",
    "dimensions": "Ø 120 × H 125 mm",
    "diameter": 120,
    "height": 125,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H150",
    "dimensions": "Ø 120 × H 150 mm",
    "diameter": 120,
    "height": 150,
    "segments": null,
    "price": 80,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D120-H175",
    "dimensions": "Ø 120 × H 175 mm",
    "diameter": 120,
    "height": 175,
    "segments": null,
    "price": 85,
    "status": "Standard",
    "image": "arch-d120.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H60",
    "dimensions": "Ø 150 × H 60 mm",
    "diameter": 150,
    "height": 60,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H70",
    "dimensions": "Ø 150 × H 70 mm",
    "diameter": 150,
    "height": 70,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H80",
    "dimensions": "Ø 150 × H 80 mm",
    "diameter": 150,
    "height": 80,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H90",
    "dimensions": "Ø 150 × H 90 mm",
    "diameter": 150,
    "height": 90,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H100",
    "dimensions": "Ø 150 × H 100 mm",
    "diameter": 150,
    "height": 100,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H125",
    "dimensions": "Ø 150 × H 125 mm",
    "diameter": 150,
    "height": 125,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H150",
    "dimensions": "Ø 150 × H 150 mm",
    "diameter": 150,
    "height": 150,
    "segments": null,
    "price": 85,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Arch",
    "clientName": "Arche",
    "ref": "BARCH-D150-H175",
    "dimensions": "Ø 150 × H 175 mm",
    "diameter": 150,
    "height": 175,
    "segments": null,
    "price": 90,
    "status": "Standard",
    "image": "arch-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "BCLOUD-D90-H50",
    "dimensions": "Ø 90 × H 50 mm",
    "diameter": 90,
    "height": 50,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cloud-collection-standard.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "BCLOUD-D100-H50",
    "dimensions": "Ø 100 × H 50 mm",
    "diameter": 100,
    "height": 50,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cloud-collection-standard.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "BCLOUD-D110-H50",
    "dimensions": "Ø 110 × H 50 mm",
    "diameter": 110,
    "height": 50,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cloud-collection-standard.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "BCLOUD-D120-H50",
    "dimensions": "Ø 120 × H 50 mm",
    "diameter": 120,
    "height": 50,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cloud-collection-standard.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "BCLOUD-D125-H50",
    "dimensions": "Ø 125 × H 50 mm",
    "diameter": 125,
    "height": 50,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cloud-collection-standard.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "BCLOUD-D150-H50",
    "dimensions": "Ø 150 × H 50 mm",
    "diameter": 150,
    "height": 50,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cloud-collection-standard.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H50",
    "dimensions": "Ø 80 × H 50 mm",
    "diameter": 80,
    "height": 50,
    "segments": null,
    "price": 45,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H60",
    "dimensions": "Ø 80 × H 60 mm",
    "diameter": 80,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H70",
    "dimensions": "Ø 80 × H 70 mm",
    "diameter": 80,
    "height": 70,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H80",
    "dimensions": "Ø 80 × H 80 mm",
    "diameter": 80,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H90",
    "dimensions": "Ø 80 × H 90 mm",
    "diameter": 80,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H100",
    "dimensions": "Ø 80 × H 100 mm",
    "diameter": 80,
    "height": 100,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H125",
    "dimensions": "Ø 80 × H 125 mm",
    "diameter": 80,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H150",
    "dimensions": "Ø 80 × H 150 mm",
    "diameter": 80,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D80-H175",
    "dimensions": "Ø 80 × H 175 mm",
    "diameter": 80,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cone-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H50",
    "dimensions": "Ø 90 × H 50 mm",
    "diameter": 90,
    "height": 50,
    "segments": null,
    "price": 45,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H60",
    "dimensions": "Ø 90 × H 60 mm",
    "diameter": 90,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H70",
    "dimensions": "Ø 90 × H 70 mm",
    "diameter": 90,
    "height": 70,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H80",
    "dimensions": "Ø 90 × H 80 mm",
    "diameter": 90,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H90",
    "dimensions": "Ø 90 × H 90 mm",
    "diameter": 90,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H100",
    "dimensions": "Ø 90 × H 100 mm",
    "diameter": 90,
    "height": 100,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H125",
    "dimensions": "Ø 90 × H 125 mm",
    "diameter": 90,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H150",
    "dimensions": "Ø 90 × H 150 mm",
    "diameter": 90,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D90-H175",
    "dimensions": "Ø 90 × H 175 mm",
    "diameter": 90,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cone-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H50",
    "dimensions": "Ø 100 × H 50 mm",
    "diameter": 100,
    "height": 50,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H60",
    "dimensions": "Ø 100 × H 60 mm",
    "diameter": 100,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H70",
    "dimensions": "Ø 100 × H 70 mm",
    "diameter": 100,
    "height": 70,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H80",
    "dimensions": "Ø 100 × H 80 mm",
    "diameter": 100,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H90",
    "dimensions": "Ø 100 × H 90 mm",
    "diameter": 100,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H100",
    "dimensions": "Ø 100 × H 100 mm",
    "diameter": 100,
    "height": 100,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H125",
    "dimensions": "Ø 100 × H 125 mm",
    "diameter": 100,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H150",
    "dimensions": "Ø 100 × H 150 mm",
    "diameter": 100,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D100-H175",
    "dimensions": "Ø 100 × H 175 mm",
    "diameter": 100,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cone-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H50",
    "dimensions": "Ø 125 × H 50 mm",
    "diameter": 125,
    "height": 50,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H60",
    "dimensions": "Ø 125 × H 60 mm",
    "diameter": 125,
    "height": 60,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H70",
    "dimensions": "Ø 125 × H 70 mm",
    "diameter": 125,
    "height": 70,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H80",
    "dimensions": "Ø 125 × H 80 mm",
    "diameter": 125,
    "height": 80,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H90",
    "dimensions": "Ø 125 × H 90 mm",
    "diameter": 125,
    "height": 90,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H100",
    "dimensions": "Ø 125 × H 100 mm",
    "diameter": 125,
    "height": 100,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H125",
    "dimensions": "Ø 125 × H 125 mm",
    "diameter": 125,
    "height": 125,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H150",
    "dimensions": "Ø 125 × H 150 mm",
    "diameter": 125,
    "height": 150,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D125-H175",
    "dimensions": "Ø 125 × H 175 mm",
    "diameter": 125,
    "height": 175,
    "segments": null,
    "price": 80,
    "status": "Standard",
    "image": "cone-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H50",
    "dimensions": "Ø 150 × H 50 mm",
    "diameter": 150,
    "height": 50,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H60",
    "dimensions": "Ø 150 × H 60 mm",
    "diameter": 150,
    "height": 60,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H70",
    "dimensions": "Ø 150 × H 70 mm",
    "diameter": 150,
    "height": 70,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H80",
    "dimensions": "Ø 150 × H 80 mm",
    "diameter": 150,
    "height": 80,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H90",
    "dimensions": "Ø 150 × H 90 mm",
    "diameter": 150,
    "height": 90,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H100",
    "dimensions": "Ø 150 × H 100 mm",
    "diameter": 150,
    "height": 100,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H125",
    "dimensions": "Ø 150 × H 125 mm",
    "diameter": 150,
    "height": 125,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H150",
    "dimensions": "Ø 150 × H 150 mm",
    "diameter": 150,
    "height": 150,
    "segments": null,
    "price": 80,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone",
    "clientName": "Cône",
    "ref": "BCONE-D150-H175",
    "dimensions": "Ø 150 × H 175 mm",
    "diameter": 150,
    "height": 175,
    "segments": null,
    "price": 85,
    "status": "Standard",
    "image": "cone-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H50",
    "dimensions": "Ø 80 × H 50 mm",
    "diameter": 80,
    "height": 50,
    "segments": null,
    "price": 45,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H60",
    "dimensions": "Ø 80 × H 60 mm",
    "diameter": 80,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H70",
    "dimensions": "Ø 80 × H 70 mm",
    "diameter": 80,
    "height": 70,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H80",
    "dimensions": "Ø 80 × H 80 mm",
    "diameter": 80,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H90",
    "dimensions": "Ø 80 × H 90 mm",
    "diameter": 80,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H100",
    "dimensions": "Ø 80 × H 100 mm",
    "diameter": 80,
    "height": 100,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H125",
    "dimensions": "Ø 80 × H 125 mm",
    "diameter": 80,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H150",
    "dimensions": "Ø 80 × H 150 mm",
    "diameter": 80,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D80-H175",
    "dimensions": "Ø 80 × H 175 mm",
    "diameter": 80,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cone-wide-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H50",
    "dimensions": "Ø 100 × H 50 mm",
    "diameter": 100,
    "height": 50,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H60",
    "dimensions": "Ø 100 × H 60 mm",
    "diameter": 100,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H70",
    "dimensions": "Ø 100 × H 70 mm",
    "diameter": 100,
    "height": 70,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H80",
    "dimensions": "Ø 100 × H 80 mm",
    "diameter": 100,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H90",
    "dimensions": "Ø 100 × H 90 mm",
    "diameter": 100,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H100",
    "dimensions": "Ø 100 × H 100 mm",
    "diameter": 100,
    "height": 100,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H125",
    "dimensions": "Ø 100 × H 125 mm",
    "diameter": 100,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H150",
    "dimensions": "Ø 100 × H 150 mm",
    "diameter": 100,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D100-H175",
    "dimensions": "Ø 100 × H 175 mm",
    "diameter": 100,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cone-wide-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H50",
    "dimensions": "Ø 125 × H 50 mm",
    "diameter": 125,
    "height": 50,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H60",
    "dimensions": "Ø 125 × H 60 mm",
    "diameter": 125,
    "height": 60,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H70",
    "dimensions": "Ø 125 × H 70 mm",
    "diameter": 125,
    "height": 70,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H80",
    "dimensions": "Ø 125 × H 80 mm",
    "diameter": 125,
    "height": 80,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H90",
    "dimensions": "Ø 125 × H 90 mm",
    "diameter": 125,
    "height": 90,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H100",
    "dimensions": "Ø 125 × H 100 mm",
    "diameter": 125,
    "height": 100,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H125",
    "dimensions": "Ø 125 × H 125 mm",
    "diameter": 125,
    "height": 125,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H150",
    "dimensions": "Ø 125 × H 150 mm",
    "diameter": 125,
    "height": 150,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cone Wide",
    "clientName": "Cône large",
    "ref": "BCONEWI-D125-H175",
    "dimensions": "Ø 125 × H 175 mm",
    "diameter": 125,
    "height": 175,
    "segments": null,
    "price": 80,
    "status": "Standard",
    "image": "cone-wide-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H50",
    "dimensions": "Ø 80 × H 50 mm",
    "diameter": 80,
    "height": 50,
    "segments": null,
    "price": 45,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H60",
    "dimensions": "Ø 80 × H 60 mm",
    "diameter": 80,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H70",
    "dimensions": "Ø 80 × H 70 mm",
    "diameter": 80,
    "height": 70,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H80",
    "dimensions": "Ø 80 × H 80 mm",
    "diameter": 80,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H90",
    "dimensions": "Ø 80 × H 90 mm",
    "diameter": 80,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H100",
    "dimensions": "Ø 80 × H 100 mm",
    "diameter": 80,
    "height": 100,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H125",
    "dimensions": "Ø 80 × H 125 mm",
    "diameter": 80,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H150",
    "dimensions": "Ø 80 × H 150 mm",
    "diameter": 80,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D80-H175",
    "dimensions": "Ø 80 × H 175 mm",
    "diameter": 80,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cylinder-d80.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H50",
    "dimensions": "Ø 90 × H 50 mm",
    "diameter": 90,
    "height": 50,
    "segments": null,
    "price": 45,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H60",
    "dimensions": "Ø 90 × H 60 mm",
    "diameter": 90,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H70",
    "dimensions": "Ø 90 × H 70 mm",
    "diameter": 90,
    "height": 70,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H80",
    "dimensions": "Ø 90 × H 80 mm",
    "diameter": 90,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H90",
    "dimensions": "Ø 90 × H 90 mm",
    "diameter": 90,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H100",
    "dimensions": "Ø 90 × H 100 mm",
    "diameter": 90,
    "height": 100,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H125",
    "dimensions": "Ø 90 × H 125 mm",
    "diameter": 90,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H150",
    "dimensions": "Ø 90 × H 150 mm",
    "diameter": 90,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D90-H175",
    "dimensions": "Ø 90 × H 175 mm",
    "diameter": 90,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cylinder-d90.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H50",
    "dimensions": "Ø 100 × H 50 mm",
    "diameter": 100,
    "height": 50,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H60",
    "dimensions": "Ø 100 × H 60 mm",
    "diameter": 100,
    "height": 60,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H70",
    "dimensions": "Ø 100 × H 70 mm",
    "diameter": 100,
    "height": 70,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H80",
    "dimensions": "Ø 100 × H 80 mm",
    "diameter": 100,
    "height": 80,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H90",
    "dimensions": "Ø 100 × H 90 mm",
    "diameter": 100,
    "height": 90,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H100",
    "dimensions": "Ø 100 × H 100 mm",
    "diameter": 100,
    "height": 100,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H125",
    "dimensions": "Ø 100 × H 125 mm",
    "diameter": 100,
    "height": 125,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H150",
    "dimensions": "Ø 100 × H 150 mm",
    "diameter": 100,
    "height": 150,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D100-H175",
    "dimensions": "Ø 100 × H 175 mm",
    "diameter": 100,
    "height": 175,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cylinder-d100.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H50",
    "dimensions": "Ø 125 × H 50 mm",
    "diameter": 125,
    "height": 50,
    "segments": null,
    "price": 50,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H60",
    "dimensions": "Ø 125 × H 60 mm",
    "diameter": 125,
    "height": 60,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H70",
    "dimensions": "Ø 125 × H 70 mm",
    "diameter": 125,
    "height": 70,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H80",
    "dimensions": "Ø 125 × H 80 mm",
    "diameter": 125,
    "height": 80,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H90",
    "dimensions": "Ø 125 × H 90 mm",
    "diameter": 125,
    "height": 90,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H100",
    "dimensions": "Ø 125 × H 100 mm",
    "diameter": 125,
    "height": 100,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H125",
    "dimensions": "Ø 125 × H 125 mm",
    "diameter": 125,
    "height": 125,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H150",
    "dimensions": "Ø 125 × H 150 mm",
    "diameter": 125,
    "height": 150,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D125-H175",
    "dimensions": "Ø 125 × H 175 mm",
    "diameter": 125,
    "height": 175,
    "segments": null,
    "price": 80,
    "status": "Standard",
    "image": "cylinder-d125.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H50",
    "dimensions": "Ø 150 × H 50 mm",
    "diameter": 150,
    "height": 50,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H60",
    "dimensions": "Ø 150 × H 60 mm",
    "diameter": 150,
    "height": 60,
    "segments": null,
    "price": 55,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H70",
    "dimensions": "Ø 150 × H 70 mm",
    "diameter": 150,
    "height": 70,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H80",
    "dimensions": "Ø 150 × H 80 mm",
    "diameter": 150,
    "height": 80,
    "segments": null,
    "price": 60,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H90",
    "dimensions": "Ø 150 × H 90 mm",
    "diameter": 150,
    "height": 90,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H100",
    "dimensions": "Ø 150 × H 100 mm",
    "diameter": 150,
    "height": 100,
    "segments": null,
    "price": 65,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H125",
    "dimensions": "Ø 150 × H 125 mm",
    "diameter": 150,
    "height": 125,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H150",
    "dimensions": "Ø 150 × H 150 mm",
    "diameter": 150,
    "height": 150,
    "segments": null,
    "price": 80,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Cylinder",
    "clientName": "Cylindre",
    "ref": "BCYLIND-D150-H175",
    "dimensions": "Ø 150 × H 175 mm",
    "diameter": 150,
    "height": 175,
    "segments": null,
    "price": 85,
    "status": "Standard",
    "image": "cylinder-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Edamame",
    "clientName": "Edamame 1 segments",
    "ref": "BEDAMAM-D160-H100-S1",
    "dimensions": "Ø 160 × H 100 mm",
    "diameter": 160,
    "height": 100,
    "segments": 1,
    "price": 90,
    "status": "Standard",
    "image": "edamame-d160.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Edamame",
    "clientName": "Edamame 2 segments",
    "ref": "BEDAMAM-D160-H200-S2",
    "dimensions": "Ø 160 × H 200 mm",
    "diameter": 160,
    "height": 200,
    "segments": 2,
    "price": 115,
    "status": "Standard",
    "image": "edamame-d160.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Edamame",
    "clientName": "Edamame 3 segments",
    "ref": "BEDAMAM-D160-H300-S3",
    "dimensions": "Ø 160 × H 300 mm",
    "diameter": 160,
    "height": 300,
    "segments": 3,
    "price": 155,
    "status": "Sur demande",
    "image": "edamame-d160.png",
    "note": "Sur demande : valider machine, temps et matière avant confirmation."
  },
  {
    "type": "Base",
    "family": "Totem",
    "clientName": "Totem 1 segments",
    "ref": "BTOTEM-D130-H50-S1",
    "dimensions": "Ø 130 × H 50 mm",
    "diameter": 130,
    "height": 50,
    "segments": 1,
    "price": 65,
    "status": "Standard",
    "image": "totem-d130.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Totem",
    "clientName": "Totem 2 segments",
    "ref": "BTOTEM-D130-H100-S2",
    "dimensions": "Ø 130 × H 100 mm",
    "diameter": 130,
    "height": 100,
    "segments": 2,
    "price": 75,
    "status": "Standard",
    "image": "totem-d130.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Totem",
    "clientName": "Totem 3 segments",
    "ref": "BTOTEM-D130-H150-S3",
    "dimensions": "Ø 130 × H 150 mm",
    "diameter": 130,
    "height": 150,
    "segments": 3,
    "price": 90,
    "status": "Standard",
    "image": "totem-d130.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Totem Tall",
    "clientName": "Totem haut",
    "ref": "BTOTEMT-D200-H65",
    "dimensions": "Ø 200 × H 65 mm",
    "diameter": 200,
    "height": 65,
    "segments": null,
    "price": 75,
    "status": "Standard",
    "image": "totem-d200-h65.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  },
  {
    "type": "Base",
    "family": "Totem Thin Tall",
    "clientName": "Totem fin haut",
    "ref": "BTOTEMT-D150-H65",
    "dimensions": "Ø 150 × H 65 mm",
    "diameter": 150,
    "height": 65,
    "segments": null,
    "price": 70,
    "status": "Standard",
    "image": "totem-thin-tall-d150.png",
    "note": "Visuel indicatif. Prix et dimensions font foi."
  }
];

const baseColors = [
  { id:'blanc', name:'Blanc', hex:'#f4f1ea' },
  { id:'noir', name:'Noir', hex:'#171717' },
  { id:'majorelle', name:'Bleu Majorelle', hex:'#2654d9' },
  { id:'bleu-nuit', name:'Bleu nuit', hex:'#142b55' },
  { id:'rose', name:'Rose', hex:'#e8a6b8' },
  { id:'orange', name:'Orange', hex:'#f06a2a' },
  { id:'terracotta', name:'Terracotta', hex:'#b65f43' },
  { id:'beige', name:'Beige', hex:'#d8c3a3' },
  { id:'jaune', name:'Jaune', hex:'#f2c84b' }
];

const shadeColors = [
  { id:'blanc', name:'Blanc', hex:'#f4f1ea' },
  { id:'translucide-blanc', name:'Translucide blanc', hex:'#f6f4ee' },
  { id:'translucide-rose', name:'Translucide rose', hex:'#f0a9be' },
  { id:'translucide-vert', name:'Translucide vert', hex:'#a9c9a3' },
  { id:'translucide-jaune', name:'Translucide jaune', hex:'#f3d45c' },
  { id:'translucide-bleu', name:'Translucide bleu', hex:'#a9d4f2' }
];

const cordColors = [
  { id:'noir', name:'Noir', hex:'#171717' },
  { id:'blanc', name:'Blanc', hex:'#f7f4ef' },
  { id:'bleu', name:'Bleu', hex:'#2e6fae' },
  { id:'bleu-nuit', name:'Bleu nuit', hex:'#182947' },
  { id:'sauge', name:'Sauge', hex:'#a6b59a' },
  { id:'orange', name:'Orange', hex:'#e56b2f' }
];

const cordon = { name:'Cordon textile standard', price:19 };

const enrichedItems = ITEMS.map((item, index) => ({
  ...item,
  uid: `${item.type}-${item.family}-${item.ref}-${item.dimensions}-${index}`
}));

const bases = enrichedItems.filter(x => x.type === 'Base');
const shades = enrichedItems.filter(x => x.type === 'Abat-jour');

const euro = n => `${n} €`;
const families = list => [...new Set(list.map(x => x.family))];

function StatusBadge({ status }) {
  return <span className={`status ${status.toLowerCase().replaceAll(' ', '-').replace('à','a')}`}>{status}</span>;
}

function ColorChoice({ title, colors, selected, setSelected }) {
  return (
    <div className="colorBlock">
      <label>{title}</label>
      <div className="colorRow">
        {colors.map(c => (
          <button
            key={c.id}
            type="button"
            className={`colorBtn ${selected.id === c.id ? 'active' : ''}`}
            onClick={() => setSelected(c)}
            title={c.name}
          >
            <span style={{ backgroundColor: c.hex }} />
            <em>{c.name}</em>
          </button>
        ))}
      </div>
    </div>
  );
}

function CardPreview({ item, folder, color }) {
  return (
    <div className="preview">
      <img src={`/previews/${folder}/${item.image}`} alt={item.clientName} />
      <div className="previewMeta">
        <strong>{item.clientName}</strong>
        <span>{item.dimensions}</span>
        <small><i style={{ backgroundColor: color.hex }} /> {color.name}</small>
      </div>
      <p>Visuel indicatif de la famille de forme. Les dimensions et le prix affichés font foi.</p>
    </div>
  );
}

function Selector({ title, items, family, setFamily, selected, setSelected }) {
  const list = items.filter(x => x.family === family);
  React.useEffect(() => {
    if (!list.find(x => x.uid === selected?.uid)) setSelected(list[0]);
  }, [family]);

  return (
    <div className="step">
      <h2>{title}</h2>
      <div className="fields">
        <label>Famille
          <select value={family} onChange={e => setFamily(e.target.value)}>
            {families(items).map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </label>
        <label>Format
          <select value={selected?.uid || ''} onChange={e => setSelected(list.find(x => x.uid === e.target.value))}>
            {list.map(x => (
              <option key={x.uid} value={x.uid}>
                {x.clientName} · {x.dimensions} · {euro(x.price)} · {x.status}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="variantCount">{list.length} variante(s) disponible(s) dans cette famille.</p>
      <div className="chosen">
        <div>
          <strong>{selected?.clientName}</strong>
          <span>{selected?.dimensions}</span>
          <small>{selected?.ref}</small>
        </div>
        <div className="priceBox">
          <StatusBadge status={selected?.status || 'Standard'} />
          <b>{euro(selected?.price || 0)}</b>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [baseFamily, setBaseFamily] = useState('Cylinder');
  const [shadeFamily, setShadeFamily] = useState('Tree');
  const [base, setBase] = useState(bases.find(x => x.family === 'Cylinder') || bases[0]);
  const [shade, setShade] = useState(shades.find(x => x.family === 'Tree') || shades[0]);
  const [baseColor, setBaseColor] = useState(baseColors[2]);
  const [shadeColor, setShadeColor] = useState(shadeColors[2]);
  const [cordColor, setCordColor] = useState(cordColors[0]);
  const total = (base?.price || 0) + (shade?.price || 0) + cordon.price;

  const reference = useMemo(() => {
    return `${base?.ref || ''} + ${shade?.ref || ''} + CORDON-${cordColor.name.toUpperCase().replaceAll(' ', '-')}`;
  }, [base, shade, cordColor]);

  const summary = `Lampe Kumo
Base : ${base?.clientName} — ${base?.dimensions} — ${euro(base?.price || 0)} — ${baseColor.name}
Abat-jour : ${shade?.clientName} — ${shade?.dimensions} — ${euro(shade?.price || 0)} — ${shadeColor.name}
Cordon : ${cordon.name} — ${euro(cordon.price)} — ${cordColor.name}
Total TVAC : ${euro(total)}
Référence : ${reference}
Note : visuel indicatif, production à confirmer selon statut.`;

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    alert('Récap copié');
  }

  return (
    <main>
      <section className="hero">
        <p className="pill">Kumo · outil boutique V1</p>
        <h1>Composer une lampe Kumo</h1>
        <p>Choisis une base, un abat-jour et un cordon. Les visuels sont indicatifs : les dimensions, statuts et prix affichés font foi.</p>
      </section>

      <section className="grid">
        <div className="left">
          <Selector title="1. Base" items={bases} family={baseFamily} setFamily={setBaseFamily} selected={base} setSelected={setBase} />
          <ColorChoice title="Couleur base" colors={baseColors} selected={baseColor} setSelected={setBaseColor} />
          <CardPreview item={base} folder="bases" color={baseColor} />

          <Selector title="2. Abat-jour" items={shades} family={shadeFamily} setFamily={setShadeFamily} selected={shade} setSelected={setShade} />
          <ColorChoice title="Couleur abat-jour" colors={shadeColors} selected={shadeColor} setSelected={setShadeColor} />
          <CardPreview item={shade} folder="shades" color={shadeColor} />

          <div className="step">
            <h2>3. Cordon</h2>
            <div className="chosen">
              <div>
                <strong>{cordon.name}</strong>
                <span>Couleur à confirmer selon stock Creative Cables</span>
              </div>
              <b>{euro(cordon.price)}</b>
            </div>
            <ColorChoice title="Couleur cordon" colors={cordColors} selected={cordColor} setSelected={setCordColor} />
          </div>
        </div>

        <aside className="summary">
          <h2>Récap boutique</h2>
          <div className="miniImgs">
            <CardPreview item={shade} folder="shades" color={shadeColor} />
            <CardPreview item={base} folder="bases" color={baseColor} />
          </div>
          <div className="line"><span>Base</span><strong>{euro(base?.price || 0)}</strong></div>
          <div className="line"><span>Abat-jour</span><strong>{euro(shade?.price || 0)}</strong></div>
          <div className="line"><span>Cordon</span><strong>{euro(cordon.price)}</strong></div>
          <div className="total"><span>Total TVAC</span><strong>{euro(total)}</strong></div>
          <div className="ref">
            <span>Référence boutique</span>
            <code>{reference}</code>
          </div>
          <p className="note">Le prix est un indicateur de vente. Toute pièce “À valider” ou “Sur demande” doit être confirmée avant commande ferme.</p>
          <button onClick={copySummary}>Copier le récap</button>
          <a href={`mailto:lodri@lodri.be?subject=${encodeURIComponent('Composition Kumo')}&body=${encodeURIComponent(summary)}`}>Envoyer par mail</a>
        </aside>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
