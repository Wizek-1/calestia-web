
const initResponsive = () => {
    const setScale = () => {
        const width = window.innerWidth;
        const root = document.documentElement;
        
        
        const desktopW = 1920;
        const tabletW = 1024;
        const mobileW = 375;

        let baseSize = 16;
        let scaleFactor = 1;

        if (width >= 1024) {
            
            scaleFactor = width / desktopW;
            baseSize = 16 * scaleFactor;
            if (baseSize < 14) baseSize = 14;
            if (baseSize > 20) baseSize = 20;
        } else if (width >= 768) {
            
            scaleFactor = width / tabletW;
            baseSize = 15 * scaleFactor;
            if (baseSize < 13) baseSize = 13;
        } else {
            
            scaleFactor = width / mobileW;
            baseSize = 14 * scaleFactor;
            
            if (baseSize < 12) baseSize = 12;
            if (baseSize > 16) baseSize = 16;
        }

        
        root.style.fontSize = `${baseSize}px`;
        
        
        root.style.setProperty('--scale', scaleFactor);
    };

    window.addEventListener('resize', setScale);
    setScale();
    
    
    setTimeout(setScale, 100);
    setTimeout(setScale, 500);
};

export default initResponsive;

/// I know, everyone uses Clamp. Just testing smth new 