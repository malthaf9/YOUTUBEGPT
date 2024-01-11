import React from "react";
import Button from "./Button";

const ButtonList = () => {

    return (
        <div>
        <div className="flex">
            <Button name='All' />
            <Button name='Gaming' />
            <Button name='Songs' />
            <Button name='Live' />
            <Button name='Soccer' />
            <Button name='Cricket' />
            <Button name='Cooking' />
            <Button name='News' />
            <Button name='Entertainment' />
            <Button name='Recently watched' />
            <Button name='New to you' />
        </div>
        </div>
    )
}

export default ButtonList