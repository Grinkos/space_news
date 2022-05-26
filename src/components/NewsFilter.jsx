import React from 'react';
import MyInput from "./UI/input/MyInput";
import DateSelect from "./UI/select/DateSelect";

const NewsFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=> setFilter({...filter, query: e.target.value})}
                placeholder="Поиск по заголовку или содержанию..."
            />
            <DateSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка "
                options={[
                    {value: 'publishedAt', name: 'по дате '},
                ]}
            />
        </div>
    );
};
export default NewsFilter;