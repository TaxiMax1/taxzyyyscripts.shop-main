import { useState, useEffect, useRef } from 'react';

function CountUp({ endValue, duration = 1000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const progressRatio = Math.min(progress / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progressRatio, 3); 
      const currentCount = Math.floor(easedProgress * endValue);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [endValue, duration]);

  const formattedCount = new Intl.NumberFormat('en-US').format(count);

  return <span>{formattedCount}</span>;
}

export default CountUp;
