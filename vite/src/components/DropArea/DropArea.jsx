import React, { useState } from "react";
import * as S from "./DropArea.style";

const DropArea = ({ onDrop }) => {
    const [showDrop, setShowDrop] = useState(false);

    return (
        <S.selectionTask
            onDragEnter={() => {
                setShowDrop(true);
            }}
            onDragLeave={() => setShowDrop(false)}
            $statDrop={showDrop}
            onDrop={() => {
                onDrop();
                setShowDrop(false);
            }}
            onDragOver={(e) => e.preventDefault()}
        >
            Drop Here
        </S.selectionTask>
    );
};

export default DropArea;
