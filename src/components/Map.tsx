import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Pub } from '../types/pub';
import L from 'leaflet';

// Create custom pint icon
const pintIcon = new L.Icon({
  iconUrl: './pint-icon.svg',
  iconSize: [24, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  className: 'pint-marker'
});

interface MapProps {
  pubs: Pub[];
}

const Map = ({ pubs }: MapProps) => {
  // Manchester city center coordinates
  const manchesterCenter = { lat: 53.4809, lng: -2.2374 };

  return (
    <MapContainer
      center={[manchesterCenter.lat, manchesterCenter.lng]}
      zoom={14}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {pubs.map((pub) => (
        <Marker
          key={pub.id}
          position={[pub.location.lat, pub.location.lng]}
          icon={pintIcon}
        >
          <Popup>
            <div>
              <h3>{pub.name}</h3>
              <p className="price">Guinness: £{pub.price.toFixed(2)}</p>
              <a href={pub.googleMapsLink} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;