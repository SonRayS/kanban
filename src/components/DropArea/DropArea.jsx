import React, { useState } from "react";
import * as S from "./DropArea.style";

const DropArea = ({ onDrop }) => {
    const [showDrop, setShowDrop] = useState(false);

    return (
        <S.selectionTask
            $statDrop={showDrop}
            onDragEnter={() => {
                setShowDrop(true);
            }}
            onDragLeave={() => setShowDrop(false)}
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
