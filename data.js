// ── SUV Scout India · Shared Data & Utilities ──

const GLOSSARY = [
  { term: "ICE", def: "Internal Combustion Engine — a traditional petrol or diesel engine that burns fuel to generate power." },
  { term: "Torque", def: "The rotational force produced by an engine, measured in Newton-metres (Nm). Higher torque means stronger pulling power, especially useful at low speeds." },
  { term: "BHP / HP", def: "Brake Horsepower / Horsepower — the power output of an engine. More BHP generally means a higher top speed." },
  { term: "Mileage / Fuel Efficiency", def: "The distance a car can travel on one litre of fuel (km/L for petrol/diesel). Higher is more economical. For EVs, it is expressed as km per full charge (range)." },
  { term: "Ground Clearance", def: "The distance between the lowest point of the car and the road surface. Higher clearance helps on bad roads and speed bumps." },
  { term: "Mild Hybrid (MHEV)", def: "A car with a small electric motor that assists the main petrol engine. It cannot run on electricity alone but improves fuel economy." },
  { term: "Strong Hybrid", def: "A car that can run on electric power alone for short distances at low speeds, significantly boosting fuel economy. Example: Toyota Hyryder." },
  { term: "EV / Electric Vehicle", def: "A car powered entirely by electricity stored in a battery pack. No petrol or diesel needed — charged at home or at public stations." },
  { term: "ADAS", def: "Advanced Driver Assistance Systems — a collection of safety features like Automatic Emergency Braking (AEB), Lane Keep Assist (LKA), and Blind Spot Warning (BSW)." },
  { term: "AEB", def: "Automatic Emergency Braking — the car automatically applies brakes if it detects an imminent collision ahead." },
  { term: "LKA", def: "Lane Keep Assist — the car steers itself back into lane if it detects you drifting without indicating." },
  { term: "BSW", def: "Blind Spot Warning — alerts you when a vehicle is in your blind spot while you're changing lanes." },
  { term: "ESC", def: "Electronic Stability Control — automatically reduces engine power and applies brakes to individual wheels to prevent skidding." },
  { term: "kWh", def: "Kilowatt-hour — the unit for measuring EV battery capacity. Like litres in a fuel tank — more kWh means longer range." },
  { term: "ARAI Range", def: "Range certified by India's Automotive Research Association of India under controlled test conditions. Real-world range is typically 15–25% less." },
  { term: "DCT", def: "Dual Clutch Transmission — a type of automatic gearbox with two clutches that provides fast, smooth gear changes with better fuel efficiency than a traditional automatic." },
  { term: "CVT / iCVT", def: "Continuously Variable Transmission — a smooth automatic gearbox with no fixed gears. Common in hybrids for seamless power delivery." },
  { term: "AMT", def: "Automated Manual Transmission — a budget-friendly automatic option that uses a computer to operate a regular manual gearbox. Can feel jerky compared to CVT or DCT." },
  { term: "DSG", def: "Direct Shift Gearbox — Volkswagen's version of a DCT. Known for quick, seamless gear changes." },
  { term: "V2L", def: "Vehicle-to-Load — allows you to plug household appliances directly into the car and power them from the EV battery. Useful during power cuts." },
  { term: "V2V", def: "Vehicle-to-Vehicle — allows one electric vehicle to charge another EV directly." },
  { term: "IP67", def: "An international protection rating. For EV batteries, IP67 means the battery is fully dust-tight and can withstand immersion in up to 1 metre of water for 30 minutes." },
  { term: "FWD", def: "Front Wheel Drive — engine power is sent only to the front wheels. Most common in compact SUVs and good for regular roads." },
  { term: "AWD", def: "All Wheel Drive — power is sent to all four wheels for better traction on slippery, off-road, or hilly terrain." },
  { term: "Ex-Showroom Price", def: "The manufacturer's price before road tax, registration, insurance, and other charges. On-road price is typically 10–20% higher." },
  { term: "NCAP / GNCAP", def: "New Car Assessment Programme / Global NCAP — crash safety rating from 1–5 stars. More stars = better protection for occupants." },
  { term: "TPMS", def: "Tyre Pressure Monitoring System — alerts the driver when any tyre's pressure drops below safe levels." },
  { term: "Turbo / Turbocharged", def: "A device that forces more air into the engine, giving it more power without increasing engine size. Turbocharged engines are more powerful and often more fuel-efficient." },
  { term: "iMT", def: "Intelligent Manual Transmission — a clutch-free manual gearbox. You change gears using the lever but don't need to use a clutch pedal." },
  { term: "DRL", def: "Daytime Running Lights — LED lights at the front of the car that are always on while driving, improving visibility." },
  { term: "Sunroof / Panoramic Sunroof", def: "A glass panel in the roof that can slide open (sunroof) or a large fixed glass panel spanning most of the roof (panoramic), letting in light and air." },
];

