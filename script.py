# Create comprehensive list of all EU, Asian, and South American countries with their tariff data
import json

# All EU member countries (27 total)
eu_countries = {
    'Austria': {'import_value_billions': 8.4, 'major_exports': ['Machinery', 'Steel products', 'Paper']},
    'Belgium': {'import_value_billions': 19.7, 'major_exports': ['Chemicals', 'Pharmaceuticals', 'Diamonds']},
    'Bulgaria': {'import_value_billions': 0.8, 'major_exports': ['Machinery', 'Textiles', 'Chemicals']},
    'Croatia': {'import_value_billions': 0.5, 'major_exports': ['Machinery', 'Food products', 'Chemicals']},
    'Cyprus': {'import_value_billions': 0.2, 'major_exports': ['Food products', 'Minerals', 'Chemicals']},
    'Czech Republic': {'import_value_billions': 4.2, 'major_exports': ['Machinery', 'Automobiles', 'Steel']},
    'Denmark': {'import_value_billions': 6.8, 'major_exports': ['Food products', 'Pharmaceuticals', 'Machinery']},
    'Estonia': {'import_value_billions': 0.3, 'major_exports': ['Electronics', 'Wood products', 'Textiles']},
    'Finland': {'import_value_billions': 3.2, 'major_exports': ['Paper', 'Machinery', 'Electronics']},
    'France': {'import_value_billions': 55.0, 'major_exports': ['Aircraft', 'Wine', 'Luxury goods']},
    'Germany': {'import_value_billions': 163.39, 'major_exports': ['Automobiles', 'Machinery', 'Chemicals']},
    'Greece': {'import_value_billions': 1.9, 'major_exports': ['Food products', 'Textiles', 'Chemicals']},
    'Hungary': {'import_value_billions': 3.1, 'major_exports': ['Electronics', 'Automobiles', 'Machinery']},
    'Ireland': {'import_value_billions': 103.76, 'major_exports': ['Pharmaceuticals', 'Electronics', 'Food products']},
    'Italy': {'import_value_billions': 69.9, 'major_exports': ['Machinery', 'Textiles', 'Food products']},
    'Latvia': {'import_value_billions': 0.4, 'major_exports': ['Wood products', 'Food products', 'Textiles']},
    'Lithuania': {'import_value_billions': 0.6, 'major_exports': ['Food products', 'Chemicals', 'Textiles']},
    'Luxembourg': {'import_value_billions': 1.1, 'major_exports': ['Steel', 'Financial services', 'Chemicals']},
    'Malta': {'import_value_billions': 0.3, 'major_exports': ['Electronics', 'Pharmaceuticals', 'Food products']},
    'Netherlands': {'import_value_billions': 32.1, 'major_exports': ['Chemicals', 'Food products', 'Electronics']},
    'Poland': {'import_value_billions': 12.5, 'major_exports': ['Machinery', 'Food products', 'Electronics']},
    'Portugal': {'import_value_billions': 2.8, 'major_exports': ['Textiles', 'Food products', 'Machinery']},
    'Romania': {'import_value_billions': 2.1, 'major_exports': ['Automobiles', 'Machinery', 'Textiles']},
    'Slovakia': {'import_value_billions': 1.8, 'major_exports': ['Automobiles', 'Electronics', 'Steel']},
    'Slovenia': {'import_value_billions': 0.7, 'major_exports': ['Machinery', 'Pharmaceuticals', 'Electronics']},
    'Spain': {'import_value_billions': 18.4, 'major_exports': ['Automobiles', 'Food products', 'Machinery']},
    'Sweden': {'import_value_billions': 9.2, 'major_exports': ['Machinery', 'Paper', 'Automobiles']}
}

