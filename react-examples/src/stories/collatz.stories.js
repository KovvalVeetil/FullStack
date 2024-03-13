// collatz.stories.js
import React from 'react';
import { Collatz } from '../App.js';

export default {
    component: Collatz,
    title: 'Collatz sequence',
};

export const for8 = () => <Collatz number={8} />;
for8.story = { name: 'For 8' };

export const for101 = () => <Collatz number={101} />;
for101.story = { name: 'For 101' };

export const seeMultiple = () => <div>
        { [ 17, 22, 57 ].map(x => <Collatz number={x} />) }
    </div>;
seeMultiple.story = { name: 'See multiple' };

