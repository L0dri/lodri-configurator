
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Copy, Check, Mail, Eye, EyeOff } from 'lucide-react';
import './style.css';

const bases = [
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/65",
    "ref": "D80 H65",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d80.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/75",
    "ref": "D80 H75",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d80.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/85",
    "ref": "D80 H85",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d80.png",
    "visualScale": 0.74
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/95",
    "ref": "D80 H95",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d80.png",
    "visualScale": 0.83
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/105",
    "ref": "D80 H105",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 45,
    "image": "cylinder-d80.png",
    "visualScale": 0.91
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/115",
    "ref": "D80 H115",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 45,
    "image": "cylinder-d80.png",
    "visualScale": 1.0
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/140",
    "ref": "D80 H140",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cylinder-d80.png",
    "visualScale": 1.22
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/165",
    "ref": "D80 H165",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 65,
    "image": "cylinder-d80.png",
    "visualScale": 1.43
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 80/190",
    "ref": "D80 H190",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 75,
    "image": "cylinder-d80.png",
    "visualScale": 1.45
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/65",
    "ref": "D90 H65",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d90.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/75",
    "ref": "D90 H75",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d90.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/85",
    "ref": "D90 H85",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d90.png",
    "visualScale": 0.74
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/95",
    "ref": "D90 H95",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cylinder-d90.png",
    "visualScale": 0.83
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/105",
    "ref": "D90 H105",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 45,
    "image": "cylinder-d90.png",
    "visualScale": 0.91
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/115",
    "ref": "D90 H115",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 45,
    "image": "cylinder-d90.png",
    "visualScale": 1.0
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/140",
    "ref": "D90 H140",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cylinder-d90.png",
    "visualScale": 1.22
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/165",
    "ref": "D90 H165",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 65,
    "image": "cylinder-d90.png",
    "visualScale": 1.43
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 90/190",
    "ref": "D90 H190",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 75,
    "image": "cylinder-d90.png",
    "visualScale": 1.45
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/65",
    "ref": "D100 H65",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 45,
    "image": "cylinder-d100.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/75",
    "ref": "D100 H75",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 49,
    "image": "cylinder-d100.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/85",
    "ref": "D100 H85",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 49,
    "image": "cylinder-d100.png",
    "visualScale": 0.74
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/95",
    "ref": "D100 H95",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 49,
    "image": "cylinder-d100.png",
    "visualScale": 0.83
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/105",
    "ref": "D100 H105",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cylinder-d100.png",
    "visualScale": 0.91
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/115",
    "ref": "D100 H115",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cylinder-d100.png",
    "visualScale": 1.0
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/140",
    "ref": "D100 H140",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 65,
    "image": "cylinder-d100.png",
    "visualScale": 1.22
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/165",
    "ref": "D100 H165",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "image": "cylinder-d100.png",
    "visualScale": 1.43
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 100/190",
    "ref": "D100 H190",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 85,
    "image": "cylinder-d100.png",
    "visualScale": 1.45
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/65",
    "ref": "D125 H65",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cylinder-d125.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/75",
    "ref": "D125 H75",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cylinder-d125.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/85",
    "ref": "D125 H85",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cylinder-d125.png",
    "visualScale": 0.74
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/95",
    "ref": "D125 H95",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cylinder-d125.png",
    "visualScale": 0.83
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/105",
    "ref": "D125 H105",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 65,
    "image": "cylinder-d125.png",
    "visualScale": 0.91
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/115",
    "ref": "D125 H115",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 65,
    "image": "cylinder-d125.png",
    "visualScale": 1.0
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/140",
    "ref": "D125 H140",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 75,
    "image": "cylinder-d125.png",
    "visualScale": 1.22
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/165",
    "ref": "D125 H165",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 85,
    "image": "cylinder-d125.png",
    "visualScale": 1.43
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 125/190",
    "ref": "D125 H190",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 95,
    "image": "cylinder-d125.png",
    "visualScale": 1.45
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/65",
    "ref": "D150 H65",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 65,
    "image": "cylinder-d150.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/75",
    "ref": "D150 H75",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "image": "cylinder-d150.png",
    "visualScale": 0.65
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/85",
    "ref": "D150 H85",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "image": "cylinder-d150.png",
    "visualScale": 0.74
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/95",
    "ref": "D150 H95",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "image": "cylinder-d150.png",
    "visualScale": 0.83
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/105",
    "ref": "D150 H105",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "image": "cylinder-d150.png",
    "visualScale": 0.91
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/115",
    "ref": "D150 H115",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "image": "cylinder-d150.png",
    "visualScale": 1.0
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/140",
    "ref": "D150 H140",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "L",
    "tier": "Classique",
    "price": 85,
    "image": "cylinder-d150.png",
    "visualScale": 1.22
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/165",
    "ref": "D150 H165",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 95,
    "image": "cylinder-d150.png",
    "visualScale": 1.43
  },
  {
    "family": "Cylinder",
    "clientName": "Cylindre 150/190",
    "ref": "D150 H190",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 99,
    "image": "cylinder-d150.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/65",
    "ref": "D80 H65",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d80.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/75",
    "ref": "D80 H75",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d80.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/85",
    "ref": "D80 H85",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d80.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/95",
    "ref": "D80 H95",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d80.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/105",
    "ref": "D80 H105",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 49,
    "image": "cone-d80.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/115",
    "ref": "D80 H115",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 49,
    "image": "cone-d80.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/140",
    "ref": "D80 H140",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cone-d80.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/165",
    "ref": "D80 H165",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "image": "cone-d80.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone",
    "clientName": "Cône 80/190",
    "ref": "D80 H190",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 79,
    "image": "cone-d80.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/65",
    "ref": "D90 H65",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d90.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/75",
    "ref": "D90 H75",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d90.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/85",
    "ref": "D90 H85",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d90.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/95",
    "ref": "D90 H95",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "S",
    "tier": "Classique",
    "price": 39,
    "image": "cone-d90.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/105",
    "ref": "D90 H105",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 49,
    "image": "cone-d90.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/115",
    "ref": "D90 H115",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "S",
    "tier": "Classique",
    "price": 49,
    "image": "cone-d90.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/140",
    "ref": "D90 H140",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cone-d90.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/165",
    "ref": "D90 H165",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "image": "cone-d90.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone",
    "clientName": "Cône 90/190",
    "ref": "D90 H190",
    "diameter": "90 mm",
    "diameterMm": 90,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 79,
    "image": "cone-d90.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/65",
    "ref": "D100 H65",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 49,
    "image": "cone-d100.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/75",
    "ref": "D100 H75",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cone-d100.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/85",
    "ref": "D100 H85",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cone-d100.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/95",
    "ref": "D100 H95",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 55,
    "image": "cone-d100.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/105",
    "ref": "D100 H105",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cone-d100.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/115",
    "ref": "D100 H115",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cone-d100.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/140",
    "ref": "D100 H140",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 69,
    "image": "cone-d100.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/165",
    "ref": "D100 H165",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 79,
    "image": "cone-d100.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone",
    "clientName": "Cône 100/190",
    "ref": "D100 H190",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 89,
    "image": "cone-d100.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/65",
    "ref": "D125 H65",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 59,
    "image": "cone-d125.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/75",
    "ref": "D125 H75",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 65,
    "image": "cone-d125.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/85",
    "ref": "D125 H85",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 65,
    "image": "cone-d125.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/95",
    "ref": "D125 H95",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "M",
    "tier": "Classique",
    "price": 65,
    "image": "cone-d125.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/105",
    "ref": "D125 H105",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 69,
    "image": "cone-d125.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/115",
    "ref": "D125 H115",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "M",
    "tier": "Classique",
    "price": 69,
    "image": "cone-d125.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/140",
    "ref": "D125 H140",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique",
    "price": 79,
    "image": "cone-d125.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/165",
    "ref": "D125 H165",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 89,
    "image": "cone-d125.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone",
    "clientName": "Cône 125/190",
    "ref": "D125 H190",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 95,
    "image": "cone-d125.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/65",
    "ref": "D150 H65",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 69,
    "image": "cone-d150.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/75",
    "ref": "D150 H75",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "image": "cone-d150.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/85",
    "ref": "D150 H85",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "image": "cone-d150.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/95",
    "ref": "D150 H95",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "L",
    "tier": "Classique",
    "price": 75,
    "image": "cone-d150.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/105",
    "ref": "D150 H105",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "L",
    "tier": "Classique",
    "price": 79,
    "image": "cone-d150.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/115",
    "ref": "D150 H115",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "L",
    "tier": "Classique",
    "price": 79,
    "image": "cone-d150.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/140",
    "ref": "D150 H140",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "L",
    "tier": "Classique",
    "price": 89,
    "image": "cone-d150.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/165",
    "ref": "D150 H165",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique",
    "price": 95,
    "image": "cone-d150.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone",
    "clientName": "Cône 150/190",
    "ref": "D150 H190",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique",
    "price": 99,
    "image": "cone-d150.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/65",
    "ref": "D80 H65",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "S",
    "tier": "Classique +",
    "price": 45,
    "image": "cone-wide-d80.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/75",
    "ref": "D80 H75",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "S",
    "tier": "Classique +",
    "price": 45,
    "image": "cone-wide-d80.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/85",
    "ref": "D80 H85",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "S",
    "tier": "Classique +",
    "price": 45,
    "image": "cone-wide-d80.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/95",
    "ref": "D80 H95",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "S",
    "tier": "Classique +",
    "price": 45,
    "image": "cone-wide-d80.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/105",
    "ref": "D80 H105",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "S",
    "tier": "Classique +",
    "price": 55,
    "image": "cone-wide-d80.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/115",
    "ref": "D80 H115",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "S",
    "tier": "Classique +",
    "price": 55,
    "image": "cone-wide-d80.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/140",
    "ref": "D80 H140",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique +",
    "price": 65,
    "image": "cone-wide-d80.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/165",
    "ref": "D80 H165",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique +",
    "price": 75,
    "image": "cone-wide-d80.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 80/190",
    "ref": "D80 H190",
    "diameter": "80 mm",
    "diameterMm": 80,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique +",
    "price": 85,
    "image": "cone-wide-d80.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/65",
    "ref": "D100 H65",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 55,
    "image": "cone-wide-d100.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/75",
    "ref": "D100 H75",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 59,
    "image": "cone-wide-d100.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/85",
    "ref": "D100 H85",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 59,
    "image": "cone-wide-d100.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/95",
    "ref": "D100 H95",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 59,
    "image": "cone-wide-d100.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/105",
    "ref": "D100 H105",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "M",
    "tier": "Classique +",
    "price": 65,
    "image": "cone-wide-d100.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/115",
    "ref": "D100 H115",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "M",
    "tier": "Classique +",
    "price": 65,
    "image": "cone-wide-d100.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/140",
    "ref": "D100 H140",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique +",
    "price": 75,
    "image": "cone-wide-d100.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/165",
    "ref": "D100 H165",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique +",
    "price": 85,
    "image": "cone-wide-d100.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 100/190",
    "ref": "D100 H190",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique +",
    "price": 95,
    "image": "cone-wide-d100.png",
    "visualScale": 1.45
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/65",
    "ref": "D125 H65",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 69,
    "image": "cone-wide-d125.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/75",
    "ref": "D125 H75",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 79,
    "image": "cone-wide-d125.png",
    "visualScale": 0.65
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/85",
    "ref": "D125 H85",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 79,
    "image": "cone-wide-d125.png",
    "visualScale": 0.74
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/95",
    "ref": "D125 H95",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Bas",
    "size": "M",
    "tier": "Classique +",
    "price": 79,
    "image": "cone-wide-d125.png",
    "visualScale": 0.83
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/105",
    "ref": "D125 H105",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "M",
    "tier": "Classique +",
    "price": 85,
    "image": "cone-wide-d125.png",
    "visualScale": 0.91
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/115",
    "ref": "D125 H115",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "M",
    "tier": "Classique +",
    "price": 85,
    "image": "cone-wide-d125.png",
    "visualScale": 1.0
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/140",
    "ref": "D125 H140",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "M",
    "tier": "Classique +",
    "price": 89,
    "image": "cone-wide-d125.png",
    "visualScale": 1.22
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/165",
    "ref": "D125 H165",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "L",
    "tier": "Classique +",
    "price": 95,
    "image": "cone-wide-d125.png",
    "visualScale": 1.43
  },
  {
    "family": "Cone Wide",
    "clientName": "Cône large 125/190",
    "ref": "D125 H190",
    "diameter": "125 mm",
    "diameterMm": 125,
    "height": "190 mm",
    "heightMm": 190,
    "format": "Maxi",
    "size": "XL",
    "tier": "Classique +",
    "price": 99,
    "image": "cone-wide-d125.png",
    "visualScale": 1.45
  },
  {
    "family": "Arch",
    "clientName": "Arche 100/75",
    "ref": "D100 H75",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "75 mm",
    "heightMm": 75,
    "format": "Compact",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "image": "arch-d100-h75.png",
    "modules": null,
    "visualScale": 0.65
  },
  {
    "family": "Arch",
    "clientName": "Arche 100/85",
    "ref": "D100 H85",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "85 mm",
    "heightMm": 85,
    "format": "Compact",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "image": "arch-d100-h85.png",
    "modules": null,
    "visualScale": 0.74
  },
  {
    "family": "Arch",
    "clientName": "Arche 100/95",
    "ref": "D100 H95",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "95 mm",
    "heightMm": 95,
    "format": "Compact",
    "size": "S",
    "tier": "Design",
    "price": 49,
    "image": "arch-d100-h95.png",
    "modules": null,
    "visualScale": 0.83
  },
  {
    "family": "Arch",
    "clientName": "Arche 100/105",
    "ref": "D100 H105",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "105 mm",
    "heightMm": 105,
    "format": "Standard",
    "size": "M",
    "tier": "Design",
    "price": 59,
    "image": "arch-d100-h105.png",
    "modules": null,
    "visualScale": 0.91
  },
  {
    "family": "Arch",
    "clientName": "Arche 100/115",
    "ref": "D100 H115",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "115 mm",
    "heightMm": 115,
    "format": "Standard",
    "size": "M",
    "tier": "Design",
    "price": 59,
    "image": "arch-d100-h115.png",
    "modules": null,
    "visualScale": 1.0
  },
  {
    "family": "Arch",
    "clientName": "Arche 100/140",
    "ref": "D100 H140",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "140 mm",
    "heightMm": 140,
    "format": "Haut",
    "size": "L",
    "tier": "Design",
    "price": 75,
    "image": "arch-d100-h140.png",
    "modules": null,
    "visualScale": 1.22
  },
  {
    "family": "Arch",
    "clientName": "Arche 100/165",
    "ref": "D100 H165",
    "diameter": "100 mm",
    "diameterMm": 100,
    "height": "165 mm",
    "heightMm": 165,
    "format": "Très haut",
    "size": "XL",
    "tier": "Design",
    "price": 89,
    "image": "arch-d100-h165.png",
    "modules": null,
    "visualScale": 1.43
  },
  {
    "family": "Arch",
    "clientName": "Arche 120",
    "ref": "D120",
    "diameter": "120 mm",
    "diameterMm": 120,
    "height": "à mesurer",
    "heightMm": null,
    "format": "Large",
    "size": "M+",
    "tier": "Design",
    "price": 69,
    "image": "arch-d120.png",
    "modules": null,
    "visualScale": null
  },
  {
    "family": "Arch",
    "clientName": "Arche 150",
    "ref": "D150",
    "diameter": "150 mm",
    "diameterMm": 150,
    "height": "à mesurer",
    "heightMm": null,
    "format": "Large",
    "size": "L",
    "tier": "Design",
    "price": 89,
    "image": "arch-d150.png",
    "modules": null,
    "visualScale": null
  },
  {
    "family": "Cloud",
    "clientName": "Nuage",
    "ref": "Collection standard",
    "diameter": "variable",
    "diameterMm": null,
    "height": "variable",
    "heightMm": null,
    "format": "Signature",
    "size": "M",
    "tier": "Signature douce",
    "price": 75,
    "image": "cloud-collection-standard.png",
    "modules": null,
    "visualScale": null
  },
  {
    "family": "Totem Base",
    "clientName": "Totem 130",
    "ref": "D130",
    "diameter": "130 mm",
    "diameterMm": 130,
    "height": "à mesurer",
    "heightMm": null,
    "format": "Standard",
    "size": "M",
    "tier": "Signature",
    "price": 79,
    "image": "totem-d130.png",
    "modules": null,
    "visualScale": null
  },
  {
    "family": "Totem Base",
    "clientName": "Totem 200/65",
    "ref": "D200 H65",
    "diameter": "200 mm",
    "diameterMm": 200,
    "height": "65 mm",
    "heightMm": 65,
    "format": "Large bas",
    "size": "L",
    "tier": "Signature",
    "price": 95,
    "image": "totem-d200-h65.png",
    "modules": null,
    "visualScale": 0.65
  },
  {
    "family": "Edamame Base",
    "clientName": "Edamame Solo",
    "ref": "Solo",
    "diameter": "160 mm",
    "diameterMm": 160,
    "height": "1 module",
    "heightMm": null,
    "format": "Signature",
    "size": "M",
    "tier": "Signature modulaire",
    "price": 69,
    "image": "edamame-d160.png",
    "modules": 1,
    "visualScale": null
  },
  {
    "family": "Edamame Base",
    "clientName": "Edamame Duo",
    "ref": "Duo",
    "diameter": "160 mm",
    "diameterMm": 160,
    "height": "2 modules",
    "heightMm": null,
    "format": "Signature",
    "size": "L",
    "tier": "Signature modulaire",
    "price": 85,
    "image": "edamame-d160.png",
    "modules": 2,
    "visualScale": null
  },
  {
    "family": "Edamame Base",
    "clientName": "Edamame Trio",
    "ref": "Trio",
    "diameter": "160 mm",
    "diameterMm": 160,
    "height": "3 modules",
    "heightMm": null,
    "format": "Signature",
    "size": "XL",
    "tier": "Signature modulaire",
    "price": 95,
    "image": "edamame-d160.png",
    "modules": 3,
    "visualScale": null
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
  { id: 'blanc', name: 'Blanc', hex: '#F4F1EA', filter: 'brightness(1.32) saturate(.45)', note: 'neutre lumineux' },
  { id: 'noir', name: 'Noir', hex: '#171717', filter: 'brightness(.28) contrast(1.35) saturate(.2)', note: 'sobre et graphique' },
  { id: 'bleu-majorelle', name: 'Bleu Majorelle', hex: '#2654D9', filter: 'sepia(1) saturate(6) hue-rotate(190deg) brightness(.86) contrast(1.2)', note: 'bleu vif signature' },
  { id: 'orange', name: 'Orange', hex: '#F06A2A', filter: 'sepia(1) saturate(4.5) hue-rotate(350deg) brightness(1.02) contrast(1.05)', note: 'chaud et pop' },
  { id: 'rose', name: 'Rose', hex: '#E8A6B8', filter: 'sepia(.55) saturate(2.4) hue-rotate(295deg) brightness(1.12) contrast(.92)', note: 'doux et coloré' },
  { id: 'bleu-fonce', name: 'Bleu foncé', hex: '#142B55', filter: 'sepia(1) saturate(3.2) hue-rotate(185deg) brightness(.55) contrast(1.25)', note: 'profond et élégant' },
  { id: 'terracotta', name: 'Terracotta', hex: '#B65F43', filter: 'sepia(.9) saturate(2.9) hue-rotate(340deg) brightness(.82) contrast(1.08)', note: 'terre cuite' },
  { id: 'brun', name: 'Brun', hex: '#6B4A35', filter: 'sepia(1) saturate(1.55) hue-rotate(335deg) brightness(.6) contrast(1.2)', note: 'chaud et naturel' },
  { id: 'beige', name: 'Beige', hex: '#D8C3A3', filter: 'sepia(.45) saturate(.9) hue-rotate(345deg) brightness(1.04) contrast(.95)', note: 'clair et doux' },
  { id: 'jaune', name: 'Jaune', hex: '#F2C84B', filter: 'sepia(1) saturate(3.2) hue-rotate(5deg) brightness(1.12) contrast(.98)', note: 'lumineux' },
];

