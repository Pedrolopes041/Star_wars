import {LoadingContainer} from './loading.styled'
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
    return (
      <LoadingContainer>
        <BounceLoader color="#000000" />
      </LoadingContainer>
    );
}
 
export default Loading;