# Asian countries
asian_countries = {
    'Afghanistan': {'import_value_billions': 0.1, 'tariff_rate': 15, 'major_exports': ['Carpets', 'Dried fruits', 'Minerals']},
    'Armenia': {'import_value_billions': 0.2, 'tariff_rate': 20, 'major_exports': ['Minerals', 'Food products', 'Textiles']},
    'Azerbaijan': {'import_value_billions': 0.3, 'tariff_rate': 25, 'major_exports': ['Oil', 'Natural gas', 'Chemicals']},
    'Bahrain': {'import_value_billions': 0.8, 'tariff_rate': 15, 'major_exports': ['Oil products', 'Aluminum', 'Textiles']},
    'Bangladesh': {'import_value_billions': 7.7, 'tariff_rate': 20, 'major_exports': ['Textiles', 'Garments', 'Leather goods']},
    'Bhutan': {'import_value_billions': 0.1, 'tariff_rate': 15, 'major_exports': ['Hydroelectric power', 'Food products', 'Textiles']},
    'Brunei': {'import_value_billions': 0.2, 'tariff_rate': 25, 'major_exports': ['Oil', 'Natural gas', 'Chemicals']},
    'Cambodia': {'import_value_billions': 4.8, 'tariff_rate': 19, 'major_exports': ['Textiles', 'Garments', 'Rice']},
    'China': {'import_value_billions': 462.6, 'tariff_rate': 30, 'major_exports': ['Electronics', 'Machinery', 'Textiles']},
    'Georgia': {'import_value_billions': 0.3, 'tariff_rate': 20, 'major_exports': ['Wine', 'Minerals', 'Food products']},
    'India': {'import_value_billions': 91.23, 'tariff_rate': 25, 'major_exports': ['Textiles', 'Pharmaceuticals', 'Gems']},
    'Indonesia': {'import_value_billions': 25.6, 'tariff_rate': 19, 'major_exports': ['Palm oil', 'Textiles', 'Electronics']},
    'Iran': {'import_value_billions': 0.8, 'tariff_rate': 35, 'major_exports': ['Oil', 'Carpets', 'Pistachios']},
    'Iraq': {'import_value_billions': 0.5, 'tariff_rate': 35, 'major_exports': ['Oil', 'Dates', 'Chemicals']},
    'Israel': {'import_value_billions': 20.2, 'tariff_rate': 15, 'major_exports': ['Electronics', 'Pharmaceuticals', 'Diamonds']},
    'Japan': {'import_value_billions': 152.07, 'tariff_rate': 15, 'major_exports': ['Automobiles', 'Electronics', 'Machinery']},
    'Jordan': {'import_value_billions': 0.6, 'tariff_rate': 15, 'major_exports': ['Phosphates', 'Textiles', 'Pharmaceuticals']},
    'Kazakhstan': {'import_value_billions': 2.1, 'tariff_rate': 25, 'major_exports': ['Oil', 'Minerals', 'Grain']},
    'Kuwait': {'import_value_billions': 1.2, 'tariff_rate': 20, 'major_exports': ['Oil', 'Chemicals', 'Fertilizers']},
    'Kyrgyzstan': {'import_value_billions': 0.1, 'tariff_rate': 25, 'major_exports': ['Minerals', 'Textiles', 'Food products']},
    'Laos': {'import_value_billions': 0.3, 'tariff_rate': 40, 'major_exports': ['Wood products', 'Coffee', 'Textiles']},
    'Lebanon': {'import_value_billions': 0.4, 'tariff_rate': 25, 'major_exports': ['Jewelry', 'Chemicals', 'Food products']},
    'Malaysia': {'import_value_billions': 47.7, 'tariff_rate': 19, 'major_exports': ['Electronics', 'Palm oil', 'Rubber']},
    'Maldives': {'import_value_billions': 0.1, 'tariff_rate': 15, 'major_exports': ['Fish', 'Garments', 'Tourism services']},
    'Mongolia': {'import_value_billions': 0.2, 'tariff_rate': 25, 'major_exports': ['Minerals', 'Textiles', 'Cashmere']},
    'Myanmar': {'import_value_billions': 1.8, 'tariff_rate': 40, 'major_exports': ['Textiles', 'Gems', 'Wood products']},
    'Nepal': {'import_value_billions': 0.3, 'tariff_rate': 20, 'major_exports': ['Textiles', 'Carpets', 'Food products']},
    'North Korea': {'import_value_billions': 0.0, 'tariff_rate': 100, 'major_exports': ['Minerals', 'Textiles', 'Seafood']},
    'Oman': {'import_value_billions': 0.9, 'tariff_rate': 20, 'major_exports': ['Oil', 'Fish', 'Minerals']},
    'Pakistan': {'import_value_billions': 4.7, 'tariff_rate': 19, 'major_exports': ['Textiles', 'Rice', 'Leather goods']},
    'Philippines': {'import_value_billions': 12.9, 'tariff_rate': 19, 'major_exports': ['Electronics', 'Garments', 'Coconut oil']},
    'Qatar': {'import_value_billions': 1.5, 'tariff_rate': 20, 'major_exports': ['Natural gas', 'Oil', 'Chemicals']},
    'Saudi Arabia': {'import_value_billions': 8.7, 'tariff_rate': 25, 'major_exports': ['Oil', 'Chemicals', 'Petrochemicals']},
    'Singapore': {'import_value_billions': 28.4, 'tariff_rate': 15, 'major_exports': ['Electronics', 'Chemicals', 'Refined petroleum']},
    'South Korea': {'import_value_billions': 135.46, 'tariff_rate': 15, 'major_exports': ['Electronics', 'Automobiles', 'Ships']},
    'Sri Lanka': {'import_value_billions': 2.8, 'tariff_rate': 20, 'major_exports': ['Textiles', 'Tea', 'Rubber']},
    'Syria': {'import_value_billions': 0.1, 'tariff_rate': 41, 'major_exports': ['Oil', 'Textiles', 'Food products']},
    'Taiwan': {'import_value_billions': 106.2, 'tariff_rate': 20, 'major_exports': ['Electronics', 'Semiconductors', 'Machinery']},
    'Tajikistan': {'import_value_billions': 0.1, 'tariff_rate': 25, 'major_exports': ['Aluminum', 'Cotton', 'Fruits']},
    'Thailand': {'import_value_billions': 57.7, 'tariff_rate': 19, 'major_exports': ['Electronics', 'Automobiles', 'Food products']},
    'Turkey': {'import_value_billions': 15.4, 'tariff_rate': 15, 'major_exports': ['Textiles', 'Automobiles', 'Steel']},
    'Turkmenistan': {'import_value_billions': 0.2, 'tariff_rate': 30, 'major_exports': ['Natural gas', 'Oil', 'Cotton']},
    'UAE': {'import_value_billions': 12.3, 'tariff_rate': 20, 'major_exports': ['Oil', 'Aluminum', 'Chemicals']},
    'Uzbekistan': {'import_value_billions': 0.4, 'tariff_rate': 25, 'major_exports': ['Cotton', 'Gold', 'Natural gas']},
    'Vietnam': {'import_value_billions': 142.48, 'tariff_rate': 20, 'major_exports': ['Electronics', 'Textiles', 'Coffee']},
    'Yemen': {'import_value_billions': 0.1, 'tariff_rate': 35, 'major_exports': ['Oil', 'Coffee', 'Fish']}
}

