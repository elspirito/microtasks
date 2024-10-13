// @flow 
import * as React from 'react';

type Students = {
    students: Student[]
};

type Student = {
    id: number
    name: string
    age: number
}
export const Students = ({students}: Students) => {
    return (
        <div>
            <ul>
                {students.map(el=><li key={el.id}>{el.name} — {el.age}</li>)}
            </ul>
        </div>
    );
};