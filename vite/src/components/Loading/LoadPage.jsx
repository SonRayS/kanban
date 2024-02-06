import { useState, useEffect } from "react";

function LoadPage() {
    return (
        <div className="loading">
            <li>Данные загружаются</li>
            <img
                src="/public/loading.gif"
                alt=""
                width="64"
                height="64"
            />
        </div>
    );
}

export default LoadPage;
