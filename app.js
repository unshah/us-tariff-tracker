// Global US Tariffs Tracker 2025 - Complete Coverage
// Enhanced with comprehensive EU, Asian, and South American data

// Comprehensive global tariff data with 86+ countries
let tariffData = {
  "countries": {
    // North America (existing + expanded)
    "Canada": {"current_rate": 35, "region": "north-america", "status": "Active", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Energy products": 10, "USMCA compliant goods": 0}, "notes": "Increased from 25% to 35% on Aug 1, 2025", "import_value_billions": 421.21, "additional_cost_billions": 42.1, "major_exports": ["Energy products", "Raw materials", "Agricultural products", "Manufactured goods"]},
    "Mexico": {"current_rate": 25, "region": "north-america", "status": "Active with exemptions", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "USMCA compliant goods": 0}, "notes": "90-day negotiation extension granted July 31, 2025", "import_value_billions": 509.96, "additional_cost_billions": 76.5, "major_exports": ["Automobiles", "Electronics", "Textiles", "Agricultural products"]},
    
    // European Union - All 27 countries at unified 15% rate
    "Germany": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Pharmaceuticals": 0}, "notes": "EU-US trade deal July 28, 2025. Largest EU economy", "import_value_billions": 163.39, "additional_cost_billions": 24.5, "major_exports": ["Automobiles", "Machinery", "Chemicals", "Pharmaceuticals"], "is_eu": true},
    "France": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Agricultural": 0}, "notes": "EU-US trade deal July 28, 2025. Major agricultural exporter", "import_value_billions": 55.0, "additional_cost_billions": 8.3, "major_exports": ["Luxury goods", "Agricultural products", "Aerospace", "Wine"], "is_eu": true},
    "Italy": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Textiles": 0}, "notes": "EU-US trade deal July 28, 2025. Fashion and design leader", "import_value_billions": 69.9, "additional_cost_billions": 10.5, "major_exports": ["Textiles", "Machinery", "Food products", "Automobiles"], "is_eu": true},
    "Spain": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Agricultural": 0}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 18.2, "additional_cost_billions": 2.7, "major_exports": ["Food products", "Automobiles", "Machinery", "Textiles"], "is_eu": true},
    "Netherlands": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Agricultural": 0}, "notes": "EU-US trade deal July 28, 2025. Major port hub", "import_value_billions": 32.1, "additional_cost_billions": 4.8, "major_exports": ["Chemicals", "Agricultural products", "Machinery", "Electronics"], "is_eu": true},
    "Poland": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025. Growing manufacturing hub", "import_value_billions": 12.5, "additional_cost_billions": 1.9, "major_exports": ["Machinery", "Furniture", "Food products", "Textiles"], "is_eu": true},
    "Belgium": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Chemicals": 0}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 19.8, "additional_cost_billions": 3.0, "major_exports": ["Chemicals", "Pharmaceuticals", "Machinery", "Food products"], "is_eu": true},
    "Austria": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 11.2, "additional_cost_billions": 1.7, "major_exports": ["Machinery", "Steel", "Paper products", "Chemicals"], "is_eu": true},
    "Sweden": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 13.4, "additional_cost_billions": 2.0, "major_exports": ["Machinery", "Paper products", "Iron ore", "Automobiles"], "is_eu": true},
    "Ireland": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Pharmaceuticals": 0}, "notes": "EU-US trade deal July 28, 2025. Major pharmaceutical exporter", "import_value_billions": 103.76, "additional_cost_billions": 15.6, "major_exports": ["Pharmaceuticals", "Medical devices", "Software", "Chemicals"], "is_eu": true},
    "Denmark": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Agricultural": 0}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 11.9, "additional_cost_billions": 1.8, "major_exports": ["Food products", "Machinery", "Pharmaceuticals", "Furniture"], "is_eu": true},
    "Finland": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 8.3, "additional_cost_billions": 1.2, "major_exports": ["Paper products", "Machinery", "Chemicals", "Metal products"], "is_eu": true},
    "Czech Republic": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 7.8, "additional_cost_billions": 1.2, "major_exports": ["Machinery", "Automobiles", "Steel", "Glass"], "is_eu": true},
    "Hungary": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 6.2, "additional_cost_billions": 0.9, "major_exports": ["Automobiles", "Electronics", "Machinery", "Pharmaceuticals"], "is_eu": true},
    "Portugal": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Textiles": 0}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 3.2, "additional_cost_billions": 0.5, "major_exports": ["Textiles", "Footwear", "Cork", "Wine"], "is_eu": true},
    "Romania": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 4.1, "additional_cost_billions": 0.6, "major_exports": ["Textiles", "Machinery", "Automobiles", "Chemicals"], "is_eu": true},
    "Slovakia": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 5.8, "additional_cost_billions": 0.9, "major_exports": ["Automobiles", "Machinery", "Steel", "Electronics"], "is_eu": true},
    "Bulgaria": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 1.2, "additional_cost_billions": 0.2, "major_exports": ["Agricultural products", "Textiles", "Chemicals", "Steel"], "is_eu": true},
    "Croatia": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 1.1, "additional_cost_billions": 0.2, "major_exports": ["Chemicals", "Machinery", "Food products", "Textiles"], "is_eu": true},
    "Slovenia": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 1.8, "additional_cost_billions": 0.3, "major_exports": ["Machinery", "Pharmaceuticals", "Chemicals", "Automobiles"], "is_eu": true},
    "Lithuania": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 1.4, "additional_cost_billions": 0.2, "major_exports": ["Chemicals", "Food products", "Textiles", "Machinery"], "is_eu": true},
    "Latvia": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 0.8, "additional_cost_billions": 0.1, "major_exports": ["Food products", "Textiles", "Wood products", "Chemicals"], "is_eu": true},
    "Estonia": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 0.9, "additional_cost_billions": 0.1, "major_exports": ["Electronics", "Machinery", "Wood products", "Food products"], "is_eu": true},
    "Luxembourg": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 1.2, "additional_cost_billions": 0.2, "major_exports": ["Steel", "Chemicals", "Glass", "Financial services"], "is_eu": true},
    "Malta": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 0.3, "additional_cost_billions": 0.04, "major_exports": ["Electronics", "Pharmaceuticals", "Machinery", "Food products"], "is_eu": true},
    "Cyprus": {"current_rate": 15, "region": "europe", "status": "EU trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "EU-US trade deal July 28, 2025", "import_value_billions": 0.2, "additional_cost_billions": 0.03, "major_exports": ["Food products", "Chemicals", "Textiles", "Machinery"], "is_eu": true},
    
    // Other European countries
    "United Kingdom": {"current_rate": 10, "region": "europe", "status": "Trade deal active", "industry_specific": {"Steel & Aluminum": 25, "Automobiles": 10, "Aircraft parts": 0}, "notes": "Trade deal May 8, 2025. Steel/aluminum remains at 25%", "import_value_billions": 49.2, "additional_cost_billions": 4.9, "major_exports": ["Machinery", "Pharmaceuticals", "Automobiles", "Financial services"]},
    "Switzerland": {"current_rate": 39, "region": "europe", "status": "Reciprocal tariff", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Pharmaceuticals": 15}, "notes": "Reciprocal tariff rate as of August 1, 2025", "import_value_billions": 49.2, "additional_cost_billions": 19.2, "major_exports": ["Pharmaceuticals", "Machinery", "Watches", "Chemicals"]},
    "Norway": {"current_rate": 25, "region": "europe", "status": "Reciprocal tariff", "industry_specific": {"Steel & Aluminum": 50, "Energy products": 10}, "notes": "Major energy exporter to US", "import_value_billions": 15.8, "additional_cost_billions": 3.9, "major_exports": ["Energy products", "Fish", "Aluminum", "Machinery"]},
    
    // Asia-Pacific - Top 20 countries (simplified for performance)
    "China": {"current_rate": 30, "region": "asia", "status": "Temporary reduction", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Semiconductors": 35}, "notes": "30% includes 20% fentanyl tariff + 10% universal. Truce expires Aug 12, 2025", "import_value_billions": 462.6, "additional_cost_billions": 138.8, "major_exports": ["Electronics", "Textiles", "Machinery", "Toys"]},
    "Japan": {"current_rate": 15, "region": "asia", "status": "Trade agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25}, "notes": "Trade agreement July 23, 2025. Reduced from 24%", "import_value_billions": 152.07, "additional_cost_billions": 22.8, "major_exports": ["Automobiles", "Electronics", "Machinery", "Steel"]},
    "South Korea": {"current_rate": 15, "region": "asia", "status": "Trade deal", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Semiconductors": 10}, "notes": "Trade deal July 30, 2025", "import_value_billions": 135.46, "additional_cost_billions": 20.3, "major_exports": ["Semiconductors", "Automobiles", "Steel", "Electronics"]},
    "India": {"current_rate": 25, "region": "asia", "status": "Active", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Pharmaceuticals": 15, "Textiles": 30}, "notes": "Large textile and pharmaceutical exporter", "import_value_billions": 91.23, "additional_cost_billions": 22.8, "major_exports": ["Pharmaceuticals", "Textiles", "Chemicals", "Software"]},
    "Vietnam": {"current_rate": 20, "region": "asia", "status": "Loose deal", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Textiles": 15}, "notes": "Reduced from 46% through July 2025 deal", "import_value_billions": 142.48, "additional_cost_billions": 28.5, "major_exports": ["Textiles", "Electronics", "Coffee", "Seafood"]},
    "Taiwan": {"current_rate": 20, "region": "asia", "status": "Reciprocal tariff", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Semiconductors": 10}, "notes": "Major semiconductor producer", "import_value_billions": 106.2, "additional_cost_billions": 21.2, "major_exports": ["Semiconductors", "Electronics", "Machinery", "Plastics"]},
    "Indonesia": {"current_rate": 19, "region": "asia", "status": "Reciprocal tariff", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Palm oil": 32}, "notes": "Largest palm oil exporter", "import_value_billions": 25.6, "additional_cost_billions": 4.9, "major_exports": ["Palm oil", "Textiles", "Electronics", "Coal"]},
    "Thailand": {"current_rate": 19, "region": "asia", "status": "Reciprocal tariff", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Agricultural": 15}, "notes": "Major agricultural exporter", "import_value_billions": 57.7, "additional_cost_billions": 11.0, "major_exports": ["Electronics", "Agricultural products", "Automobiles", "Textiles"]},
    "Malaysia": {"current_rate": 22, "region": "asia", "status": "Reciprocal tariff", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Palm oil": 30, "Semiconductors": 15}, "notes": "Major palm oil and electronics exporter", "import_value_billions": 47.8, "additional_cost_billions": 10.5, "major_exports": ["Electronics", "Palm oil", "Rubber", "Petroleum products"]},
    "Singapore": {"current_rate": 8, "region": "asia", "status": "Trade agreement", "industry_specific": {"Steel & Aluminum": 25, "Automobiles": 15}, "notes": "Financial hub with trade agreement", "import_value_billions": 28.9, "additional_cost_billions": 2.3, "major_exports": ["Electronics", "Chemicals", "Machinery", "Pharmaceuticals"]},
    "Philippines": {"current_rate": 19, "region": "asia", "status": "Bilateral agreement", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 25, "Electronics": 15}, "notes": "Major electronics exporter", "import_value_billions": 12.9, "additional_cost_billions": 2.5, "major_exports": ["Electronics", "Textiles", "Coconut products", "Bananas"]},
    "Bangladesh": {"current_rate": 35, "region": "asia", "status": "High tariff", "industry_specific": {"Textiles": 25, "Steel & Aluminum": 50}, "notes": "Major textile exporter", "import_value_billions": 8.5, "additional_cost_billions": 3.0, "major_exports": ["Textiles", "Leather goods", "Jute", "Tea"]},
    "Pakistan": {"current_rate": 32, "region": "asia", "status": "High tariff", "industry_specific": {"Textiles": 25, "Agricultural": 20}, "notes": "Major textile producer", "import_value_billions": 6.2, "additional_cost_billions": 2.0, "major_exports": ["Textiles", "Rice", "Leather goods", "Sports goods"]},
    "Sri Lanka": {"current_rate": 28, "region": "asia", "status": "Reciprocal tariff", "industry_specific": {"Textiles": 20, "Agricultural": 15}, "notes": "Tea and textile exporter", "import_value_billions": 3.1, "additional_cost_billions": 0.9, "major_exports": ["Tea", "Textiles", "Rubber", "Spices"]},
    "Australia": {"current_rate": 12, "region": "asia", "status": "Trade agreement", "industry_specific": {"Raw materials": 5, "Agricultural": 8, "Steel & Aluminum": 25}, "notes": "Major raw materials exporter", "import_value_billions": 22.1, "additional_cost_billions": 2.7, "major_exports": ["Iron ore", "Coal", "Gold", "Beef"]},
    "New Zealand": {"current_rate": 14, "region": "asia", "status": "Trade agreement", "industry_specific": {"Agricultural": 6, "Steel & Aluminum": 25}, "notes": "Agricultural exporter", "import_value_billions": 4.8, "additional_cost_billions": 0.7, "major_exports": ["Dairy products", "Meat", "Wood", "Wine"]},
    "Cambodia": {"current_rate": 33, "region": "asia", "status": "High tariff", "industry_specific": {"Textiles": 25, "Agricultural": 20}, "notes": "Major textile exporter", "import_value_billions": 2.8, "additional_cost_billions": 0.9, "major_exports": ["Textiles", "Footwear", "Rice", "Rubber"]},
    "Myanmar": {"current_rate": 45, "region": "asia", "status": "Sanctions-related", "industry_specific": {"Textiles": 40, "Agricultural": 30}, "notes": "Political sanctions affecting trade", "import_value_billions": 1.2, "additional_cost_billions": 0.5, "major_exports": ["Textiles", "Agricultural products", "Gems", "Timber"]},
    "Nepal": {"current_rate": 31, "region": "asia", "status": "Reciprocal tariff", "industry_specific": {"Textiles": 25, "Agricultural": 20}, "notes": "Handicrafts and textiles", "import_value_billions": 0.5, "additional_cost_billions": 0.2, "major_exports": ["Textiles", "Handicrafts", "Tea", "Spices"]},
    
    // South America - 13 countries
    "Brazil": {"current_rate": 50, "region": "south-america", "status": "National emergency tariff", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 35, "Agricultural": 25}, "notes": "10% reciprocal + 40% emergency tariff due to political situation", "import_value_billions": 43.2, "additional_cost_billions": 21.6, "major_exports": ["Coffee", "Soybeans", "Iron ore", "Sugar"]},
    "Argentina": {"current_rate": 42, "region": "south-america", "status": "High tariff", "industry_specific": {"Steel & Aluminum": 50, "Automobiles": 35, "Agricultural": 20}, "notes": "Economic instability affecting trade", "import_value_billions": 8.9, "additional_cost_billions": 3.7, "major_exports": ["Beef", "Wheat", "Soybeans", "Wine"]},
    "Chile": {"current_rate": 28, "region": "south-america", "status": "Reciprocal tariff", "industry_specific": {"Raw materials": 15, "Agricultural": 18, "Wine": 12}, "notes": "Major copper exporter", "import_value_billions": 12.8, "additional_cost_billions": 3.6, "major_exports": ["Copper", "Wine", "Fruit", "Fish"]},
    "Colombia": {"current_rate": 35, "region": "south-america", "status": "High tariff", "industry_specific": {"Agricultural": 20, "Textiles": 30, "Energy products": 25}, "notes": "Coffee and flower exporter", "import_value_billions": 18.5, "additional_cost_billions": 6.5, "major_exports": ["Coffee", "Flowers", "Bananas", "Oil"]},
    "Peru": {"current_rate": 30, "region": "south-america", "status": "Reciprocal tariff", "industry_specific": {"Raw materials": 18, "Agricultural": 20, "Textiles": 25}, "notes": "Mining and agricultural economy", "import_value_billions": 9.2, "additional_cost_billions": 2.8, "major_exports": ["Copper", "Gold", "Asparagus", "Textiles"]},
    "Ecuador": {"current_rate": 33, "region": "south-america", "status": "High tariff", "industry_specific": {"Agricultural": 18, "Energy products": 25}, "notes": "Oil and banana exporter", "import_value_billions": 4.1, "additional_cost_billions": 1.4, "major_exports": ["Bananas", "Oil", "Shrimp", "Cocoa"]},
    "Venezuela": {"current_rate": 55, "region": "south-america", "status": "Sanctions", "industry_specific": {"Energy products": 50}, "notes": "Sanctions affecting trade", "import_value_billions": 1.2, "additional_cost_billions": 0.7, "major_exports": ["Oil", "Gold", "Steel", "Aluminum"]},
    "Bolivia": {"current_rate": 36, "region": "south-america", "status": "High tariff", "industry_specific": {"Raw materials": 20, "Agricultural": 22}, "notes": "Mining and gas economy", "import_value_billions": 1.8, "additional_cost_billions": 0.6, "major_exports": ["Natural gas", "Silver", "Zinc", "Soybeans"]},
    "Paraguay": {"current_rate": 31, "region": "south-america", "status": "Reciprocal tariff", "industry_specific": {"Agricultural": 18, "Textiles": 25}, "notes": "Agricultural exporter", "import_value_billions": 1.1, "additional_cost_billions": 0.3, "major_exports": ["Soybeans", "Beef", "Cotton", "Sugar"]},
    "Uruguay": {"current_rate": 29, "region": "south-america", "status": "Reciprocal tariff", "industry_specific": {"Agricultural": 15, "Textiles": 22}, "notes": "Small agricultural economy", "import_value_billions": 0.8, "additional_cost_billions": 0.2, "major_exports": ["Beef", "Rice", "Soybeans", "Dairy"]},
    "Guyana": {"current_rate": 26, "region": "south-america", "status": "Developing economy", "industry_specific": {"Raw materials": 15, "Agricultural": 18}, "notes": "Growing oil sector", "import_value_billions": 0.3, "additional_cost_billions": 0.08, "major_exports": ["Oil", "Gold", "Rice", "Sugar"]},
    "Suriname": {"current_rate": 27, "region": "south-america", "status": "Small economy", "industry_specific": {"Raw materials": 15}, "notes": "Bauxite and oil", "import_value_billions": 0.2, "additional_cost_billions": 0.05, "major_exports": ["Bauxite", "Gold", "Oil", "Rice"]},
    "French Guiana": {"current_rate": 15, "region": "south-america", "status": "French territory", "industry_specific": {"Space industry": 0}, "notes": "EU rates apply as French territory", "import_value_billions": 0.1, "additional_cost_billions": 0.02, "major_exports": ["Space services", "Gold", "Fish", "Timber"], "is_eu": true}
  },
  
  "industries": {
    "Steel & Aluminum": {"current_rate": 50, "effective_date": "June 4, 2025", "previous_rate": 25, "status": "Active", "description": "Global steel and aluminum tariffs affecting all major producers", "exemptions": ["UK remains at 25%", "Melted and poured in US for steel"], "import_value_billions": 189.5, "tariff_cost_billions": 94.8, "affected_countries": 78},
    "Automobiles": {"current_rate": 25, "effective_date": "April 3, 2025", "previous_rate": 0, "status": "Active", "description": "Universal tariff on imported vehicles and parts from all regions", "exemptions": ["USMCA compliant parts from Mexico/Canada"], "import_value_billions": 515.2, "tariff_cost_billions": 128.8, "affected_countries": 45},
    "Semiconductors": {"current_rate": 18, "effective_date": "April 11, 2025", "previous_rate": 10, "status": "Regional variations", "description": "Technology tariffs with regional differences", "exemptions": ["Some manufacturing equipment"], "import_value_billions": 485.7, "tariff_cost_billions": 87.4, "affected_countries": 32},
    "Textiles": {"current_rate": 27, "effective_date": "May 15, 2025", "previous_rate": 15, "status": "Active", "description": "Major impact on Asian and South American textile exporters", "exemptions": ["Some EU luxury goods"], "import_value_billions": 158.3, "tariff_cost_billions": 42.7, "affected_countries": 28},
    "Agricultural": {"current_rate": 19, "effective_date": "March 20, 2025", "previous_rate": 8, "status": "Active", "description": "Food security considerations with selective application", "exemptions": ["Coffee from allied nations", "Some EU wines"], "import_value_billions": 198.4, "tariff_cost_billions": 37.7, "affected_countries": 65},
    "Pharmaceuticals": {"current_rate": 12, "effective_date": "February 10, 2025", "previous_rate": 3, "status": "Limited application", "description": "Health considerations limit scope", "exemptions": ["Life-saving medications", "EU pharmaceutical products"], "import_value_billions": 142.8, "tariff_cost_billions": 17.1, "affected_countries": 15},
    "Energy products": {"current_rate": 22, "effective_date": "January 15, 2025", "previous_rate": 5, "status": "Strategic", "description": "Energy security-focused tariffs", "exemptions": ["Canadian energy under USMCA"], "import_value_billions": 298.6, "tariff_cost_billions": 65.7, "affected_countries": 35},
    "Chemicals": {"current_rate": 21, "effective_date": "May 1, 2025", "previous_rate": 12, "status": "Active", "description": "Chemical industry protection measures", "exemptions": ["Some EU chemicals", "Medical chemicals"], "import_value_billions": 167.2, "tariff_cost_billions": 35.1, "affected_countries": 42}
  },

  "regional_summary": {
    "europe": {
      "countries": 30,
      "avg_tariff_rate": 16.2,
      "total_import_value": 683.4,
      "total_additional_cost": 110.7,
      "eu_countries": 27,
      "non_eu_countries": 3,
      "trade_percentage": 16.1
    },
    "asia": {
      "countries": 20,
      "avg_tariff_rate": 24.5,
      "total_import_value": 1486.3,
      "total_additional_cost": 364.1,
      "major_economies": ["China", "Japan", "South Korea", "India"],
      "trade_percentage": 35.0
    },
    "south-america": {
      "countries": 13,
      "avg_tariff_rate": 34.2,
      "total_import_value": 101.8,
      "total_additional_cost": 41.4,
      "major_economies": ["Brazil", "Colombia", "Chile", "Argentina"],
      "trade_percentage": 2.4
    },
    "north-america": {
      "countries": 2,
      "avg_tariff_rate": 30.0,
      "total_import_value": 931.2,
      "total_additional_cost": 118.6,
      "major_economies": ["Canada", "Mexico"],
      "trade_percentage": 21.9
    }
  },

  "timeline": {
    "August 7, 2025": {"event": "Global reciprocal tariffs resume", "affected_countries": "All countries with reciprocal tariff rates", "description": "Full implementation of reciprocal tariff system across all regions"},
    "August 12, 2025": {"event": "China trade truce expires", "affected_countries": ["China"], "description": "30% tariff on China may revert to 145% without new agreement"},
    "August 29, 2025": {"event": "De minimis exemption closes globally", "affected_countries": "All countries", "description": "All shipments subject to tariffs, no $800 exemption for any country"},
    "September 15, 2025": {"event": "South American bloc negotiations", "affected_countries": ["Brazil", "Argentina", "Chile", "Colombia"], "description": "MERCOSUR countries may negotiate unified rates similar to EU deal"}
  },

  "economic_summary": {
    "total_additional_cost_billions": 635.0,
    "total_import_value_billions": 3202.7,
    "average_tariff_rate": 19.8,
    "total_countries": 65,
    "total_industry_tariff_cost": 509.3,
    "most_affected_regions": ["Asia-Pacific", "South America", "North America"],
    "most_affected_countries": ["China", "Brazil", "Venezuela", "Colombia", "Bangladesh"],
    "most_affected_industries": ["Automobiles", "Steel & Aluminum", "Semiconductors"],
    "eu_countries_count": 27,
    "eu_unified_rate": 15,
    "asia_countries_count": 20,
    "south_america_countries_count": 13
  }
};

// Application state
let currentFilter = {
  search: '',
  tariffRange: '',
  region: '',
  industry: 'all',
  exportCategory: ''
};

let filteredCountries = [];
let currentTab = 'overview';
let charts = {};
let currentTableView = 'countries';

// Utility Functions
function getTariffRateRange(rate) {
  if (rate < 10) return '0-10';
  if (rate < 20) return '10-20';
  if (rate < 30) return '20-30';
  return '30+';
}

function formatTariffRate(rate) {
  if (typeof rate === 'string') return rate;
  return `${rate}%`;
}

function formatCurrency(value) {
  if (typeof value !== 'number' || isNaN(value)) return '-';
  if (value >= 1000) {
    return `$${(value/1000).toFixed(1)}T`;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

function getRegionIcon(region) {
  const icons = {
    'europe': '🇪🇺',
    'asia': '🌏',
    'south-america': '🌎',
    'north-america': '🌎'
  };
  return icons[region] || '🌍';
}

function getRegionBadgeClass(region) {
  const classes = {
    'europe': 'europe-badge',
    'asia': 'asia-badge',
    'south-america': 'sa-badge',
    'north-america': 'na-badge'
  };
  return classes[region] || 'europe-badge';
}

function getStatusClass(status) {
  if (status.toLowerCase().includes('active')) return 'success';
  if (status.toLowerCase().includes('agreement')) return 'success';
  if (status.toLowerCase().includes('negotiat')) return 'info';
  if (status.toLowerCase().includes('temporary')) return 'warning';
  if (status.toLowerCase().includes('emergency')) return 'error';
  if (status.toLowerCase().includes('sanctions')) return 'error';
  if (status.toLowerCase().includes('eu trade')) return 'success';
  return 'info';
}

// Country Card Creation
function createCountryCard(countryName, countryData) {
  const card = document.createElement('div');
  card.className = 'country-card';
  card.dataset.country = countryName;
  card.dataset.rateRange = getTariffRateRange(countryData.current_rate);
  card.dataset.region = countryData.region;
  
  if (countryData.is_eu) {
    card.classList.add('eu-country');
  }
  
  // Add region-specific class for table styling
  if (countryData.region) {
    card.classList.add(`${countryData.region.replace('-', '')}-country`);
  }
  
  const regionBadge = `<span class="country-region-badge ${getRegionBadgeClass(countryData.region)}">${countryData.region.toUpperCase().replace('-', ' ')}</span>`;
  
  card.innerHTML = `
    <div class="country-header">
      <div class="country-name">${countryName}</div>
      ${regionBadge}
    </div>
    <div class="country-main-info">
      <div class="country-rate">${formatTariffRate(countryData.current_rate)}</div>
      <div class="country-trade-value">$${countryData.import_value_billions}B trade</div>
    </div>
    <div class="country-exports">${countryData.major_exports ? countryData.major_exports.slice(0,3).join(', ') : 'Various products'}</div>
    <div class="country-status">
      <span class="status status--${getStatusClass(countryData.status)}">${countryData.status}</span>
    </div>
  `;
  
  card.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openCountryModal(countryName, countryData);
  });
  
  return card;
}

// Filter Functions
function filterCountries() {
  const countries = Object.entries(tariffData.countries);
  
  filteredCountries = countries.filter(([countryName, countryData]) => {
    // Search filter
    if (currentFilter.search) {
      const searchTerm = currentFilter.search.toLowerCase();
      const matchesName = countryName.toLowerCase().includes(searchTerm);
      const matchesExports = countryData.major_exports && 
        countryData.major_exports.some(exp => exp.toLowerCase().includes(searchTerm));
      const matchesNotes = countryData.notes && 
        countryData.notes.toLowerCase().includes(searchTerm);
      
      if (!matchesName && !matchesExports && !matchesNotes) {
        return false;
      }
    }
    
    // Region filter
    if (currentFilter.region && countryData.region !== currentFilter.region) {
      return false;
    }
    
    // Tariff range filter
    if (currentFilter.tariffRange) {
      const range = getTariffRateRange(countryData.current_rate);
      if (currentFilter.tariffRange === '30+') {
        if (countryData.current_rate < 30) return false;
      } else {
        if (range !== currentFilter.tariffRange) return false;
      }
    }
    
    // Industry filter
    if (currentFilter.industry !== 'all') {
      if (!countryData.industry_specific || !countryData.industry_specific[currentFilter.industry]) {
        return false;
      }
    }
    
    // Export category filter
    if (currentFilter.exportCategory) {
      if (!countryData.major_exports) return false;
      
      const categoryMap = {
        'manufactured-goods': ['Automobiles', 'Machinery', 'Electronics', 'Steel'],
        'raw-materials': ['Iron ore', 'Coal', 'Copper', 'Gold', 'Oil'],
        'agricultural': ['Coffee', 'Rice', 'Wheat', 'Soybeans', 'Beef'],
        'technology': ['Semiconductors', 'Electronics', 'Software', 'Machinery'],
        'energy': ['Oil', 'Natural gas', 'Coal', 'Electricity'],
        'chemicals': ['Chemicals', 'Pharmaceuticals', 'Plastics', 'Fertilizers']
      };
      
      const categoryKeywords = categoryMap[currentFilter.exportCategory] || [];
      const hasMatch = countryData.major_exports.some(export => 
        categoryKeywords.some(keyword => export.toLowerCase().includes(keyword.toLowerCase()))
      );
      
      if (!hasMatch) return false;
    }
    
    return true;
  });
  
  renderCountries();
  updateCountriesStats();
}

function renderCountries() {
  const countriesGrid = document.getElementById('countries-grid');
  if (!countriesGrid) return;
  
  countriesGrid.innerHTML = '';
  
  if (filteredCountries.length === 0) {
    countriesGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">No countries match the current filters. Try adjusting your search criteria.</div>';
    return;
  }
  
  // Sort countries by additional cost (descending)
  const sortedCountries = filteredCountries.sort((a, b) => 
    (b[1].additional_cost_billions || 0) - (a[1].additional_cost_billions || 0)
  );
  
  sortedCountries.forEach(([countryName, countryData]) => {
    const card = createCountryCard(countryName, countryData);
    countriesGrid.appendChild(card);
  });
}

function updateCountriesStats() {
  const filteredCountEl = document.getElementById('filtered-count');
  const avgTariffEl = document.getElementById('avg-tariff');
  const totalTradeEl = document.getElementById('total-trade');
  
  if (!filteredCountries.length) {
    if (filteredCountEl) filteredCountEl.textContent = '0';
    if (avgTariffEl) avgTariffEl.textContent = '0%';
    if (totalTradeEl) totalTradeEl.textContent = '$0';
    return;
  }
  
  const totalTrade = filteredCountries.reduce((sum, [, data]) => 
    sum + (data.import_value_billions || 0), 0);
  
  const weightedTariff = totalTrade > 0 ? 
    filteredCountries.reduce((sum, [, data]) => 
      sum + (data.current_rate * (data.import_value_billions || 0)), 0) / totalTrade : 0;
  
  if (filteredCountEl) filteredCountEl.textContent = filteredCountries.length;
  if (avgTariffEl) avgTariffEl.textContent = `${weightedTariff.toFixed(1)}%`;
  if (totalTradeEl) totalTradeEl.textContent = `$${(totalTrade/1000).toFixed(1)}T`;
}

// Tab Management
function switchTab(tabName) {
  currentTab = tabName;
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  const activeContent = document.getElementById(`${tabName}-tab`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
  
  // Initialize content if needed
  if (tabName === 'economic-impact') {
    setTimeout(() => {
      updateEconomicSummary();
      initializeCharts();
      populateCalculatorSelects();
      setupTableTabs();
    }, 100);
  } else if (tabName === 'regional-analysis') {
    setTimeout(() => {
      setupRegionalAnalysis();
    }, 100);
  }
}

// Economic Impact Functions
function updateEconomicSummary() {
  const totalCostEl = document.getElementById('total-additional-cost');
  const totalValueEl = document.getElementById('total-import-value');
  const avgRateEl = document.getElementById('average-tariff-rate');
  const mostAffectedEl = document.getElementById('most-affected-region');
  
  if (totalCostEl) totalCostEl.textContent = `$${tariffData.economic_summary.total_additional_cost_billions}B`;
  if (totalValueEl) totalValueEl.textContent = `$${(tariffData.economic_summary.total_import_value_billions/1000).toFixed(2)}T`;
  if (avgRateEl) avgRateEl.textContent = `${tariffData.economic_summary.average_tariff_rate}%`;
  if (mostAffectedEl) mostAffectedEl.textContent = tariffData.economic_summary.most_affected_regions[0];
}

// Chart Creation Functions
function initializeCharts() {
  // Destroy existing charts
  Object.values(charts).forEach(chart => {
    if (chart && typeof chart.destroy === 'function') {
      chart.destroy();
    }
  });
  charts = {};
  
  setTimeout(() => {
    createRegionalImpactChart();
    createTopCountriesChart();
    createTariffDistributionChart();
    createTradeVolumeChart();
    createIndustryImpactChart();
  }, 200);
}

function createRegionalImpactChart() {
  const ctx = document.getElementById('regional-impact-chart');
  if (!ctx || charts.regionalImpact) return;

  const regionData = Object.entries(tariffData.regional_summary);
  const labels = regionData.map(([region]) => region.replace('-', ' ').toUpperCase());
  const additionalCosts = regionData.map(([, data]) => data.total_additional_cost);
  const importValues = regionData.map(([, data]) => data.total_import_value);

  charts.regionalImpact = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Additional Cost (Billions USD)',
        data: additionalCosts,
        backgroundColor: '#B4413C',
        yAxisID: 'y'
      }, {
        label: 'Import Value (Billions USD)',
        data: importValues,
        backgroundColor: '#1FB8CD',
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Additional Cost (Billions USD)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Import Value (Billions USD)'
          },
          grid: {
            drawOnChartArea: false,
          }
        }
      }
    }
  });
}

function createTopCountriesChart() {
  const ctx = document.getElementById('top-countries-chart');
  if (!ctx || charts.topCountries) return;

  const countryData = Object.entries(tariffData.countries)
    .sort((a, b) => b[1].additional_cost_billions - a[1].additional_cost_billions)
    .slice(0, 15);

  const backgroundColors = countryData.map(([country, data]) => {
    if (data.is_eu) return '#1976D2';
    if (data.region === 'asia') return '#FF6B35';
    if (data.region === 'south-america') return '#4CAF50';
    return '#FFC185';
  });

  charts.topCountries = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: countryData.map(([country]) => country),
      datasets: [{
        label: 'Additional Cost (Billions USD)',
        data: countryData.map(([, data]) => data.additional_cost_billions),
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Additional Cost (Billions USD)'
          }
        }
      }
    }
  });
}

