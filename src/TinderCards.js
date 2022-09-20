import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people] = useState([
        {
            name: 'Cha Eun Woo',
            url: "https://i.pinimg.com/564x/60/8c/33/608c33de3e67eeff114057f5f45d8890.jpg",
        },
        {
            name: 'Lee Jong-suk',
            url: "https://www.hellokpop.com/wp-content/uploads/2016/06/restmb_jhidxmake-3-2.jpg",
        },
        {
            name: 'BAE SUZY',
            url: "https://i2.wp.com/gangatimes.com/wp-content/uploads/2022/07/thumb-1920-1085742-edited.jpg?resize=1024%2C577&ssl=1",
        },
        {
            name: 'PARK BO YOUNG',
            url: "https://i2.wp.com/gangatimes.com/wp-content/uploads/2022/07/allkpop_1651074723_279171779-1176579729767635-4626301496073175452-n-1-edited.jpg?resize=1024%2C575&ssl=1",
        },
        {
            name: 'KIM YOO JUNG',
            url: "https://6.viki.io/image/3c1a950214e549c88d9614411d511df4.jpeg?s=900x600&e=t",
        },
        {
            name: 'Nam Joo Hyuk',
            url: "https://asianwiki.com/images/7/7c/Nam_Joo-Hyuk-PR002.jpg",
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "removed");
    };


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards