'use client';

import { CRS } from 'leaflet';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { makePlanetMarkerIcon, planetMarkers } from './map-assets';

type StarWarsMapProps = {
    focusedPlanet?: string;
};

const StarWarsMap = ({ focusedPlanet }: StarWarsMapProps) => {
    const planetMarker = planetMarkers.find(({ name }) => focusedPlanet === name);
    const center = planetMarker?.position ?? [-150, 100];

    return (
        <MapContainer crs={CRS.Simple}
                      center={center}
                      zoom={4}
                      minZoom={2}
                      maxZoom={7}
                      scrollWheelZoom={true}
                      className="absolute w-[100vw] h-[100vh] bg-[#00000f]">
            <TileLayer url="map/tiles/{z}/{x}/{y}.png" />
            { planetMarkers.map(({ name, position, icon }) => (
                <Marker key={name}
                        position={position}
                        icon={icon}>
                    <Tooltip permanent
                             direction="right"
                             className="bg-transparent border-none shadow-none text-sm text-white">{ name }</Tooltip>
                </Marker>
            )) }
            { planetMarker && <Marker position={planetMarker.position} icon={makePlanetMarkerIcon(planetMarker.name)} />}
        </MapContainer>
    );
};

export default StarWarsMap;
