import React, {FC} from 'react';

import FormTodo from "../components/FormTodo/FormTodo";
import Todos from "../components/Todos/Todos";
import './home.page.modules.scss'

const HomePage: FC = () => {
    return (
        <div className={'home-page-block'}>
                <FormTodo/>
                <Todos/>
        </div>
    );
};

export default HomePage;