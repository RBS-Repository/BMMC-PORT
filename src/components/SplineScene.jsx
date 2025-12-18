import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import './Spline.css';

const SplineScene = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <section className="SplineScene">
      {isLoading && (
        <div className="spline-loader">
          Loading 3D Scene...
        </div>
      )}
      {error && (
        <div className="spline-error">
          Failed to load 3D Scene
        </div>
      )}
      <Spline 
        scene="https://prod.spline.design/XGFXUUeUSNJxkl6k/scene.splinecode"
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
      />
    </section>
  );
};

export default SplineScene; 