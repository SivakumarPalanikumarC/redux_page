
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./userSlice";
export default function Content() {
const [name, setName] = useState("");
console.log(name);
const dispatch = useDispatch();
const handleUpdate = (event) => {
event.preventDefault();
dispatch(update({ name }));
};
return (
<div className="Content">
<form onSubmit={handleUpdate}>
<label>Type your name : </label>
<input

type="text"
placeholder="Please type your name"
onChange={(e) => setName(e.target.value)}
/>
<br />
<br />
<button type="submit">Submit</button>
</form>
</div>
);
}