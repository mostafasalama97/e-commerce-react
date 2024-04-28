import { ILoadingprops, ILoadingState } from "@customeTypes/sharedTypes"

// this componet will take loading and error and display them
const Loading = (props: ILoadingprops) => {
    // make distructing for props
    const { status , error , children } = props;
    if(status === ILoadingState.PENDING){
        return <p>Loading Please Wait</p>
    }
    if(status === ILoadingState.FAILED){
        return <p>{error}</p>
    }
  return (
    <>{children}</>
  )
}

export default Loading