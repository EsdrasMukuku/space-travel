
import { useParams, useSearchParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import SpecificDestination from './SpecificDestination';
import data from '../assets/assets/data.json'; 

const Destination = () => {
    const { destination: destinationName } = useParams();
    const [destination, setDestination] = useState(null);
    const [searchParams] = useSearchParams();
  
    useEffect(() => {
      const destinationQueryParam = searchParams.get('destination');
      const destinationData = data.destinations.find(dest => dest.name === destinationQueryParam);
      setDestination(destinationData);
    }, [searchParams]);
  
    return <SpecificDestination destinations={data.destinations} destination={destination} />;
};



export default Destination;
