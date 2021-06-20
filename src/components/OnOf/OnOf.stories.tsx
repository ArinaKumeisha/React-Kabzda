import React, {useState} from 'react';
import {Rating, RatingPropsType, RatingValueType} from "./Rating";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating stories',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyStars = () => <Rating value={0} onClick={action('клик')} />
export const Rating1 = () => <Rating value={1} onClick={action('клик')} />
export const Rating2 = () => <Rating value={2} onClick={action('клик')} />
export const Rating3 = () => <Rating value={3} onClick={action('клик')} />
export const Rating4 = () => <Rating value={4} onClick={action('клик')} />
export const Rating5 = () => <Rating value={5} onClick={action('клик')} />
/*export const RatingChange=()=>{
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    return <Rating value={ratingValue} onClick={setRatingValue} />
}*/
