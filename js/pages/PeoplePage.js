import People from '../components/People.js';

export default function PeoplePage(people) {
    return `
        <h1>The People Page</h1>
        ${People(people)}
    `;
}