# South American countries
south_american_countries = {
    'Argentina': {'import_value_billions': 4.6, 'tariff_rate': 25, 'major_exports': ['Beef', 'Soybeans', 'Wine']},
    'Bolivia': {'import_value_billions': 0.5, 'tariff_rate': 15, 'major_exports': ['Natural gas', 'Minerals', 'Soybeans']},
    'Brazil': {'import_value_billions': 25.0, 'tariff_rate': 50, 'major_exports': ['Soybeans', 'Iron ore', 'Coffee']},
    'Chile': {'import_value_billions': 7.8, 'tariff_rate': 20, 'major_exports': ['Copper', 'Wine', 'Salmon']},
    'Colombia': {'import_value_billions': 6.2, 'tariff_rate': 20, 'major_exports': ['Oil', 'Coffee', 'Coal']},
    'Ecuador': {'import_value_billions': 2.1, 'tariff_rate': 15, 'major_exports': ['Oil', 'Bananas', 'Shrimp']},
    'French Guiana': {'import_value_billions': 0.1, 'tariff_rate': 15, 'major_exports': ['Gold', 'Shrimp', 'Timber']},
    'Guyana': {'import_value_billions': 0.8, 'tariff_rate': 15, 'major_exports': ['Gold', 'Rice', 'Sugar']},
    'Paraguay': {'import_value_billions': 0.3, 'tariff_rate': 20, 'major_exports': ['Soybeans', 'Beef', 'Cotton']},
    'Peru': {'import_value_billions': 3.9, 'tariff_rate': 20, 'major_exports': ['Copper', 'Gold', 'Fish meal']},
    'Suriname': {'import_value_billions': 0.2, 'tariff_rate': 15, 'major_exports': ['Oil', 'Gold', 'Rice']},
    'Uruguay': {'import_value_billions': 0.4, 'tariff_rate': 20, 'major_exports': ['Beef', 'Rice', 'Wool']},
    'Venezuela': {'import_value_billions': 1.2, 'tariff_rate': 15, 'major_exports': ['Oil', 'Iron ore', 'Steel']}
}

# Combine all countries with proper structure
all_countries = {}