const shadeColors = [
  { id: 'blanc', name: 'Blanc', hex: '#F4F1EA', filter: 'brightness(1.28) saturate(.35)', note: 'opaque ou très clair' },
  { id: 'translucide-blanc', name: 'Translucide blanc', hex: '#F6F4EE', filter: 'brightness(1.35) saturate(.25) opacity(.88)', note: 'diffusion douce' },
  { id: 'translucide-rose', name: 'Translucide rose', hex: '#F0A9BE', filter: 'sepia(.55) saturate(2) hue-rotate(295deg) brightness(1.12) contrast(.9) opacity(.9)', note: 'lumière douce rosée' },
  { id: 'translucide-vert', name: 'Translucide vert', hex: '#A9C9A3', filter: 'sepia(.7) saturate(1.7) hue-rotate(55deg) brightness(1.02) contrast(.9) opacity(.9)', note: 'lumière fraîche' },
  { id: 'translucide-jaune', name: 'Translucide jaune', hex: '#F3D45C', filter: 'sepia(1) saturate(2.6) hue-rotate(8deg) brightness(1.18) contrast(.92) opacity(.9)', note: 'lumière chaude' },
  { id: 'translucide-bleu', name: 'Translucide bleu', hex: '#A9D4F2', filter: 'sepia(.75) saturate(2.3) hue-rotate(170deg) brightness(1.08) contrast(.9) opacity(.9)', note: 'lumière froide légère' },
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



function ColorWheel({ title, selected, onSelect }) {
  function chooseColor(hex) {
    onSelect({
      ...selected,
      id: 'custom',
      name: 'Couleur personnalisée',
      hex,
      note: `Code HEX : ${hex}`
    });
  }

  return (
    <div className="colorWheelBlock">
      <div className="colorWheelTitle">{title}</div>
      <div className="colorWheelRow">
        <label className="colorWheelBox" title="Choisir une couleur libre">
          <input
            type="color"
            value={selected.hex}
            onChange={e => chooseColor(e.target.value)}
          />
          <span style={{ backgroundColor: selected.hex }} />
        </label>
        <div className="colorWheelInfo">
          <strong>{selected.name}</strong>
          <code>{selected.hex}</code>
          <small>Clique sur le carré pour ouvrir la roue chromatique.</small>
        </div>
      </div>
    </div>
  );
}



function CableColorSelect({ title, items, selected, onSelect }) {
  return (
    <label className="cableColorSelect">
      {title}
      <div className="cableSelectRow">
        <span className="selectedDot" style={{ backgroundColor: selected.hex }} />
        <select value={selected.id} onChange={e => onSelect(items.find(item => item.id === e.target.value))}>
          {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </div>
      <small>Couleur textile indicative, à confirmer selon disponibilité.</small>
    </label>
  );
}



function getPreviewSources(item, folder) {
  const generic = `/previews/${folder}/${item.image}`;
  if (folder === 'bases' && item.diameter && item.height && /^\d+ mm$/.test(item.height)) {
    const diameter = item.diameter.replace(' mm', '').toLowerCase();
    const height = item.height.replace(' mm', '').toLowerCase();
    const baseSlug = (item.family || '')
      .toLowerCase()
      .replace('cone wide', 'cone-wide')
      .replace('totem base', 'totem')
      .replace('edamame base', 'edamame')
      .replace(/\s+/g, '-');
    const precise = `/previews/${folder}/${baseSlug}-d${diameter}-h${height}.png`;
    return [precise, generic];
  }
  return [generic];
}


function PreviewImage({ item, folder, color, stacked = 1, label }) {
  const count = Math.max(1, stacked || 1);
  const sources = getPreviewSources(item, folder);

  return (
    <div className={`previewItem stacked stacked-${count}`}>
      <div className="imageStack">
        {Array.from({ length: count }).map((_, index) => (
          <img
            key={index}
            className={`previewImg module-${index + 1}`}
            src={sources[0]}
            onError={e => {
              if (sources[1] && e.currentTarget.src.indexOf(sources[1]) === -1) {
                e.currentTarget.src = sources[1];
              }
            }}
            alt={label}
          />
        ))}
      </div>
      <span>{label}</span>
      <small><i style={{ backgroundColor: color.hex }} />{color.name} · {color.hex}</small>
    </div>
  );
}

function MiniPreview({ title, item, folder, color, stacked = 1 }) {
  return (
    <div className="miniPreview">
      <div className="miniPreviewHeader">
        <div>
          <strong>{title}</strong>
          <span>{item.clientName} · Ø {item.diameter} × H {item.height}</span>
        </div>
        <em>{euro(item.price)}</em>
      </div>
      <PreviewImage item={item} folder={folder} color={color} label={item.clientName} stacked={stacked} />\n      <p className="previewCaution">Visuel indicatif si la preview exacte de hauteur n’est pas disponible.</p>
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
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [copied, setCopied] = useState(false);

  const baseOptions = bases.filter(x => x.family === baseFamily);
  const shadeOptions = shades.filter(x => x.family === shadeFamily);
  const base = baseOptions.find(x => x.ref === baseRef) || baseOptions[0];
  const shade = shadeOptions.find(x => x.ref === shadeRef) || shadeOptions[0];
  const cordon = cordons.find(x => x.id === cordonId) || cordons[0];
  const filter = filters.find(x => x.id === filterId) || filters[0];
  const total = base.price + shade.price + cordon.price + filter.price;

  const summary = useMemo(() => `Composition Lodri / Kumo
Base : ${base.clientName} ${base.size} (${base.ref}, Ø ${base.diameter}, H ${base.height}) — ${euro(base.price)} · coloris ${baseColor.name} (${baseColor.hex})
Abat-jour : ${shade.clientName} ${shade.size} (${shade.ref}, Ø ${shade.diameter}, H ${shade.height}) — ${euro(shade.price)} · coloris ${shadeColor.name} (${shadeColor.hex})
Cordon : ${cordon.name} — ${euro(cordon.price)} · coloris ${cordColor.name}
Filtre : ${filter.name} — ${euro(filter.price)}${filter.id !== 'none' ? ` · coloris ${filterColor.name} (${filterColor.hex})` : ''}
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
          <p className="pill">Configurateur maison · V9.4</p>
          <h1>Composer une lampe Lodri / Kumo</h1>
          <p>Choisis une base, un abat-jour, un cordon et éventuellement un filtre lumineux. Les dimensions Ø × H sont affichées pour mieux visualiser les proportions. Les couleurs sont indicatives et peuvent être adaptées sur demande.</p>
        </div>
        <button className="smallButton" onClick={() => setShowWorkshop(!showWorkshop)}>
          {showWorkshop ? <EyeOff size={17} /> : <Eye size={17} />} {showWorkshop ? 'Masquer atelier' : 'Voir atelier'}
        </button>
      </section>

      <section className="mobileFlow">
        <div className="stepCard">
          <h2>1. Base</h2>
          <div className="fields">
            <label>Collection
              <select value={baseFamily} onChange={e => changeBaseFamily(e.target.value)}>
                {families(bases).map(f => <option key={f}>{f}</option>)}
              </select>
            </label>
            <label>Format
              <select value={base.ref} onChange={e => setBaseRef(e.target.value)}>
                {baseOptions.map(x => <option key={x.ref} value={x.ref}>{x.clientName} · Ø {x.diameter} × H {x.height} · {euro(x.price)}</option>)}
              </select>
            </label>
          </div>
          <ColorWheel title="Couleur de la base" selected={baseColor} onSelect={setBaseColor} />
          <MiniPreview title="Base choisie" item={base} folder="bases" color={baseColor} stacked={base.modules || 1} />
        </div>

        <div className="stepCard">
          <h2>2. Abat-jour</h2>
          <div className="fields">
            <label>Collection
              <select value={shadeFamily} onChange={e => changeShadeFamily(e.target.value)}>
                {families(shades).map(f => <option key={f}>{f}</option>)}
              </select>
            </label>
            <label>Format
              <select value={shade.ref} onChange={e => setShadeRef(e.target.value)}>
                {shadeOptions.map(x => <option key={x.ref} value={x.ref}>{x.clientName} · {x.ref} · {x.size} · {euro(x.price)}</option>)}
              </select>
            </label>
          </div>
          <ColorWheel title="Couleur de l’abat-jour" selected={shadeColor} onSelect={setShadeColor} />
          <MiniPreview title="Abat-jour choisi" item={shade} folder="shades" color={shadeColor} />
        </div>

        <div className="stepCard">
          <h2>3. Finitions</h2>
          <div className="fields">
            <label>Cordon
              <select value={cordonId} onChange={e => setCordonId(e.target.value)}>
                {cordons.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}
              </select>
            </label>
            <CableColorSelect title="Couleur du cordon" items={cordColors} selected={cordColor} onSelect={setCordColor} />
          </div>
          <div className="fields">
            <label>Filtre lumineux
              <select value={filterId} onChange={e => setFilterId(e.target.value)}>
                {filters.map(x => <option key={x.id} value={x.id}>{x.name} · {euro(x.price)}</option>)}
              </select>
            </label>
            {filter.id !== 'none' && <ColorWheel title="Couleur du filtre" selected={filterColor} onSelect={setFilterColor} />}
          </div>
        </div>

        {showWorkshop && (
          <div className="stepCard atelier">
            <h2>Repères atelier</h2>
            <p><strong>Base :</strong> {base.family} · {base.ref} · Ø {base.diameter} · H {base.height} · taille {base.size} · {base.tier}</p>
            <p><strong>Abat-jour :</strong> {shade.family} · {shade.ref} · Ø {shade.diameter} · H {shade.height} · taille {shade.size} · {shade.tier}</p>
            <p><strong>Note :</strong> Les dimensions affichées servent de repères atelier. Les proportions et couleurs restent indicatives et peuvent légèrement varier selon l’impression et le filament utilisé.</p>
          </div>
        )}

        <div className="summaryCard">
          <h2>Récapitulatif</h2>
          <div className="finalImages">
            <PreviewImage item={shade} folder="shades" color={shadeColor} label={shade.clientName} />
            <PreviewImage item={base} folder="bases" color={baseColor} label={base.clientName} stacked={base.modules || 1} />
          </div>

          <div className="line"><span>Base {base.clientName}</span><strong>{euro(base.price)}</strong></div>
          <div className="line subtle"><span>Dimensions base</span><strong>Ø {base.diameter} × H {base.height}</strong></div>
          <div className="line subtle"><span>Couleur base</span><strong>{baseColor.name} · {baseColor.hex}</strong></div>
          <div className="line"><span>Abat-jour {shade.clientName}</span><strong>{euro(shade.price)}</strong></div>
          <div className="line subtle"><span>Dimensions abat-jour</span><strong>Ø {shade.diameter} × H {shade.height}</strong></div>
          <div className="line subtle"><span>Couleur abat-jour</span><strong>{shadeColor.name} · {shadeColor.hex}</strong></div>
          <div className="line"><span>{cordon.name}</span><strong>{euro(cordon.price)}</strong></div>
          <div className="line subtle"><span>Couleur cordon</span><strong>{cordColor.name}</strong></div>
          <div className="line"><span>{filter.name}</span><strong>{euro(filter.price)}</strong></div>
          {filter.id !== 'none' && <div className="line subtle"><span>Couleur filtre</span><strong>{filterColor.name} · {filterColor.hex}</strong></div>}
          <div className="infoNote">Le prix final sera confirmé ensemble selon les couleurs, matières et finitions choisies.</div>
          <div className="total"><span>Total TVAC</span><strong>{euro(total)}</strong></div>
          <button onClick={copy}>{copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? 'Copié' : 'Copier le récap'}</button>
          <a className="mailButton" href={mailHref}><Mail size={18} /> Me contacter pour finaliser</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
