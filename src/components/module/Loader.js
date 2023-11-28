import { ThreeCircles } from "react-loader-spinner";

function Loader() {
    return (
        <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    );
}
function Loader1(){
  return (
    <ThreeCircles
    
    height="50"
    width="50"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  />
);
}

export {Loader,Loader1};