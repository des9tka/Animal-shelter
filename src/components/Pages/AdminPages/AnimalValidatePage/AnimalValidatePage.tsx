import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import { animalReducer } from "../../../../redux";

const AnimalValidatePage: FC = () => {

// const animalsReducer = useAppSelector(reducer => reducer.animalReducer)

    useEffect(() => {
        //func for getting animals
    }, []);

    return (
    <div>
        ValidateAnimalPage
    </div>
    )};
export { AnimalValidatePage };