# Add EU countries (all at 15% rate)
for country, data in eu_countries.items():
    all_countries[country] = {
        'current_rate': 15,
        'future_rate': None,
        'status': 'EU trade agreement',
        'industry_specific': {'Steel & Aluminum': 50, 'Automobiles': 25},
        'notes': f'EU-US trade deal July 28, 2025. Major exports: {", ".join(data["major_exports"])}',
        'import_value_billions': data['import_value_billions'],
        'additional_cost_billions': round(data['import_value_billions'] * 0.05, 1),  # 5% increase
        'is_eu': True,
        'region': 'Europe'
    }

# Add Asian countries
for country, data in asian_countries.items():
    all_countries[country] = {
        'current_rate': data['tariff_rate'],
        'future_rate': None,
        'status': 'Reciprocal tariff' if data['tariff_rate'] > 15 else 'Trade agreement',
        'industry_specific': {'Steel & Aluminum': 50, 'Automobiles': 25},
        'notes': f'Major exports: {", ".join(data["major_exports"])}. Reciprocal tariff rate as of August 1, 2025',
        'import_value_billions': data['import_value_billions'],
        'additional_cost_billions': round(data['import_value_billions'] * (data['tariff_rate'] - 10) / 100, 1),
        'is_eu': False,
        'region': 'Asia'
    }

# Add South American countries
for country, data in south_american_countries.items():
    all_countries[country] = {
        'current_rate': data['tariff_rate'],
        'future_rate': None,
        'status': 'Reciprocal tariff' if data['tariff_rate'] > 20 else 'Trade agreement',
        'industry_specific': {'Steel & Aluminum': 50, 'Automobiles': 25},
        'notes': f'Major exports: {", ".join(data["major_exports"])}. Reciprocal tariff rate as of August 1, 2025',
        'import_value_billions': data['import_value_billions'],
        'additional_cost_billions': round(data['import_value_billions'] * (data['tariff_rate'] - 10) / 100, 1),
        'is_eu': False,
        'region': 'South America'
    }

# Calculate totals
total_countries = len(all_countries)
eu_countries_count = len([c for c in all_countries.values() if c.get('is_eu')])
asian_countries_count = len([c for c in all_countries.values() if c.get('region') == 'Asia'])
sa_countries_count = len([c for c in all_countries.values() if c.get('region') == 'South America'])

total_additional_cost = sum(c['additional_cost_billions'] for c in all_countries.values())
total_import_value = sum(c['import_value_billions'] for c in all_countries.values())

print(f"Comprehensive Country Database Created:")
print(f"=" * 50)
print(f"Total Countries: {total_countries}")
print(f"EU Countries: {eu_countries_count} (all at 15% rate)")
print(f"Asian Countries: {asian_countries_count}")
print(f"South American Countries: {sa_countries_count}")
print(f"Total Import Value: ${total_import_value:.1f} billion")
print(f"Total Additional Cost: ${total_additional_cost:.1f} billion")

print(f"\nTop 10 EU Countries by Import Value:")
print("-" * 40)
eu_sorted = sorted([(k, v) for k, v in all_countries.items() if v.get('is_eu')], 
                  key=lambda x: x[1]['import_value_billions'], reverse=True)
for country, data in eu_sorted[:10]:
    print(f"{country:<15} | ${data['import_value_billions']:.1f}B")

print(f"\nTop 10 Asian Countries by Import Value:")
print("-" * 40)
asian_sorted = sorted([(k, v) for k, v in all_countries.items() if v.get('region') == 'Asia'], 
                     key=lambda x: x[1]['import_value_billions'], reverse=True)
for country, data in asian_sorted[:10]:
    print(f"{country:<15} | ${data['import_value_billions']:.1f}B | {data['current_rate']}%")

print(f"\nTop 5 South American Countries by Import Value:")
print("-" * 40)
sa_sorted = sorted([(k, v) for k, v in all_countries.items() if v.get('region') == 'South America'], 
                  key=lambda x: x[1]['import_value_billions'], reverse=True)
for country, data in sa_sorted[:5]:
    print(f"{country:<15} | ${data['import_value_billions']:.1f}B | {data['current_rate']}%")

# Save the comprehensive data
comprehensive_data = {
    'countries': all_countries,
    'summary': {
        'total_countries': total_countries,
        'eu_countries_count': eu_countries_count,
        'asian_countries_count': asian_countries_count,
        'south_american_countries_count': sa_countries_count,
        'total_import_value_billions': round(total_import_value, 1),
        'total_additional_cost_billions': round(total_additional_cost, 1)
    }
}

print("\nComprehensive database ready for app integration!")