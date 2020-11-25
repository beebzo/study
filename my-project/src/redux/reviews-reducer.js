const ADD_REVIEW = 'ADD-REVIEW';
const UPDATE_NEW_REVIEW_TEXT = 'UPDATE-NEW-REVIEW-TEXT';

const reviewsReducer = (state, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            let newReview = {
                picname: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                authorName: "Сергей Васильев",
                reviewtext: state.newReviewText
            };
            state.reviews.push(newReview);
            state.newReviewText = '';
            return state;
        case UPDATE_NEW_REVIEW_TEXT:
            state.newReviewText = action.newText;
            return state;
        default:
    return state;
    }
}
export const addReviewActionCreator = () => ({type: ADD_REVIEW})
export const updateNewReviewTextActionCreator = (text) => ({
    type: UPDATE_NEW_REVIEW_TEXT, newText: text})
export default reviewsReducer