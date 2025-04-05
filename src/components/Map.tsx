import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Pub } from '../types/pub';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/guinness-tracker/marker-icon-2x.png',
  iconUrl: '/guinness-tracker/marker-icon.png',
  shadowUrl: '/guinness-tracker/marker-shadow.png',
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