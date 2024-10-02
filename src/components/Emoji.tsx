import EmojiPicker from 'emoji-picker-react';

interface IProps {
     openEmoji: boolean;
     setOpenEmoji: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Emoji(props: IProps) {
    
          return (
               <div>
                    <EmojiPicker open={props.openEmoji} width={320} height={420} style={{fontSize: "14px"}} className='text-sm' />
               </div>
          );
}