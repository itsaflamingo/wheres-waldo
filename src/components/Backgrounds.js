import puzzleOne from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import robotcity from '../images/robotcity.jpg'
import hollowKnight from '../images/hollow-knight.webp'
import yubaba from '../images/yubaba.png'
import bowser from '../images/bowser.png'
import stewie from '../images/stewie.png'
import bender from '../images/bender.png'
import squanchy from '../images/squanchy.png'
import meg from '../images/meg.png'
import beastTitan from '../images/beast-titan.png'
import goku from '../images/goku.png'


const MakeBackgrounds = () => {
    return [{
        name: 'puzzle one',
        image: puzzleOne,
        characters: [{
            name: 'Hollow Knight',
            image: hollowKnight,
            location: {
              x: 1195,
              y: 12456 },
            id: 1,
        }, {
            name: 'Yubaba',
            image: yubaba,
            location: {
              x: 1038,
              y: 5173 },
            id: 2,
        }, {
            name: 'Bowser',
            image: bowser,
            location: {
              x: 1672,
              y: 8148 },
            id: 3,
        }]}, {
            name: 'puzzle two',
            image: robotcity,
        characters: [{
            name: 'Meg',
            image: meg,
            location: {
              x: 0,
              y: 0 },
            id: 1,
        }, {
            name: 'Goku',
            image: goku,
            location: {
              x: 0,
              y: 0 },
            id: 2,
        }, {
            name: 'Beast Titan',
            image: beastTitan,
            location: {
              x: 0,
              y: 0 },
            id: 3,
        }]}, {
            name: 'puzzle three',
            image: img2,
        characters: [{
            name: 'Stewie',
            image: stewie,
            location: {
              x: 0,
              y: 0 },
            id: 1,
        }, {
            name: 'Bender',
            image: bender,
            location: {
              x: 0,
              y: 0 },
            id: 2,
        }, {
            name: 'Squanchy',
            image: squanchy,
            location: {
              x: 0,
              y: 0 },
            id: 3,
        }]}
    ]
}

export default MakeBackgrounds;
