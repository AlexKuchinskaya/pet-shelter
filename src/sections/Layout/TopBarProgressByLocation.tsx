
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#F2968F"
  },
  shadowBlur: 5
});

export const TopBarProgressByLocation = () => {
  const [progress, setProgress] = useState<boolean>(false);
  const [previousLocation, setPreviousLocation] = useState<string>('')
  const location = useLocation();

  const preventInfiniteProgressBar = () => {
    const hasClickedOnALinkToTheCurrentPage = location.pathname === previousLocation;
    if (hasClickedOnALinkToTheCurrentPage) {
      setPreviousLocation('')
    }
  }
  useEffect(() => {
    console.log('location', location)
    /* if (location.pathname !== previousLocation) {
      
    } */
    
    setPreviousLocation(location.pathname)
    setProgress(true)
    preventInfiniteProgressBar();
  }, [location])

  useEffect(() => {
      
    const disbaleProgress = () => {
      setProgress(false)
    }

    document.addEventListener('pageLoaded', disbaleProgress);

    return () => {
      document.removeEventListener('pageLoaded', disbaleProgress)
    }
  }, [previousLocation])

  if (!progress) {
    return <></>
  }

  return (
    <TopBarProgress />
  )
}