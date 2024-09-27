import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { SelectBoxProps } from "../../../types/Common";

const SelectBox = ({ name, id, optionList }: SelectBoxProps) => {
  const [selectedOption, setSelectedOption] = useState(optionList[0]);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const [maxOptionWidth, setMaxOptionWidth] = useState(50); // 기본 너비 설정

  const FREE_SPACE = 55; // 여유 공간 55px
  const FONT_SIZE = "14px";
  const FONT_STYLE = "SpoqaHanSansNeo";

  // optionList의 가장 긴 옵션의 너비를 계산
  useEffect(() => {
    const maxWidth = Math.max(
      ...optionList.map((option) => measureTextWidth(option))
    );
    setMaxOptionWidth(maxWidth + FREE_SPACE);
  }, [optionList]);

  // 텍스트의 너비를 계산하는 함수
  const measureTextWidth = (text: string) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      context.font = FONT_SIZE + " " + FONT_STYLE; // 텍스트가 렌더링되는 스타일과 동일하게 설정
      return context.measureText(text).width;
    }
    return 0; // context가 null인 경우 0 반환
  };
  // 옵션 선택 후 닫기
  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOptionsOpen(false);
  };

  // options 펼치기/닫기 토글
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <SelectBoxWrapper fontSize={FONT_SIZE} maxWidth={maxOptionWidth}>
      <div className="custom-select" onClick={toggleOptions}>
        <div className="content">{selectedOption}</div>
        <div className="divider"></div>
        <div className="arrow">
          <img src="/icons/Arrow_Down.svg" alt="셀렉트 아이콘 이미지" />
        </div>
      </div>
      {isOptionsOpen && (
        <ul className="options">
          {optionList.map((value, index) => (
            <li key={index} onClick={() => handleOptionClick(value)}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </SelectBoxWrapper>
  );
};

export default SelectBox;

const SelectBoxWrapper = styled.div<{ maxWidth: number; fontSize: string }>`
  position: relative;
  width: ${(props) => `${props.maxWidth}px`}; // 동적으로 width 설정

  .custom-select {
    display: flex;
    align-items: center;
    background-color: var(--brand--white);
    border: 0.5px solid var(--brand--border--gray);
    border-radius: 8px;
    cursor: pointer;
    position: relative;
  }

  .content {
    font-size: ${(props) => `${props.fontSize}`}; // 동적으로 width 설정
    margin: 4px 12px 4px 12px;
  }

  .divider {
    width: 1px;
    height: 20px;
    background-color: var(--brand--border--gray);
  }

  .arrow {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 4px;
  }

  .options {
    position: absolute;
    width: 100%;
    background-color: var(--brand--white);
    border: 1px solid var(--brand--border--gray);
    border-radius: 8px;
    list-style: none;
    padding: 0;
    margin: 4px 0 0 0;
  }

  .options li {
    padding: 8px 12px;
    cursor: pointer;
    font-size: ${(props) => `${props.fontSize}`}; // 동적으로 width 설정
  }

  .options li:hover {
    border-radius: 8px;
    background-color: rgba(
      var(--brand--primary--color--rgb),
      var(--opacity--30)
    );
  }
`;
