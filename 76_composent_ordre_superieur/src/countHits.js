
import { useEffect, useState } from "react";


const countHits = (WrappedComponent, power) => {

    function CountHits(props) {
        const [hits, setHits] = useState(0);
        const addOne = () => {
            setHits(hits + 1);
        };

        useEffect(() => {
            if (hits > 0 && props.reduceHandle) {
                const CompName = WrappedComponent.name;
                props.reduceHandle(CompName,power)
            }
        }, [hits])


        return <WrappedComponent {...props} addOneHit={addOne} hits={hits} />
    }

    return CountHits
}

export default countHits