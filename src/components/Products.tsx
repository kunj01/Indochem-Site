import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '../context/LenisContext'

const WA = (name: string) =>
    `https://wa.me/919157808873?text=Hi%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(name)}%20%E2%80%94%20please%20share%20pricing%20%26%20MOQ.`

interface Product {
    id: string
    name: string
    price: string
    packaging: string
    grade: string
    form: string
    description: string
    image: string
    indiamart: string
}

interface Category {
    id: string
    label: string
    color: string
    products: Product[]
}

const CATEGORIES: Category[] = [
    {
        id: 'ro-antiscalant',
        label: 'RO Antiscalant',
        color: '#0F4C4C',
        products: [
            {
                id: 'ro-membrane-antiscalant',
                name: 'RO Membrane Antiscalant',
                price: '₹ 200/Kg',
                packaging: '25 Kg Can',
                grade: 'Industrial Grade',
                form: 'Liquid',
                description: 'Threshold Inhibition, Crystal Modification & Dispersion. Prevents scale formation on RO membranes, extends membrane life and maintains optimal flux rates in industrial RO systems.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/LL/JD/TO/3296032/membrane-antiscalant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/ro-membrane-antiscalant-26762955297.html',
            },
            {
                id: 'ic-7090',
                name: 'Indochem RO Antiscalant IC 7090',
                price: '₹ 200/Kg',
                packaging: '200 Kg Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'High-performance antiscalant for desalination, drinking water and industrial RO plants. Controls calcium carbonate, sulfate and silica scale. Ideal for membrane cleaning applications.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/XN/YD/WQ/3296032/super-concentrate-ro-antiscalant-dispersant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-ro-antiscalant-chemical-ic-7090-27299899633.html',
            },
            {
                id: 'ic-225',
                name: 'Indochem RO Antiscalant IC 225',
                price: '₹ 250/Kg',
                packaging: '200 Kg Drum',
                grade: 'Chemical Grade',
                form: 'Liquid',
                description: 'Specially formulated for boiler feed, textile, pharmaceutical and food-grade water treatment applications. Prevents scaling across a wide range of water chemistry conditions.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/YU/ZJ/XK/3296032/indochem-ro-antiscalant-chemical-ic-225-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-ro-antiscalant-chemical-ic-225-27299999530.html',
            },
            {
                id: 'ro-antiscalant-general',
                name: 'RO Antiscalant Chemical',
                price: '₹ 200/Kg',
                packaging: '25 Kg Can',
                grade: 'Industrial Grade',
                form: 'Liquid',
                description: 'General purpose RO antiscalant for a wide range of feed water conditions. Controls carbonate, sulfate and silica scaling on reverse osmosis membranes effectively.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/UH/MM/LV/3296032/ro-antiscalant-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/ro-antiscalant-chemical-26762955433.html',
            },
            {
                id: 'ic-135',
                name: 'Indochem RO Antiscalant IC 135',
                price: '₹ 250/Kg',
                packaging: '200 Kg Can',
                grade: 'Chemical Grade',
                form: 'Liquid',
                description: 'Effective scale inhibitor for RO plants with elevated TDS and hardness. Controls inorganic scale deposits including carbonate, sulfate, fluoride and barium scale.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/WC/OU/HB/3296032/indochem-ro-antiscalant-chemical-ic-135-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-ro-antiscalant-chemical-ic-135-27299999491.html',
            },
            {
                id: 'ic-550',
                name: 'Indochem RO Antiscalant IC 550',
                price: '₹ 250/Kg',
                packaging: '200 Kg Can',
                grade: 'Chemical Grade',
                form: 'Liquid',
                description: 'Premium membrane antiscalant designed for high-recovery RO systems. Provides superior scale inhibition for silica, iron, aluminium and organic fouling prevention.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/AK/PA/FU/3296032/indochem-ro-antiscalant-chemical-ic-550-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-ro-antiscalant-chemical-ic-550-27299999633.html',
            },
            {
                id: 'low-ph-antiscalant',
                name: 'Low pH RO Antiscalant',
                price: '₹ 200/Kg',
                packaging: '25 Kg Can',
                grade: 'Industrial Grade',
                form: 'Liquid (Low pH)',
                description: 'Formulated for low-pH RO systems. Prevents carbonate and sulfate scaling, suitable for brackish and seawater desalination plants with acidic feed water conditions.',
                image: 'https://5.imimg.com/data5/ANDROID/Default/2021/8/NS/AX/GU/3296032/img-20210803-wa0039-jpg-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/low-ph-ro-antiscalant-26762954948.html',
            },
            {
                id: 'high-ph-antiscalant',
                name: 'High pH RO Antiscalant',
                price: '₹ 200/Kg',
                packaging: '25 Kg Can',
                grade: 'Industrial Grade',
                form: 'Liquid (High pH)',
                description: 'Optimized for high-pH RO systems. Controls silica scaling effectively at elevated pH levels. Suitable for industrial and commercial RO plants processing alkaline feed water.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/KB/OF/EI/3296032/ro-cleaning-chemical-500x500.jpeg',
                indiamart: 'https://www.indiamart.com/proddetail/high-ph-ro-antiscalant-26762955062.html',
            },
            {
                id: 'super-concentrate-antiscalant',
                name: 'Super Concentrate RO Antiscalant / Dispersant',
                price: '₹ 200/Kg',
                packaging: '25 Kg Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Highly concentrated antiscalant and dispersant for RO membranes. One of the most cost-effective solutions for scale prevention — minimal dosing required for maximum protection.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/UH/MM/LV/3296032/ro-antiscalant-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/super-concentrate-ro-antiscalant-dispersant-26762955188.html',
            },
            {
                id: 'biological-ro-chemical',
                name: 'Biological RO Chemical (Biocide)',
                price: '₹ 550/Kg',
                packaging: '25 Litre Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Non-oxidising biocide for RO membrane systems. Controls biological fouling, algae and biofilm growth in feed water. Compatible with polyamide thin-film composite membranes.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/BB/BK/RC/3296032/biological-riverse-osmosis-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/biological-reverse-osmosis-chemical-23775825155.html',
            },
            {
                id: 'high-ph-antiscalant-v2',
                name: 'High Ph RO Antiscalant',
                price: '₹ 200/Kg',
                packaging: '25 Kg Can',
                grade: 'Industrial Grade',
                form: 'Liquid (High pH)',
                description: 'High-pH RO antiscalant for elevated alkalinity feed water conditions. Controls silica and carbonate scale in high-pH RO systems. Suitable for desalination and industrial water treatment plants.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/HV/SC/DF/3296032/flocculants-water-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/high-ph-ro-antiscalant-26737326733.html',
            },
            {
                id: 'ro-antiscalant-new',
                name: 'RO Antiscalant Chemical (Premium)',
                price: '₹ 250/Kg',
                packaging: '25 Kg Can',
                grade: 'Industrial Grade',
                form: 'Liquid',
                description: 'Premium grade RO antiscalant chemical for advanced water treatment systems. Effective at low dosage for prevention of all types of mineral scale on RO membranes. Suitable for brackish and high-TDS feed water.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/VV/DV/TE/3296032/boiler-water-treatment-chemicals-500x500.jpeg',
                indiamart: 'https://www.indiamart.com/proddetail/ro-antiscalant-chemical-2852095540212.html',
            },
        ],
    },
    {
        id: 'cooling-tower',
        label: 'Cooling Tower Chemicals',
        color: '#1A6B6B',
        products: [
            {
                id: 'ct-scale-corrosion',
                name: 'Scale & Corrosion Inhibitor for Cooling Water',
                price: '₹ 175/Kg',
                packaging: '50 Kg Drum',
                grade: 'Bio-Tech Grade',
                form: 'Liquid',
                description: 'Multi-functional scale and corrosion inhibitor for open recirculating cooling water systems. Controls scale, corrosion and biological growth. 99% water soluble, purity guaranteed.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/EW/RX/UJ/3296032/scale-corrosion-cooling-water-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/scale-and-corrosion-inhibitor-for-cooling-water-treatment-chemical-23775913388.html',
            },
            {
                id: 'ct-scale-corrosion-2',
                name: 'Cooling Tower Scale & Corrosion Inhibitor',
                price: '₹ 155/Kg',
                packaging: 'HDPE Drum',
                grade: 'Industrial Grade',
                form: 'Liquid',
                description: 'Broad-spectrum inhibitor for industrial cooling towers and HVAC systems. Prevents scale deposition on heat exchangers, condenser tubes and evaporative coolers. Extends equipment life significantly.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/AG/HG/ZL/3296032/cooling-tower-scale-and-corrosion-inhibitor-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/cooling-tower-scale-and-corrosion-inhibitor-26245638012.html',
            },
            {
                id: 'c-301',
                name: 'Indochem C-301 Cooling Tower Chemical',
                price: '₹ 155/Kg',
                packaging: '200 Kg Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Scale and corrosion inhibitor specifically formulated for cooling towers. Provides comprehensive protection against scaling and metal corrosion. Effective over a wide pH range.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/VV/MU/DY/3296032/indochem-c-301-cooling-tower-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-c-301-cooling-tower-chemical-27300000073.html',
            },
            {
                id: 'c-505',
                name: 'Indochem C-505 Cooling Tower Chemical',
                price: '₹ 175/Kg',
                packaging: '200 Kg Can',
                grade: 'Reagent Grade',
                form: 'Liquid',
                description: 'Prevents microbiological growth and algae slime in cooling tower systems. Non-oxidising biocide with corrosion inhibiting properties for long-term tower protection.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/RJ/HM/ZJ/3296032/indochem-c-505-cooling-tower-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-c-505-cooling-tower-chemical-27300000188.html',
            },
            {
                id: 'c-540',
                name: 'Indochem C-540 Cooling Tower Chemical',
                price: '₹ 165/Kg',
                packaging: '200 Kg Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Prevents microbiological growth, controls algae and bio-slime formation in recirculating cooling water. Compatible with most metals and materials used in cooling systems.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/QI/LY/IZ/3296032/indochem-c-540-cooling-tower-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-c-540-cooling-tower-chemical-27300000288.html',
            },
            {
                id: 'd-100',
                name: 'Indochem D-100 Descalant (Cooling Tower)',
                price: '₹ 75/Kg',
                packaging: '200 Kg Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Powerful descaling agent for cooling towers, heat exchangers and condensers. Removes existing carbonate, silicate and iron oxide scale deposits quickly and safely without damaging metal surfaces.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/YM/AK/UG/3296032/ind1-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-d-100-descalant-coolong-tower-chemical-27300067130.html',
            },
            {
                id: 'd-110-alkalizer',
                name: 'D-110 Cooling Tower Chemical D-Alkalizer Descaling Chemical',
                price: '₹ 105/Kg',
                packaging: 'Can / Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Multi-action D-Alkalizer descaling chemical for cooling towers. Neutralises alkalinity, removes scale and passivates metal surfaces in a single treatment. Suitable for heat exchangers and condensers.',
                image: 'https://5.imimg.com/data5/ANDROID/Default/2023/11/360351272/XB/HH/PH/3296032/product-jpeg-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/d-110-cooling-tower-chemical-d-alkalizer-descaling-chemical-2852854512397.html',
            },
            {
                id: 'biocide-ro',
                name: 'Biocides for Industrial RO Plant',
                price: '₹ 175/Kg',
                packaging: 'Can / Drum',
                grade: 'Industrial Grade',
                form: 'Liquid',
                description: 'Broad-spectrum oxidising and non-oxidising biocide formulations for industrial RO plants and cooling systems. Controls bacteria, algae and biofilm, ensuring system hygiene and membrane safety.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/FH/VY/RP/3296032/biocides-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/biocides-for-industrial-ro-plant-26245094888.html',
            },
            {
                id: 'c-301-new',
                name: 'INDO CHEM C-301 Water Cooling Chemical',
                price: '₹ 160/Kg',
                packaging: 'Can / Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Latest formulation of the IndoChem C-301 cooling water treatment chemical. Enhanced scale and corrosion inhibitor for open recirculating cooling towers. Improved stability and performance at all operating pH ranges.',
                image: 'https://5.imimg.com/data5/ANDROID/Default/2026/6/614668744/BG/EL/GV/3296032/product-jpeg-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indo-chem-c-301-water-cooling-chemical-2859362903133.html',
            },
            {
                id: 'c-750',
                name: 'Indo Chem C-750 Cooling Tower Chemical',
                price: '₹ 175/Kg',
                packaging: 'Can / Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Premium C-750 cooling tower treatment chemical for industrial cooling water systems. Provides superior scale and corrosion inhibition with enhanced biocidal properties for optimal cooling tower performance.',
                image: 'https://5.imimg.com/data5/ANDROID/Default/2026/6/614668744/BG/EL/GV/3296032/product-jpeg-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indo-chem-c-750-cooling-tower-chemical-2859111961612.html',
            },
        ],
    },

    {
        id: 'boiler',
        label: 'Boiler Water Treatment',
        color: '#0A3333',
        products: [
            {
                id: 'boiler-wt-general',
                name: 'Boiler Water Treatment Chemical',
                price: '₹ 150/Kg',
                packaging: '35 Litre Can',
                grade: 'Industrial Grade',
                form: 'Liquid',
                description: 'Complete boiler water treatment for scale prevention, corrosion inhibition and oxygen scavenging. Maintains pH balance and protects steam boiler systems from premature failure.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/EW/TD/XW/3296032/boiler-water-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/boiler-water-treatment-chemical-23775914655.html',
            },
            {
                id: 'b-150',
                name: 'Indochem B-150 Boiler Chemical',
                price: '₹ 150/Kg',
                packaging: '200 Kg Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Oxygen scavenger and passivating agent for boiler feed water. Prevents dissolved oxygen corrosion in boiler tubes and steam lines. Suitable for low-to-medium pressure boilers.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/SB/ZW/VC/3296032/indochem-b-150-boiler-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-b-150-boiler-chemical-27300000312.html',
            },
            {
                id: 'b-155',
                name: 'Indochem B-155 Boiler Chemical',
                price: '₹ 125/Kg',
                packaging: '200 Kg Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Scale and sludge conditioner for boiler water systems. Keeps sludge mobile and dispersed for easy blowdown. Prevents hard scale formation on boiler heating surfaces.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/YX/FP/OO/3296032/indochem-b-155-boiler-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-b-155-boiler-chemical-27300000491.html',
            },
            {
                id: 'b-170',
                name: 'Indochem B-170 Boiler Chemical',
                price: '₹ 150/Kg',
                packaging: '200 Kg Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'pH correcting agent and alkalinity builder for boiler water. Neutralises carbonic acid and provides all-volatile treatment (AVT) for high-pressure steam generators.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/VL/MW/ER/3296032/indochem-b-170-boiler-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-b-170-boiler-chemical-27300000597.html',
            },
            {
                id: 'water-treatment-industrial',
                name: 'Water Treatment Chemicals (Industrial)',
                price: '₹ 105/Kg',
                packaging: '25 Kg Bag',
                grade: 'Industrial Grade',
                form: 'Liquid / Solid',
                description: 'Comprehensive range of water treatment chemicals for industrial boilers including scale inhibitors, corrosion inhibitors, oxygen scavengers and pH regulators for all boiler pressures.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/WC/WI/HQ/3296032/water-treatment-chemicals-for-industrial-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/water-treatment-chemicals-for-industrial-26245497412.html',
            },
        ],
    },
    {
        id: 'etp-chemicals',
        label: 'Effluent Treatment Chemicals',
        color: '#2E7D6B',
        products: [
            {
                id: 'flocculant',
                name: 'Flocculant Water Treatment Chemical',
                price: '₹ 250/Kg',
                packaging: '25 Kg Bag',
                grade: 'Industrial Grade',
                form: 'Powder / Granules',
                description: 'Anionic and cationic polyelectrolyte flocculants for rapid turbidity removal and sludge settling in ETPs and WTPs. Achieves clear effluent discharge compliant with CETP norms.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/JJ/MA/OB/3296032/flocculant-water-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/flocculant-water-treatment-chemical-23775940873.html',
            },
            {
                id: 'defoamer',
                name: 'Defoamer / Antifoaming Agent',
                price: '₹ 200/Kg',
                packaging: '35 Litre Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Silicone and non-silicone based defoamers for industrial ETPs, cooling towers and wastewater systems. Controls foam rapidly in textile, dyeing, chemical and food processing effluents.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/TX/BE/WT/3296032/deformers-antifoaming-agents-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/defoamer-antifoaming-agents-23775960297.html',
            },
            {
                id: 'coagulant',
                name: 'Coagulant Chemicals for Wastewater Treatment',
                price: '₹ 80/Kg',
                packaging: '60 Kg Can',
                grade: 'Industrial Grade',
                form: 'Liquid / Powder',
                description: 'PAC (Poly Aluminium Chloride), alum and proprietary coagulants for efficient destabilisation of colloidal particles in wastewater. Works across a wide pH range for optimal performance.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/IF/TD/ZR/3296032/coagulant-wastewater-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/coagulant-chemicals-for-wastewater-treatment-l-23775935097.html',
            },
            {
                id: 's-700',
                name: 'Indochem S-700 Coagulant',
                price: '₹ 80/Kg',
                packaging: '200 Kg Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Proprietary IndoChem coagulant formulation for industrial effluent systems. Effective against high colour, turbidity and suspended solids in textile, chemical and pharmaceutical wastewater.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/CF/QF/CC/3296032/indochem-s-700-coagulant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-s-700-coagulant-27300000673.html',
            },
            {
                id: 'decolorant',
                name: 'Decolorant Water Treatment Chemical',
                price: '₹ 100/Kg',
                packaging: '60–275 Kg Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Powerful decolourisation agent for textile, dye manufacturing and printing wastewater. Removes reactive, acid and disperse dyes rapidly. Achieves CETP colour discharge norms.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/HA/LI/EY/3296032/decolorant-water-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/decolorant-water-treatment-chemical-23775921912.html',
            },
            {
                id: 'decoloring-precipitant',
                name: 'DeColoring Agent Precipitant',
                price: '₹ 80/Kg',
                packaging: 'Can / Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'High-efficiency colour precipitant for textile and dye effluent treatment. Rapidly removes colour, COD and colloidal impurities from wastewater through chemical precipitation.',
                image: 'https://5.imimg.com/data5/ANDROID/Default/2023/11/362051720/WF/HH/BK/3296032/product-jpeg-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/decoloring-agent-percipient-2852894596288.html',
            },
        ],
    },
    {
        id: 'ro-membrane-cleaning',
        label: 'RO Membrane Cleaning',
        color: '#164E5A',
        products: [
            {
                id: 'ro-acidic-cleaner',
                name: 'RO Acidic Cleaning Chemical (Liquid)',
                price: '₹ 180/Kg',
                packaging: '5–35 Kg Can',
                grade: 'Technical Grade',
                form: 'Liquid (Acidic)',
                description: 'Low-pH acidic cleaner for removing mineral scale, carbonate, iron oxide and metal hydroxide deposits from RO membranes. Restores flux rate to near-original performance safely.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/BS/MG/UC/3296032/magnesium-salt-ro-cleaning-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/ro-acidic-cleaning-chemicals-liquid-23775951730.html',
            },
            {
                id: 'ro-membrane-cleaner',
                name: 'RO Membrane Cleaning Chemical',
                price: '₹ 200/Kg',
                packaging: '5–35 Kg Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Scale inhibitor and membrane cleaning solution. Removes biofouling, colloidal deposits and organic matter from RO membranes. Compatible with all polyamide thin-film composite membranes.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/LD/IR/FX/3296032/ro-membrane-cleaning-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/ro-membrane-cleaning-chemical-23775909888.html',
            },
            {
                id: 'ro-silica-cleaner',
                name: 'RO Membrane Silica Cleaning Chemical',
                price: '₹ 250/Kg',
                packaging: '5–35 Kg Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Specialised alkaline cleaner for silica scale removal from RO membranes. High-pH formulation dissolves polymerised silica and organic foulants to restore membrane performance.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/OQ/AG/ZZ/3296032/ro-membrane-treatment-cleaning-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/ro-membrane-silica-cleaning-chemical-23775895955.html',
            },
            {
                id: 'ro-6020',
                name: 'IndoChem RO 6020',
                price: '₹ 175/Kg',
                packaging: '200 Kg Can',
                grade: 'Chemical Grade',
                form: 'Liquid',
                description: 'Premium RO plant membrane cleaning chemical. Effectively removes organic and inorganic fouling from membranes. Formulated for industrial RO systems requiring high-purity output water.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/UP/UB/DB/3296032/indochem-ro-6020-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-ro-6020-27299999855.html',
            },
            {
                id: 'ro-6030',
                name: 'IndoChem RO 6030',
                price: '₹ 250/Kg',
                packaging: '200 Kg Can',
                grade: 'Chemical Grade',
                form: 'Liquid',
                description: 'Alkaline membrane cleaner for removal of biofouling, silt and colloidal organic deposits. Suitable for CIP (clean-in-place) procedures on spiral wound RO membrane elements.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/NC/AA/AL/3296032/indochem-ro-6030-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-ro-6030-27299999933.html',
            },
            {
                id: 'ro-6070',
                name: 'IndoChem RO 6070',
                price: '₹ 200/Kg',
                packaging: '200 Kg Can',
                grade: 'Chemical Grade',
                form: 'Liquid',
                description: 'Broad-spectrum membrane cleaning agent for mixed fouling types. Combines acidic and alkaline action for effective single-step removal of scale, biofilm and organic deposits.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/SC/QE/DB/3296032/indochem-ro-6070-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/indochem-ro-6070-27299999788.html',
            },
        ],
    },
    {
        id: 'sewage',
        label: 'Sewage & ETP Treatment',
        color: '#1C5C3C',
        products: [
            {
                id: 'deodorant-etp',
                name: 'Deodorant Effluent Treatment Chemical',
                price: '₹ 6,150/piece',
                packaging: '25 Litre Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Neutralises foul odours from effluent treatment plants, sewage systems and wastewater lagoons. Biochemical formulation eliminates H2S and mercaptan compounds at source.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/SV/KE/FK/3296032/deodourent-effluent-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/deodourent-effluent-treatment-chemical-23775971362.html',
            },
            {
                id: 'chemoxident',
                name: 'Chemoxident Waste Water Treatment Chemical',
                price: '₹ 250/Kg',
                packaging: '25 Litre Can',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Oxidising agent for wastewater treatment. Effectively reduces BOD/COD, removes colour and destroys pathogens in sewage and industrial effluent. Compatible with STP biological treatment.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/ZR/JE/JI/3296032/themoxident-waste-water-treatment-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/chemoxident-waste-water-treatment-chemical-23775955673.html',
            },
            {
                id: 'disinfectant',
                name: 'Disinfectants for Effluents',
                price: '₹ 50/Kg',
                packaging: '50 Kg Drum',
                grade: 'Technical Grade',
                form: 'Liquid',
                description: 'Chlorine-based and non-chlorine disinfectants for final effluent polishing in STPs and ETPs. Meets CPCB discharge norms for coliform and pathogen removal from treated wastewater.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/351564149/SX/BY/QK/3296032/download-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/disinfectants-chemical-for-effluents-2852643893830.html',
            },
        ],
    },
    {
        id: 'etp-plants',
        label: 'Effluent Treatment Plants',
        color: '#2C4A3E',
        products: [
            {
                id: 'etp-plant-general',
                name: 'Effluent Treatment Plant (ETP)',
                price: 'Get Quote',
                packaging: 'Turnkey / Custom',
                grade: 'Industrial',
                form: 'Plant / Equipment',
                description: 'Complete effluent treatment plant solutions for textile, chemical, pharmaceutical and food processing industries. Designed for compliance with CETP/CPCB discharge standards.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/UK/RC/SP/3296032/effluent-treatment-machine-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/effluent-treatment-plant-etp-26170363297.html',
            },
            {
                id: 'waste-water-plant',
                name: 'Waste Water Treatment Plant',
                price: 'Get Quote',
                packaging: 'Turnkey / Custom',
                grade: 'Industrial',
                form: 'Plant / Equipment',
                description: 'Integrated wastewater treatment plant systems for municipal and industrial applications. Includes primary, secondary and tertiary treatment stages for maximum pollutant removal.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/LC/XS/CX/3296032/waste-water-treatment-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/waste-water-treatment-plant-26170366555.html',
            },
            {
                id: 'etp-plant-2',
                name: 'Effluent Treatment Plant',
                price: '₹ 5,00,000',
                packaging: 'Modular Design',
                grade: 'Industrial',
                form: 'Plant / Equipment',
                description: 'Compact and modular ETP systems for small to medium industries. Cost-effective wastewater treatment solutions ensuring safe effluent disposal within regulatory norms.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/YE/ST/LV/3296032/etp-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/effluent-treatment-plant-23775721948.html',
            },
            {
                id: 'portable-etp',
                name: 'Portable Effluent Treatment Plant',
                price: 'Get Quote',
                packaging: 'Portable Unit',
                grade: 'Industrial',
                form: 'Plant / Equipment',
                description: 'Mobile and portable ETP solution ideal for temporary sites, small industries and areas requiring flexible wastewater treatment without permanent infrastructure investment.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/DY/ME/IC/3296032/portable-effluent-treatment-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/portable-effluent-treatment-plant-26170365955.html',
            },
            {
                id: 'dry-clean-etp',
                name: 'Dry-Clean Industries ETP',
                price: 'Get Quote',
                packaging: 'Custom Unit',
                grade: 'Industrial',
                form: 'Plant / Equipment',
                description: 'Specialised effluent treatment plant designed for dry cleaning and laundry industries. Handles solvents, surfactants and chemical wastes specific to dry-cleaning operations.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/UE/XT/NK/3296032/effluent-sewage-treatment-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/dry-clean-industries-effluent-treatment-plant-26170366430.html',
            },
            {
                id: 'etp-plant-3',
                name: 'Effluent Treatment Plant',
                price: 'Get Quote',
                packaging: 'Turnkey / Custom',
                grade: 'Industrial',
                form: 'Plant / Equipment',
                description: 'Heavy-duty industrial effluent treatment plant for large-scale wastewater management. Features advanced treatment stages for effective removal of suspended solids, BOD, COD and heavy metals.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/MI/RL/US/3296032/effluent-treatment-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/effluent-treatment-plant-26170360433.html',
            },
        ],
    },
    {
        id: 'water-treatment-plants',
        label: 'Water Treatment Plants',
        color: '#1D4E89',
        products: [
            {
                id: 'ro-plant-beverages',
                name: '6000 LPH Beverages RO Plant',
                price: '₹ 7,50,000',
                packaging: 'Turnkey Plant',
                grade: 'Industrial',
                form: 'RO Plant',
                description: 'High-capacity 6000 LPH reverse osmosis plant designed for beverage manufacturing and food-grade water production. Produces consistently pure water meeting FSSAI and BIS standards.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/BC/IK/WC/3296032/industrial-r-o-plant-500x500.jpeg',
                indiamart: 'https://www.indiamart.com/proddetail/6000lph-beverages-ro-plant-23775708262.html',
            },
            {
                id: 'water-filtration-unit',
                name: 'Water Filtration Unit',
                price: 'Get Quote',
                packaging: 'Modular Unit',
                grade: 'Industrial',
                form: 'Filtration System',
                description: 'Multi-stage water filtration unit for industrial and commercial applications. Removes suspended solids, sediments, iron and organic matter from raw feed water before RO or processing.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/YG/OI/TM/3296032/water-filtration-unit-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/water-filtration-unit-26170361733.html',
            },
            {
                id: 'demineralized-plant',
                name: 'Demineralized Water Treatment Plant',
                price: 'Get Quote',
                packaging: 'Turnkey Plant',
                grade: 'Industrial',
                form: 'DM Plant',
                description: 'Ion exchange based demineralized (DM) water plant producing mineral-free water for boilers, pharmaceuticals, electronics and laboratories. Available in mixed bed and two-bed configurations.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/VW/JE/ZY/3296032/demineralized-water-treatment-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/demineralized-water-treatment-plant-26170350388.html',
            },
            {
                id: 'wastewater-treatment-plant',
                name: 'Wastewater Treatment Plants',
                price: '₹ 5,00,000',
                packaging: 'Modular / Custom',
                grade: 'Industrial',
                form: 'Plant / Equipment',
                description: 'Advanced wastewater treatment plant systems integrating physical, chemical and biological processes. Suitable for municipal, industrial and commercial wastewater management.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/QE/VX/GN/3296032/wastewater-treatment-plants-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/wastewater-treatment-plants-26170361288.html',
            },
            {
                id: 'water-softening-plant',
                name: 'Water Softening Plant',
                price: '₹ 25,000/Unit',
                packaging: 'Skid-Mounted Unit',
                grade: 'Industrial',
                form: 'Softening Plant',
                description: 'Ion exchange water softening plant for removing hardness (calcium and magnesium ions). Ideal for pre-treatment in boiler feed, cooling towers and process industries to prevent scale.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/CQ/OK/WJ/3296032/water-softening-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/water-softening-plant-23775718497.html',
            },
            {
                id: 'wastewater-recycling-plant',
                name: 'Wastewater Recycling Plant',
                price: 'Get Quote',
                packaging: 'Turnkey Plant',
                grade: 'Industrial',
                form: 'Recycling Plant',
                description: 'Integrated wastewater recycling plant for zero-liquid discharge (ZLD) and water recovery applications. Reduces freshwater consumption significantly for textile, chemical and industrial plants.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/LB/PO/OR/3296032/wastewater-recycling-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/wastewater-recycling-plant-26170354830.html',
            },
        ],
    },
    {
        id: 'sewage-treatment-plants',
        label: 'Sewage Treatment Plants',
        color: '#3D5A4C',
        products: [
            {
                id: 'grey-water-plant',
                name: 'Grey Water Treatment Plants',
                price: '₹ 2,25,000',
                packaging: 'Compact Unit',
                grade: 'Industrial',
                form: 'STP Plant',
                description: 'Compact grey water treatment plant for recycling bathroom, laundry and kitchen sink wastewater. Ideal for residential complexes, hotels and institutions aiming for water conservation.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/FJ/DC/TT/3296032/dm-water-plant-500x500.jpeg',
                indiamart: 'https://www.indiamart.com/proddetail/grey-water-treatment-plants-26170350162.html',
            },
            {
                id: 'industrial-stp-plant',
                name: 'Industrial STP Plant',
                price: '₹ 8,50,000',
                packaging: 'Turnkey Plant',
                grade: 'Industrial',
                form: 'STP Plant',
                description: 'High-capacity industrial sewage treatment plant for large commercial and manufacturing facilities. Treats domestic and industrial sewage to meet CPCB/PCB discharge standards for safe disposal or reuse.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/CO/YQ/SK/3296032/industrial-stp-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/industrial-stp-plant-24029548412.html',
            },
        ],
    },
    {
        id: 'dm-water-plants',
        label: 'DM Water Plants',
        color: '#1A3A5C',
        products: [
            {
                id: 'dm-plant-500lph',
                name: '500 LPH Automatic DM Water Plant',
                price: '₹ 2,40,000',
                packaging: 'Skid-Mounted',
                grade: 'Industrial',
                form: 'DM Plant',
                description: 'Fully automatic 500 LPH capacity demineralized water plant for boilerhouses, pharmaceuticals and process industries. Features conductivity monitoring and auto-regeneration controls.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/JU/VX/IK/3296032/automatic-dm-water-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/500lph-automatic-dm-water-plant-23775711212.html',
            },
            {
                id: 'dm-ro-plant',
                name: 'DM RO Plant',
                price: '₹ 2,50,000',
                packaging: 'Combination Unit',
                grade: 'Industrial',
                form: 'DM + RO Plant',
                description: 'Combined DM and RO plant system for producing ultra-pure water. Sequential ion exchange demineralisation followed by reverse osmosis polishing delivers consistently high-purity output for critical applications.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/CK/QY/AN/3296032/dm-ro-plant-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/dm-ro-plant-24057107597.html',
            },
        ],
    },
    {
        id: 'sugar-processing',
        label: 'Sugar Processing Chemicals',
        color: '#5C4A1A',
        products: [
            {
                id: 'sugar-antiscalant',
                name: 'Antiscalant Sugar Processing Chemical',
                price: '₹ 250/Kg',
                packaging: 'Can / Drum',
                grade: 'Food Grade / Technical',
                form: 'Liquid',
                description: 'Specialty antiscalant formulated for sugarcane juice evaporators and sugar processing equipment. Prevents carbonate and sulphate scale formation in multiple-effect evaporators and vacuum pans, maximising output.',
                image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/CC/JG/FE/3296032/antiscalant-sugar-processing-chemical-500x500.jpg',
                indiamart: 'https://www.indiamart.com/proddetail/antiscalant-sugar-processing-chemical-23775974597.html',
            },
        ],
    },
]

