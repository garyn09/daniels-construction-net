/* ==========================================================================
   DANIEL'S CONSTRUCTION (DANIELS CONSTRUCTION OF CP, LLC)
   11751 LA-365, Church Point, LA 70525 | (337) 684-5394
   Interactive Application Logic (app.js)
   ========================================================================== */

const FLEET_PHOTOS = [
  {
    src: './images/hq-main-building-flag.jpg',
    badge: 'HEADQUARTERS & PLANT // 11751 LA-365, CHURCH POINT, LA',
    title: "Daniel's Construction Headquarters & Manufacturing Shop (11751 LA-365)",
    subtitle: 'Banner: "Install Residential Treatment Systems, Maintenance Pump Out & Inspections • 337-684-5394"',
    specs: ['11751 LA-365', '3-Ton Bridge Crane Shop', 'In-House Tank Plant', '337-684-5394']
  },
  {
    src: './images/aerial-facility-overview.jpg',
    badge: 'DJI DRONE AERIAL // WINGATE DUMPSITE (30.355829, -92.127946)',
    title: 'Wingate Treatment Site & Septage Dumpsite — Duck Rd, Sunset, LA 70584',
    subtitle: 'GPS: 30.355829° N, -92.127946° W (30°21\'20.98"N 92°07\'40.61"W) • Vacuum bays, Klampress dewatering plant, drying beds & LDEQ lagoons',
    specs: ['GPS: 30.355829, -92.127946', 'Duck Rd, Sunset LA', 'LDEQ AI #165383', 'Permit #LA0124893']
  },
  {
    src: './images/peterbilt-and-mack-front.jpg',
    badge: 'HEAVY FLEET LINEUP // PETERBILT VACUUM + MACK TANDEM DUMP',
    title: 'Peterbilt Stainless Vacuum Tanker & Mack Tandem Dump Truck',
    subtitle: 'Septic & ATU vacuum pumping (337-684-5394) paired with heavy dump truck hauling & dirt work (337-230-7976)',
    specs: ['Peterbilt Vacuum Fleet', 'Mack Tandem Dump', 'Stainless Tankers', 'Full Dispatch']
  },
  {
    src: './images/custom-steel-treatment-plant.jpg',
    badge: 'IN-HOUSE FABRICATION // WELDED STEEL PACKAGE TREATMENT PLANTS',
    title: 'Custom Fabricated Steel Commercial Wastewater Treatment Plant',
    subtitle: 'Built in-house under our 3-Ton Anchor overhead bridge crane with hopper-bottom clarifier and safety access ladders',
    specs: ['Custom Steel Plant', 'Hopper Clarifier', 'Commercial & Multi-Family', 'Built in Church Point']
  },
  {
    src: './images/precast-concrete-tanks-shop.jpg',
    badge: 'ON-SITE PRECAST PLANT // HEAVY CONCRETE SEPTIC & ATU TANKS',
    title: 'Multi-Stacked Precast Concrete Septic & Treatment Tanks',
    subtitle: 'Cast and cured in-house using steel forms and high-strength concrete engineered to never float in South Louisiana water tables',
    specs: ['Precast Concrete', 'Anti-Flotation Mass', 'Steel Form Cast', 'LDH Lic #30733 / #183']
  },
  {
    src: './images/klampress-dewatering-plant.jpg',
    badge: 'WINGATE TREATMENT SITE // ASHBROOK KLAMPRESS DEWATERING PLANT',
    title: 'Industrial Ashbrook Simon-Hartley Klampress Belt Filter Press',
    subtitle: 'Municipal-grade mechanical dewatering facility processing domestic septage with conveyor discharge and polymer automation',
    specs: ['Ashbrook Klampress', 'Belt Filter Press', 'Septage Dewatering', 'M–F 7AM–5PM']
  },
  {
    src: './images/aerial-treatment-lagoons.jpg',
    badge: 'DUMPSITE LAGOONS // GPS 30.355829° N, -92.127946° W',
    title: 'Wingate Treatment Site Lagoons & Dewatering Plant (Duck Rd, Sunset, LA)',
    subtitle: 'LDEQ-permitted domestic septage dumpsite and surface water compliance facility (AI #165383 / Permit #LA0124893)',
    specs: ['30.355829, -92.127946', 'Duck Rd, Sunset LA 70584', 'LDEQ #LA0124893', 'M–F 7AM–5PM']
  },
  {
    src: './images/concrete-batch-tower.jpg',
    badge: 'CONCRETE BATCHING // OVERHEAD HOPPER TOWER & AGGREGATE BAYS',
    title: 'On-Site Concrete Batching Hopper Tower & Sand/Aggregate Bunkers',
    subtitle: 'Allows Daniel\'s Construction to control concrete mix quality for precast septic tanks, lids, and distribution boxes',
    specs: ['Batching Tower', 'Aggregate Bunkers', 'Steel Tank Molds', 'Quality Controlled']
  },
  {
    src: './images/rotary-receiving-screen.jpg',
    badge: 'SEPTAGE RECEIVING // STAINLESS ROTARY DRUM SCREEN',
    title: 'Stainless-Steel Rotary Receiving Drum & Control Station',
    subtitle: 'Screens and conditions incoming domestic septage from our vacuum tanker fleet prior to belt press dewatering',
    specs: ['Stainless Rotary Drum', 'NEMA Control Panels', 'Automated Processing', 'Wingate Site']
  },
  {
    src: './images/fleet-peterbilt-tanker.jpg',
    badge: 'UNIT 01 // PETERBILT TANDEM STAINLESS VACUUM TANKER',
    title: "Peterbilt Tandem-Axle Stainless Vacuum Tanker (337-684-5394)",
    subtitle: 'High-vacuum stainless tanker for residential septic tanks, aerobic trash chambers, and commercial grease traps',
    specs: ['Peterbilt Chassis', 'Polished Stainless Tank', '337-684-5394', 'Church Point, LA']
  },
  {
    src: './images/jlg-telehandler-yard.jpg',
    badge: 'HEAVY LIFTING & SITE FLEET // JLG TELEHANDLER & CRANE TRUCKS',
    title: 'JLG Telehandler, Boom Crane Truck & Earthmoving Yard',
    subtitle: 'Heavy material handling equipment for loading precast concrete tanks, steel treatment plants, and job-site delivery',
    specs: ['JLG Telehandler', 'Boom Crane Truck', 'CAT Excavator', 'Lowboy Hauler']
  },
  {
    src: './images/wingate-treatment-sign.jpg',
    badge: 'OFFICIAL FACILITY SIGN // WINGATE TREATMENT SITE',
    title: 'Wingate Treatment Site — Domestic Septage Processing Facility',
    subtitle: 'For Information Contact Daniel Wingate • (337) 684-5394 • Hours of Operation: Mon–Fri 7:00 A.M. to 5:00 P.M.',
    specs: ['Daniel Wingate', '(337) 684-5394', 'M–F 7:00 AM – 5:00 PM', 'Domestic Septage']
  },
  {
    src: './images/shop-precast-and-steel-lineup.jpg',
    badge: '11751 LA-365 SHOP BAY // PRECAST CONCRETE + STEEL PACKAGE PLANT',
    title: 'Inside the 11751 LA-365 Fabrication Bay — Precast Concrete & Steel Plants',
    subtitle: 'Foreground: Freshly cast precast concrete tank section with overhead crane spreader bar • Background: Stacked concrete tanks & custom welded steel plant',
    specs: ['3-Ton Bridge Crane', 'Precast Concrete Basin', 'Stacked Concrete Tanks', 'Welded Steel Plant']
  }
];

