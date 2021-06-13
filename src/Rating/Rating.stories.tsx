import React, {useState} from 'react';
import Rating, {RatingValueType} from "./Rating";



export default {
    title: 'Rating',
    component: Rating,
}

//const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyRating = () => <Rating value={0} onClick={x=>x} />
export const Rating1 = () => <Rating value={0} onClick={x=>x} />
export const Rating2 = () => <Rating value={0} onClick={x=>x} />
export const Rating3 = () => <Rating value={0} onClick={x=>x} />
export const Rating4 = () => <Rating value={0} onClick={x=>x} />
export const Rating5 = () => <Rating value={0} onClick={x=>x} />

export const ChangeRating = () => {
    const[rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating} />
}

