import { useState } from 'react';
import classes from './Header.module.css'

export default function NavModal({children, name}){
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (state) => {
      setIsHovered(state);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(null);
    };

    return (
        
        <div onMouseEnter={()=> handleMouseEnter(name)} onMouseLeave={handleMouseLeave}>
            <p>{name}</p>
            {isHovered === name && (
                 <div className={classes.overlay}>
                    <div className={classes.NavList}  onMouseLeave={handleMouseLeave}>
                        <label>MOVIES</label>
                        {children}
                    </div>
             </div>
            )}
        </div>
    
    )

}