// Fictional verified student properties for Helsinki Capital Region (Helsinki, Espoo, Vantaa)
export const properties = [
    {
        id: 'otaniemi-timber-a2',
        title: 'Otaniemi Timber Studio A2',
        address: 'Jämeräntaival 7, 02150 Espoo',
        city: 'Espoo',
        zone: 'Zone B',
        price: 495,
        currency: '€',
        period: '/ month',
        allInclusive: true,
        size: '24 m²',
        type: 'Private Studio',
        floor: '3/5',
        verified: true,
        universityPartner: 'Aalto University Partner',
        transit: {
            mode: 'metro',
            line: 'M1 / M2',
            time: '4 min walk to Aalto Campus',
            toCentral: '12 min to Kamppi'
        },
        utilities: ['Water included', 'District heating free', '100M fiber', 'Weekly sauna turn'],
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        description: 'Modern birch-wood interior student studio in the heart of Otaniemi campus. Features high-speed fiber, underfloor heating, and access to communal sauna building.',
        coordinates: { lat: 60.1841, lng: 24.8301 }
    },
    {
        id: 'kallio-bohemian-loft',
        title: 'Kallio Bohemian Loft Room',
        address: 'Vaasankatu 18, 00500 Helsinki',
        city: 'Helsinki',
        zone: 'Zone A',
        price: 430,
        currency: '€',
        period: '/ month',
        allInclusive: true,
        size: '18 m²',
        type: 'Private Room in Shared Flat',
        floor: '4/6',
        verified: true,
        universityPartner: 'HOAS Student Housing',
        transit: {
            mode: 'tram',
            line: 'Tram 3, 9',
            time: '2 min walk to Sörnäinen Metro',
            toCentral: '7 min to Central Railway'
        },
        utilities: ['All utilities included', 'High-speed Wi-Fi', 'Communal laundry', 'Bike storage'],
        imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
        description: 'Charming bright room in a traditional Finnish stone building in lively Kallio. Shared modern kitchen and bathroom with two other university students.',
        coordinates: { lat: 60.1872, lng: 24.9548 }
    },
    {
        id: 'tikkurila-bright-loft',
        title: 'Tikkurila Bright Student Loft',
        address: 'Ratatie 12, 01300 Vantaa',
        city: 'Vantaa',
        zone: 'Zone B',
        price: 520,
        currency: '€',
        period: '/ month',
        allInclusive: true,
        size: '28 m²',
        type: 'Studio Loft',
        floor: '2/7',
        verified: true,
        universityPartner: 'Metropolia Partner Residence',
        transit: {
            mode: 'train',
            line: 'Commuter Rail I/P/K',
            time: '2 min walk to Tikkurila Station',
            toCentral: '14 min to Central Railway'
        },
        utilities: ['Heating included', 'Water included', '100M broadband', 'Gym access'],
        imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
        description: 'Spacious high-ceiling studio adjacent to Tikkurila transit interchange. Direct rapid train connections to central Helsinki and Helsinki-Vantaa Airport.',
        coordinates: { lat: 60.2933, lng: 25.0441 }
    },
    {
        id: 'kamppi-courtyard-studio',
        title: 'Kamppi Quiet Courtyard Studio',
        address: 'Malminkatu 24, 00100 Helsinki',
        city: 'Helsinki',
        zone: 'Zone A',
        price: 640,
        currency: '€',
        period: '/ month',
        allInclusive: true,
        size: '26 m²',
        type: 'Private Studio',
        floor: '1/5 (Courtyard)',
        verified: true,
        universityPartner: 'Univ. of Helsinki Approved',
        transit: {
            mode: 'subway',
            line: 'Kamppi Hub',
            time: '3 min walk to Kamppi Center',
            toCentral: '5 min to Univ. Main Building'
        },
        utilities: ['District heating', 'Water included', 'Furnished desk & bed', 'Courtyard access'],
        imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
        description: 'Peaceful central studio facing an enclosed quiet courtyard. Walkable to University of Helsinki City Center campus and Kamppi shopping & metro.',
        coordinates: { lat: 60.1678, lng: 24.9312 }
    },
    {
        id: 'tapiola-garden-flat',
        title: 'Tapiola Garden Quarter Flat',
        address: 'Itäranta 4, 02100 Espoo',
        city: 'Espoo',
        zone: 'Zone B',
        price: 510,
        currency: '€',
        period: '/ month',
        allInclusive: true,
        size: '23 m²',
        type: 'Studio Apartment',
        floor: '5/6',
        verified: true,
        universityPartner: 'Aalto University Partner',
        transit: {
            mode: 'metro',
            line: 'M1 / M2',
            time: '5 min walk to Tapiola Metro',
            toCentral: '6 min to Aalto Campus'
        },
        utilities: ['District heating free', 'High-speed internet', 'Weekly sauna slot', 'Bike cellar'],
        imageUrl: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab00d?auto=format&fit=crop&w=800&q=80',
        description: 'Surrounded by pine trees and Tapiola architectural gardens. Fast 1-stop metro ride directly into Aalto University Otaniemi campus.',
        coordinates: { lat: 60.1762, lng: 24.8055 }
    },
    {
        id: 'pasila-nordic-studio',
        title: 'Pasila Central Student Studio',
        address: 'Ratapihantie 6, 00520 Helsinki',
        city: 'Helsinki',
        zone: 'Zone A',
        price: 480,
        currency: '€',
        period: '/ month',
        allInclusive: true,
        size: '22 m²',
        type: 'Compact Studio',
        floor: '6/8',
        verified: true,
        universityPartner: 'Haaga-Helia Partner',
        transit: {
            mode: 'train',
            line: 'All Commuter Trains',
            time: '3 min walk to Mall of Tripla / Pasila',
            toCentral: '5 min to Helsinki Central'
        },
        utilities: ['Water & heating included', 'Fiber internet', 'Study lounge access', 'Laundry room'],
        imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
        description: 'Modern urban studio situated steps from Pasila station. Unmatched transit connectivity to all university campuses in the capital region.',
        coordinates: { lat: 60.1989, lng: 24.9334 }
    }
];

export const cities = [
    { id: 'all', label: 'All Cities (Helsinki Region)' },
    { id: 'Helsinki', label: 'Helsinki (Central & Metro)' },
    { id: 'Espoo', label: 'Espoo (Aalto & Tapiola)' },
    { id: 'Vantaa', label: 'Vantaa (Transit & Airport)' }
];

export const demoUser = {
    name: 'Tanya',
    title: 'UniStay Student',
    university: 'Aalto University',
    degree: 'Master of Science, Computer Science & Design',
    email: 'tanya.k@aalto.fi',
    hakaStatus: 'Active HAKA SSO Token (Aalto Federation)',
    avatarInitial: 'T',
    safeRentRange: '€450 – €550',
    savedIds: ['otaniemi-timber-a2', 'kallio-bohemian-loft', 'tikkurila-bright-loft', 'kamppi-courtyard-studio']
};
