import React from "react";

export default function BucketForm(props) {
    return <div>
        <form>
            <input type="text" placeholder="Enter here" />
            <select name="importance">
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
            </select>
        </form>
    </div>
}