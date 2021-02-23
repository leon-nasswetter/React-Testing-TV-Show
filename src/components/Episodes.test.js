import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from "./Episodes";

test("Episodes component renders without errors", ()=>{
    render(<Episodes episodes={[]} />);
});

test("renders new episodes when data is passed", ()=>{
    const { rerender } = render(<Episodes episodes={[]}/>);


    const episodes = [
        {
            name: "Episode 1",
            id:1,
            season: 1,
            number: 1,
            runtime: 60,
            summary: "episode 1 summary"
        },
        {
            name: "Episode 2",
            id:2,
            season: 2,
            number: 2,
            runtime: 60,
            summary: "episode 2 summary"
        },
    ];

    rerender(<Episodes episodes={episodes} />);
    console.log(episodes)
    expect(screen.queryAllByTestId(/episode/i)).toHaveLength(2);
}); 