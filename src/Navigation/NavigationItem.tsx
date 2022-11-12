import clsx from 'clsx';
import './NavigationItem.css';

function NavigationItem({active, className, onClick, children} : any) {
  return <>
    <button
      onClick={onClick}
      className={clsx(
        className,
        'NavigationItem-root',
        active && 'NavigationItem-active'
      )}
    >
    {children}
    </button>
  </>
}

export default NavigationItem