
import { NavLink } from 'react-router-dom';

const SpecificDestination = ({ destinations, destination }) => {
  return (
    <div className="container mx-auto p-8 flex justify-center items-center">
      <nav className="flex flex-row items-end mr-8">
        {destinations.map((dest, index) => (
          <NavLink
            key={index}
            to={`/Destination?destination=${dest.name}`}
            className="text-right mb-4 text-white"
            
          >
            {dest.name}
          </NavLink>
        ))}
      </nav>
      {destination && (
        <div>
          <img src={destination.images.png} alt={destination.name} className="w-64 h-64 mr-8 text-white" />
          <div>
            <h1 className="text-4xl mb-4 text-white">{destination.name}</h1>
            <p className="text-lg mb-2 text-white">{destination.description}</p>
            <p className="mb-2 text-white">Average Distance: {destination.distance}</p>
            <p className="mb-2 text-white">Travel Time: {destination.travel}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificDestination;

