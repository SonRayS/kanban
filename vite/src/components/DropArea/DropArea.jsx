import React, { useState } from "react";
import * as S from "./DropArea.style";

const DropArea = () => {
    const [showDrop, setShowDrop] = useState(false);

    return (
        <S.selectionTask
            onDragEnter={() => {
                setShowDrop(true);
            }}
            onDragLeave={() => setShowDrop(false)}
            $statDrop={showDrop}
        >
            Drop Here
        </S.selectionTask>
    );
};

export default DropArea;