const ANATOMY_COMPONENTS = {
  trash: {
    step: 'STAGE 01 // PRIMARY PRE-TREATMENT CHAMBER',
    title: 'Primary Settling / Trash Tank Chamber',
    desc: 'Raw household or commercial wastewater enters the primary precast concrete chamber first. Heavy solids, grit, and non-biodegradable materials settle here as anaerobic sludge, preventing solids from clogging the aeration zone.',
    code: 'LAC Title 51: Minimum 500–1,000+ Gal Pre-Treatment',
    interval: 'Pump Out Every 3–5 Years (Vacuum Truck 337-684-5394)',
    service: 'Full vacuum pumping, baffle inspection & crust removal by our Peterbilt stainless vacuum fleet, with legal processing at our Wingate Treatment Site.'
  },
  aeration: {
    step: 'STAGE 02 // BIOLOGICAL DIGESTION CORE',
    title: 'Aerobic Treatment Chamber (Delta / AeroGreen)',
    desc: 'Oxygen is continuously injected through fine-bubble diffusers at the base of the chamber. Aerobic bacteria thrive in this oxygen-rich environment, rapidly digesting dissolved organic waste into odorless water and carbon dioxide.',
    code: 'NSF/ANSI Standard 40 Class I Certified Treatment',
    interval: 'Inspect Diffusers & Biomass Annually',
    service: 'Certified installation & service of Delta Whitewater, Delta Enviro-AIRE, AeroGreen, and custom steel/precast treatment plants (LDH #30733 / #183).'
  },
  clarifier: {
    step: 'STAGE 03 // QUIESCENT SEPARATION CONE',
    title: 'Conical Clarifier / Settling Chamber',
    desc: 'Calm, non-turbulent hopper where remaining microscopic floc settles back into the aeration zone for further digestion, allowing only crystal-clear, odor-free secondary effluent to rise to the discharge weir.',
    code: 'TSS & BOD5 Reduction > 90%',
    interval: 'Sludge Return & Skimmer Check During Routine Service',
    service: 'Clarifier cone leveling, hydraulic flow balancing, and sludge-return verification.'
  },
  compressor: {
    step: 'STAGE 04 // LINEAR AIR SUPPLY & TELEMETRY',
    title: 'Linear Air Compressor & High-Water / Pressure Alarm',
    desc: 'Mounted in a weatherproof pedestal near the home, the linear diaphragm compressor supplies continuous air to the tank while the NEMA-rated control panel monitors both air pressure and high-water float switches.',
    code: 'Audible & Visual High-Water / Air Loss Alarm Required',
    interval: 'Clean Air Filter Every 6 Months; Rebuild Diaphragm 2–4 Yrs',
    service: 'Same-day troubleshooting of red alarm lights, compressor replacements, pressure switches, and float repairs.'
  },
  disinfection: {
    step: 'STAGE 05 // EFFLUENT SANITIZATION',
    title: 'Chlorination / Disinfection Contact Tube & Pump Tank',
    desc: 'Before leaving the system, clarified effluent passes through an approved calcium hypochlorite (wastewater tablet) feeder or UV disinfection unit and collects in the dosing chamber.',
    code: 'LAC Title 51 Part XIII Effluent Disinfection Standard',
    interval: 'Replenish Rated Septic Chlorine Tablets Quarterly',
    service: 'Chlorinator tube replacements, effluent pump installations, and float switch calibration.'
  },
  disposal: {
    step: 'STAGE 06 // ACADIANA CLAY EFFLUENT REDUCTION',
    title: 'Subsurface Absorption Field / Effluent Reduction System',
    desc: 'Because Church Point and Acadiana feature heavy Prairie Terrace clay soils, Louisiana code prohibits raw surface discharge. Treated effluent is dispersed through approved absorption trenches, gravelless chambers, or permitted reduction beds.',
    code: 'Zero Raw Surface Discharge (LAC 51:XIII.701) / LPDES Compliant',
    interval: 'Keep Heavy Vehicles Off Field Lines; Maintain Surface Drainage',
    service: 'Laser-leveled field line trenching, gravelless chambers, and LDEQ-compliant effluent disposal systems.'
  }
};

