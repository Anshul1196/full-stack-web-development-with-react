import * as ActionTypes from './actionTypes';
import { DISHES } from '../shared/dishes';
import { actionTypes } from 'react-redux-form';
import {baseURL} from '../shared/baseURL';
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch (baseURL + 'dishes')
        .then(response => response.json())
        .then (dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = ()  => (dispatch) => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
export const fetchComments = () => (dispatch) => {
    return fetch (baseURL + 'comments')
        .then(response => response.json())
        .then (comments => dispatch(addComments(comments)));
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch (baseURL + 'promotions')
        .then(response => response.json())
        .then (promos => dispatch(addPromos(promos)));
}

export const promosLoading = ()  => (dispatch) => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});