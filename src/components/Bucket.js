import React from "react";
import BucketItem from "./Bucketitem";
export default function Bucket() {
    const [list, setList] = useState ([]);
    return (
        <div>
            Bucket
            <BucketItem />
        </div>
    )
}