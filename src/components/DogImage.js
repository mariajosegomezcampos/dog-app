import { useState, useEffect } from "react";
import styled from '@emotion/styled'

const Image = styled.img`
 width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    border: 3px solid #86a8bc;
    margin: 20px 5px;
    box-shadow: 0 4px 8px 0 rgb(114 104 104 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

export const DogImage = ({ dogBreed }) => {
    const [dogImg, setDogImg] = useState("")

    const getDogImg = async (breed) => {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`); 
        const responseJSON = await response.json()
        setDogImg(responseJSON.message);
        console.log(dogImg)
    }
    useEffect(() => {
        getDogImg(dogBreed);
    }, [])
    return (
        <div>
            <div>
            <Image src={dogImg} alt={dogBreed} />
            <h3>{dogBreed}</h3>
            </div>
        </div>
    )



}