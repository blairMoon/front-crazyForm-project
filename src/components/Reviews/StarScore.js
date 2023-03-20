import React, { useState, forwardRef, useEffect } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

// onRatingChange는 선택된 별점을 부모 컴포넌트로 전달하기 위한 함수
const StarScore = forwardRef(({ value, onChange }, ref) => {
  const [clicked, setClicked] = useState(value - 1);

  useEffect(() => {
    setClicked(value - 1);
  }, [value]);
  // 별을 클릭했을 때 실행되는 함수입니다. 클릭된 별의 인덱스를 상태로 설정하고, onRatingChange 함수를 호출하여 선택된 별점을 전달합니다.
  const handleClick = index => {
    setClicked(index);
    if (onChange) {
      onChange(index + 1);
    }
  };
  // 이를 통해 부모 컴포넌트는 사용자가 선택한 별점을 알 수 있습니다.

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (clicked !== null && i <= clicked) {
        stars.push(
          <BsStarFill
            key={i}
            style={{
              display: 'inline',
              color: 'rgb(253, 204, 15)',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(i)}
          />
        );
      } else {
        stars.push(
          <BsStar
            key={i}
            style={{
              display: 'inline',
              color: 'rgb(253, 204, 15)',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(i)}
          />
        );
      }
    }

    return stars;
  };

  return <span className="stars">{renderStars()}</span>;
});

export default StarScore;
