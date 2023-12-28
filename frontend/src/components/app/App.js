import { BrowserRouter } from 'react-router-dom';

import PageContent from './PageContent';
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <PageContent />
        </BrowserRouter>
    );
};

export default App;