const ICE_CARS = [
  {
    id: "hyundai-creta-2025", brand: "Hyundai", name: "Creta", year: "2025",
    fuel: ["petrol","diesel"], priceRange: "₹10.79 – 20.20 L",
    meta: ["1.5L Petrol / Diesel / Hybrid","5 seats","FWD"],
    colors: [{name:"Abyss Black",hex:"#1a1a1a"},{name:"Atlas White",hex:"#f5f5f0"},{name:"Ranger Khaki",hex:"#8b7355"},{name:"Fiery Red",hex:"#c0392b"},{name:"Starry Night",hex:"#1c2951"},{name:"Typhoon Silver",hex:"#a0a0a0"}],
    variants: [
      { name:"E (Base)", price:"₹10.79 L", specs:{ Engine:"1.5L Petrol MPI (115 hp)", Transmission:"6-speed MT", Mileage:"17.4 km/L", "Boot Space":"433 L", "Ground Clearance":"190 mm", Airbags:"2", Touchscreen:"8-inch", Warranty:"3yr / 1,00,000 km" },
        interior:["Manual AC","Fabric seats","8-inch touchscreen","Reverse camera","Wireless Apple CarPlay"],
        exterior:["16-inch steel wheels","LED DRLs","Shark fin antenna"],
        performance:["0–100 km/h: ~12 sec","Top speed: 180 km/h","Engine: 1.5L NA petrol","Power: 115 hp","Torque: 144 Nm"],
        safety:["2 airbags","ABS + EBD","Rear parking sensors","Speed alert","Seatbelt reminder"] },
      { name:"S (Mid)", price:"₹13.50 L", specs:{ Engine:"1.5L Turbo Diesel (116 hp)", Transmission:"6-speed MT / AT", Mileage:"21.4 km/L", "Boot Space":"433 L", "Ground Clearance":"190 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr / 1,00,000 km" },
        interior:["Auto climate control","Leatherette seats","10.25-inch screen","Wireless charging","Rear AC vents","Sunroof"],
        exterior:["16-inch alloy wheels","LED headlamps","Chrome door handles"],
        performance:["0–100 km/h: ~10.5 sec","Top speed: 185 km/h","Engine: 1.5L Turbo Diesel","Power: 116 hp","Torque: 250 Nm"],
        safety:["6 airbags","ABS + EBD","ESC","Hill start assist","Rear camera","Front sensors"] },
      { name:"SX Tech (Top)", price:"₹20.20 L", specs:{ Engine:"1.5L Turbo Petrol (160 hp)", Transmission:"7-speed DCT", Mileage:"16.8 km/L", "Boot Space":"433 L", "Ground Clearance":"190 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr / 1,00,000 km" },
        interior:["Bose 8-speaker","Ventilated leather seats","Panoramic sunroof","ADAS Level 2","Heads-up display","Connected car"],
        exterior:["17-inch alloy wheels","LED headlamps + tail lamps","Electric sunroof"],
        performance:["0–100 km/h: ~9.8 sec","Top speed: 200 km/h","Engine: 1.5L Turbo Petrol","Power: 160 hp","Torque: 253 Nm"],
        safety:["6 airbags","ADAS (Lane keep, AEB, BSW)","ESC + VSM","360° camera","Blind spot warning","RCTA"] }
    ]
  },
  {
    id: "hyundai-venue-2025", brand: "Hyundai", name: "Venue", year: "2025",
    fuel: ["petrol","diesel"], priceRange: "₹7.94 – 13.27 L",
    meta: ["1.2L Petrol / 1.5L Diesel / 1.0L Turbo","5 seats","FWD"],
    colors: [{name:"Denim Blue",hex:"#2c4a7c"},{name:"Polar White",hex:"#f0f0ee"},{name:"Thunder Silver",hex:"#9a9a9a"},{name:"Fiery Red",hex:"#c0392b"},{name:"Earthy Brown",hex:"#7d5a3c"}],
    variants: [
      { name:"E (Base)", price:"₹7.94 L", specs:{ Engine:"1.2L Petrol (83 hp)", Transmission:"5-speed MT", Mileage:"17.5 km/L", "Boot Space":"355 L", "Ground Clearance":"195 mm", Airbags:"2", Touchscreen:"8-inch", Warranty:"3yr" },
        interior:["Manual AC","Fabric seats","8-inch infotainment","Reverse camera"],
        exterior:["15-inch steel wheels","Halogen headlamps"],
        performance:["Engine: 1.2L MPI Petrol","Power: 83 hp","Torque: 115 Nm","0–100 km/h: ~13.5 sec"],
        safety:["2 airbags","ABS + EBD","Speed alert"] },
      { name:"S+ (Mid)", price:"₹10.50 L", specs:{ Engine:"1.0L Turbo Petrol (120 hp)", Transmission:"7-speed DCT / 6-speed iMT", Mileage:"18.15 km/L", "Boot Space":"355 L", "Ground Clearance":"195 mm", Airbags:"6", Touchscreen:"8-inch", Warranty:"3yr" },
        interior:["Auto climate control","Sunroof","Wireless CarPlay","Rear AC vents"],
        exterior:["16-inch alloy wheels","LED DRLs"],
        performance:["Engine: 1.0L Turbo Petrol","Power: 120 hp","Torque: 172 Nm","0–100 km/h: ~11.2 sec"],
        safety:["6 airbags","ABS + EBD","ESC","Hill start assist","Rear camera"] },
      { name:"SX(O) (Top)", price:"₹13.27 L", specs:{ Engine:"1.0L Turbo Petrol (120 hp)", Transmission:"7-speed DCT", Mileage:"18.15 km/L", "Boot Space":"355 L", "Ground Clearance":"195 mm", Airbags:"6", Touchscreen:"8-inch", Warranty:"3yr" },
        interior:["Bose sound system","Connected car (BlueLink)","TPMS","Leather seats"],
        exterior:["16-inch dual-tone alloys","LED headlamps"],
        performance:["Engine: 1.0L Turbo Petrol","Power: 120 hp","Torque: 172 Nm","0–100 km/h: ~11 sec"],
        safety:["6 airbags","ESC","VSM","Rear camera","Blind spot warning"] }
    ]
  },
  {
    id: "kia-seltos-2025", brand: "Kia", name: "Seltos", year: "2025",
    fuel: ["petrol","diesel"], priceRange: "₹10.99 – 20.19 L",
    meta: ["1.5L Petrol / Diesel / Turbo","5 seats","FWD"],
    colors: [{name:"Glacial White",hex:"#ece9e3"},{name:"Imperial Blue",hex:"#1f3a5f"},{name:"Aurora Black",hex:"#111"},{name:"Gravity Grey",hex:"#6b6b6b"},{name:"Pewter Olive",hex:"#6b6b42"},{name:"Sparkling Silver",hex:"#c0c0c0"}],
    variants: [
      { name:"EX (Base)", price:"₹10.99 L", specs:{ Engine:"1.5L Petrol MPI (115 hp)", Transmission:"6-speed MT", Mileage:"16.5 km/L", "Boot Space":"433 L", "Ground Clearance":"190 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr" },
        interior:["6 airbags standard","10.25-inch screen","Apple CarPlay / Android Auto","Reverse camera"],
        exterior:["16-inch alloy wheels","LED DRLs","Chrome grille"],
        performance:["Engine: 1.5L NA Petrol","Power: 115 hp","Torque: 144 Nm","0–100 km/h: ~12 sec"],
        safety:["6 airbags","ABS + EBD","ESC","Speed alert"] },
      { name:"HTX (Mid)", price:"₹15.79 L", specs:{ Engine:"1.5L Turbo Diesel (116 hp)", Transmission:"6-speed AT", Mileage:"21.5 km/L", "Boot Space":"433 L", "Ground Clearance":"190 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr" },
        interior:["Panoramic sunroof","Bose 8-speaker","Ventilated front seats","Wireless charging","Rear AC vents"],
        exterior:["17-inch alloy wheels","LED headlamps","Dual exhaust"],
        performance:["Engine: 1.5L Turbo Diesel","Power: 116 hp","Torque: 250 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ABS","ESC","Hill start","360° camera"] },
      { name:"GTX+ (Top)", price:"₹20.19 L", specs:{ Engine:"1.5L Turbo Petrol (160 hp)", Transmission:"7-speed DCT", Mileage:"16.5 km/L", "Boot Space":"433 L", "Ground Clearance":"190 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr" },
        interior:["ADAS Level 2","Heads-up display","Nappa leather","Dual-zone climate","Connected Kia UVO"],
        exterior:["18-inch alloy wheels","Starmap LED lights","Sport bumpers"],
        performance:["Engine: 1.5L Turbo Petrol","Power: 160 hp","Torque: 253 Nm","0–100 km/h: ~9.5 sec"],
        safety:["6 airbags","ADAS (AEB, LKA, BSW)","360° camera","Rear cross-traffic alert"] }
    ]
  },
  {
    id: "kia-syros-2026", brand: "Kia", name: "Syros", year: "2026",
    fuel: ["petrol","diesel"], priceRange: "₹8.99 – 18.99 L",
    meta: ["1.0L Turbo Petrol / 1.5L Diesel","5 seats","FWD"],
    colors: [{name:"Glacier White",hex:"#f0ede8"},{name:"Midnight Black",hex:"#161616"},{name:"Atlas Grey",hex:"#7a7a7a"},{name:"Intense Red",hex:"#b22222"},{name:"Sage Green",hex:"#5a7a5a"}],
    variants: [
      { name:"HTE (Base)", price:"₹8.99 L", specs:{ Engine:"1.0L Turbo Petrol (120 hp)", Transmission:"6-speed iMT", Mileage:"18.4 km/L", "Boot Space":"465 L", "Ground Clearance":"198 mm", Airbags:"6", Touchscreen:"8-inch", Warranty:"3yr" },
        interior:["6 airbags","8-inch touchscreen","Manual AC","Power windows"],
        exterior:["15-inch steel wheels","LED DRLs","Unique boxy styling"],
        performance:["Engine: 1.0L Turbo Petrol","Power: 120 hp","Torque: 172 Nm","0–100 km/h: ~11 sec"],
        safety:["6 airbags standard","ABS + EBD","ESC","Rear camera"] },
      { name:"HTX+ (Mid)", price:"₹13.99 L", specs:{ Engine:"1.5L Diesel (116 hp)", Transmission:"6-speed AT", Mileage:"22.1 km/L", "Boot Space":"465 L", "Ground Clearance":"198 mm", Airbags:"6", Touchscreen:"10.67-inch", Warranty:"3yr" },
        interior:["10.67-inch screen","Sunroof","Wireless charging","Rear AC vents","Connected car"],
        exterior:["16-inch alloy wheels","LED headlamps","Glass roof option"],
        performance:["Engine: 1.5L Turbo Diesel","Power: 116 hp","Torque: 250 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ESC","Hill assist","360° camera","TPMS"] },
      { name:"GTX+ (Top)", price:"₹18.99 L", specs:{ Engine:"1.5L Diesel (116 hp)", Transmission:"7-speed DCT", Mileage:"21.5 km/L", "Boot Space":"465 L", "Ground Clearance":"198 mm", Airbags:"6", Touchscreen:"10.67-inch", Warranty:"3yr" },
        interior:["ADAS Level 2","Panoramic sunroof","Ventilated seats","Heads-up display","65W USB-C charging"],
        exterior:["17-inch alloy wheels","Signature Starmap LED","Dual-tone roof"],
        performance:["Engine: 1.5L Turbo Diesel","Power: 116 hp","Torque: 250 Nm","0–100 km/h: ~10 sec"],
        safety:["6 airbags","ADAS (AEB, LKA, BSW, RCTA)","360° camera","Blind spot monitor"] }
    ]
  },
  {
    id: "maruti-brezza-2025", brand: "Maruti Suzuki", name: "Brezza", year: "2025",
    fuel: ["petrol","hybrid"], priceRange: "₹8.34 – 14.97 L",
    meta: ["1.5L Petrol + 48V Mild Hybrid","5 seats","FWD"],
    colors: [{name:"Magma Grey",hex:"#4a4a4a"},{name:"Pearl Arctic White",hex:"#f0eee9"},{name:"Brave Khaki",hex:"#8b7a52"},{name:"Splendid Silver",hex:"#b5b5b5"},{name:"Opulent Red",hex:"#9b2020"},{name:"Midnight Blue",hex:"#1a2d5a"}],
    variants: [
      { name:"LXi (Base)", price:"₹8.34 L", specs:{ Engine:"1.5L Petrol (103 hp)", Transmission:"5-speed MT", Mileage:"17.4 km/L", "Boot Space":"328 L", "Ground Clearance":"198 mm", Airbags:"2", Touchscreen:"None", Warranty:"2yr" },
        interior:["Manual AC","Fabric seats","Basic audio","Rear camera"],
        exterior:["15-inch steel wheels","Halogen headlamps"],
        performance:["Engine: 1.5L K15C Petrol","Power: 103 hp","Torque: 137 Nm","0–100 km/h: ~12.8 sec"],
        safety:["2 airbags","ABS + EBD","Rear parking sensors"] },
      { name:"ZXi (Mid)", price:"₹11.99 L", specs:{ Engine:"1.5L Petrol + 48V Mild Hybrid (103 hp)", Transmission:"5-speed MT / 6-speed AT", Mileage:"19.8 km/L", "Boot Space":"328 L", "Ground Clearance":"198 mm", Airbags:"6", Touchscreen:"9-inch", Warranty:"2yr" },
        interior:["9-inch SmartPlay Pro+","Sunroof","Wireless CarPlay","Arkamys sound","Rear AC vents"],
        exterior:["16-inch alloy wheels","LED headlamps","Sporty bumpers"],
        performance:["Engine: 1.5L + 48V Mild Hybrid","Power: 103 hp","Torque: 137 Nm","0–100 km/h: ~11.5 sec"],
        safety:["6 airbags","ABS + EBD","ESC","Hill hold assist","Rear camera"] },
      { name:"ZXi+ (Top)", price:"₹14.97 L", specs:{ Engine:"1.5L Petrol + 48V Mild Hybrid (103 hp)", Transmission:"6-speed AT", Mileage:"19.8 km/L", "Boot Space":"328 L", "Ground Clearance":"198 mm", Airbags:"6", Touchscreen:"9-inch", Warranty:"2yr" },
        interior:["Head-up display","360° camera","Wireless charging","Connected Suzuki Connect"],
        exterior:["16-inch dual-tone alloys","LED tail lamps","Chrome accents"],
        performance:["Engine: 1.5L Mild Hybrid","Power: 103 hp","Torque: 137 Nm","0–100 km/h: ~11 sec"],
        safety:["6 airbags","ESC","360° camera","TPMS","Blind spot alert"] }
    ]
  },
  {
    id: "maruti-fronx-2025", brand: "Maruti Suzuki", name: "Fronx", year: "2025",
    fuel: ["petrol","hybrid"], priceRange: "₹7.51 – 13.47 L",
    meta: ["1.2L Petrol / 1.0L Turbo + 48V Hybrid","5 seats","FWD"],
    colors: [{name:"Splendid Silver",hex:"#b8b8b8"},{name:"Celestial Blue",hex:"#1e4a82"},{name:"Granita Grey",hex:"#5c5c5c"},{name:"Arctic White",hex:"#f2efea"},{name:"Opulent Red",hex:"#9b2020"}],
    variants: [
      { name:"Sigma (Base)", price:"₹7.51 L", specs:{ Engine:"1.2L Petrol (90 hp)", Transmission:"5-speed MT", Mileage:"21.79 km/L", "Boot Space":"308 L", "Ground Clearance":"180 mm", Airbags:"2", Touchscreen:"None", Warranty:"2yr" },
        interior:["Manual AC","Fabric seats","Basic stereo"],
        exterior:["14-inch steel wheels","Halogen lamps"],
        performance:["Engine: 1.2L Z12E Petrol","Power: 90 hp","Torque: 113 Nm","0–100 km/h: ~13 sec"],
        safety:["2 airbags","ABS + EBD"] },
      { name:"Delta+ (Mid)", price:"₹10.20 L", specs:{ Engine:"1.0L Turbo Petrol Hybrid (100 hp)", Transmission:"5-speed MT / 6-speed AT", Mileage:"22.89 km/L", "Boot Space":"308 L", "Ground Clearance":"180 mm", Airbags:"6", Touchscreen:"9-inch", Warranty:"2yr" },
        interior:["9-inch SmartPlay","Sunroof","Wireless CarPlay","Arkamys audio"],
        exterior:["16-inch alloy wheels","LED DRLs"],
        performance:["Engine: 1.0L Boosterjet Turbo Hybrid","Power: 100 hp","Torque: 148 Nm","0–100 km/h: ~11 sec"],
        safety:["6 airbags","ABS + EBD","ESC","Rear camera"] },
      { name:"Alpha+ (Top)", price:"₹13.47 L", specs:{ Engine:"1.0L Turbo Petrol Hybrid (100 hp)", Transmission:"6-speed AT", Mileage:"22.89 km/L", "Boot Space":"308 L", "Ground Clearance":"180 mm", Airbags:"6", Touchscreen:"9-inch", Warranty:"2yr" },
        interior:["360° camera","HUD","Connected car","Wireless charging","Ventilated seats"],
        exterior:["16-inch dual-tone alloys","LED lamps","Sporty cladding"],
        performance:["Engine: 1.0L Boosterjet Turbo Hybrid","Power: 100 hp","Torque: 148 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ESC","Hill hold","360° camera","TPMS"] }
    ]
  },
  {
    id: "renault-duster-2025", brand: "Renault", name: "Duster", year: "2025",
    fuel: ["petrol"], priceRange: "₹10.49 – 18.49 L",
    meta: ["1.5L Turbo Petrol (150 hp)","5 seats","FWD / AWD option"],
    colors: [{name:"Pearl White",hex:"#f0ede5"},{name:"Slate Grey",hex:"#6b7280"},{name:"Cedar Brown",hex:"#7c4f3a"},{name:"Urban Black",hex:"#1a1a1a"},{name:"Iron Blue",hex:"#2d4a6e"}],
    variants: [
      { name:"Journey (Base)", price:"₹10.49 L", specs:{ Engine:"1.5L Turbo Petrol (150 hp)", Transmission:"6-speed MT", Mileage:"15.7 km/L", "Boot Space":"472 L", "Ground Clearance":"217 mm", Airbags:"4", Touchscreen:"10.4-inch", Warranty:"2yr" },
        interior:["10.4-inch OpenR Link screen (Google built-in)","Rear camera","Manual climate"],
        exterior:["17-inch steel spare","Roof rails","LED lamps"],
        performance:["Engine: 1.5L TCe Turbo Petrol","Power: 150 hp","Torque: 250 Nm","0–100 km/h: ~9.9 sec"],
        safety:["4 airbags","ABS + EBD","ESC","Rear parking sensors"] },
      { name:"Techno (Mid)", price:"₹14.99 L", specs:{ Engine:"1.5L Turbo Petrol (150 hp)", Transmission:"6-speed MT / 7-speed EDC", Mileage:"15.7 km/L", "Boot Space":"472 L", "Ground Clearance":"217 mm", Airbags:"6", Touchscreen:"10.4-inch", Warranty:"2yr" },
        interior:["10.4-inch OpenR","LED ambient lighting","Wireless CarPlay","Sunroof","Rear AC vents"],
        exterior:["18-inch alloy wheels","LED headlamps","Roof spoiler"],
        performance:["Engine: 1.5L TCe Turbo Petrol","Power: 150 hp","Torque: 250 Nm","0–100 km/h: ~9.5 sec"],
        safety:["6 airbags","ESC","Hill start","Blind spot warning","Rear camera"] },
      { name:"Iconic (Top)", price:"₹18.49 L", specs:{ Engine:"1.5L Turbo Petrol (150 hp)", Transmission:"7-speed EDC", Mileage:"15.7 km/L", "Boot Space":"472 L", "Ground Clearance":"217 mm", Airbags:"6", Touchscreen:"10.4-inch", Warranty:"2yr" },
        interior:["ADAS Level 2","Bose 6-speaker","Ventilated seats","360° camera","Connected EasyLink"],
        exterior:["18-inch alloys","Panoramic glass roof","Chrome accents"],
        performance:["Engine: 1.5L TCe Turbo Petrol","Power: 150 hp","Torque: 250 Nm","0–100 km/h: ~9.5 sec"],
        safety:["6 airbags","ADAS (AEB, LKA, BSW)","360° camera","RCTA","TPMS"] }
    ]
  },
  {
    id: "skoda-kylaq-2025", brand: "Skoda", name: "Kylaq", year: "2025",
    fuel: ["petrol"], priceRange: "₹7.89 – 14.40 L",
    meta: ["1.0L TSI Turbo Petrol (115 hp)","5 seats","FWD"],
    colors: [{name:"Brilliant Silver",hex:"#c8c8c8"},{name:"Carbon Steel",hex:"#3c3c3c"},{name:"Tornado Red",hex:"#b82020"},{name:"Candywhite",hex:"#f0ede8"},{name:"Mango Orange",hex:"#e07830"}],
    variants: [
      { name:"Classic (Base)", price:"₹7.89 L", specs:{ Engine:"1.0L TSI Turbo Petrol (115 hp)", Transmission:"6-speed MT", Mileage:"21.4 km/L", "Boot Space":"446 L", "Ground Clearance":"189 mm", Airbags:"2", Touchscreen:"8-inch", Warranty:"4yr" },
        interior:["8-inch Bolero infotainment","Manual AC","Fabric seats","Reverse camera"],
        exterior:["15-inch alloys","LED DRLs","Czech minimalist design"],
        performance:["Engine: 1.0L TSI Turbocharged Petrol","Power: 115 hp","Torque: 178 Nm","0–100 km/h: ~10.5 sec"],
        safety:["2 airbags","ABS + EBD","Rear parking sensors"] },
      { name:"Signature (Mid)", price:"₹11.49 L", specs:{ Engine:"1.0L TSI Turbo Petrol (115 hp)", Transmission:"6-speed MT / 6-speed AT", Mileage:"21.4 km/L", "Boot Space":"446 L", "Ground Clearance":"189 mm", Airbags:"6", Touchscreen:"10.1-inch", Warranty:"4yr" },
        interior:["10.1-inch Virtual Cockpit","Sunroof","Wireless CarPlay","Ventilated seats"],
        exterior:["16-inch alloy wheels","LED headlamps","Silver body cladding"],
        performance:["Engine: 1.0L TSI Turbocharged Petrol","Power: 115 hp","Torque: 178 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ESC","Multi-collision brake","Hill hold"] },
      { name:"Prestige (Top)", price:"₹14.40 L", specs:{ Engine:"1.0L TSI Turbo Petrol (115 hp)", Transmission:"6-speed AT", Mileage:"21.4 km/L", "Boot Space":"446 L", "Ground Clearance":"189 mm", Airbags:"6", Touchscreen:"10.1-inch", Warranty:"4yr" },
        interior:["360° camera","Wireless charging","Ambient lighting","Connected care","10.1-inch Virtual Cockpit Pro"],
        exterior:["17-inch alloy wheels","Crystal LED headlamps","Panoramic sunroof option"],
        performance:["Engine: 1.0L TSI Turbocharged Petrol","Power: 115 hp","Torque: 178 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ESC","ABS","360° camera","TPMS","Multi-collision brake"] }
    ]
  },
  {
    id: "tata-nexon-2025", brand: "Tata", name: "Nexon", year: "2025",
    fuel: ["petrol","diesel"], priceRange: "₹8.14 – 15.49 L",
    meta: ["1.2L Turbo Petrol / 1.5L Diesel","5 seats","FWD"],
    colors: [{name:"Pristine White",hex:"#f0eeea"},{name:"Daytona Grey",hex:"#4a4a4a"},{name:"Intensi-Teal",hex:"#1a6b6b"},{name:"Calypso Red",hex:"#b52020"},{name:"Fearless Purple",hex:"#4a2080"}],
    variants: [
      { name:"Smart (Base)", price:"₹8.14 L", specs:{ Engine:"1.2L Turbo Petrol (120 hp)", Transmission:"5-speed MT", Mileage:"17.44 km/L", "Boot Space":"382 L", "Ground Clearance":"209 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr" },
        interior:["6 airbags standard","10.25-inch Harman screen","Rear AC vents","Reverse camera"],
        exterior:["16-inch alloy wheels","LED DRLs","Distinctive coupe design"],
        performance:["Engine: 1.2L Revotron Turbocharged Petrol","Power: 120 hp","Torque: 170 Nm","0–100 km/h: ~11 sec"],
        safety:["6 airbags","ABS + EBD","ESC","4-star GNCAP rated"] },
      { name:"Creative+ (Mid)", price:"₹11.99 L", specs:{ Engine:"1.2L Turbo Petrol (120 hp)", Transmission:"6-speed AMT / MT", Mileage:"17.44 km/L", "Boot Space":"382 L", "Ground Clearance":"209 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr" },
        interior:["Sunroof","Wireless CarPlay","JBL sound","Ventilated seats","Wireless charging"],
        exterior:["16-inch alloys","LED headlamps","Skyroof option"],
        performance:["Engine: 1.2L Turbocharged Petrol","Power: 120 hp","Torque: 170 Nm","0–100 km/h: ~11 sec"],
        safety:["6 airbags","ESC","Hill start","TPMS","Rear camera"] },
      { name:"Fearless Pro (Top)", price:"₹15.49 L", specs:{ Engine:"1.5L Turbo Diesel (115 hp)", Transmission:"6-speed AT", Mileage:"24.08 km/L", "Boot Space":"382 L", "Ground Clearance":"209 mm", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr" },
        interior:["ADAS Level 2","360° camera","Premium JBL","Panoramic sunroof","Connected iRA"],
        exterior:["17-inch alloys","LED projector headlamps","Coupe roofline"],
        performance:["Engine: 1.5L Kryotec Turbo Diesel","Power: 115 hp","Torque: 260 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ADAS (AEB, LKA, BSW)","360° camera","5-star GNCAP"] }
    ]
  },
  {
    id: "tata-sierra-2025", brand: "Tata", name: "Sierra", year: "2025",
    fuel: ["petrol","diesel"], priceRange: "₹11.49 – 21.29 L",
    meta: ["1.2L Turbo Petrol / 1.5L Diesel","5 seats","FWD"],
    colors: [{name:"Pristine White",hex:"#f0eeea"},{name:"Lunar Grey",hex:"#5a5a5a"},{name:"Atomic Orange",hex:"#e06020"},{name:"Intensi-Teal",hex:"#1a6b6b"},{name:"Midnight Black",hex:"#141414"}],
    variants: [
      { name:"Smart (Base)", price:"₹11.49 L", specs:{ Engine:"1.2L Turbo Petrol (120 hp)", Transmission:"6-speed MT", Mileage:"17.1 km/L", "Boot Space":"420 L", "Ground Clearance":"200 mm", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr" },
        interior:["12.3-inch floating screen","6 airbags","Rear AC vents","Connected iRA"],
        exterior:["17-inch alloy wheels","Panoramic glass roof","Retro-modern styling"],
        performance:["Engine: 1.2L Revotron Turbocharged Petrol","Power: 120 hp","Torque: 170 Nm","0–100 km/h: ~11 sec"],
        safety:["6 airbags","ABS + EBD","ESC","TPMS"] },
      { name:"Smart+ (Mid)", price:"₹15.99 L", specs:{ Engine:"1.5L Diesel (115 hp)", Transmission:"6-speed MT / AT", Mileage:"23.0 km/L", "Boot Space":"420 L", "Ground Clearance":"200 mm", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr" },
        interior:["Sunroof","Wireless charging","JBL 9-speaker","Ventilated seats"],
        exterior:["18-inch alloy wheels","LED headlamps","Signature panoramic roof"],
        performance:["Engine: 1.5L Kryotec Turbo Diesel","Power: 115 hp","Torque: 260 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ESC","Hill assist","360° camera"] },
      { name:"Fearless Pro (Top)", price:"₹21.29 L", specs:{ Engine:"1.5L Diesel (115 hp)", Transmission:"6-speed AT", Mileage:"23.0 km/L", "Boot Space":"420 L", "Ground Clearance":"200 mm", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr" },
        interior:["ADAS Level 2","360° camera","Premium JBL","HUD","Dual-zone climate"],
        exterior:["18-inch alloys","Panoramic glass roof","Bold front fascia"],
        performance:["Engine: 1.5L Kryotec Turbo Diesel AT","Power: 115 hp","Torque: 260 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ADAS","360° camera","Blind spot","RCTA"] }
    ]
  },
  {
    id: "toyota-hyryder-2025", brand: "Toyota", name: "Urban Cruiser Hyryder", year: "2025",
    fuel: ["petrol","hybrid"], priceRange: "₹10.99 – 20.19 L",
    meta: ["1.5L Petrol / Strong Hybrid","5 seats","FWD / AWD Hybrid"],
    colors: [{name:"Pearl White",hex:"#eeeae2"},{name:"Sporting Red",hex:"#ad2020"},{name:"Enticing Silver",hex:"#aaaaaa"},{name:"Gaming Grey",hex:"#555"},{name:"Stormy Blue",hex:"#1e3a6a"}],
    variants: [
      { name:"E (Base)", price:"₹10.99 L", specs:{ Engine:"1.5L Petrol (103 hp)", Transmission:"5-speed MT", Mileage:"17.4 km/L", "Boot Space":"373 L", "Ground Clearance":"200 mm", Airbags:"2", Touchscreen:"9-inch", Warranty:"3yr" },
        interior:["9-inch touchscreen","Manual AC","Fabric seats","Rear camera"],
        exterior:["16-inch steel wheels","LED DRLs"],
        performance:["Engine: 1.5L NA Petrol","Power: 103 hp","Torque: 137 Nm","0–100 km/h: ~12.5 sec"],
        safety:["2 airbags","ABS + EBD","ESC"] },
      { name:"G (Mid)", price:"₹15.49 L", specs:{ Engine:"1.5L Strong Hybrid (116 hp total)", Transmission:"e-CVT (auto)", Mileage:"27.97 km/L", "Boot Space":"373 L", "Ground Clearance":"200 mm", Airbags:"6", Touchscreen:"9-inch", Warranty:"3yr" },
        interior:["Strong Hybrid system","Sunroof","Wireless CarPlay","Ventilated seats"],
        exterior:["17-inch alloy wheels","LED headlamps"],
        performance:["Engine: 1.5L Strong Hybrid","Combined: 116 hp","Torque: 141 Nm","0–100 km/h: ~10.8 sec","EV mode available"],
        safety:["6 airbags","ESC","Hill start","Lane departure warning"] },
      { name:"V AWD (Top)", price:"₹20.19 L", specs:{ Engine:"1.5L Strong Hybrid AWD", Transmission:"e-CVT", Mileage:"27.97 km/L", "Boot Space":"373 L", "Ground Clearance":"200 mm", Airbags:"6", Touchscreen:"9-inch", Warranty:"3yr" },
        interior:["AWD system","360° camera","JBL sound","Connected Toyota Connect","HUD"],
        exterior:["17-inch alloys","LED headlamps","AWD badging"],
        performance:["AWD Strong Hybrid","Combined: 116 hp","Torque: 141 Nm","0–100 km/h: ~10.5 sec","EV-only mode"],
        safety:["6 airbags","ADAS Lane departure","Pre-collision","360° camera"] }
    ]
  },
  {
    id: "vw-taigun-2025", brand: "Volkswagen", name: "Taigun", year: "2025",
    fuel: ["petrol"], priceRange: "₹11.00 – 19.30 L",
    meta: ["1.0L TSI / 1.5L TSI EVO Petrol","5 seats","FWD"],
    colors: [{name:"Deep Black",hex:"#141414"},{name:"Reflex Silver",hex:"#b0b0b0"},{name:"Kings Red",hex:"#9e1e1e"},{name:"White Silver",hex:"#e8e8e2"},{name:"Rising Blue",hex:"#2050a0"},{name:"Sunflower Yellow",hex:"#d4ac00"}],
    variants: [
      { name:"Comfortline (Base)", price:"₹11.00 L", specs:{ Engine:"1.0L TSI Turbo Petrol (115 hp)", Transmission:"6-speed MT", Mileage:"19.47 km/L", "Boot Space":"385 L", "Ground Clearance":"188 mm", Airbags:"6", Touchscreen:"10-inch", Warranty:"4yr" },
        interior:["10-inch touchscreen","6 airbags","Manual climate","Reverse camera"],
        exterior:["16-inch alloy wheels","LED DRLs","Chrome grille"],
        performance:["Engine: 1.0L TSI Turbocharged Petrol","Power: 115 hp","Torque: 178 Nm","0–100 km/h: ~10.8 sec"],
        safety:["6 airbags","ABS + EBD","ESC","Multi-collision brake"] },
      { name:"Topline (Mid)", price:"₹14.99 L", specs:{ Engine:"1.0L TSI Turbo Petrol (115 hp)", Transmission:"6-speed AT", Mileage:"19.47 km/L", "Boot Space":"385 L", "Ground Clearance":"188 mm", Airbags:"6", Touchscreen:"10-inch", Warranty:"4yr" },
        interior:["Sunroof","Wireless CarPlay","Virtual cockpit","Ventilated seats","Rear AC vents"],
        exterior:["17-inch alloy wheels","LED headlamps","Chrome roof rails"],
        performance:["Engine: 1.0L TSI Turbocharged Petrol","Power: 115 hp","Torque: 178 Nm","0–100 km/h: ~10.5 sec"],
        safety:["6 airbags","ESC","Hill hold","Rear camera","TPMS"] },
      { name:"GT Plus (Top)", price:"₹19.30 L", specs:{ Engine:"1.5L TSI EVO Petrol (150 hp)", Transmission:"7-speed DSG", Mileage:"17.38 km/L", "Boot Space":"385 L", "Ground Clearance":"188 mm", Airbags:"6", Touchscreen:"10-inch", Warranty:"4yr" },
        interior:["Dynaudio 8-speaker","360° camera","Wireless charging","Ambient lighting","Digital cockpit"],
        exterior:["18-inch GT alloys","R-Line bumpers","IQ Light matrix LED"],
        performance:["Engine: 1.5L TSI EVO Turbocharged Petrol","Power: 150 hp","Torque: 250 Nm","0–100 km/h: ~8.5 sec"],
        safety:["6 airbags","ESC","IQ Drive ADAS","360° camera","Blind spot","RCTA"] }
    ]
  }
];

const EV_CARS = [
  {
    id: "tata-nexon-ev-2025", brand: "Tata", name: "Nexon EV", year: "2025",
    fuel: ["electric"], priceRange: "₹12.49 – 17.49 L",
    meta: ["30 kWh / 45 kWh battery","142 hp motor","489 km ARAI range"],
    colors: [{name:"Pure Grey",hex:"#888"},{name:"Ocean Blue",hex:"#1a3f6e"},{name:"Pristine White",hex:"#f0eeea"},{name:"Daytona Grey",hex:"#4a4a4a"},{name:"Calypso Red",hex:"#b52020"}],
    variants: [
      { name:"Creative+ MR (Base)", price:"₹12.49 L", specs:{ Battery:"30 kWh", Range:"275 km (MIDC)", Motor:"129 hp / 215 Nm", Mileage:"~275 km/charge", "AC Charging":"7.2 kW (4.3 hrs)", "DC Fast Charge":"50 kW", "Boot Space":"382 L", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr / 8yr battery" },
        interior:["12.3-inch screen","Wireless CarPlay","6 airbags","Rear AC vents","V2L feature"],
        exterior:["16-inch alloys","LED headlamps","Front charging port"],
        performance:["Motor: 129 hp","Torque: 215 Nm","0–100 km/h: ~9.5 sec","Top speed: 150 km/h","30 kWh battery"],
        safety:["6 airbags","ABS + EBD","ESC","Rear camera","IP67 rated battery"] },
      { name:"Fearless+ LR (Mid)", price:"₹15.49 L", specs:{ Battery:"45 kWh", Range:"465 km (MIDC)", Motor:"142 hp / 215 Nm", Mileage:"~465 km/charge", "AC Charging":"7.2 kW (6 hrs)", "DC Fast Charge":"50 kW", "Boot Space":"382 L", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr / 8yr battery" },
        interior:["Sunroof","JBL 9-speaker","Ventilated seats","Wireless charging","Paddle shifters for regen"],
        exterior:["16-inch alloys","LED headlamps","Front charging port"],
        performance:["Motor: 142 hp","Torque: 215 Nm","0–100 km/h: ~9.0 sec","Top speed: 150 km/h","45 kWh battery"],
        safety:["6 airbags","ESC","Hill assist","TPMS","IP67 battery","V2V charging"] },
      { name:"Empowered+ A (Top)", price:"₹17.49 L", specs:{ Battery:"45 kWh", Range:"489 km (ARAI)", Motor:"142 hp / 215 Nm", Mileage:"~489 km/charge", "AC Charging":"7.2 kW (6 hrs)", "DC Fast Charge":"50 kW", "Boot Space":"382 L", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr / 8yr battery" },
        interior:["ADAS Level 2","360° camera","Arcade.ev (games/videos while charging)","HUD","Connected iRA"],
        exterior:["17-inch alloys","LED matrix headlamps","Sporty bumpers"],
        performance:["Motor: 142 hp","Torque: 215 Nm","0–100 km/h: ~8.9 sec","Top speed: 150 km/h","V2L + V2V support"],
        safety:["6 airbags","ADAS (AEB, LKA, BSW)","360° camera","RCTA","IP67 battery pack"] }
    ]
  },
  {
    id: "mahindra-xuv400-2025", brand: "Mahindra", name: "XUV400 EV", year: "2025",
    fuel: ["electric"], priceRange: "₹15.49 – 19.99 L",
    meta: ["39.4 kWh / 57.5 kWh battery","150 hp motor","Up to 456 km range"],
    colors: [{name:"Napoli Black",hex:"#161616"},{name:"Galaxy Grey",hex:"#545454"},{name:"Everest White",hex:"#eeeae0"},{name:"Tango Red",hex:"#b52020"},{name:"Arctic Blue",hex:"#1a4a8a"}],
    variants: [
      { name:"EC Pro (Base)", price:"₹15.49 L", specs:{ Battery:"39.4 kWh", Range:"375 km (MIDC)", Motor:"147 hp / 310 Nm", Mileage:"~375 km/charge", "AC Charging":"11 kW (3.5 hrs)", "DC Fast Charge":"50 kW", "Boot Space":"378 L", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr / 8yr battery" },
        interior:["10.25-inch screen","6 airbags","Manual climate","Fabric seats"],
        exterior:["16-inch alloys","LED DRLs","Front/rear charging port options"],
        performance:["Motor: 147 hp","Torque: 310 Nm","0–100 km/h: ~8.3 sec","Range: 375 km"],
        safety:["6 airbags","ABS + EBD","ESC","Rear camera"] },
      { name:"EL Pro (Mid)", price:"₹17.99 L", specs:{ Battery:"57.5 kWh", Range:"456 km (MIDC)", Motor:"147 hp / 310 Nm", Mileage:"~456 km/charge", "AC Charging":"11 kW (5.5 hrs)", "DC Fast Charge":"50 kW", "Boot Space":"378 L", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr / 8yr battery" },
        interior:["Sunroof","Wireless CarPlay","Ventilated seats","Wireless charging"],
        exterior:["17-inch alloys","LED headlamps"],
        performance:["Motor: 147 hp","Torque: 310 Nm","0–100 km/h: ~8.3 sec","Range: 456 km"],
        safety:["6 airbags","ESC","Hill hold","TPMS","Rear camera"] },
      { name:"EL Pro+ (Top)", price:"₹19.99 L", specs:{ Battery:"57.5 kWh", Range:"456 km (MIDC)", Motor:"147 hp / 310 Nm", Mileage:"~456 km/charge", "AC Charging":"11 kW (5.5 hrs)", "DC Fast Charge":"50 kW", "Boot Space":"378 L", Airbags:"6", Touchscreen:"10.25-inch", Warranty:"3yr / 8yr battery" },
        interior:["360° camera","Connected AdrenoX","Ambient lighting","ADAS Level 1","Leather seats"],
        exterior:["17-inch alloys","LED projector headlamps","Sporty body kit"],
        performance:["Motor: 147 hp","Torque: 310 Nm","0–100 km/h: ~8.3 sec","Top speed: 150 km/h"],
        safety:["6 airbags","ADAS","360° camera","ESC","Blind spot"] }
    ]
  },
  {
    id: "mg-windsor-ev-2025", brand: "MG", name: "Windsor EV", year: "2025",
    fuel: ["electric"], priceRange: "₹13.49 – 17.26 L",
    meta: ["38 kWh battery","136 hp motor","331 km WLTP range"],
    colors: [{name:"Stardust Silver",hex:"#c0bdb6"},{name:"Aurora Silver",hex:"#a8a4a0"},{name:"Pearl White",hex:"#ede9e0"},{name:"Starry Black",hex:"#181818"},{name:"Canyon Red",hex:"#a01e1e"}],
    variants: [
      { name:"Excite (Base)", price:"₹13.49 L", specs:{ Battery:"38 kWh", Range:"331 km (WLTP)", Motor:"136 hp / 200 Nm", Mileage:"~331 km/charge", "AC Charging":"7.4 kW", "DC Fast Charge":"50 kW", "Boot Space":"604 L", Airbags:"6", Touchscreen:"15.6-inch rotating", Warranty:"5yr / 8yr battery" },
        interior:["15.6-inch rotating screen","6 airbags","Rear lounger mode","Magic seats"],
        exterior:["17-inch alloys","LED headlamps","Aerodynamic design"],
        performance:["Motor: 136 hp","Torque: 200 Nm","0–100 km/h: ~8.5 sec","Range: 331 km"],
        safety:["6 airbags","ABS + EBD","ESC","Rear camera","360° parking"] },
      { name:"Excite Pro (Mid)", price:"₹15.49 L", specs:{ Battery:"38 kWh", Range:"331 km (WLTP)", Motor:"136 hp / 200 Nm", Mileage:"~331 km/charge", "AC Charging":"7.4 kW", "DC Fast Charge":"50 kW", "Boot Space":"604 L", Airbags:"6", Touchscreen:"15.6-inch rotating", Warranty:"5yr / 8yr battery" },
        interior:["Sunroof","Wireless charging","Infinity sound system","Ventilated seats","V2L (3.3 kW)"],
        exterior:["17-inch alloys","LED headlamps","Panoramic sunroof"],
        performance:["Motor: 136 hp","Torque: 200 Nm","0–100 km/h: ~8.5 sec","V2L: 3.3 kW"],
        safety:["6 airbags","ADAS Level 1","360° camera","ESC","Hill hold"] },
      { name:"Essence (Top)", price:"₹17.26 L", specs:{ Battery:"38 kWh", Range:"331 km (WLTP)", Motor:"136 hp / 200 Nm", Mileage:"~331 km/charge", "AC Charging":"7.4 kW", "DC Fast Charge":"50 kW", "Boot Space":"604 L", Airbags:"6", Touchscreen:"15.6-inch rotating", Warranty:"5yr / 8yr battery" },
        interior:["ADAS Level 2","Bose 8-speaker","Dual-zone climate","360° camera","Connected i-SMART"],
        exterior:["18-inch alloys","Flush door handles","Premium paint"],
        performance:["Motor: 136 hp","Torque: 200 Nm","0–100 km/h: ~8.5 sec","V2L + V2V"],
        safety:["6 airbags","ADAS (AEB, LKA)","360° camera","Blind spot","RCTA"] }
    ]
  },
  {
    id: "tata-curvv-ev-2025", brand: "Tata", name: "Curvv EV", year: "2025",
    fuel: ["electric"], priceRange: "₹17.49 – 21.99 L",
    meta: ["45 kWh / 55 kWh battery","167 hp motor","Up to 585 km ARAI range"],
    colors: [{name:"Pure Grey",hex:"#888"},{name:"Cosmic Gold",hex:"#c8a840"},{name:"Pristine White",hex:"#f0eeea"},{name:"Daytona Grey",hex:"#4a4a4a"},{name:"Empowered Crimson",hex:"#960a0a"}],
    variants: [
      { name:"Creative+ (Base)", price:"₹17.49 L", specs:{ Battery:"45 kWh", Range:"502 km (ARAI)", Motor:"150 hp / 215 Nm", Mileage:"~502 km/charge", "AC Charging":"11 kW", "DC Fast Charge":"70 kW", "Boot Space":"500 L", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr / 8yr battery" },
        interior:["12.3-inch floating screen","6 airbags","Wireless CarPlay","Connected iRA"],
        exterior:["17-inch alloys","LED headlamps","Fastback coupe design"],
        performance:["Motor: 150 hp","Torque: 215 Nm","0–100 km/h: ~8.5 sec","Range: 502 km"],
        safety:["6 airbags","ABS + EBD","ESC","IP67 battery"] },
      { name:"Fearless+ (Mid)", price:"₹19.49 L", specs:{ Battery:"55 kWh", Range:"585 km (ARAI)", Motor:"167 hp / 215 Nm", Mileage:"~585 km/charge", "AC Charging":"11 kW", "DC Fast Charge":"70 kW", "Boot Space":"500 L", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr / 8yr battery" },
        interior:["Panoramic sunroof","JBL 9-speaker","Ventilated seats","Wireless charging","V2L support"],
        exterior:["18-inch alloys","LED matrix headlamps"],
        performance:["Motor: 167 hp","Torque: 215 Nm","0–100 km/h: ~8.5 sec","Range: 585 km"],
        safety:["6 airbags","ESC","Hill hold","TPMS","360° camera"] },
      { name:"Empowered+ (Top)", price:"₹21.99 L", specs:{ Battery:"55 kWh", Range:"585 km (ARAI)", Motor:"167 hp / 215 Nm", Mileage:"~585 km/charge", "AC Charging":"11 kW", "DC Fast Charge":"70 kW", "Boot Space":"500 L", Airbags:"6", Touchscreen:"12.3-inch", Warranty:"3yr / 8yr battery" },
        interior:["ADAS Level 2","HUD","360° camera","Dual-zone climate","Arcade.ev","V2L + V2V"],
        exterior:["18-inch alloys","Panoramic glass roof","Flush door handles"],
        performance:["Motor: 167 hp","Torque: 215 Nm","0–100 km/h: ~8.5 sec","Fast 70 kW DC charging"],
        safety:["6 airbags","ADAS (AEB, LKA, BSW)","360° camera","RCTA"] }
    ]
  },
  {
    id: "kia-syros-ev-2026", brand: "Kia", name: "Syros EV", year: "2026",
    fuel: ["electric"], priceRange: "₹18.00 – 22.00 L (est.)",
    meta: ["~48 kWh battery (est.)","~160 hp motor","~450 km range (est.)"],
    colors: [{name:"Glacier White",hex:"#f0ede8"},{name:"Midnight Black",hex:"#161616"},{name:"Sage Green",hex:"#5a7a5a"},{name:"Steel Blue",hex:"#2a4a70"}],
    variants: [
      { name:"HTE (Base est.)", price:"₹18.00 L", specs:{ Battery:"~48 kWh (est.)", Range:"~400 km (est.)", Motor:"~150 hp", Mileage:"~400 km/charge (est.)", "AC Charging":"11 kW", "DC Fast Charge":"Yes", "Boot Space":"~465 L", Airbags:"6", Touchscreen:"10.67-inch", Warranty:"TBD / 8yr battery est." },
        interior:["6 airbags","10.67-inch screen","Closed grille EV design","Front charging port"],
        exterior:["EV-specific closed grille","Charging port front-left","LED lights"],
        performance:["Motor: ~150 hp est.","Range: ~400 km est.","Based on Syros ICE platform"],
        safety:["6 airbags","ABS + EBD","ESC","Rear camera"] },
      { name:"HTX+ (Mid est.)", price:"₹20.00 L", specs:{ Battery:"~48 kWh (est.)", Range:"~450 km (est.)", Motor:"~160 hp", Mileage:"~450 km/charge (est.)", "AC Charging":"11 kW", "DC Fast Charge":"Yes", "Boot Space":"~465 L", Airbags:"6", Touchscreen:"10.67-inch", Warranty:"TBD" },
        interior:["Panoramic sunroof","Wireless charging","Connected UVO","Rear AC vents"],
        exterior:["17-inch alloys","LED signature"],
        performance:["Motor: ~160 hp est.","Range: ~450 km est.","AWD variant expected"],
        safety:["6 airbags","ESC","Hill hold","TPMS","360° camera"] },
      { name:"GTX+ (Top est.)", price:"₹22.00 L", specs:{ Battery:"~48 kWh (est.)", Range:"~450 km (est.)", Motor:"~160 hp", Mileage:"~450 km/charge (est.)", "AC Charging":"11 kW", "DC Fast Charge":"Yes", "Boot Space":"~465 L", Airbags:"6", Touchscreen:"10.67-inch", Warranty:"TBD" },
        interior:["ADAS Level 2","HUD","Ventilated seats","Kia UVO Connect","65W USB-C"],
        exterior:["Starmap LED headlamps","Dual-tone roof"],
        performance:["Motor: ~160 hp est.","0–100 km/h: ~7.5 sec est."],
        safety:["6 airbags","ADAS (AEB, LKA, BSW)","360° camera","Blind spot"] }
    ]
  }
];

// ── Jargon highlighter ──
const JARGON_MAP = {
  "ICE": "Internal Combustion Engine — traditional petrol/diesel engine",
  "torque": "Rotational force from engine (Nm) — higher = stronger pulling power",
  "mileage": "Distance per litre of fuel (km/L). Higher = more economical",
  "fuel efficiency": "How far a car goes per litre of fuel",
  "ADAS": "Advanced Driver Assistance Systems — AEB, LKA, BSW and other safety tech",
  "AEB": "Automatic Emergency Braking — auto-applies brakes before a collision",
  "LKA": "Lane Keep Assist — steers back into lane if you drift",
  "BSW": "Blind Spot Warning — alerts when vehicles are in your blind zone",
  "ESC": "Electronic Stability Control — prevents skidding by controlling brakes",
  "DCT": "Dual Clutch Transmission — fast, smooth automatic gearbox",
  "CVT": "Continuously Variable Transmission — smooth gearbox, no fixed gears",
  "AMT": "Automated Manual Transmission — budget-friendly auto, can feel jerky",
  "DSG": "Direct Shift Gearbox — VW's quick DCT variant",
  "iMT": "Intelligent Manual Transmission — no clutch pedal needed",
  "MHEV": "Mild Hybrid Electric Vehicle — small electric assist, cannot run on EV alone",
  "kWh": "Kilowatt-hour — EV battery capacity unit, like fuel tank litres",
  "V2L": "Vehicle-to-Load — power home appliances from the EV battery",
  "V2V": "Vehicle-to-Vehicle — charge another EV from your car",
  "IP67": "Protection rating — dust-tight & withstands 1m water immersion for 30 min",
  "FWD": "Front Wheel Drive — power goes to front wheels only",
  "AWD": "All Wheel Drive — power to all four wheels for better grip",
  "GNCAP": "Global NCAP crash safety rating (1–5 stars, more = safer)",
  "TPMS": "Tyre Pressure Monitoring System — alerts for low tyre pressure",
  "BHP": "Brake Horsepower — engine power output",
  "DRL": "Daytime Running Lights — front LEDs that improve visibility",
  "turbocharged": "Engine boosted by forced air — more power, often better efficiency",
  "turbo": "Short for turbocharged",
  "ARAI": "Automotive Research Association of India — certifies range/mileage",
  "WLTP": "Worldwide Harmonised Light Vehicle Test Procedure — realistic range test standard",
};

function highlightJargon(text, isEV = false) {
  let result = text;
  Object.entries(JARGON_MAP).forEach(([term, def]) => {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi');
    result = result.replace(regex, (match) =>
      `<span class="jargon${isEV ? ' ev-jargon' : ''}">` +
      `${match}<span class="jargon-tip">${def}</span></span>`
    );
  });
  return result;
}

// ── Card renderer (shared) ──
const SPEC_SECTIONS = ['Specifications','Interior','Exterior','Performance','Safety'];
let _openCards = {}, _varIdx = {}, _secIdx = {};
let _selected = new Set();

function _carCard(car, linkPrefix = '') {
  const id = car.id;
  const isOpen = !!_openCards[id];
  const vi = _varIdx[id] || 0;
  const si = _secIdx[id] || 0;
  const v = car.variants[vi];
  const isEV = car.ev || car.fuel.includes('electric');

  const colorDots = car.colors.map((c, i) =>
    `<span class="color-thumb${i===0?' active':''}" style="background:${c.hex};" title="${c.name}" onclick="event.stopPropagation()"></span>`
  ).join('');

  const specContent = _renderSpecPanel(car, vi, si);

  return `
<div class="car-card${isEV?' ev-card':''}${_selected.has(id)?' selected':''}" id="cc-${id}" data-id="${id}" data-fuel="${car.fuel.join(',')}" data-year="${car.year}">
  <div class="car-header" onclick="toggleCard('${id}')">
    <div class="sel-box${_selected.has(id)?' on':''}" id="sb-${id}" onclick="event.stopPropagation();toggleSel('${id}')">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 5-5" stroke="#0e0f11" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="car-info">
      <div class="car-name">${car.name}<span class="yr-badge">${car.year}</span>${isEV?'<span class="ev-badge">EV</span>':''}</div>
      <div class="car-meta">${car.meta.map(m=>`<span>${m}</span>`).join('')}</div>
    </div>
    <div class="car-price"><div class="lbl">Price range</div><div class="val">${car.priceRange}</div></div>
    <div class="car-links">
      <a class="detail-link" href="${linkPrefix}vehicle-${id}.html" onclick="event.stopPropagation()">Details + 360° ↗</a>
    </div>
    <div class="expand-icon">⌄</div>
  </div>
  ${isOpen ? `
  <div class="car-details" style="display:block">
    <div class="variant-tabs">${car.variants.map((vv,i)=>`<div class="v-tab${i===vi?' active':''}" onclick="setVar('${id}',${i})">${vv.name}</div>`).join('')}</div>
    <div class="spec-wrap">
      <div class="spec-nav">${SPEC_SECTIONS.map((s,i)=>`<button class="sn-btn${i===si?' active':''}" onclick="setSec('${id}',${i})">${s}</button>`).join('')}</div>
      ${specContent}
    </div>
  </div>` : `<div class="car-details"></div>`}
</div>`;
}

function _renderSpecPanel(car, vi, si) {
  const v = car.variants[vi];
  const isEV = car.ev || car.fuel.includes('electric');
  const sec = SPEC_SECTIONS[si];

  if (sec === 'Specifications') {
    const entries = Object.entries(v.specs);
    return `<div class="price-line"><span class="pl">Ex-showroom price</span><span class="pv">${v.price}</span></div>
    <div class="spec-grid">${entries.map(([k,val])=>`<div class="spec-item"><div class="spec-k">${k}</div><div class="spec-v">${highlightJargon(String(val),isEV)}</div></div>`).join('')}</div>`;
  }
  const map = { Interior: v.interior, Exterior: v.exterior, Performance: v.performance, Safety: v.safety };
  const items = map[sec] || [];
  return `<div class="price-line"><span class="pl">Ex-showroom price</span><span class="pv">${v.price}</span></div>
  <div class="feature-list">${items.map(f=>`<span class="f-tag">${highlightJargon(f,isEV)}</span>`).join('')}</div>`;
}

function toggleCard(id) {
  _openCards[id] = !_openCards[id];
  _rerender(id);
}
function setVar(id, i) { _varIdx[id] = i; _openCards[id] = true; _rerender(id); }
function setSec(id, i) { _secIdx[id] = i; _openCards[id] = true; _rerender(id); }
function toggleSel(id) {
  if (_selected.has(id)) { _selected.delete(id); }
  else { if (_selected.size >= 4) { alert('Max 4 vehicles for comparison.'); return; } _selected.add(id); }
  _updateCompareBar();
  _rerender(id);
}
function _rerender(id) {
  const el = document.getElementById(`cc-${id}`);
  if (!el) return;
  const all = [...(window.ICE_CARS||[]),...(window.EV_CARS||[]),...(typeof ICE_CARS!='undefined'?ICE_CARS:[]),...(typeof EV_CARS!='undefined'?EV_CARS:[])];
  const uniq = [...new Map(all.map(c=>[c.id,c])).values()];
  const car = uniq.find(c => c.id === id);
  if (!car) return;
  const lp = el.closest('[data-linkprefix]')?.dataset.linkprefix || '';
  el.outerHTML = _carCard(car, lp);
}
function _updateCompareBar() {
  const bar = document.getElementById('compare-bar');
  const n = _selected.size;
  if (!bar) return;
  if (n > 0) {
    bar.classList.add('visible');
    document.getElementById('cmp-n').innerHTML = `<strong>${n}</strong> vehicle${n>1?'s':''} selected`;
  } else {
    bar.classList.remove('visible');
  }
}
function clearSel() {
  const prev = [..._selected];
  _selected.clear();
  _updateCompareBar();
  prev.forEach(id => _rerender(id));
}
function goCompare() {
  const ids = [..._selected].join(',');
  window.location.href = `compare.html?ids=${ids}`;
}

function renderGlossary() {
  return GLOSSARY.map(g=>`<div class="gl-item"><div class="gl-term">${g.term}</div><div class="gl-def">${g.def}</div></div>`).join('');
}
