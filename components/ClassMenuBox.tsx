import Link from 'next/link';
import { IconType } from 'react-icons';
import SheetModal from './SheetModal';

type Props = {
    title: string;
    Icon: IconType;
    Intent: React.ReactNode & string;
    modal: boolean;
}

function ClassMenuBox({ title, Icon, Intent, modal }: Props) {
  return (
    modal ? 
    <SheetModal 
        title={title} 
        Trigger={
          <button  className="flex items-center text-left">
              <div className="z-10 w-16 h-14 md:w-20 md:h-16 bg-primarybg border rounded-full shadow-xl flex items-center justify-center">
                { Icon && <Icon className="h-7 w-7 md:h-6 md:w-6 text-primary/70"/> }
              </div>
              <div className="z-1 -ml-4 pl-8 pr-4 py-1 md:py-4 h-8 md:h-14 w-full shadow shadow-primary/30 rounded-r-full bg-secondary/40 text-primary/70 text-sm md:text-[1.1rem] font-semibold tracking-wide">{title}</div>
          </button>
        }>
        {/* @ts-ignore */}
        <Intent />
    </SheetModal>
    : <Link href={Intent} className="flex items-center">
          <div className="z-10 w-16 h-14 md:w-20 md:h-16 bg-primarybg border rounded-full shadow-xl flex items-center justify-center">
            { Icon && <Icon className="h-7 w-7 md:h-6 md:w-6 text-primary/70"/> }
          </div>
          <div className="z-1 -ml-4 pl-6 pr-4 py-1 md:py-4 h-8 md:h-14 w-full shadow shadow-primary/30 rounded-r-full bg-secondary/40 text-primary/70 text-sm md:text-[1.1rem] font-semibold tracking-wide">{title}</div>
      </Link>
  )
}

export default ClassMenuBox