const PARISH_SANITARIAN_DATA = {
  acadia: {
    name: 'Acadia Parish Health Unit (Crowley)',
    region: 'LDH Office of Public Health — Region 4',
    address: '1029 Capitol Avenue, Crowley, LA 70526',
    phone: '(337) 788-4999',
    altPhone: '(337) 788-7507',
    hours: 'Mon–Fri: 8:00 AM – 4:30 PM (Sanitarian Window: 8:00–9:30 AM & 3:00–4:30 PM)',
    towns: 'Church Point, Branch, Rayne, Crowley, Iota, Mire, Estherwood, Morse, Mermentau',
    notes: 'Requires Form LHS-47 Application for Permit for Installation of On-Site Wastewater Disposal System prior to SLEMCO/Entergy utility hookup. Final inspection must occur before backfilling trenches.'
  },
  stlandry: {
    name: 'St. Landry Parish Health Unit (Opelousas)',
    region: 'LDH Office of Public Health — Region 4',
    address: '308 West Bloch Street, Opelousas, LA 70570',
    phone: '(337) 948-0220',
    altPhone: '(337) 948-0266',
    hours: 'Mon–Fri: 8:00 AM – 4:30 PM',
    towns: 'Sunset, Grand Coteau, Lawtell, Eunice, Opelousas, Cankton, Port Barre, Washington, Arnaudville',
    notes: 'Unincorporated St. Landry Parish parcels require Sanitarian LHS-47 approval before the St. Landry Parish Permits Office (118 S. Court St., Suite 133, Opelousas • 337-948-3688) issues final building or mobile home permits.'
  },
  lafayette: {
    name: 'Lafayette Parish Health Unit (Lafayette)',
    region: 'LDH Office of Public Health — Region 4',
    address: '220 West Willow Street, Building A, Lafayette, LA 70501',
    phone: '(337) 262-5616',
    altPhone: 'Fax: (337) 262-1320',
    hours: 'Mon–Fri: 8:00 AM – 4:30 PM',
    towns: 'Carencro, Scott, Duson, Youngsville, Broussard, Milton, Ridge, Lafayette',
    notes: 'Strict enforcement of LAC Title 51 Part XIII effluent reduction requirements on small residential lots (< 1 acre). State-licensed Combination Installer (#183) required for aerobic and effluent reduction systems.'
  },
  evangeline: {
    name: 'Evangeline Parish Health Unit (Ville Platte)',
    region: 'LDH Office of Public Health — Region 4',
    address: '1010 W. LaSalle Street, Ville Platte, LA 70586',
    phone: '(337) 363-1135',
    altPhone: 'LDH Region 4 Sanitarian Services',
    hours: 'Mon–Fri: 8:00 AM – 4:30 PM',
    towns: 'Ville Platte, Basile, Mamou, Chataignier, Pine Prairie, Turkey Creek',
    notes: 'Covers rural acreage, camp properties, and residential installations across Evangeline Parish. Temporary sewer permit issued upon site evaluation.'
  },
  vermilion: {
    name: 'Vermilion Parish Health Unit (Abbeville)',
    region: 'LDH Office of Public Health — Region 4',
    address: '2501 Charity Street, Abbeville, LA 70510',
    phone: '(337) 893-1443',
    altPhone: 'LDH Region 4 Sanitarian Services',
    hours: 'Mon–Fri: 8:00 AM – 4:30 PM',
    towns: 'Abbeville, Kaplan, Maurice, Erath, Gueydan, Delcambre',
    notes: 'High water table and coastal prairie clay conditions frequently require NSF-40 Aerobic Treatment Units (Delta / AeroGreen) with pumped dosing or elevated effluent beds.'
  },
  jeffdavis: {
    name: 'Jefferson Davis Parish Health Unit (Jennings)',
    region: 'LDH Office of Public Health — Region 5',
    address: '403 Baker Street, Jennings, LA 70546',
    phone: '(337) 824-2193',
    altPhone: 'LDH Region 5 Sanitarian Services',
    hours: 'Mon–Fri: 8:00 AM – 4:30 PM',
    towns: 'Jennings, Welsh, Lake Arthur, Elton, Fenton, Roanoke',
    notes: 'Full LHS-47 permitting support for new residential homes, mobile home pads, and agricultural/commercial wastewater facilities.'
  }
};

