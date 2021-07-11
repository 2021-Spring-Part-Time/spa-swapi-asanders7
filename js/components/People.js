import PersonTime from './PersonTile';

export default function People(people) {
    return `
    <div class='people__container'>
        ${people.results.map((person) => {
            return `
                ${personTile(person)}
            `;
        }).join('')}
    </div>
    `;
}