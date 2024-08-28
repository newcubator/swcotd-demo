import { Icon, type LatLngExpression } from 'leaflet';

export const makePlanetMarkerIcon = (planetName: string) => {
    return new Icon({
        iconUrl: `map/images/SmLocationImages/Sm${planetName}.png`,
        shadowUrl: 'map/map-marker.svg',
        iconSize: [36, 36],
        shadowSize: [72, 72],
        iconAnchor: [18, 67],
        shadowAnchor: [36, 77],
    });
};

export const planetIcon = new Icon({
    iconUrl: 'map/images/planet-normal.png',
    shadowUrl: 'map/images/planet-shadow.png',
    iconSize: [10, 10],
    shadowSize: [10, 10],
    iconAnchor: [5, 5],
    shadowAnchor: [5, 5],
});

export const pltIconCaL = new Icon({
    iconUrl: 'map/images/planet-grn-blu.png',
    shadowUrl: 'map/images/planet-shadow.png',
    iconSize: [16, 16],
    shadowSize: [10, 10],
    iconAnchor: [8, 8],
    shadowAnchor: [5, 5],
});

export const pltIconCaL2 = new Icon({
    iconUrl: 'map/images/planetMov-grn-blu.png',
    shadowUrl: 'map/images/planet-shadow.png',
    iconSize: [18, 18],
    shadowSize: [10, 10],
    iconAnchor: [10, 10],
    shadowAnchor: [5, 5],
});

export const planetMarkers: Array<{ name: string, position: LatLngExpression, icon: Icon }> = [
    { name: 'Tatooine', position: [-155.36, 166.75], icon: pltIconCaL2 },
    { name: 'Alderaan', position: [-112.05, 133.22], icon: pltIconCaL2 },
    { name: 'Yavin IV', position: [-85.70, 154.62], icon: pltIconCaL2 },
    { name: 'Hoth', position: [-167.72, 118.59], icon: pltIconCaL2 },
    { name: 'Dagobah', position: [-173.69, 135.31], icon: pltIconCaL2 },
    { name: 'Bespin', position: [-167.20, 118.50], icon: pltIconCaL2 },
    { name: 'Endor', position: [-156.26, 102.08], icon: pltIconCaL2 },
    { name: 'Naboo', position: [-157.94, 146.28], icon: pltIconCaL2 },
    { name: 'Coruscant', position: [-111.67, 124.73], icon: pltIconCaL2 },
    { name: 'Kamino', position: [-145.94, 171.56], icon: pltIconCaL2 },
    { name: 'Geonosis', position: [-155.72, 167.00], icon: pltIconCaL2 },
    { name: 'Utapau', position: [-176.25, 138.31], icon: pltIconCaL2 },
    { name: 'Mustafar', position: [-175.87, 125.72], icon: pltIconCaL2 },
    { name: 'Kashyyyk', position: [-110.63, 155.94], icon: pltIconCaL2 },
    { name: 'Mygeeto', position: [-79.43, 121.41], icon: pltIconCaL2 },
    { name: 'Felucia', position: [-86.97, 169.16], icon: pltIconCaL2 },
    { name: 'Cato Neimoidia', position: [-120.44, 138.73], icon: pltIconCaL2 },
    { name: 'Saleucami', position: [-100.67, 172.67], icon: pltIconCaL2 },
    { name: 'Eriadu', position: [-165.69, 134.84], icon: pltIconCaL },
    { name: 'Corellia', position: [-123.86, 135.19], icon: pltIconCaL2 },
    { name: 'Nal Hutta', position: [-125.08, 170.78], icon: planetIcon },
    { name: 'Dantooine', position: [-75.21, 124.79], icon: pltIconCaL },
    { name: 'Ord Mantell', position: [-95.22, 124.94], icon: pltIconCaL },
    { name: 'Mon Cala', position: [-90.22, 184.03], icon: pltIconCaL },
    { name: 'Chandrila', position: [-109.54, 128.38], icon: pltIconCaL },
    { name: 'Sullust', position: [-162.69, 134.69], icon: pltIconCaL },
    { name: 'Malastare', position: [-156.70, 138.28], icon: planetIcon },
    { name: 'Dathomir', position: [-88.00, 145.31], icon: pltIconCaL },
    { name: 'Ryloth', position: [-161.34, 168.69], icon: pltIconCaL },
    { name: 'Aleen Minor', position: [-95.17, 124.83], icon: planetIcon },
    { name: 'Vulpter', position: [-114.85, 128.53], icon: planetIcon },
    { name: 'Troiken', position: [-79.00, 174.56], icon: planetIcon },
    { name: 'Tund', position: [-102.34, 187.06], icon: planetIcon },
    { name: 'Glee Anselm', position: [-96.08, 112.89], icon: planetIcon },
    { name: 'Iridonia', position: [-92.50, 117.13], icon: pltIconCaL },
    { name: 'Tholoth', position: [-126.38, 138.30], icon: planetIcon },
    { name: 'Quermia', position: [-81.47, 174.30], icon: planetIcon },
    { name: 'Dorin', position: [-99.23, 115.38], icon: pltIconCaL },
    { name: 'Champala', position: [-103.22, 129.37], icon: planetIcon },
    { name: 'Mirial', position: [-74.81, 160.39], icon: planetIcon },
    { name: 'Serenno', position: [-81.53, 151.50], icon: pltIconCaL },
    { name: 'Concord Dawn', position: [-95.52, 147.46], icon: planetIcon },
    { name: 'Ojom', position: [-122.23, 131.77], icon: planetIcon },
    { name: 'Skako', position: [-111.19, 130.00], icon: pltIconCaL },
    { name: 'Muunilinst', position: [-75.72, 119.34], icon: planetIcon },
    { name: 'Shili', position: [-99.40, 129.30], icon: planetIcon },
    { name: 'Kalee', position: [-74.72, 113.88], icon: pltIconCaL },
    { name: 'Umbara', position: [-113.05, 151.27], icon: pltIconCaL },
];
