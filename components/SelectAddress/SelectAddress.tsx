import { useState } from 'react';
import { countries } from '../checkoutPage/countries';

const SelectAddress = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCountrySelect = (country: any) => {
        setSelectedCountry(country.name);
        setSearchTerm(country.name);
    };

    const mapSrc = selectedCountry 
        ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(selectedCountry)}&zoom=6`
        : `https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&center=20,0&zoom=2`;

    return (
        <div className="space-y-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchTerm && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredCountries.map((country) => (
                            <div
                                key={country.code}
                                onClick={() => handleCountrySelect(country)}
                                className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                            >
                                {country.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="h-96 w-full rounded-lg overflow-hidden">
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            {selectedCountry && (
                <p className="text-center text-gray-600">
                    Selected: <span className="font-semibold">{selectedCountry}</span>
                </p>
            )}
        </div>
    );
};

export default SelectAddress;
