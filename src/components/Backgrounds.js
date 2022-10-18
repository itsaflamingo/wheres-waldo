import puzzleOne from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import robotcity from '../images/robotcity.jpg'
import hollowKnight from '../images/hollow-knight.webp'
import yubaba from '../images/yubaba.png'
import bowser from '../images/bowser.png'
import stewie from '../images/stewie.png'
import bender from '../images/bender.png'
import squanchy from '../images/squanchy.webp'
import meg from '../images/meg.webp'
import beastTitan from '../images/beast-titan.png'
import goku from '../images/goku.webp'


const MakeBackgrounds = () => {
    return [{
        name: 'A.D.2222',
        image: puzzleOne,
        id: 1,
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
            name: 'Robot City',
            image: robotcity,
            id: 2,
        characters: [{
            name: 'Meg',
            image: meg,
            location: {
              x: 356,
              y: 658 },
            id: 1,
        }, {
            name: 'Goku',
            image: goku,
            location: {
              x: 1530,
              y: 2131 },
            id: 2,
        }, {
            name: 'Beast Titan',
            image: beastTitan,
            location: {
              x: 2202,
              y: 1535 },
            id: 3,
        }]}, {
            name: 'Universe 113',
            image: img2,
            id: 3,
        characters: [{
            name: 'Stewie',
            image: stewie,
            location: {
              x: 575,
              y: 1559 },
            id: 1,
        }, {
            name: 'Bender',
            image: bender,
            location: {
              x: 1636,
              y: 1798 },
            id: 2,
        }, {
            name: 'Squanchy',
            image: squanchy,
            location: {
              x: 1388,
              y: 1041 },
            id: 3,
        }]}
    ]
}

export default MakeBackgrounds;