const DIAGNOSTIC_DATA = {
  redlight: {
    title: 'Red Alarm Light & Buzzer Sounding on ATU Control Box',
    urgency: 'HIGH PRIORITY // HIGH-WATER OR AIR LOSS',
    badgeClass: 'urgency-high',
    summary: 'An audible buzzer and red light on your Delta, AeroGreen, or aerobic control panel indicates either a High-Water condition in the tank or Low Air Pressure from the linear compressor.',
    steps: [
      'Flip the "MUTE / SILENCE" toggle switch on the side or face of the control box to stop the buzzer while keeping the visual red light active.',
      'Listen near the aerator box: do you hear the steady hum of the air compressor? If silent, check your home breaker panel for a tripped breaker.',
      'If the compressor is running, check whether heavy South Louisiana rain has saturated the drainfield/discharge area or if the effluent pump float is stuck.',
      'Reduce household water usage (pause laundry and dishwasher loads) and call Daniel\'s Construction at (337) 684-5394 for aerator, float, or pump service.'
    ],
    recommendation: 'Dispatch Vacuum / ATU Service Tech — (337) 684-5394'
  },
  backup: {
    title: 'Slow Drains, Gurgling Toilets, or Sewage Backing Up',
    urgency: 'URGENT // TANK FULL OR LINE OBSTRUCTION',
    badgeClass: 'urgency-high',
    summary: 'Gurgling pipes or slow drains across multiple lowest-level fixtures almost always mean the primary septic/trash chamber has reached capacity or the inlet/outlet sanitary tee baffle is plugged.',
    steps: [
      'Immediately stop running high-volume water appliances (washing machines, bathtubs) to prevent indoor overflow.',
      'Locate your tank cleanout plug or concrete tank lids if known (do not enter or lean into an open septic tank).',
      'If your tank has not been pumped in 3–5+ years, solids have likely accumulated to the outlet baffle height.',
      'Call Daniel\'s Construction at (337) 684-5394 — our Peterbilt stainless vacuum tanker will pump out the primary and clarifier chambers and process the septage at our LDEQ-permitted Wingate Treatment Site.'
    ],
    recommendation: 'Schedule Vacuum Tanker Pump-Out — (337) 684-5394'
  },
  aerator: {
    title: 'Aerator Compressor Not Running or Making Loud Rattling Noise',
    urgency: 'MODERATE // MECHANICAL WEAR (DIAPHRAGM)',
    badgeClass: 'urgency-med',
    summary: 'Linear diaphragm compressors (Secoh, Hiblow, Gast, Medo) run 24/7/365. Every 2 to 4 years, the rubber diaphragms fatigue or tear, triggering the low-pressure alarm or internal safety switch.',
    steps: [
      'Never use household extension cords to power an aerator; ensure it is plugged into its dedicated weatherproof receptacle.',
      'If the compressor makes a loud metallic clatter, unplug or switch off the aerator breaker immediately so the magnet shaft does not score the housing.',
      'Without aeration, your tank turns anaerobic within 24–48 hours and will begin producing odors.',
      'Contact Daniel\'s Construction at (337) 684-5394 for an OEM diaphragm rebuild kit or a new factory-warranted linear compressor.'
    ],
    recommendation: 'Request Aerator Replacement / Rebuild — (337) 684-5394'
  },
  odor: {
    title: 'Septic Odor Outside Near Tank, Vent, or Discharge Area',
    urgency: 'MODERATE // BIOMASS IMBALANCE OR PUMP NEEDED',
    badgeClass: 'urgency-med',
    summary: 'A properly functioning Delta or AeroGreen aerobic plant should produce virtually zero odor (only a mild earthy smell). Strong sulfur/rotten-egg odors point to anaerobic conditions or sludge carryover.',
    steps: [
      'Check if excessive bleach, antibacterial soaps, drain cleaners, or paint thinners were recently poured down household drains (these kill aerobic bacteria).',
      'Verify that the air diffuser bubbles are actively churning in the aeration chamber and not leaking air at the riser connection.',
      'Check the chlorinator tube to ensure only approved wastewater-rated calcium hypochlorite tablets are used (never use swimming pool trichlor tablets, which can release explosive gases).',
      'Schedule a tank pump-out and diffuser check with Daniel\'s Construction at (337) 684-5394.'
    ],
    recommendation: 'Book System Cleanout & Tune-Up — (337) 684-5394'
  },
  permit: {
    title: 'Building a New Home, Placing a Mobile Home, or Buying Property',
    urgency: 'PLANNING // LAC TITLE 51 LHS-47 PERMIT',
    badgeClass: 'urgency-routine',
    summary: 'In Louisiana, utility companies (SLEMCO, Entergy, Cleco) and parish permit offices require a Parish Sanitarian Form LHS-47 sewage approval before permanent electrical power can be connected.',
    steps: [
      'Determine your parish (Acadia, St. Landry, Lafayette, Evangeline, Vermilion, or Jeff Davis) and lot dimensions.',
      'Contact Daniel\'s Construction early in your site planning — we manufacture our own precast concrete & steel treatment tanks and haul our own dirt pads.',
      'We install your state-approved system under LDH Basic License #30733 & Combination License #183.',
      'We coordinate the open-trench Sanitarian inspection so you receive your Final LHS-47 Permit without construction delays.'
    ],
    recommendation: 'Start New Install & LHS-47 Quote — (337) 684-5394'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroPhotoSwitcher();
  initFleetGalleryFilter();
  initLightbox();
  initServicesFilter();
  initAnatomyDiagram();
  initEstimatorCalculator();
  initDiagnosticTool();
  initParishTabs();
  initFacilityMapSwitcher();
  initFaqAccordion();
  initDispatchForm();
});

