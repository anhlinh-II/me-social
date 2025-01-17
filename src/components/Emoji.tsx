import EmojiPicker from 'emoji-picker-react';

interface IProps {
     openEmoji: boolean;
     setOpenEmoji: React.Dispatch<React.SetStateAction<boolean>>;
     onEmojiSelect: (emoji: { native: string }) => void; 
}

export default function Emoji(props: IProps) {
    
          return (
               <div>
                    <EmojiPicker open={props.openEmoji} width={320} height={420} style={{fontSize: "12px"}} className='text-sm' />
               </div>
          );
}