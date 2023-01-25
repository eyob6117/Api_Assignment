import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <ReactLoading className = "center" type={'spokes'} color={'green'} height={'25%'} width={'25%'} />
);
export default Loading;