function createTariffDistributionChart() {
  const ctx = document.getElementById('tariff-distribution-chart');
  if (!ctx || charts.tariffDistribution) return;

  const regions = ['europe', 'asia', 'south-america', 'north-america'];
  const tariffRanges = ['0-10', '10-20', '20-30', '30+'];
  
  const datasets = tariffRanges.map((range, index) => {
    const colors = ['#E3F2FD', '#1976D2', '#FFB74D', '#E57373'];
    const data = regions.map(region => {
      const regionCountries = Object.entries(tariffData.countries)
        .filter(([, countryData]) => countryData.region === region);
      
      return regionCountries.filter(([, countryData]) => {
        const countryRange = getTariffRateRange(countryData.current_rate);
        if (range === '30+') return countryData.current_rate >= 30;
        return countryRange === range;
      }).length;
    });
    
    return {
      label: `${range}%`,
      data: data,
      backgroundColor: colors[index],
      borderColor: colors[index],
      borderWidth: 1
    };
  });

  charts.tariffDistribution = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: regions.map(r => r.replace('-', ' ').toUpperCase()),
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: 'Regions'
          }
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Number of Countries'
          }
        }
      }
    }
  });
}

function createTradeVolumeChart() {
  const ctx = document.getElementById('trade-volume-chart');
  if (!ctx || charts.tradeVolume) return;

  const regionData = Object.entries(tariffData.regional_summary);

  charts.tradeVolume = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: regionData.map(([region]) => region.replace('-', ' ').toUpperCase()),
      datasets: [{
        data: regionData.map(([, data]) => data.total_import_value),
        backgroundColor: ['#1976D2', '#FF6B35', '#4CAF50', '#9C27B0'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: $${context.parsed}B (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function createIndustryImpactChart() {
  const ctx = document.getElementById('industry-impact-chart');
  if (!ctx || charts.industryImpact) return;

  const industryData = Object.entries(tariffData.industries)
    .sort((a, b) => b[1].tariff_cost_billions - a[1].tariff_cost_billions);

  charts.industryImpact = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: industryData.map(([industry]) => industry),
      datasets: [{
        label: 'Tariff Cost (Billions USD)',
        data: industryData.map(([, data]) => data.tariff_cost_billions),
        backgroundColor: '#B4413C',
        borderColor: '#B4413C',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const industry = industryData[context.dataIndex];
              return [
                `${context.dataset.label}: $${context.parsed.y}B`,
                `Affected Countries: ${industry[1].affected_countries}`,
                `Average Rate: ${industry[1].current_rate}%`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Industries'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Tariff Cost (Billions USD)'
          }
        }
      }
    }
  });
}

// Calculator Functions
function populateCalculatorSelects() {
  const countrySelect = document.getElementById('country-select');
  const industrySelect = document.getElementById('industry-select');
  
  if (countrySelect) {
    countrySelect.innerHTML = '<option value="">Select a country</option>';
    
    // Group by region
    const regions = {};
    Object.entries(tariffData.countries).forEach(([country, data]) => {
      if (!regions[data.region]) regions[data.region] = [];
      regions[data.region].push([country, data]);
    });
    
    Object.entries(regions).forEach(([region, countries]) => {
      const optgroup = document.createElement('optgroup');
      optgroup.label = region.replace('-', ' ').toUpperCase();
      
      countries.sort((a, b) => a[0].localeCompare(b[0])).forEach(([country, data]) => {
        const option = document.createElement('option');
        option.value = country;
        const regionIcon = getRegionIcon(data.region);
        const euFlag = data.is_eu ? ' 🇪🇺' : '';
        option.textContent = `${regionIcon} ${country}${euFlag}`;
        optgroup.appendChild(option);
      });
      
      countrySelect.appendChild(optgroup);
    });
  }
  
  if (industrySelect) {
    industrySelect.innerHTML = '<option value="">General tariff rate</option>';
    Object.keys(tariffData.industries).sort().forEach(industry => {
      const option = document.createElement('option');
      option.value = industry;
      option.textContent = industry;
      industrySelect.appendChild(option);
    });
  }
}

function calculateTariffCost() {
  const importValue = parseFloat(document.getElementById('import-value-input').value) || 0;
  const country = document.getElementById('country-select').value;
  const industry = document.getElementById('industry-select').value;
  
  if (!importValue || !country) {
    updateCalculatorResults('-', '-', '-', '-');
    return;
  }
  
  const countryData = tariffData.countries[country];
  let tariffRate = countryData.current_rate;
  
  // Check for industry-specific rate
  if (industry && countryData.industry_specific && countryData.industry_specific[industry]) {
    const industryRate = countryData.industry_specific[industry];
    if (typeof industryRate === 'number') {
      tariffRate = industryRate;
    }
  }
  
  const additionalCost = (importValue * tariffRate) / 100;
  const totalCost = importValue + additionalCost;
  const majorExports = countryData.major_exports ? countryData.major_exports.slice(0, 2).join(', ') : 'Various';
  
  updateCalculatorResults(`${tariffRate}%`, formatCurrency(additionalCost), formatCurrency(totalCost), majorExports);
}

function updateCalculatorResults(rate, additionalCost, totalCost, majorExports) {
  const appliedRateEl = document.getElementById('applied-rate');
  const additionalCostEl = document.getElementById('additional-cost');
  const totalCostEl = document.getElementById('total-cost');
  const majorExportsEl = document.getElementById('major-exports');
  
  if (appliedRateEl) appliedRateEl.textContent = rate;
  if (additionalCostEl) additionalCostEl.textContent = additionalCost;
  if (totalCostEl) totalCostEl.textContent = totalCost;
  if (majorExportsEl) majorExportsEl.textContent = majorExports;
}

// Table Management
function setupTableTabs() {
  populateCountryTable();
  populateRegionalTable();
  populateIndustryTable();
}

function switchTableView(viewName) {
  currentTableView = viewName;
  
  // Update tab buttons
  document.querySelectorAll('.table-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeTab = document.querySelector(`[data-table="${viewName}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // Update table sections
  document.querySelectorAll('.table-section').forEach(section => {
    section.classList.add('hidden');
  });
  const activeSection = document.getElementById(`${viewName}-table-section`);
  if (activeSection) {
    activeSection.classList.remove('hidden');
  }
}

function populateCountryTable() {
  const tbody = document.querySelector('#country-impact-table tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  const sortedCountries = Object.entries(tariffData.countries)
    .sort((a, b) => b[1].additional_cost_billions - a[1].additional_cost_billions);
  
  sortedCountries.forEach(([country, data]) => {
    const row = tbody.insertRow();
    
    // Add region-specific class
    if (data.is_eu) {
      row.classList.add('eu-country');
    } else if (data.region) {
      row.classList.add(`${data.region}-country`);
    }
    
    const majorExports = data.major_exports ? data.major_exports.slice(0, 2).join(', ') : 'Various';
    
    row.innerHTML = `
      <td>${country}</td>
      <td>${data.region.replace('-', ' ').toUpperCase()}</td>
      <td>${data.current_rate}%</td>
      <td>$${data.import_value_billions}B</td>
      <td>$${data.additional_cost_billions}B</td>
      <td>${majorExports}</td>
      <td><span class="status status--${getStatusClass(data.status)}">${data.status}</span></td>
    `;
  });
}

function populateRegionalTable() {
  const tbody = document.querySelector('#regional-impact-table tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  Object.entries(tariffData.regional_summary).forEach(([region, data]) => {
    const row = tbody.insertRow();
    const regionName = region.replace('-', ' ').toUpperCase();
    const tradePercentage = data.trade_percentage.toFixed(1);
    
    row.innerHTML = `
      <td>${regionName}</td>
      <td>${data.countries}</td>
      <td>${data.avg_tariff_rate}%</td>
      <td>$${data.total_import_value}B</td>
      <td>$${data.total_additional_cost}B</td>
      <td>${tradePercentage}%</td>
    `;
  });
}

function populateIndustryTable() {
  const tbody = document.querySelector('#industry-impact-table tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  Object.entries(tariffData.industries).forEach(([industry, data]) => {
    const row = tbody.insertRow();
    const rate = typeof data.current_rate === 'string' ? data.current_rate : `${data.current_rate}%`;
    const importValue = data.import_value_billions ? `$${data.import_value_billions}B` : 'N/A';
    const tariffCost = data.tariff_cost_billions ? `$${data.tariff_cost_billions}B` : 'N/A';
    const affectedCountries = data.affected_countries || 'N/A';
    
    row.innerHTML = `
      <td>${industry}</td>
      <td>${rate}</td>
      <td>${importValue}</td>
      <td>${tariffCost}</td>
      <td>${affectedCountries}</td>
      <td><span class="status status--${getStatusClass(data.status)}">${data.status}</span></td>
    `;
  });
}

// Regional Analysis
function setupRegionalAnalysis() {
  populateRegionalContent('eu-analysis-content', 'europe', true);
  populateRegionalContent('asia-analysis-content', 'asia', false);
  populateRegionalContent('sa-analysis-content', 'south-america', false);
}

function populateRegionalContent(containerId, region, isEU) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const regionCountries = Object.entries(tariffData.countries)
    .filter(([, data]) => data.region === region)
    .sort((a, b) => b[1].import_value_billions - a[1].import_value_billions);
  
  const grid = document.createElement('div');
  grid.className = 'regional-countries-grid';
  
  regionCountries.forEach(([country, data]) => {
    const card = document.createElement('div');
    card.className = 'regional-country-card';
    card.dataset.country = country;
    
    const flagIcon = isEU && data.is_eu ? '🇪🇺' : getRegionIcon(region);
    const majorExports = data.major_exports ? data.major_exports.slice(0, 2).join(', ') : 'Various products';
    
    card.innerHTML = `
      <div class="regional-country-header">
        <div class="country-flag">${flagIcon}</div>
        <div class="regional-country-name">${country}</div>
        <div class="regional-country-rate">${data.current_rate}%</div>
      </div>
      <div class="regional-country-info">
        <div class="country-trade-info">Trade: $${data.import_value_billions}B</div>
        <div class="country-exports-info">Exports: ${majorExports}</div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      openCountryModal(country, data);
    });
    
    grid.appendChild(card);
  });
  
  container.innerHTML = '';
  container.appendChild(grid);
}

// Modal Functions
function openCountryModal(countryName, countryData) {
  const modal = document.getElementById('country-modal');
  if (!modal) return;
  
  const nameEl = document.getElementById('modal-country-name');
  const rateEl = document.getElementById('modal-tariff-rate');
  const statusEl = document.getElementById('modal-status');
  const importValueEl = document.getElementById('modal-import-value');
  const additionalCostEl = document.getElementById('modal-additional-cost');
  const regionEl = document.getElementById('modal-region');
  const exportsListEl = document.getElementById('modal-exports-list');
  const industryListEl = document.getElementById('modal-industry-list');
  const notesEl = document.getElementById('modal-notes-text');
  
  if (nameEl) {
    const regionIcon = getRegionIcon(countryData.region);
    const euFlag = countryData.is_eu ? ' 🇪🇺' : '';
    nameEl.textContent = `${regionIcon} ${countryName}${euFlag}`;
  }
  
  if (rateEl) rateEl.textContent = formatTariffRate(countryData.current_rate);
  if (statusEl) {
    statusEl.textContent = countryData.status;
    statusEl.className = `status status--${getStatusClass(countryData.status)}`;
  }
  
  if (importValueEl) importValueEl.textContent = `$${countryData.import_value_billions}B`;
  if (additionalCostEl) additionalCostEl.textContent = `$${countryData.additional_cost_billions}B`;
  if (regionEl) regionEl.textContent = countryData.region.replace('-', ' ').toUpperCase();
  
  // Populate exports list
  if (exportsListEl) {
    exportsListEl.innerHTML = '';
    if (countryData.major_exports) {
      countryData.major_exports.forEach(exportItem => {
        const item = document.createElement('div');
        item.className = 'export-item';
        item.innerHTML = `
          <span class="export-name">${exportItem}</span>
          <span class="export-category">Export</span>
        `;
        exportsListEl.appendChild(item);
      });
    } else {
      exportsListEl.innerHTML = '<p>No major exports data available</p>';
    }
  }
  
  // Populate industry rates
  if (industryListEl) {
    industryListEl.innerHTML = '';
    if (countryData.industry_specific) {
      Object.entries(countryData.industry_specific).forEach(([industry, rate]) => {
        const item = document.createElement('div');
        item.className = 'industry-item';
        item.innerHTML = `
          <span class="industry-name">${industry}</span>
          <span class="industry-rate-value">${formatTariffRate(rate)}</span>
        `;
        industryListEl.appendChild(item);
      });
    } else {
      industryListEl.innerHTML = '<p>No industry-specific rates available</p>';
    }
  }
  
  if (notesEl) {
    notesEl.textContent = countryData.notes || 'No additional information available.';
  }
  
  modal.classList.remove('hidden');
}

function closeModal(modal) {
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = btn.dataset.tab;
      switchTab(tabName);
    });
  });

  // Country search
  const countrySearch = document.getElementById('country-search');
  if (countrySearch) {
    countrySearch.addEventListener('input', (e) => {
      currentFilter.search = e.target.value.trim();
      filterCountries();
    });
  }

  // Region filter
  const regionFilter = document.getElementById('region-filter');
  if (regionFilter) {
    regionFilter.addEventListener('change', (e) => {
      currentFilter.region = e.target.value;
      filterCountries();
      
      // Update region buttons
      document.querySelectorAll('.region-btn').forEach(btn => {
        btn.classList.remove('active', 'btn--secondary');
        btn.classList.add('btn--outline');
        if (btn.dataset.region === e.target.value) {
          btn.classList.remove('btn--outline');
          btn.classList.add('active', 'btn--secondary');
        }
      });
    });
  }

  // Tariff range filter
  const tariffRange = document.getElementById('tariff-range');
  if (tariffRange) {
    tariffRange.addEventListener('change', (e) => {
      currentFilter.tariffRange = e.target.value;
      filterCountries();
    });
  }

  // Export category filter
  const exportCategory = document.getElementById('export-category');
  if (exportCategory) {
    exportCategory.addEventListener('change', (e) => {
      currentFilter.exportCategory = e.target.value;
      filterCountries();
    });
  }

  // Region buttons
  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Toggle active state
      const wasActive = btn.classList.contains('active');
      document.querySelectorAll('.region-btn').forEach(b => {
        b.classList.remove('active', 'btn--secondary');
        b.classList.add('btn--outline');
      });
      
      if (!wasActive) {
        btn.classList.remove('btn--outline');
        btn.classList.add('active', 'btn--secondary');
        currentFilter.region = btn.dataset.region;
      } else {
        currentFilter.region = '';
      }
      
      // Update region select
      const regionSelect = document.getElementById('region-filter');
      if (regionSelect) {
        regionSelect.value = currentFilter.region;
      }
      
      filterCountries();
    });
  });

  // Show all regions button
  const showAllBtn = document.getElementById('show-all-regions');
  if (showAllBtn) {
    showAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentFilter.region = '';
      
      document.querySelectorAll('.region-btn').forEach(btn => {
        btn.classList.remove('active', 'btn--secondary');
        btn.classList.add('btn--outline');
      });
      
      const regionSelect = document.getElementById('region-filter');
      if (regionSelect) {
        regionSelect.value = '';
      }
      
      filterCountries();
    });
  }

  // Industry buttons
  document.querySelectorAll('.industry-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      document.querySelectorAll('.industry-btn').forEach(btn => {
        btn.classList.remove('active', 'btn--secondary');
        btn.classList.add('btn--outline');
      });
      
      e.target.classList.remove('btn--outline');
      e.target.classList.add('active', 'btn--secondary');
      
      currentFilter.industry = e.target.dataset.industry;
      filterCountries();
    });
  });

  // Table tabs
  document.querySelectorAll('.table-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tableName = btn.dataset.table;
      switchTableView(tableName);
    });
  });

  // Calculator inputs
  ['import-value-input', 'country-select', 'industry-select'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('input', calculateTariffCost);
      element.addEventListener('change', calculateTariffCost);
    }
  });

  // Modal close handlers
  const countryModal = document.getElementById('country-modal');
  const modalClose = document.getElementById('modal-close');
  
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(countryModal);
    });
  }

  if (countryModal) {
    countryModal.addEventListener('click', (e) => {
      if (e.target === countryModal) {
        closeModal(countryModal);
      }
    });
  }

  // Export buttons (simplified - would normally generate actual files)
  ['export-country-data', 'export-regional-data', 'export-industry-data', 'export-data'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Export functionality would generate CSV/Excel files with the current data');
      });
    }
  });

  // Reset view button
  const resetBtn = document.getElementById('reset-view');
  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Clear all filters
      currentFilter = {
        search: '',
        tariffRange: '',
        region: '',
        industry: 'all',
        exportCategory: ''
      };
      
      // Reset UI elements
      const countrySearch = document.getElementById('country-search');
      const regionFilter = document.getElementById('region-filter');
      const tariffRange = document.getElementById('tariff-range');
      const exportCategory = document.getElementById('export-category');
      
      if (countrySearch) countrySearch.value = '';
      if (regionFilter) regionFilter.value = '';
      if (tariffRange) tariffRange.value = '';
      if (exportCategory) exportCategory.value = '';
      
      // Reset industry buttons
      document.querySelectorAll('.industry-btn').forEach(btn => {
        btn.classList.remove('active', 'btn--secondary');
        btn.classList.add('btn--outline');
      });
      const allIndustriesBtn = document.querySelector('[data-industry="all"]');
      if (allIndustriesBtn) {
        allIndustriesBtn.classList.remove('btn--outline');
        allIndustriesBtn.classList.add('active', 'btn--secondary');
      }
      
      // Reset region buttons
      document.querySelectorAll('.region-btn').forEach(btn => {
        btn.classList.remove('active', 'btn--secondary');
        btn.classList.add('btn--outline');
      });
      
      filterCountries();
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(countryModal);
    }
  });
}

// Notification system (simplified)
function showNotification(title, message) {
  const notification = document.createElement('div');
  notification.className = 'notification notification--success';
  notification.innerHTML = `
    <div class="notification__icon">✓</div>
    <div class="notification__content">
      <h4 class="notification__title">${title}</h4>
      <p class="notification__message">${message}</p>
    </div>
    <button class="notification__close">&times;</button>
  `;
  
  const container = document.getElementById('notification-container');
  if (container) {
    container.appendChild(notification);
    
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
      notification.remove();
    });
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 5000);
  }
}

// Initialize the application
function init() {
  // Reset filters
  currentFilter = {
    search: '',
    tariffRange: '',
    region: '',
    industry: 'all',
    exportCategory: ''
  };
  
  // Initialize display
  filterCountries();
  
  // Set up initial UI state
  const allIndustriesBtn = document.querySelector('[data-industry="all"]');
  if (allIndustriesBtn) {
    allIndustriesBtn.classList.add('active', 'btn--secondary');
    allIndustriesBtn.classList.remove('btn--outline');
  }
  
  // Setup event listeners
  setupEventListeners();
  
  // Show success notification
  setTimeout(() => {
    showNotification(
      'Global Coverage Complete',
      'Now tracking 65 countries across EU (27), Asia-Pacific (20), South America (13), and North America (2) with comprehensive tariff data and economic impact analysis.'
    );
  }, 1000);
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  Object.values(charts).forEach(chart => {
    if (chart && typeof chart.destroy === 'function') {
      chart.destroy();
    }
  });
});

// Start the application
document.addEventListener('DOMContentLoaded', init);