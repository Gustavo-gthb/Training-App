import { DeleteButtonContainer } from "./style";

type DeleteButtonProps = {
    onClick: () => void;
}


const DeleteButton: React.FC<DeleteButtonProps> = ( {onClick} ) => {
  return (
   <DeleteButtonContainer onClick={onClick}> 
        X
   </DeleteButtonContainer>
  )
}

export default DeleteButton 