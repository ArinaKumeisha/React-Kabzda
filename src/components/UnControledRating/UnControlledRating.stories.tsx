import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {RatingValueType, UncontrolledRating} from "./UnControledRating";
import {Rating} from "../Rating/Rating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const callback = action('клик')
/*const Template: Story<RatingPropsType> = (args) => <Rating {...args} />*/
export const EmptyStars = () => <UncontrolledRating defaultValue={0} onChange={callback} />
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>

export const RatingChange=()=>{
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    return <Rating value={ratingValue} onClick={setRatingValue} />
}