/* 1. Mobile Navigation */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* 2. Hero Fleet Photo Switcher */
function initHeroPhotoSwitcher() {
  const heroImg = document.getElementById('heroMainImg');
  const heroFrame = document.getElementById('heroPhotoFrame');
  const heroBadge = document.getElementById('heroPhotoBadge');
  const heroTitle = document.getElementById('heroDecalTitle');
  const heroSub = document.getElementById('heroDecalSub');
  const thumbBtns = document.querySelectorAll('.hero-thumb-btn');

  if (!heroImg || !thumbBtns.length) return;

  thumbBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index || 0);
      const item = FLEET_PHOTOS[idx];
      if (!item) return;

      heroImg.src = item.src;
      heroImg.alt = item.title;
      if (heroFrame) heroFrame.setAttribute('data-lightbox-index', String(idx));
      if (heroBadge) heroBadge.textContent = item.badge;
      if (heroTitle) heroTitle.textContent = item.title;
      if (heroSub) heroSub.textContent = item.subtitle;

      thumbBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* 2b. Facility & Fleet Gallery Category Filter */
function initFleetGalleryFilter() {
  const buttons = document.querySelectorAll('.fleet-filter-btn');
  const cards = document.querySelectorAll('.fleet-card');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.fleetFilter;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach((card) => {
        const cats = (card.dataset.fleetCategory || '').split(' ');
        if (cat === 'all' || cats.includes(cat)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 3. Lightbox Modal for Real Fleet Photos */
let currentLightboxIndex = 0;

function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalSub = document.getElementById('lightboxSub');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!modal) return;

  function showSlide(index) {
    currentLightboxIndex = (index + FLEET_PHOTOS.length) % FLEET_PHOTOS.length;
    const item = FLEET_PHOTOS[currentLightboxIndex];
    modalImg.src = item.src;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalSub.textContent = item.subtitle;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('[data-lightbox-index]').forEach((el) => {
    el.addEventListener('click', () => {
      const idx = Number(el.getAttribute('data-lightbox-index') || 0);
      showSlide(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentLightboxIndex + 1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showSlide(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') showSlide(currentLightboxIndex + 1);
  });
}

/* 4. Services Category Filter */
function initServicesFilter() {
  const buttons = document.querySelectorAll('.service-filter-btn');
  const cards = document.querySelectorAll('.service-card');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach((card) => {
        const cardCats = (card.dataset.category || '').split(' ');
        if (cat === 'all' || cardCats.includes(cat)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 5. Interactive Septic & ATU System Anatomy Diagram */
function initAnatomyDiagram() {
  const nodes = document.querySelectorAll('[data-anatomy-key]');
  const stepEl = document.getElementById('inspectorStep');
  const titleEl = document.getElementById('inspectorTitle');
  const descEl = document.getElementById('inspectorDesc');
  const codeEl = document.getElementById('inspectorCode');
  const intervalEl = document.getElementById('inspectorInterval');
  const serviceEl = document.getElementById('inspectorService');

  if (!nodes.length) return;

  function selectComponent(key) {
    const info = ANATOMY_COMPONENTS[key];
    if (!info) return;

    if (stepEl) stepEl.textContent = info.step;
    if (titleEl) titleEl.textContent = info.title;
    if (descEl) descEl.textContent = info.desc;
    if (codeEl) codeEl.textContent = info.code;
    if (intervalEl) intervalEl.textContent = info.interval;
    if (serviceEl) serviceEl.textContent = info.service;

    nodes.forEach((el) => {
      if (el.getAttribute('data-anatomy-key') === key) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      selectComponent(node.getAttribute('data-anatomy-key'));
    });
  });
}

/* 6. Interactive LAC Title 51 System Sizing, Pumping & Permit Calculator */
function initEstimatorCalculator() {
  const serviceTypeEl = document.getElementById('estServiceType');
  const bedroomsEl = document.getElementById('estBedrooms');
  const parishEl = document.getElementById('estParish');
  const soilEl = document.getElementById('estSoil');
  const addonChecks = document.querySelectorAll('.est-addon-check');

  const outSystemName = document.getElementById('estOutSystemName');
  const outPriceBand = document.getElementById('estOutPriceBand');
  const outCapacity = document.getElementById('estOutCapacity');
  const outCodeRule = document.getElementById('estOutCodeRule');
  const outLicense = document.getElementById('estOutLicense');
  const outAddons = document.getElementById('estOutAddons');
  const outSanitarianName = document.getElementById('estOutSanitarianName');
  const outSanitarianMeta = document.getElementById('estOutSanitarianMeta');
  const applyToQuoteBtn = document.getElementById('applyEstimatorToQuoteBtn');

  if (!serviceTypeEl) return;

  function calculateEstimate() {
    const service = serviceTypeEl.value;
    const bedrooms = Number(bedroomsEl.value || 3);
    const parishKey = parishEl.value || 'acadia';
    const soil = soilEl.value || 'clay';

    let systemTitle = '';
    let minPrice = 0;
    let maxPrice = 0;
    let capacitySpec = '';
    let codeRule = '';
    let licenseUsed = 'LDH Basic #30733 / Combination #183';

    if (service === 'pumping') {
      systemTitle = 'Stainless Vacuum Tanker Septic / ATU Pump-Out & Dewatering';
      if (bedrooms <= 3) {
        minPrice = 325;
        maxPrice = 475;
        capacitySpec = 'Up to 1,000–1,250 Gal Primary & Clarifier Pump-Out';
      } else if (bedrooms === 4) {
        minPrice = 425;
        maxPrice = 575;
        capacitySpec = '1,250–1,500 Gal Multi-Chamber Complete Cleanout';
      } else {
        minPrice = 550;
        maxPrice = 850;
        capacitySpec = '1,500–2,500+ Gal Large Residential / Commercial Tank';
      }
      codeRule = 'Processed at Wingate Treatment Site (LDEQ AI #165383 / LA0124893)';
      licenseUsed = 'Peterbilt Vacuum Fleet (337-684-5394) • Klampress Dewatering';
    } else if (service === 'atu_install') {
      if (bedrooms <= 3) {
        systemTitle = '500 GPD NSF-40 Aerobic Treatment Unit (Precast / Delta / AeroGreen)';
        minPrice = 5200;
        maxPrice = 6800;
        capacitySpec = '500 Gallons/Day (GPD) • Primary Trash Chamber + Aeration + Clarifier';
      } else if (bedrooms === 4) {
        systemTitle = '600–750 GPD High-Capacity ATU System (In-House Precast / Delta)';
        minPrice = 6200;
        maxPrice = 7900;
        capacitySpec = '600–750 GPD Rated • Heavy Precast Tank + High-Output Linear Aerator';
      } else {
        systemTitle = '1,000+ GPD Custom Steel or Multi-Chamber Commercial Package Plant';
        minPrice = 7800;
        maxPrice = 11500;
        capacitySpec = '1,000+ GPD • Custom Fabricated Steel or Precast Plant + Dosing Chamber';
      }
      if (soil === 'small_lot') {
        minPrice += 650;
        maxPrice += 1100;
        codeRule = 'LAC Title 51 Part XIII Mechanical Plant + Pumped Effluent Reduction';
      } else {
        codeRule = 'LAC Title 51 Part XIII Individual Mechanical Plant (Form LHS-47)';
      }
      licenseUsed = 'LDH Basic #30733 & Combination #183 (In-House Tank Plant)';
    } else if (service === 'conventional') {
      if (bedrooms <= 3) {
        systemTitle = '1,000-Gal In-House Precast Concrete Septic Tank + Field Lines';
        minPrice = 4400;
        maxPrice = 5900;
        capacitySpec = '1,000 Gal Precast Concrete Tank + 200–250 LF Subsurface Field';
      } else if (bedrooms === 4) {
        systemTitle = '1,250-Gal In-House Precast Concrete Septic Tank + Expanded Field';
        minPrice = 5100;
        maxPrice = 6700;
        capacitySpec = '1,250 Gal Precast Concrete Tank + 275–325 LF Subsurface Field';
      } else {
        systemTitle = '1,500+ Gal Precast Concrete Septic System + Multi-Trench Drainfield';
        minPrice = 6100;
        maxPrice = 8200;
        capacitySpec = '1,500+ Gal Precast Tank + Engineered Subsurface Absorption Trenching';
      }
      if (soil === 'clay') {
        codeRule = 'Acadiana Prairie Clay Note: Sanitarian may require ATU or Effluent Reduction';
      } else {
        codeRule = 'LAC Title 51 Part XIII Subsurface Absorption System (Form LHS-47)';
      }
      licenseUsed = 'LDH Basic #30733 • Cast On-Site at 11751 LA-365';
    } else if (service === 'repair') {
      systemTitle = 'Aerator Compressor, Control Panel, Pump or Inspection Service';
      minPrice = 245;
      maxPrice = 890;
      capacitySpec = 'Linear Air Compressor, Diaphragm Rebuild, Float Switch or Effluent Pump';
      codeRule = 'OEM NSF-40 Compliant Replacement Components & Inspections';
      licenseUsed = 'LDH Combination Installer & Maintenance Provider #183';
    } else if (service === 'dirtwork') {
      systemTitle = 'Mack Tandem Dump Truck Hauling, House Pad & Culvert Package';
      minPrice = 1400;
      maxPrice = 4800;
      capacitySpec = 'Laser-Graded Select Fill Pad, Limestone Driveway & Culvert Set';
      codeRule = 'Parish Drainage & Culvert Elevation Compliance';
      licenseUsed = "Daniel's Construction Dump Fleet (337-230-7976 / 337-684-5394)";
    }

    const selectedAddons = [];
    addonChecks.forEach((chk) => {
      if (chk.checked) {
        selectedAddons.push(chk.dataset.label);
        minPrice += Number(chk.dataset.min || 0);
        maxPrice += Number(chk.dataset.max || 0);
      }
    });

    const parishInfo = PARISH_SANITARIAN_DATA[parishKey] || PARISH_SANITARIAN_DATA.acadia;

    if (outSystemName) outSystemName.textContent = systemTitle;
    if (outPriceBand) {
      outPriceBand.textContent = `$${minPrice.toLocaleString()} – $${maxPrice.toLocaleString()} Est.`;
    }
    if (outCapacity) outCapacity.textContent = capacitySpec;
    if (outCodeRule) outCodeRule.textContent = codeRule;
    if (outLicense) outLicense.textContent = licenseUsed;
    if (outAddons) {
      outAddons.textContent = selectedAddons.length
        ? selectedAddons.join(' + ')
        : 'None selected (Base scope only)';
    }
    if (outSanitarianName) outSanitarianName.textContent = parishInfo.name;
    if (outSanitarianMeta) {
      outSanitarianMeta.textContent = `${parishInfo.address} • Sanitarian Phone: ${parishInfo.phone}`;
    }
  }

  [serviceTypeEl, bedroomsEl, parishEl, soilEl].forEach((el) => {
    if (el) el.addEventListener('change', calculateEstimate);
  });
  addonChecks.forEach((chk) => chk.addEventListener('change', calculateEstimate));

  if (applyToQuoteBtn) {
    applyToQuoteBtn.addEventListener('click', () => {
      const sysName = outSystemName ? outSystemName.textContent : '';
      const priceText = outPriceBand ? outPriceBand.textContent : '';
      const capText = outCapacity ? outCapacity.textContent : '';
      const addonsText = outAddons ? outAddons.textContent : '';
      const parishText = parishEl.options[parishEl.selectedIndex].text;

      const dispatchServiceSelect = document.getElementById('dispatchService');
      const dispatchParishSelect = document.getElementById('dispatchParish');
      const dispatchNotes = document.getElementById('dispatchNotes');

      if (dispatchServiceSelect) {
        dispatchServiceSelect.value = serviceTypeEl.value;
      }
      if (dispatchParishSelect) {
        dispatchParishSelect.value = parishText;
      }
      if (dispatchNotes) {
        dispatchNotes.value = `Estimator Configuration:\n• System: ${sysName}\n• Capacity: ${capText}\n• Add-Ons: ${addonsText}\n• Estimated Range: ${priceText}\n• Please contact me to confirm exact site quote.`;
      }

      const dispatchSection = document.getElementById('dispatch');
      if (dispatchSection) {
        dispatchSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  calculateEstimate();
}

/* 7. ATU & Septic Alarm Diagnostic Troubleshooter */
function initDiagnosticTool() {
  const buttons = document.querySelectorAll('.symptom-btn');
  const titleEl = document.getElementById('diagOutTitle');
  const badgeEl = document.getElementById('diagOutBadge');
  const summaryEl = document.getElementById('diagOutSummary');
  const stepsEl = document.getElementById('diagOutSteps');
  const ctaEl = document.getElementById('diagOutCtaText');

  if (!buttons.length) return;

  function renderSymptom(key) {
    const data = DIAGNOSTIC_DATA[key];
    if (!data) return;

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) {
      badgeEl.textContent = data.urgency;
      badgeEl.className = `urgency-pill ${data.badgeClass}`;
    }
    if (summaryEl) summaryEl.textContent = data.summary;
    if (stepsEl) {
      stepsEl.innerHTML = data.steps.map((s) => `<li>${s}</li>`).join('');
    }
    if (ctaEl) ctaEl.textContent = data.recommendation;

    buttons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.symptom === key);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => renderSymptom(btn.dataset.symptom));
  });
}

/* 8. 6-Parish Sanitarian Permit Directory Tabs */
function initParishTabs() {
  const tabs = document.querySelectorAll('.parish-tab-btn');
  const nameEl = document.getElementById('parishName');
  const regionEl = document.getElementById('parishRegion');
  const addressEl = document.getElementById('parishAddress');
  const phoneEl = document.getElementById('parishPhone');
  const hoursEl = document.getElementById('parishHours');
  const townsEl = document.getElementById('parishTowns');
  const notesEl = document.getElementById('parishNotes');
  const callBtn = document.getElementById('parishCallBtn');

  if (!tabs.length) return;

  function selectParish(key) {
    const p = PARISH_SANITARIAN_DATA[key];
    if (!p) return;

    if (nameEl) nameEl.textContent = p.name;
    if (regionEl) regionEl.textContent = p.region;
    if (addressEl) addressEl.textContent = p.address;
    if (phoneEl) phoneEl.textContent = `${p.phone} (${p.altPhone})`;
    if (hoursEl) hoursEl.textContent = p.hours;
    if (townsEl) townsEl.textContent = p.towns;
    if (notesEl) notesEl.textContent = p.notes;
    if (callBtn) {
      const digits = p.phone.replace(/\D/g, '');
      callBtn.href = `tel:+1${digits}`;
      callBtn.textContent = `Call Parish Sanitarian ${p.phone}`;
    }

    tabs.forEach((t) => t.classList.toggle('active', t.dataset.parish === key));
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => selectParish(tab.dataset.parish));
  });
}

/* 8b. Dual-Facility Map Switcher (Main HQ vs. Wingate Dumpsite GPS) */
function initFacilityMapSwitcher() {
  const buttons = document.querySelectorAll('.facility-map-btn');
  const iframe = document.getElementById('facilityMapEmbed');
  const titleEl = document.getElementById('facilityMapTitle');
  const subEl = document.getElementById('facilityMapSub');
  const dirBtn = document.getElementById('facilityDirectionsBtn');

  if (!buttons.length || !iframe) return;

  const locations = {
    hq: {
      src: 'https://www.google.com/maps?q=11751+LA-365,+Church+Point,+LA+70525&output=embed',
      title: '📍 Main HQ & Tank Manufacturing Plant: 11751 LA-365, Church Point, LA 70525',
      sub: 'Acadia Parish • 3-Ton Bridge Crane Shop, Precast Concrete & Welded Steel Tank Plant',
      dir: 'https://www.google.com/maps/dir/?api=1&destination=11751+LA-365+Church+Point+LA+70525',
      btnText: '🗺️ Directions to HQ (11751 LA-365)'
    },
    dumpsite: {
      src: 'https://www.google.com/maps?q=30.355829,-92.127946&t=k&z=18&output=embed',
      title: '🛰️ Wingate Treatment Site (Septage Dumpsite): 30.355829° N, -92.127946° W',
      sub: 'Duck Rd, Sunset, LA 70584 (St. Landry Parish) • LDEQ AI #165383 / #LA0124893 • M–F 7AM–5PM',
      dir: 'https://www.google.com/maps/dir/?api=1&destination=30.355829,-92.127946',
      btnText: '🛰️ GPS to Dumpsite (30.355829, -92.127946)'
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.facility;
      const loc = locations[key];
      if (!loc) return;

      iframe.src = loc.src;
      if (titleEl) titleEl.textContent = loc.title;
      if (subEl) subEl.textContent = loc.sub;
      if (dirBtn) {
        dirBtn.href = loc.dir;
        dirBtn.textContent = loc.btnText;
      }

      buttons.forEach((b) => b.classList.toggle('active', b === btn));
    });
  });
}

/* 9. FAQ Accordion */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

/* 10. Interactive Dispatch Request & SMS/Call Generator */
function initDispatchForm() {
  const form = document.getElementById('dispatchRequestForm');
  const ticketBox = document.getElementById('dispatchTicketOutput');
  const ticketSummary = document.getElementById('dispatchTicketSummary');
  const smsBtn = document.getElementById('dispatchSmsLink');
  const copyBtn = document.getElementById('copyTicketBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('dispatchName').value.trim();
    const phone = document.getElementById('dispatchPhone').value.trim();
    const town = document.getElementById('dispatchTown').value.trim();
    const parish = document.getElementById('dispatchParish').value;
    const serviceSelect = document.getElementById('dispatchService');
    const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
    const notes = document.getElementById('dispatchNotes').value.trim();

    const ticketId = `DC-${Math.floor(100000 + Math.random() * 900000)}`;
    const summaryText = [
      `DISPATCH REQUEST [${ticketId}] — DANIEL'S CONSTRUCTION`,
      `Customer: ${name} (${phone})`,
      `Location: ${town}, ${parish}`,
      `Service Needed: ${serviceText}`,
      notes ? `Details: ${notes}` : 'Details: Standard site evaluation / service request'
    ].join('\n');

    if (ticketSummary) {
      ticketSummary.textContent = summaryText;
    }
    if (ticketBox) {
      ticketBox.classList.add('visible');
    }
    if (smsBtn) {
      const encoded = encodeURIComponent(summaryText);
      smsBtn.href = `sms:+13376845394?body=${encoded}`;
    }
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(summaryText).then(() => {
          copyBtn.textContent = '✓ Copied Dispatch Ticket!';
          setTimeout(() => {
            copyBtn.textContent = 'Copy Ticket Details';
          }, 2500);
        });
      };
    }
  });
}