export default function Products() {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const lenisRef = useLenis()

    // Stop Lenis smooth scroll while modal is open so it can't scroll away
    useEffect(() => {
        const lenis = lenisRef.current
        if (!lenis) return
        if (selectedProduct) {
            lenis.stop()
            document.body.style.overflow = 'hidden'
        } else {
            lenis.start()
            document.body.style.overflow = ''
        }
        return () => {
            lenis.start()
            document.body.style.overflow = ''
        }
    }, [selectedProduct, lenisRef])

    const currentCategory = CATEGORIES.find(c => c.id === activeCategory)!

    return (
        <section id="products" aria-label="IndoChem Products Catalogue" className="py-20 lg:py-28 bg-[#F8F5F0]">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                {/* Header */}
                <div className="mb-10">
                    <span className="inline-block text-xs font-bold tracking-widest text-[#F59E0B] uppercase mb-3">Our Products</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B1B] tracking-tight">Complete Product Catalogue</h2>
                    <p className="mt-3 text-[#4B6B6B] max-w-2xl text-base leading-relaxed">
                        Precision-grade water treatment chemicals for every application — from RO plants to cooling towers, boilers to ETPs.
                    </p>
                </div>

                {/* Category Tabs — horizontally scrollable on mobile */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCategory(cat.id); setSelectedProduct(null) }}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeCategory === cat.id
                                ? 'bg-[#0F4C4C] text-white border-[#0F4C4C] shadow-md'
                                : 'bg-white text-[#0D1B1B]/70 border-[#0D1B1B]/15 hover:border-[#0F4C4C]/40 hover:text-[#0F4C4C]'
                                }`}
                        >
                            {cat.label}
                            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-[#0F4C4C]/10 text-[#0F4C4C]'}`}>
                                {cat.products.length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {currentCategory.products.map(product => (
                            <motion.div
                                key={product.id}
                                layout
                                className="group bg-white rounded-2xl border border-[#0D1B1B]/8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                                onClick={() => setSelectedProduct(product)}
                            >
                                {/* Image */}
                                <div className="h-44 bg-gradient-to-br from-[#E8F4F4] to-[#D0E8E8] flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="font-semibold text-[#0D1B1B] text-sm leading-snug flex-1">{product.name}</h3>
                                        <span className="text-[#F59E0B] font-bold text-xs whitespace-nowrap">{product.price}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        <span className="text-xs bg-[#0F4C4C]/8 text-[#0F4C4C] px-2 py-0.5 rounded-full">{product.form}</span>
                                        <span className="text-xs bg-[#F59E0B]/10 text-[#92680A] px-2 py-0.5 rounded-full">{product.grade}</span>
                                        <span className="text-xs bg-[#0D1B1B]/6 text-[#4B6B6B] px-2 py-0.5 rounded-full">{product.packaging}</span>
                                    </div>

                                    <p className="text-xs text-[#4B6B6B] leading-relaxed line-clamp-2">{product.description}</p>

                                    <div className="mt-4 flex gap-2">
                                        <a
                                            href={WA(product.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold py-2 rounded-lg transition-colors"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Enquire
                                        </a>
                                        <button
                                            onClick={e => { e.stopPropagation(); setSelectedProduct(product) }}
                                            className="px-3 py-2 border border-[#0F4C4C]/20 text-[#0F4C4C] text-xs font-semibold rounded-lg hover:bg-[#0F4C4C]/5 transition-colors"
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Product Detail Modal — portal to body so fixed positioning is viewport-relative */}
            {createPortal(
                <AnimatePresence>
                    {selectedProduct && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                            onClick={() => setSelectedProduct(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white rounded-3xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                                onClick={e => e.stopPropagation()}
                            >
                                {/* Image */}
                                <div className="h-52 bg-gradient-to-br from-[#E8F4F4] to-[#D0E8E8] overflow-hidden">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <h3 className="font-bold text-[#0D1B1B] text-lg leading-snug">{selectedProduct.name}</h3>
                                        <button onClick={() => setSelectedProduct(null)} className="text-[#4B6B6B] hover:text-[#0D1B1B] transition-colors flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#0D1B1B]/5">✕</button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {[
                                            { label: 'Price', value: selectedProduct.price },
                                            { label: 'Packaging', value: selectedProduct.packaging },
                                            { label: 'Grade', value: selectedProduct.grade },
                                            { label: 'Form', value: selectedProduct.form },
                                        ].map(item => (
                                            <div key={item.label} className="bg-[#F8F5F0] rounded-xl p-3">
                                                <p className="text-xs text-[#4B6B6B] mb-0.5">{item.label}</p>
                                                <p className="text-sm font-semibold text-[#0D1B1B]">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-sm text-[#4B6B6B] leading-relaxed mb-5">{selectedProduct.description}</p>

                                    <div className="flex gap-3">
                                        <a
                                            href={WA(selectedProduct.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Get Quote on WhatsApp
                                        </a>
                                        <a
                                            href={selectedProduct.indiamart}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-3 border border-[#0D1B1B]/15 text-[#0D1B1B]/70 text-sm font-semibold rounded-xl hover:bg-[#0D1B1B]/5 transition-colors"
                                        >
                                            IndiaMART
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    )
}
