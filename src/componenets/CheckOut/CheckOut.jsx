import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { serviceContext } from '../../App';

const CheckOut = () => {
    const navigate = useNavigate()
    const [service] = useContext(serviceContext)
    console.log(service)
    return (
        <div onClick={()=>navigate(-1)} className="pt-20">
            <button>back</button>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat beatae dolore fugit atque, adipisci eveniet! Quaerat tempore ad incidunt doloribus itaque sapiente officia, repellat beatae eligendi laborum rerum in. Est facere ipsum dolorem incidunt, vel architecto qui illo placeat voluptate unde sint, reprehenderit assumenda aliquam doloribus rem iure dolore impedit. Tenetur, dolore ratione? Impedit hic tempora maxime? Quod consequuntur ipsa amet consequatur voluptates maiores animi, tempora aperiam odio perferendis molestias dolorum hic? Eligendi dolorem odio neque vel autem cumque necessitatibus. Dignissimos soluta vero magnam unde aut perferendis deserunt dolores quam, exercitationem nam quaerat nihil nostrum eos sit consequuntur reprehenderit!</h1>
        </div>
    );
};

export default CheckOut;