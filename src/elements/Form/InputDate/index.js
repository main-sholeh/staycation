import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { DateRange } from "react-date-range";

import './index.scss';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import formatDate form 'utils/formatDate';
import iconCalender from 'assets/images/ic_calender.svg';

export default function Date(props) {

    const { value, placeholder, name } = props;
    const [ isShowed, setIsShowed] = useState(false);

    return (
        <div>
            
        </div>
    )
}

Date.propTypes= {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}


